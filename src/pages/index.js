import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts'

import { rhythm } from '../utils/typography'

// the home page
class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <h1>Locations</h1>
        {data.allWordpressWpLocations.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
          </div>
        ))}
        <br />
        <h1>Location Services</h1>
        {data.allWordpressWpLocations.edges.map(({ node }) =>
          node.acf.specialties.map(({ post_name, post_title }, i) => (
            <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
              <Link
                to={`${node.slug}/${post_name}`}
                css={{ textDecoration: `none` }}
                state={{
                  service_title: post_title,
                  service_pos: i,
                }}
              >
                <h3>
                  {node.title} {post_title}
                </h3>
              </Link>
            </div>
          ))
        )}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressWpLocations(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
          acf {
            specialties {
              post_name
              post_title
            }
          }
        }
      }
    }
  }
`
