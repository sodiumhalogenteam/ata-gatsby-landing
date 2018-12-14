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
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
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
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages.
        const pageTemplate = path.resolve('./src/templates/page.js')
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      // ==== END PAGES ====
      // ==== LEADERSHIP ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpLeader {
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
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const leaderTemplate = path.resolve('./src/templates/leader.js')
          _.each(result.data.allWordpressWpLeader.edges, edge => {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(leaderTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
      // ==== END LEADERSHIP ====
      // ==== LOCATIONS ====
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
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
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
      })
    // ==== END LOCATIONS ====
  })
}
