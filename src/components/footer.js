// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import BottomNav from './bottomNav'

// // this component just queries the WP navbar, since layouts in gatsby must query statically
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allWordpressWpApiMenusMenusItems {
//           edges {
//             node {
//               items {
//                 wordpress_id
//                 title
//                 url
//                 wordpress_children {
//                   wordpress_id
//                   title
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <BottomNav
//         items={data.allWordpressWpApiMenusMenusItems.edges[0].node.items}
//       />
//     )}
//   />
// )
