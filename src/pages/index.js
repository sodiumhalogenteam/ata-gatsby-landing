import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../layouts'

const SpecialtiesWrap = styled.div`
  .services-cta {
    display: none;
  }
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

// the home page
class Home extends Component {
  render() {
    const data = this.props.data

    let locations = data.allWordpressWpLocations.edges
    let locationsList = []
    let locationsLen = locations.length

    for (let i = 0; i < locationsLen; i += 3) {
      let j = i + 1
      let k = i + 2
      if (j < locationsLen && k < locationsLen) {
        locationsList.push(
          <SpecialtiesWrap className="row" key={i}>
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a href={`../${locations[i].node.slug}`}>
                <div>{locations[i].node.title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a href={`../${locations[j].node.slug}`}>
                <div>{locations[j].node.title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a href={`../${locations[k].node.slug}`}>
                <div>{locations[k].node.title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else if (j < locationsLen) {
        locationsList.push(
          <SpecialtiesWrap className="row" key={i}>
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a href={`../${locations[i].node.slug}`}>
                <div>{locations[i].node.title}</div>
              </a>
            </ServcieBlock>
            <ServcieBlock className="col-md-3">
              <a href={`../${locations[j].node.slug}`}>
                <div>{locations[j].node.title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      } else {
        locationsList.push(
          <SpecialtiesWrap className="row" key={i}>
            <ServcieBlock className="col-md-offset-1 col-md-3">
              <a href={`../${locations[i].node.slug}`}>
                <div>{locations[i].node.title}</div>
              </a>
            </ServcieBlock>
          </SpecialtiesWrap>
        )
      }
    }

    return (
      <Layout>
        <Helmet defaultTitle="ATA CPA">
          <meta name="robots" content="noindex" />
        </Helmet>
        <div
          style={{
            paddingTop: '130px',
            paddingBottom: '80px',
            backgroundColor: '#222',
            color: '#fff',
          }}
        >
          {/* {data.allWordpressWpLocations.edges.map(({ node }) => (
            <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
            </div>
          ))} */}
          <div className="container">
            <div className="row">
              <h1
                className="col-md-offset-1 col-md-10"
                style={{ paddingLeft: 0 }}
              >
                Our Locations
              </h1>
            </div>
            {locationsList}
          </div>
        </div>
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
