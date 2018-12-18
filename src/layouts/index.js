import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import '../components/bootstrap.min.css'

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
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
        <div
          css={{
            background: `rgb(207, 58, 62)`,
            marginBottom: rhythm(1),
            padding: `${rhythm(1)} 0px`,
            '@media screen and (min-width: 500px)': {
              padding: `${rhythm(2)} 0px`,
            },
          }}
        >
          <div css={containerStyle}>
            <h1
              css={{
                margin: 0,
                fontSize: scale(1.5).fontSize,
                lineHeight: 1,
                '@media screen and (min-width: 500px)': {
                  fontSize: scale(1.9).fontSize,
                  lineHeight: 1,
                },
              }}
            >
              <Link
                css={{
                  color: `rgb(224,203,144)`,
                  ':hover': {
                    color: `rgb(224,203,144)`,
                    textDecoration: `none`,
                  },
                }}
                to="/"
              >
                ATA
              </Link>
            </h1>
          </div>
        </div>
        <div css={containerStyle}>{this.props.children}</div>
      </div>
    )
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired,
}

export default DefaultLayout
