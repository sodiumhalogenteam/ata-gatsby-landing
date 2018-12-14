import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import '../components/bootstrap.min.css'

class LocationsTemplate extends Component {
  render() {
    const locations = this.props.data.wordpressWpLocations

    return (
      <Layout>
        <link
          rel="stylesheet"
          id="sage/css-css"
          href="https://www.atacpa.net/wp-content/themes/ata/dist/styles/main.css"
          type="text/css"
          media="all"
        />
        <h1 dangerouslySetInnerHTML={{ __html: locations.title }} />
        <section
          className="bg-center bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundImage: "url('')",
          }}
        >
          <div className="bg-filter sTop">
            <div className="container">
              <div className="jumbotron trn v-center">
                <p>Alexander Thompson Arnold PLLC</p>
                <h1>
                  {locations.acf.city}, {locations.acf.state}
                </h1>
                <div className="row">
                  <div className="col-sm-6">
                    <h4>{locations.acf.address}</h4>
                    <h4>
                      {locations.acf.city}, {locations.acf.state}{' '}
                      {locations.acf.zip_code}
                    </h4>
                  </div>
                  <div className="col-sm-6">
                    <h4>
                      Phone:{' '}
                      <a
                        className="heading-btn"
                        href="tel:{locations.acf.phone}"
                      >
                        {locations.acf.phone}
                      </a>
                    </h4>
                    <h4>
                      Fax:{' '}
                      <a
                        className="heading-btn"
                        href="email:{locations.acf.fax}"
                      >
                        {locations.acf.fax}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-lg team-grid container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Specialties</h2>
            </div>
            <div className="col-sm-6">
              <iframe
                width="100%"
                height="350"
                frameborder="0"
                style={{ border: 0 }}
                src={locations.acf.google_map_iframe_link}
                allowfullscreen
              />
            </div>
          </div>
        </section>

        <div className="section-lg team-grid container">
          <div className="row">
            <h2 className="leader-title text-center col-sm-12">
              Nashville Leaders
            </h2>
          </div>
        </div>
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
      acf {
        city
        state
        address
        zip_code
        phone
        fax
        landing_page_select
        meta_description
        meta_keywords
        google_map_iframe_link
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
