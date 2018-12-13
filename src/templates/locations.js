import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../layouts'

import { rhythm } from '../utils/typography'

class LocationsTemplate extends Component {
  render() {
    const locations = this.props.data.wordpressWpLocations

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: locations.title }} />
        <div dangerouslySetInnerHTML={{ __html: locations.content }} />
        {locations.acf &&
          locations.acf.page_builder_post &&
          locations.acf.page_builder_post.map((layout, i) => {
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
                  <h2>ACF Locations Photo</h2>
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

LocationsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default LocationsTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpLocations(id: { eq: $id }) {
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
