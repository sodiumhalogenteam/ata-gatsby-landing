import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'

// this component just queries the WP navbar, since layouts in gatsby must query statically
export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                wordpress_id
                title
                url
                wordpress_children {
                  wordpress_id
                  title
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Navbar
        items={data.allWordpressWpApiMenusMenusItems.edges[1].node.items}
      />
    )}
  />
)
