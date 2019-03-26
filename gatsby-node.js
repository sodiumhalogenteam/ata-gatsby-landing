const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    /*
      This is where pages are generated. In order to query all instances of a WP item,
      the query must be named as such: allWordpress${Manufacturer}${Endpoint}.
      Check out the API json file you are using by visiting 'yoursite.com/wp-json'.
      For example, the Locations custom post type is 'located under wp/v2/locations'.
      'wp' would be the Manufacturer and 'locations' would be the Endpoint.
      After this, each item is individually fed to the specified template to create multiple pages
      from one file!

      If you'd like to add another query, wrap the next query in '.then(() => {...})' 
      -- Adam
    */

    // ==== LOCATIONS ====
    graphql(
      `
        {
          allWordpressWpLocations {
            edges {
              node {
                id
                slug
                status
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log('gatsby-node', result.errors)
          reject(result.errors)
        }
        const locationsTemplate = path.resolve('./src/templates/locations.js')
        _.each(result.data.allWordpressWpLocations.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(locationsTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
      // ==== END LOCATIONS ====
      // ==== LOCATIONS & SERVICES ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpLocations {
                edges {
                  node {
                    id
                    slug
                    status
                    template
                    acf {
                      specialties {
                        post_name
                        post_title
                      }
                      who_we_serve {
                        post_name
                        post_title
                      }
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log('gatsby-node', result.errors)
            reject(result.errors)
          }
          const locationsTemplate = path.resolve(
            './src/templates/location-service.js'
          )
          _.each(result.data.allWordpressWpLocations.edges, edge => {
            let i = 0
            _.each(edge.node.acf.specialties, speciality => {
              createPage({
                path: `/${edge.node.slug}/${speciality.post_name}/`,
                component: slash(locationsTemplate),
                context: {
                  id: edge.node.id,
                  service: speciality.post_title,
                  service_pos: i,
                },
              })
              i++
            })
          })
          _.each(result.data.allWordpressWpLocations.edges, edge => {
            let i = 0
            _.each(edge.node.acf.who_we_serve, whoserve => {
              createPage({
                path: `/${edge.node.slug}/${whoserve.post_name}/`,
                component: slash(locationsTemplate),
                context: {
                  id: edge.node.id,
                  service: whoserve.post_title,
                  service_pos: i,
                },
              })
              i++
            })
          })
          resolve()
        })
      })
    // ==== END LOCATIONS & SERVICES ====
  })
}
