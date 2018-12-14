import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts'

import { rhythm } from '../utils/typography'

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        {/* <div css={{ marginBottom: rhythm(1) }}>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <span>
                {` `}
                {node.date}
              </span>
            </div>
          ))}
        </div>
        <hr /> */}
        <h1>Leaders</h1>
        {data.allWordpressWpLeader.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
          </div>
        ))}
        <hr />
        <h1>Locations</h1>
        {data.allWordpressWpLocations.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressWpLeader(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
        }
      }
    }
    allWordpressWpLocations(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
