import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-bootstrap'
import { oneOfType, array, object } from 'prop-types'

const LinkBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  font-size: 20px;
`

// The navbar for the entire site
class BottomNav extends React.Component {
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
    return (
      <footer className="content-info footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xs-10 col-xs-offset-2 col-md-offset-0 eql">
                <h4>CONTACT</h4>
                <ul className="info-list md-list i-primary">
                  <li>731-427-8571</li>
                  <li>
                    <a href="mailto:info@atacpa.net">info@atacpa.net</a>
                  </li>
                  <li>
                    <a href="https://www.atacpa.net/ata-offices/">
                      List of all locations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-xs-10 col-xs-offset-2 col-md-offset-0 eql">
                <h4>QUICK LINKS</h4>
                <ul className="info-list md-list i-primary">
                  <div className="menu-footer-navigation-container">
                    <ul id="menu-footer-navigation" className="nav">
                      {this.props.items.map(({ title, url, wordpress_id }) => (
                        <li
                          key={wordpress_id}
                          id={`menu-item-${wordpress_id}`}
                          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${wordpress_id}`}
                        >
                          <a href={url}>{title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <li>
                    <LinkBtn
                      className="openmodal"
                      onClick={() => this.handleShow(1)}
                    >
                      Join Our Newsletter
                    </LinkBtn>
                    <Modal
                      show={this.state.show === 1}
                      onHide={() => this.handleClose()}
                      id={1}
                    >
                      <Modal.Body>
                        <button
                          className="close"
                          type="button"
                          data-dismiss="modal"
                        >
                          ×
                        </button>
                        <link
                          href="https://static-cdn.e2ma.net/signups/css/signup-refresh.med.css"
                          rel="stylesheet"
                          type="text/css"
                        />
                        <script
                          type="text/javascript"
                          src="https://signup.e2ma.net/tts_signup/1853898/a6d1615ac285a843f63acb71a2212b54/1802215/"
                        />
                        <div id="load_check" className="signup_form_message">
                          This form needs Javascript to display, which your
                          browser doesn't support.{' '}
                          <a href="https://signup.e2ma.net/signup/1853898/1802215/">
                            {' '}
                            Sign up here
                          </a>{' '}
                          instead{' '}
                        </div>
                        <script type="text/javascript">
                          signupFormObj.drawForm();
                        </script>
                      </Modal.Body>
                    </Modal>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-xs-10 col-xs-offset-2 col-md-offset-0 eql">
                <h4>PARTNERS</h4>
                <ul className="info-list md-list i-primary">
                  <li>
                    <a href="https://www.atacpa.net/it-consulting">
                      ATA Technologies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.atacpa.net/center-point-solutions">
                      Center Point
                    </a>
                  </li>
                  <li>
                    <a href="https://www.atacpa.net/revolution-partners">
                      Revolution Partners
                    </a>
                  </li>

                  <li>
                    <a href="https://locations.atacpa.net/sodium-halogen/">
                      Sodium Halogen
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-xs-10 col-xs-offset-2 col-md-offset-0 eql">
                <h4>FOLLOW US</h4>
                <ul className="footer-icons icons-list">
                  <li>
                    <a
                      href="https://www.facebook.com/ATACPAs/?fref=ts"
                      title="Follow us"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/alexander-thompson-arnold-cpas"
                      title="Follow us"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/atacpa_1" title="Follow us">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/alexanderthompsonarnoldcpas/"
                      title="Follow us"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <img
                  className="img-responsive-footer"
                  src="https://www.atacpa.net/wp-content/uploads/2017/08/ipa-top-200-sm.png"
                  alt="ipa"
                />
                <img
                  className="img-responsive-footer"
                  src="https://www.atacpa.net/wp-content/uploads/2017/08/ipa-fastest-growing-sm.png"
                  alt="ipa"
                />
                <img
                  className="img-responsive-footer"
                  src="https://www.atacpa.net/wp-content/uploads/2016/09/bdo-footer.png"
                  alt="bdo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>Alexander Thompson Arnold PLLC -{new Date().getFullYear()}</p>
            <div className="shd-logo">
              <p className="sh-made">Designtificly made by:</p>
              <p>
                <a
                  href="https://sodiumhalogen.com/?utm_source=ATA&utm_medium=footer-link&utm_campaign=past-project"
                  className="remove-arrow"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="https://www.w3.org/2000/svg"
                    xlink="https://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 300 100"
                    enableBackground="new 0 0 300 100"
                    space="preserve"
                    style={{ width: '155px' }}
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            fill="#777777"
                            d="M121.132,79.25c0-1.653-1.136-2.817-2.818-2.817h-1.588v5.633h1.588c1.683,0,2.818-1.134,2.818-2.79 V79.25z M118.314,83.923h-3.643v-9.345h3.643c2.938,0,4.966,2.016,4.966,4.646v0.026C123.28,81.88,121.251,83.923,118.314,83.923"
                          />
                          <polygon
                            fill="#777777"
                            points="125.765,83.923 125.765,74.578 132.813,74.578 132.813,76.406 127.809,76.406 127.809,78.305 132.211,78.305 132.211,80.131 127.809,80.131 127.809,82.094 132.878,82.094 132.878,83.923"
                          />
                          <path
                            fill="#777777"
                            d="M138.688,84.056c-1.416,0-2.841-0.496-3.962-1.495l1.213-1.456c0.841,0.693,1.722,1.134,2.791,1.134c0.839,0,1.346-0.333,1.346-0.881v-0.025c0-0.522-0.32-0.789-1.881-1.191c-1.883-0.48-3.098-0.999-3.098-2.856v-0.024c0-1.696,1.364-2.82,3.272-2.82c1.361,0,2.522,0.429,3.469,1.191l-1.068,1.547c-0.825-0.573-1.641-0.922-2.428-0.922c-0.787,0-1.201,0.363-1.201,0.816v0.026c0,0.614,0.4,0.814,2.015,1.227c1.895,0.496,2.964,1.176,2.964,2.803v0.029C142.12,83.013,140.704,84.056,138.688,84.056"
                          />
                          <rect
                            x="144.661"
                            y="74.578"
                            fill="#777777"
                            width="2.054"
                            height="9.343"
                          />
                          <path
                            fill="#777777"
                            d="M154.211,84.082c-2.91,0-4.912-2.041-4.912-4.805V79.25c0-2.655,2.072-4.832,4.9-4.832c1.682,0,2.696,0.453,3.67,1.283l-1.295,1.562c-0.722-0.602-1.362-0.948-2.442-0.948c-1.495,0-2.682,1.321-2.682,2.909v0.026c0,1.708,1.174,2.965,2.829,2.965c0.749,0,1.415-0.188,1.934-0.563v-1.333h-2.068v-1.775h4.059V82.6C157.24,83.413,155.918,84.082,154.211,84.082"
                          />
                          <polygon
                            fill="#777777"
                            points="167.387,83.923 162.863,77.982 162.863,83.923 160.833,83.923 160.833,74.578 162.731,74.578 167.107,80.33 167.107,74.578 169.136,74.578 169.136,83.923"
                          />
                          <polygon
                            fill="#777777"
                            points="178.904,75.901 180.799,75.901 180.799,78.305 183.214,78.305 183.214,80.146 180.799,80.146 180.799,82.546 178.904,82.546 178.904,80.146 176.487,80.146 176.487,78.305 178.904,78.305"
                          />
                          <path
                            fill="#777777"
                            d="M193.891,84.056c-1.416,0-2.841-0.496-3.962-1.495l1.213-1.456c0.841,0.693,1.721,1.134,2.791,1.134c0.839,0,1.347-0.333,1.347-0.881v-0.025c0-0.522-0.319-0.789-1.881-1.191c-1.883-0.48-3.099-0.999-3.099-2.856v-0.024c0-1.696,1.364-2.82,3.272-2.82c1.361,0,2.521,0.429,3.47,1.191l-1.069,1.547c-0.825-0.573-1.641-0.922-2.428-0.922c-0.787,0-1.201,0.363-1.201,0.816v0.026c0,0.614,0.4,0.814,2.015,1.227c1.896,0.496,2.965,1.176,2.965,2.803v0.029C197.324,83.013,195.908,84.056,193.891,84.056"
                          />
                          <path
                            fill="#777777"
                            d="M204.146,84.082c-2.746,0-4.791-2.123-4.791-4.805V79.25c0-2.655,2.003-4.832,4.873-4.832c1.762,0,2.817,0.587,3.685,1.439l-1.31,1.511c-0.722-0.654-1.456-1.054-2.39-1.054c-1.574,0-2.71,1.309-2.71,2.909v0.026c0,1.602,1.109,2.936,2.71,2.936c1.069,0,1.722-0.426,2.457-1.093l1.307,1.322C207.017,83.442,205.947,84.082,204.146,84.082"
                          />
                          <rect
                            x="210.369"
                            y="74.578"
                            fill="#777777"
                            width="2.057"
                            height="9.343"
                          />
                          <polygon
                            fill="#777777"
                            points="215.424,83.923 215.424,74.578 222.472,74.578 222.472,76.406 217.467,76.406 217.467,78.305 221.87,78.305 221.87,80.131 217.467,80.131 217.467,82.094 222.536,82.094 222.536,83.923"
                          />
                          <polygon
                            fill="#777777"
                            points="231.577,83.923 227.053,77.982 227.053,83.923 225.023,83.923 225.023,74.578 226.921,74.578 231.297,80.33 231.297,74.578 233.326,74.578 233.326,83.923"
                          />
                          <path
                            fill="#777777"
                            d="M240.601,84.082c-2.746,0-4.791-2.123-4.791-4.805V79.25c0-2.655,2.003-4.832,4.873-4.832c1.762,0,2.817,0.587,3.685,1.439l-1.31,1.511c-0.721-0.654-1.456-1.054-2.389-1.054c-1.575,0-2.711,1.309-2.711,2.909v0.026c0,1.602,1.109,2.936,2.711,2.936c1.069,0,1.721-0.426,2.456-1.093l1.307,1.322C243.472,83.442,242.403,84.082,240.601,84.082"
                          />
                          <polygon
                            fill="#777777"
                            points="246.732,83.923 246.732,74.578 253.779,74.578 253.779,76.406 248.775,76.406 248.775,78.305 253.178,78.305 253.178,80.131 248.775,80.131 248.775,82.094 253.845,82.094 253.845,83.923"
                          />
                        </g>
                        <g>
                          <path
                            fill="#777777"
                            d="M73.275,67.008c-2.411,0-4.843-0.842-6.753-2.546l2.068-2.482c1.432,1.185,2.934,1.935,4.754,1.935c1.432,0,2.295-0.569,2.295-1.503v-0.044c0-0.889-0.544-1.342-3.206-2.025c-3.207-0.819-5.278-1.704-5.278-4.866v-0.045c0-2.889,2.322-4.798,5.573-4.798c2.321,0,4.3,0.725,5.914,2.022l-1.82,2.638c-1.41-0.977-2.798-1.568-4.138-1.568c-1.343,0-2.049,0.614-2.049,1.386v0.047c0,1.046,0.683,1.386,3.434,2.092c3.233,0.842,5.05,2.002,5.05,4.776v0.044C79.12,65.234,76.711,67.008,73.275,67.008"
                          />
                          <path
                            fill="#777777"
                            d="M95.869,58.821c0-2.728-2-5.005-4.823-5.005c-2.82,0-4.776,2.231-4.776,4.958v0.047c0,2.727,2.002,5.003,4.823,5.003c2.821,0,4.777-2.229,4.777-4.959V58.821z M91.046,67.055c-4.912,0-8.438-3.663-8.438-8.19v-0.044c0-4.526,3.572-8.234,8.484-8.234c4.912,0,8.438,3.662,8.438,8.187v0.047C99.53,63.346,95.96,67.055,91.046,67.055"
                          />
                          <path
                            fill="#777777"
                            d="M114.803,58.821c0-2.82-1.935-4.799-4.799-4.799h-2.707v9.598h2.707c2.865,0,4.799-1.933,4.799-4.757V58.821z M110.004,66.78h-6.211v-15.92h6.211c5.002,0,8.462,3.435,8.462,7.914v0.047C118.466,63.299,115.006,66.78,110.004,66.78"
                          />
                          <rect
                            x="122.886"
                            y="50.859"
                            fill="#777777"
                            width="3.504"
                            height="15.92"
                          />
                          <path
                            fill="#777777"
                            d="M138.156,67.031c-4.277,0-6.893-2.387-6.893-7.072v-9.099h3.503v9.007c0,2.593,1.297,3.935,3.434,3.935c2.139,0,3.436-1.297,3.436-3.82v-9.122h3.504v8.985C145.14,64.666,142.431,67.031,138.156,67.031"
                          />
                          <polygon
                            fill="#777777"
                            points="162.298,66.78 162.298,56.386 157.818,63.188 157.726,63.188 153.292,56.456 153.292,66.78 149.856,66.78 149.856,50.859 153.633,50.859 157.818,57.594 162.002,50.859 165.778,50.859 165.778,66.78"
                          />
                          <polygon
                            fill="#777777"
                            points="188.674,66.78 188.674,60.388 182.213,60.388 182.213,66.78 178.712,66.78 178.712,50.859 182.213,50.859 182.213,57.161 188.674,57.161 188.674,50.859 192.178,50.859 192.178,66.78"
                          />
                          <path
                            fill="#777777"
                            d="M204.171,54.953l-2.113,5.163h4.23L204.171,54.953z M208.997,66.78l-1.456-3.569h-6.734l-1.456,3.569h-3.569l6.822-16.034h3.229l6.825,16.034H208.997z"
                          />
                          <polygon
                            fill="#777777"
                            points="216.26,66.78 216.26,50.859 219.762,50.859 219.762,63.597 227.7,63.597 227.7,66.78"
                          />
                          <path
                            fill="#777777"
                            d="M242.56,58.821c0-2.728-2-5.005-4.823-5.005c-2.821,0-4.776,2.231-4.776,4.958v0.047c0,2.727,2.002,5.003,4.823,5.003c2.821,0,4.776-2.229,4.776-4.959V58.821z M237.737,67.055c-4.912,0-8.438-3.663-8.438-8.19v-0.044c0-4.526,3.572-8.234,8.484-8.234c4.911,0,8.438,3.662,8.438,8.187v0.047C246.221,63.346,242.651,67.055,237.737,67.055"
                          />
                          <path
                            fill="#777777"
                            d="M258.15,67.055c-4.958,0-8.371-3.48-8.371-8.19v-0.044c0-4.526,3.529-8.234,8.348-8.234c2.864,0,4.592,0.772,6.255,2.183l-2.207,2.662c-1.227-1.025-2.321-1.616-4.16-1.616c-2.55,0-4.574,2.252-4.574,4.958v0.047c0,2.911,2.002,5.049,4.825,5.049c1.271,0,2.409-0.32,3.296-0.956v-2.273h-3.526v-3.025h6.916v6.915C263.313,65.915,261.063,67.055,258.15,67.055"
                          />
                          <polygon
                            fill="#777777"
                            points="269.467,66.78 269.467,50.859 281.478,50.859 281.478,53.975 272.947,53.975 272.947,57.204 280.455,57.204 280.455,60.321 272.947,60.321 272.947,63.664 281.59,63.664 281.59,66.78"
                          />
                          <polygon
                            fill="#777777"
                            points="297.02,66.78 289.31,56.659 289.31,66.78 285.851,66.78 285.851,50.859 289.08,50.859 296.541,60.662 296.541,50.859 300,50.859 300,66.78"
                          />
                        </g>
                      </g>
                      <g>
                        <polygon
                          fill="#777777"
                          points="49.373,10 36.255,17.578 36.255,21.516 49.373,13.939 61.889,21.168 61.889,35.651 47.858,44.372 47.858,71.688 25.878,84.381 3.896,71.688 3.896,46.309 25.874,33.624 34.253,38.482 34.253,34.538 25.882,29.68 0.484,44.337 0.484,73.662 25.878,88.318 51.272,73.662 51.272,46.272 65.302,37.549 65.302,19.197 "
                        />
                        <path
                          fill="#777777"
                          d="M27.469,56.824c5.39,1.313,8.195,3.242,8.195,7.505c0,4.806-3.749,7.647-9.106,7.647c-3.896,0-7.573-1.35-10.632-4.081l2.693-3.203c2.444,2.113,4.882,3.315,8.05,3.315c2.767,0,4.515-1.279,4.515-3.242c0-1.859-1.018-2.841-5.753-3.933c-5.428-1.312-8.486-2.915-8.486-7.649c0-4.447,3.643-7.431,8.703-7.431c3.716,0,6.666,1.132,9.253,3.207l-2.408,3.387c-2.292-1.713-4.586-2.624-6.916-2.624c-2.624,0-4.15,1.347-4.15,3.06C21.427,54.786,22.592,55.66,27.469,56.824"
                        />
                        <polygon
                          fill="#777777"
                          points="51.247,34.674 51.247,30.137 46.66,30.137 46.66,34.674 44.172,34.674 44.172,23.368 46.66,23.368 46.66,27.838 51.247,27.838 51.247,23.368 53.735,23.368 53.735,34.674 "
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

BottomNav.propTypes = {
  items: oneOfType([array, object]).isRequired,
}

export default BottomNav
