import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../layouts'

import { rhythm } from '../utils/typography'

class LeaderTemplate extends Component {
  render() {
    const leader = this.props.data.wordpressWpLeader

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: leader.title }} />
        <div dangerouslySetInnerHTML={{ __html: leader.content }} />
        {leader.acf &&
          leader.acf.page_builder_post &&
          leader.acf.page_builder_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_image_gallery`) {
              return (
                <div key={`${i} image-gallery`}>
                  <h2>ACF Image Gallery</h2>
                  {layout.pictures.map(({ picture }) => {
                    const img = picture.localFile.childImageSharp.fluid
                    return (
                      <Img
                        css={{ marginBottom: rhythm(1) }}
                        key={img.src}
                        fluid={img}
                      />
                    )
                  })}
                </div>
              )
            }
            if (layout.__typename === `WordPressAcf_post_photo`) {
              const img = layout.photo.localFile.childImageSharp.fluid
              return (
                <div key={`${i}-photo`}>
                  <h2>ACF Leader Photo</h2>
                  <Img
                    css={{ marginBottom: rhythm(1) }}
                    src={img.src}
                    fluid={img}
                  />
                </div>
              )
            }
            return null
          })}
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
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
