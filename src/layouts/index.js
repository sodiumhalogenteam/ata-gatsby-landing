import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../components/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'

const containerStyle = {
  margin: `0 auto`,
}

// This is a sort of 'wrapper' for the entire site which can contain the header, footer, and any links or scripts
class DefaultLayout extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.equalheight = this.equalheight.bind(this)
  }

  equalheight(container) {
    var tallest = 0,
      eqlArr = []
    var containerArr = document.getElementsByClassName(container)
    for (var i = 0; i < containerArr.length; i++) {
      eqlArr[i] = containerArr[i].getElementsByClassName('eql')
    }
    for (var j = 0; j < eqlArr.length; j++) {
      for (var k = 0; k < eqlArr[j].length; k++) {
        eqlArr[j][k].style.height = 'auto'
        // console.log('height', eqlArr[j][k].offsetHeight)
        // console.log('item', eqlArr[j][k])
        if (eqlArr[j][k].offsetHeight > tallest) {
          tallest = eqlArr[j][k].offsetHeight
          // console.log('tallest', tallest)
        }
      }
      for (var m = 0; m < eqlArr[j].length; m++) {
        eqlArr[j][m].style.height = tallest
      }
    }
  }

  componentDidMount() {
    this.equalheight('services-list')
  }

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
          <meta
            name="google-site-verification"
            content="a-3hpnbDBUATj-gfdgSJcAtrJRVnK12292iTbJygUSI"
          />
        </Helmet>
        <Header />
        <div css={containerStyle}>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object,
}

export default DefaultLayout
