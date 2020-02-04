import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'
import Helmet from 'react-helmet'

import sortLeaders from '../components/leaderParser'

const SpecialtiesWrap = styled.div`
  .services-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
  }

  .services-cta,
  .half-half {
    display: none;
  }

  .half-half {
    .row {
      justify-content: space-between;
      display: flex;
      div {
        flex: 1;
      }
    }
  }

  #glink {
    display: none;
  }
`

const Jumbo = styled.div`
  width: inherit;
`

const StateWrap = styled.span`
  text-transform: uppercase;
`

const LinkBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
`

const CenterRow = styled.div`
  text-align: center;

  .staff {
    height: 400px;
  }
`

const CenterCol = styled.div`
  display: inline-block;
  float: none !important;
  text-align: left;
  margin-right: -4px;
`

class LocationServiceTemplate extends Component {
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

  componentDidMount() {
    // update contact modal link, since we aren't able to port over native modal correctly
    let clink = document.getElementById('cmodal')
    if (clink) clink.setAttribute('href', 'https://www.atacpa.net/contact-us/')

    // fix regular link
    let glink = document.getElementById('glink')
    if (glink) glink.setAttribute('href', 'https://www.atacpa.net/ata-offices/')
  }

  render() {
    const data = this.props.data
    const locations = this.props.data.wordpressWpLocations
    const service_title = this.props.pageContext.service
    const service_content = this.props.pageContext.service_content
    const title = `${
      locations.acf.city
    }, ${locations.acf.state.toUpperCase()} ${service_title}`
    const description = `ATA CPA's ${
      locations.acf.city
    }, ${locations.acf.state.toUpperCase()} location specializes in ${service_title}`

    const managers = sortLeaders('Chief Manager', data, locations)
    const leaders = sortLeaders('Member/Partner', data, locations)
    const principals = sortLeaders('Principal', data, locations)
    const leadership = [...managers, ...leaders, ...principals]

    return (
      <Layout>
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
          {/* General tags */}
          <title>ATA CPA</title>
          <meta name="description" content={description} />
          <meta
            name="image"
            content={locations.better_featured_image.source_url}
          />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
          <meta name="twitter:title" content={`ATA CPA | ${title}`} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={locations.better_featured_image.source_url}
          />
        </Helmet>
        <section
          className="bg-center bg-cover"
          style={{
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundImage: `url(${locations.better_featured_image.source_url})`,
          }}
        >
          <div className="bg-filter sTop">
            <div className="container">
              <Jumbo className="jumbotron trn v-center">
                <p>Alexander Thompson Arnold PLLC</p>
                <h1>
                  {locations.acf.city},{' '}
                  <StateWrap>{locations.acf.state}</StateWrap> - {service_title}
                </h1>
                <div className="row">
                  <div className="col-sm-3">
                    <h4>{locations.acf.address}</h4>
                    <h4>
                      {locations.acf.city},{' '}
                      <StateWrap>{locations.acf.state}</StateWrap>{' '}
                      {locations.acf.zip_code}
                    </h4>
                  </div>
                  <div className="col-sm-3">
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
              </Jumbo>
            </div>
          </div>
        </section>

        <SpecialtiesWrap>
          <div
            dangerouslySetInnerHTML={{
              __html: service_content,
            }}
          />
        </SpecialtiesWrap>

        {service_title !== 'IT Consulting' ? (
          <section className="bg-grey section text-center services-cta">
            <h2 className="big-title">
              Let our experts in {locations.acf.city} help your business.
            </h2>
            <div className="space-md" />
            <a
              id="cmodal"
              className="btn btn-primary btn-xlg"
              href={`https://atacpa.net/contact-us/?location=${locations.slug}`}
            >
              Contact an expert today
            </a>
          </section>
        ) : null}

        <div className="section-lg team-grid container">
          {leadership.length !== 0 ? (
            <div className="row">
              <h2 className="leader-title text-center col-sm-12">
                {locations.acf.city},{' '}
                <StateWrap>{locations.acf.state}</StateWrap> Leaders
              </h2>
            </div>
          ) : null}

          {leadership.length !== 0 ? (
            <CenterRow className="row">
              {leadership.map((leader, i) => (
                <CenterCol className="col-lg-3 col-md-3 col-sm-6 staff" key={i}>
                  <div className="profile-circle">
                    <div className="hover-content ">
                      <img
                        src={leadership[i].better_featured_image.source_url}
                        alt="leader"
                        className="img-responsive"
                      />
                      {leadership[i].acf.bio !== '' ? (
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
                      {leadership[i].title},<br />
                      <em>{leadership[i].acf.credentials}</em>
                      <small>{leadership[i].acf.title}</small>
                    </h4>
                    <p>
                      <a href={`tel:${leadership[i].acf.phone}`}>
                        {leadership[i].acf.phone}
                      </a>
                    </p>
                  </div>

                  {leadership[i].acf.bio !== '' ? (
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
                        <h4>{leadership[i].title}'s Bio</h4>
                      </Modal.Header>
                      <Modal.Body>
                        <img
                          width="150"
                          height="150"
                          src={leadership[i].better_featured_image.source_url}
                          alt="leader"
                          className="img-responsive"
                        />
                        <div className="space-sm" />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: leadership[i].acf.bio,
                          }}
                        />
                      </Modal.Body>
                    </Modal>
                  ) : null}
                </CenterCol>
              ))}
            </CenterRow>
          ) : null}

          <section className="team-grid container">
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
        </div>
        <p>{this.service}</p>
      </Layout>
    )
  }
}

LocationServiceTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default LocationServiceTemplate

export const pageQuery = graphql`
  query($id: String!) {
    sitePage {
      context {
        service
        service_content
      }
    }
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
            principal
            hide_leader
          }
        }
      }
    }
  }
`
