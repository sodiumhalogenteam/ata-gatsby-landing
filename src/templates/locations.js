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

const Jumbo = styled.div`
  width: inherit;
`

const Services = styled.div`
  padding: 50px 0;
`

const ServiceRow = styled.div`
  padding-bottom: 20px;
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
`

const CenterCol = styled.div`
  display: inline-block;
  float: none !important;
  text-align: left;
  margin-right: -4px;
`

const ServcieBlock = styled.div`
  background: #364458;
  color: #fff;
  padding: 0 !important;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #364458;
  a {
    color: #fff;
    padding: 20px;
    display: block;
  }
  &:hover {
    color: #364458;
    background: #fff;
    border: 2px solid #364458;
    a {
      color: #364458;
    }
  }
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
    let services = ''
    let specialtiesLen = locations.acf.specialties.length
    locations.acf.specialties.map(({ post_title }, i) => {
      services += post_title
      if (i === specialtiesLen - 2 && specialtiesLen === 2) {
        services += ' and '
      } else if (i === specialtiesLen - 2) {
        services += ', and '
      } else if (i !== specialtiesLen - 1) {
        services += ', '
      }
      return 1
    })
    const title = `${locations.acf.city}, ${locations.acf.state.toUpperCase()}`
    const description = `ATA CPA's ${
      locations.acf.city
    }, ${locations.acf.state.toUpperCase()} location specializes in ${services}`
    let leaders = []
    data.allWordpressWpLeader.edges.map(({ node }) =>
      node.acf.all_locations
        ? node.acf.all_locations.map(({ post_title }) =>
            post_title === locations.title ? leaders.push(node) : null
          )
        : null
    )

    // add services to rows
    let serviceRows = []
    for (let i = 0; i < specialtiesLen; i += 3) {
      let j = i + 1
      let k = i + 2
      if (j < specialtiesLen && k < specialtiesLen) {
        serviceRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[i].post_name
                }`}
              >
                <div>{locations.acf.specialties[i].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[j].post_name
                }`}
              >
                <div>{locations.acf.specialties[j].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[k].post_name
                }`}
              >
                <div>{locations.acf.specialties[k].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else if (j < specialtiesLen && k > specialtiesLen) {
        serviceRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[i].post_name
                }`}
              >
                <div>{locations.acf.specialties[i].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[j].post_name
                }`}
              >
                <div>{locations.acf.specialties[j].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else {
        serviceRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.specialties[i].post_name
                }`}
              >
                <div>{locations.acf.specialties[i].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      }
    }

    // who we serve rows
    let whoServeRows = []
    let whoServeLen = locations.acf.who_we_serve.length
    for (let i = 0; i < whoServeLen; i += 3) {
      let j = i + 1
      let k = i + 2
      if (j < whoServeLen && k < whoServeLen) {
        whoServeRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[i].post_name
                }`}
              >
                <div>{locations.acf.who_we_serve[i].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[j].post_name
                }`}
              >
                <div>{locations.acf.who_we_serve[j].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[k].post_name
                }`}
              >
                <div>{locations.acf.who_we_serve[k].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else if (j < whoServeLen && k > whoServeLen) {
        whoServeRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[i].post_name
                }`}
                className="col-md-offset-1 col-md-3"
              >
                <div>{locations.acf.who_we_serve[i].post_title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[j].post_name
                }`}
                className="col-md-3"
              >
                <div>{locations.acf.who_we_serve[j].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else {
        whoServeRows.push(
          <SpecialtiesWrap className="row">
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a
                href={`../${locations.slug}/${
                  locations.acf.who_we_serve[i].post_name
                }`}
              >
                <div>{locations.acf.who_we_serve[i].post_title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      }
    }

    return (
      <Layout>
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
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
            backgroundImage: `url(${
              locations.better_featured_image.source_url
            })`,
          }}
        >
          <div className="bg-filter sTop">
            <div className="container">
              <Jumbo className="jumbotron trn v-center">
                <p>Alexander Thompson Arnold PLLC</p>
                <h1>
                  {locations.acf.city},{' '}
                  <StateWrap>{locations.acf.state}</StateWrap>
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

        <section className="bg-grey section-lg">
          <div className="container">
            <h2 className="text-center col-md-8 col-md-offset-2 md-title text-primary">
              {locations.acf.office_description}
            </h2>
          </div>
        </section>

        <Services>
          <ServiceRow className="container">
            <div className="row">
              <h2 className="col-md-offset-1">
                {locations.acf.city},{' '}
                <StateWrap>{locations.acf.state}</StateWrap> Services
              </h2>
            </div>
            {serviceRows}
          </ServiceRow>
          <ServiceRow className="container">
            <div className="row">
              <h2 className="col-md-offset-1">
                Who {locations.acf.city},{' '}
                <StateWrap>{locations.acf.state}</StateWrap> Serves
              </h2>
            </div>
            {whoServeRows}
          </ServiceRow>
        </Services>

        <section className="bg-grey section text-center services-cta">
          <h2 className="big-title">
            Let our experts in {locations.acf.city} help your business.
          </h2>
          <div className="space-md" />
          <a
            id="cmodal"
            className="btn btn-primary btn-xlg"
            href="https://atacpa.net/contact-us/"
          >
            Contact an expert today
          </a>
        </section>

        <div className="section-lg team-grid container">
          {leaders.length !== 0 ? (
            <div className="row">
              <h2 className="leader-title text-center col-sm-12">
                {locations.acf.city},{' '}
                <StateWrap>{locations.acf.state}</StateWrap> Leaders
              </h2>
            </div>
          ) : null}

          {leaders.length !== 0 ? (
            <CenterRow className="row">
              {leaders.map((leader, i) => (
                <CenterCol className="col-lg-3 col-md-3 col-sm-6 staff" key={i}>
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
                    </p>
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
        office_description
        landing_page_select
        meta_description
        meta_keywords
        google_map_iframe_link
        specialties {
          post_title
          post_content
          post_name
        }
        who_we_serve {
          post_name
          post_title
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
