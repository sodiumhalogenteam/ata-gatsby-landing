import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'
import '../components/bootstrap.min.css'
import Header from '../components/header.js'

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

// This is a sort of 'wrapper' for the entire site which can contain the header, footer, and any links or scripts
class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic|Source+Sans+Pro:600,400,300,300italic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.1/animate.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            id="sage/css-css"
            href="https://www.atacpa.net/wp-content/themes/ata/dist/styles/main.css"
            type="text/css"
            media="all"
          />
        </Helmet>
        <Header />
        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object,
}

export default DefaultLayout
