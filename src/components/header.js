import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TopNav from './topNav'

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
                object_slug
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
      <TopNav
        items={data.allWordpressWpApiMenusMenusItems.edges[1].node.items}
      />
    )}
  />
)
