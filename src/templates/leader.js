import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts'

class LeaderTemplate extends Component {
  render() {
    const leader = this.props.data.wordpressWpLeader

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: leader.title }} />
        <div dangerouslySetInnerHTML={{ __html: leader.content }} />
      </Layout>
    )
  }
}

LeaderTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default LeaderTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpLeader(id: { eq: $id }) {
      title
      content
      acf {
        credentials
        title
        primary_location
        phone
        email
        linkdin
        bio
        Services
        industries
        principal
        hide_leader
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
