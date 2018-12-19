import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'
import Helmet from 'react-helmet'

const SpecialtiesWrap = styled.div`
  .services-cta {
    display: none;
  }
`

const StateWrap = styled.span`
  text-transform: uppercase;
`

const LinkBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`

class LocationsTemplate extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: -1,
    }
  }

  handleClose = () => {
    this.setState({ show: -1 })
  }

  handleShow = id => {
    this.setState({ show: id })
  }
  render() {
    const data = this.props.data
    const locations = this.props.data.wordpressWpLocations
    const service_title = this.props.pageContext.service
    const title =
      locations.acf.city +
      ' ' +
      locations.acf.state.toUpperCase() +
      ' - ' +
      service_title
    const description = 'ATA CPA ' + title
    let leaders = []
    {
      data.allWordpressWpLeader.edges.map(({ node }) =>
        node.acf.all_locations
          ? node.acf.all_locations.map(({ post_title }) =>
              post_title === locations.title ? leaders.push(node) : null
            )
          : null
      )
    }

    return (
      <Layout>
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
          {/* General tags */}
          <meta name="description" content={description} />
          {/* <meta name="image" content={image} /> */}

          {/* Twitter Card tags */}
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={seo.social.twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} /> */}
        </Helmet>
        <section
          className="bg-center bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundImage: `url(${
              locations.better_featured_image.source_url
            })`,
          }}
        >
          <div className="bg-filter sTop">
            <div className="container">
              <div className="jumbotron trn v-center">
                <p>Alexander Thompson Arnold PLLC</p>
                <h1>
                  {locations.acf.city},{' '}
                  <StateWrap>{locations.acf.state}</StateWrap> - {service_title}
                </h1>
                <div className="row">
                  <div className="col-sm-6">
                    <h4>{locations.acf.address}</h4>
                    <h4>
                      {locations.acf.city},{' '}
                      <StateWrap>{locations.acf.state}</StateWrap>{' '}
                      {locations.acf.zip_code}
                    </h4>
                  </div>
                  <div className="col-sm-6">
                    <h4>
                      Phone:{' '}
                      <a
                        className="heading-btn"
                        href={`tel:${locations.acf.phone}`}
                      >
                        {locations.acf.phone}
                      </a>
                    </h4>
                    <h4>
                      Fax:{' '}
                      <a
                        className="heading-btn"
                        href={`mailto:${locations.acf.fax}`}
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

        <SpecialtiesWrap>
          <div
            dangerouslySetInnerHTML={{
              __html:
                locations.acf.specialties[this.props.pageContext.service_pos]
                  .post_content,
            }}
          />
        </SpecialtiesWrap>
        <section className="section-lg team-grid container">
          <div className="row">
            <div className="col-sm-12">
              <iframe
                title="map"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                src={locations.acf.google_map_iframe_link}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <div className="section-lg team-grid container">
          <div className="row">
            <h2 className="leader-title text-center col-sm-12">
              {locations.acf.city}, <StateWrap>{locations.acf.state}</StateWrap>{' '}
              Leaders
            </h2>

            {leaders.map((leader, i) => (
              <div key={i}>
                <div className="col-lg-3 col-md-3 col-sm-6 staff">
                  <div className="profile-circle">
                    <div className="hover-content ">
                      <img
                        src={leaders[i].better_featured_image.source_url}
                        alt="leader"
                        className="img-responsive"
                      />
                      {leaders[i].acf.bio !== '' ? (
                        <div className="content-circle content-center">
                          <ul className="circle-icons icons-list">
                            <li>
                              <LinkBtn
                                title="View Bio"
                                onClick={() => this.handleShow(i)}
                              >
                                <i className="fa fa-align-left fa-5x" />
                              </LinkBtn>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <h4>
                      {leaders[i].title},<br />
                      <em>{leaders[i].acf.credentials}</em>
                      <small>{leaders[i].acf.title}</small>
                    </h4>
                    <p>
                      <a href={`tel:${leaders[i].acf.phone}`}>
                        {leaders[i].acf.phone}
                      </a>
                      <br />
                      {leaders[i].acf.linkdin !== '' ? (
                        <a
                          className="linked-in"
                          style={{ borderBottom: 'none' }}
                          href={leaders[i].acf.linkdin}
                        >
                          <i
                            className="fa fa-linkedin-square fa-2x"
                            aria-hidden="true"
                          />
                        </a>
                      ) : null}
                      <br />
                    </p>
                  </div>
                </div>

                {leaders[i].acf.bio !== '' ? (
                  <Modal
                    show={this.state.show === i}
                    onHide={() => this.handleClose()}
                    id={i}
                  >
                    <Modal.Header>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => this.handleClose()}
                      >
                        <span aria-hidden="true"> &times; </span>
                      </button>
                      <h4>{leaders[i].title}'s Bio</h4>
                    </Modal.Header>
                    <Modal.Body>
                      <img
                        width="150"
                        height="150"
                        src={leaders[i].better_featured_image.source_url}
                        alt="leader"
                        className="img-responsive"
                      />
                      <div className="space-sm" />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: leaders[i].acf.bio,
                        }}
                      />
                    </Modal.Body>
                  </Modal>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <p>{this.service}</p>
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
      slug
      title
      content
      better_featured_image {
        source_url
      }
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
        specialties {
          post_title
          post_content
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpLeader(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
          better_featured_image {
            source_url
          }
          acf {
            credentials
            title
            primary_location
            all_locations {
              post_title
            }
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
      }
    }
  }
`
