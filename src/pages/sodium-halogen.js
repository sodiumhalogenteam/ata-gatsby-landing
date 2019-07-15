import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../layouts'

// components
import ContentBlock from '../components/SHPage/ContentBlock'
import YoutubeIframe from '../components/YoutubeIframe'
import FaqDropdown from '../components/SHPage/FaqDropdown'

// images
import ATALogoImg from '../img/ata-logo-alpha.png'
import ATALogoBlack from '../img/ata-logo-black.png'
import SHLogoImg from '../img/sh-logo-white-vert.png'
import DesignMoleculeImg from '../img/designtific-molecule.png'
import appDesignIcon from '../img/app-design-developement.png'
import brandCreationIcon from '../img/brand-creation.png'
import userExperienceIcon from '../img/user-experience.png'
import virtualRealityIcon from '../img/virtual-reality.png'

const Styles = styled.div`
  p,
  li {
    color: rgb(149, 150, 152);
    font-weight: 600;
    font-size: 25px;
    padding-top: 20px;
  }
  p {
    text-align: center;
  }
  ul {
    padding-bottom: 50px;
  }
`

const H1 = styled.h1`
  text-align: ${props => (props.alignLeft ? 'left' : 'center')};
  font-weight: 600;
  padding: 10px 0 20px 0;
  margin: 0;
  color: rgb(65, 77, 85);
  font-size: 40px;
`

const H2 = styled.h2`
  color: rgb(88, 99, 107);
  text-align: ${props => (props.alignLeft ? 'left' : 'center')};
`

const Section = styled.div`
  padding: ${props => (props.top ? '0' : '30px')} 0
    ${props => (props.bottom ? '0' : '30px')} 0;
  ${props => (props.container ? 'width: 66%; margin: auto;' : null)}
`

const Header = styled.div`
  padding: 200px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(149, 150, 152);
  color: #fff;
  & > h1 {
    font-size: 65px;
    font-weight: 500;
    color: #fff;
  }
`

const SubHeader = styled.div`
  width: 66%;
  margin: auto;
  text-align: center;
  padding: 50px 0;
  & > h1 {
    color: rgb(89, 103, 145);
    font-weight: 600;
    padding-bottom: 30px;
  }
`

const Logos = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 400px;
  }
  & > span {
    width: 0px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 300px;
      color: #fff;
      font-weight: 500;
    }
  }
`

const ATALogo = styled.div`
  background-color: rgb(89, 103, 145);
  > img {
    width: 420px;
  }
`

const SHLogo = styled.div`
  background-color: rgb(187, 192, 91);
  > img {
    width: 200px;
  }
`

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20%;
  grid-row-gap: 100px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 100px;
  margin-bottom: 50px;
`

const AchievementIcon = styled.img`
  display: block;
  margin: auto;
  width: 70%;
  height: ${props => props.height}px;
  margin-bottom: 45px;
`

const Button = styled.button`
  border: 5px solid rgb(223, 212, 97);
  color: rgb(223, 212, 97);
  font-size: 30px;
  background: none;
  padding: 10px 40px;
  border-radius: 15px;
  text-transform: uppercase;
  ${props => (!props.alignLeft ? 'margin: auto; display: block;' : null)}
  ${props =>
    props.alt
      ? 'background-color:rgb(223, 212, 97); color:#fff; font-size: 25px;'
      : null}
`

const DesignMolecule = styled.img`
  padding: 80px 0;
`

const VideoTestimonial = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8%;
  grid-template-columns:
  flex-direction: row;
  padding: 100px 8%;
  background-color: rgb(231, 231, 232);
  margin-bottom: 50px;
`

const CompanyLogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10%;
  grid-row-gap: 50 px;
  grid-auto-rows: minmax(100px, auto);
  padding: 0 10%;
  margin: 30px 0 60px 0;
  & > img {
    width: 100%;
  }
`

const CTA = styled.div`
  background-color: RGB(45, 58, 67);
  padding: 60px 8% 100px 8%;
  h1,
  p {
    color: #fff;
  }
  form {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    input {
      width: 30%;
      font-size: 20px;
      padding-left: 25px;
      margin-right: 25px;
    }
    button {
      margin-left: 15px;
    }
  }
`

const YellowBar = styled.div`
  height: 20px;
  width: 100%;
  background-color: rgb(223, 212, 97);
`

const FaqContainer = styled.div`
  margin: 200px 8% 75px 8%;
`

// the SodiumHalogen page
class SodiumHalogen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      achievementIconHeight: 100,
    }
    this.achievementIcon = React.createRef()
  }

  componentDidMount() {
    this.updateAchievementIconWidth()
  }

  componentDidUpdate() {
    this.updateAchievementIconWidth()
  }

  updateAchievementIconWidth() {
    const { achievementIconHeight } = this.state

    const width = this.achievementIcon.current.clientWidth
    if (width === achievementIconHeight) return

    this.setState({ achievementIconHeight: width })
  }

  render() {
    const { achievementIconHeight } = this.state

    return (
      <Layout>
        {/* <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
          <title>ATA CPA</title>
          <meta name="description" content={description} />
          <meta
            name="image"
            content={locations.better_featured_image.source_url}
          /> */}
        {/* Twitter Card tags */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
        {/* <meta name="twitter:title" content={`ATA CPA | ${title}`} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={locations.better_featured_image.source_url}
          />
        </Helmet> */}
        <div
          style={{
            paddingTop: '94px',
            backgroundColor: '#222',
            color: '#fff',
          }}
        />
        <Styles>
          <Header>
            <H1>Design • Web • Software</H1>
          </Header>
          <Section top>
            <SubHeader>
              <H1>ATA + Sodium Halogen Design</H1>
              <p>
                Once your business is financially sound, it’s time to start
                growing. Many businesses don’t know where to start when they
                reach this point. We have partnered with Sodium Halogen to help
                your company create new digital tools to be more efficient and
                stand out in the market place.
              </p>
            </SubHeader>
            <Logos>
              <ATALogo>
                <img src={ATALogoImg} />
              </ATALogo>
              <span>
                <p>+</p>
              </span>
              <SHLogo>
                <img src={SHLogoImg} />
              </SHLogo>
            </Logos>
          </Section>
          <Section container>
            <H1>Work with Sodium Halogen</H1>
            <p>
              We can help you design and build apps, branding, websites, and
              digital tools that will boost your bottom line
            </p>
          </Section>
          <Section>
            <ContentBlock>
              <H1 alignLeft>Technology should solve problems.</H1>
              <ul>
                <li>Get rid of inneficieancies in your workflow.</li>
                <li>
                  Improve your customer's user experience with your company.
                </li>
                <li>
                  Create products and tools that get you noticed by your ideal
                  customer.
                </li>
              </ul>
              <H2 alignLeft>
                Sodium Halogen can help you design and build it.
              </H2>
            </ContentBlock>
          </Section>
          <Section container>
            <H1>What you can achieve with Sodium Halogen:</H1>
            <AchievementGrid>
              <div>
                <AchievementIcon
                  ref={this.achievementIcon}
                  height={achievementIconHeight}
                  src={brandCreationIcon}
                />
                <H2>Brand Identity Design & Development</H2>
                <p>
                  Create an entire brand identity system that helps you achieve
                  your goals and works for your business
                </p>
                <p>
                  Refine your company message to connect with how you solve your
                  customer's problems
                </p>
                <p>
                  Create marketing materials that are an extension of your
                  overall brand
                </p>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={appDesignIcon}
                />
                <H2>Software Application Design & Development</H2>
                <p>
                  Does your organization have internal processes that software
                  could automate? Maybe you have an idea but don’t know how to
                  make it happen?
                </p>
                <p>
                  Our team can help you design and build it from start to
                  finish.
                </p>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={userExperienceIcon}
                />
                <H2>Web & Interaction DesignUX/UI</H2>
                <p>
                  Is your website or application not converting the way it
                  should? Are users getting stuck or not understanding how to
                  accomplish simple tasks?
                </p>
                <p>
                  We use our Designtific Method to craft a product that your
                  customers will love first and foremost.
                </p>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={virtualRealityIcon}
                />
                <H2>Virtual Reality Design & Development</H2>
                <p>
                  Got a crazy brilliant idea for how you can use virtual reality
                  to accomplish your business goals? Sounds like our kind of
                  crazy.
                </p>
                <p>
                  We’ve built immersive experiences for the Oculus Rift and HTC
                  Vive to help businesses like yours stand out.
                </p>
              </div>
            </AchievementGrid>
            <Button>Start a project</Button>
          </Section>
          <Section container>
            <H1>Our Process: The Designtific Method</H1>
            <p>
              Our Designtific Method focuses on solving your customers’ problems
              while accomplishing your business goals.
            </p>
            <DesignMolecule
              src={DesignMoleculeImg}
              alt="designtific molecule"
            />
            <p>
              Our small, multi-disciplinary team has spent the last 18 years
              experimenting and refining our process for turning great ideas
              into solid strategy and great digital products and experiences.
            </p>
          </Section>
          <Section>
            <VideoTestimonial>
              <YoutubeIframe />
              <div>
                <p>"</p>
                <p>
                  you .......Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod lit, sed diam nonummy nibh
                  euismod lit, sed diam nonummy nibh euismod ut laoreet
                </p>
                <p>- John Doe, President</p>
              </div>
            </VideoTestimonial>
          </Section>
          <Section>
            <H1>Over the past 18 years we've helped:</H1>
            <CompanyLogoGrid>
              <img src={ATALogoBlack} />
              <img src={ATALogoBlack} />
              <img src={ATALogoBlack} />
              <img src={ATALogoBlack} />
              <img src={ATALogoBlack} />
              <img src={ATALogoBlack} />
            </CompanyLogoGrid>
            <Button>Start your project</Button>
          </Section>
          <Section>
            <FaqContainer>
              <FaqDropdown header="How does it work?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </p>
              </FaqDropdown>
              <FaqDropdown header="What kind of ROI can I expect?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </p>
              </FaqDropdown>
              <FaqDropdown header="What kinds of services can I get? ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </p>
              </FaqDropdown>
              <FaqDropdown header="How much will it cost?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </p>
              </FaqDropdown>
            </FaqContainer>
          </Section>
          <Section>
            <ContentBlock flip>
              <H1 alignLeft>Is Sodium Halogen right for you?</H1>
              <p>
                The types of organizations that benefit most tend to be small to
                mid-sized, privately held organizations where:
              </p>
              <ul>
                <li>The owner has been doing his/her own marketing</li>
                <li>
                  There is little to no in-house marketing staf or department
                </li>
                <li>
                  There is little to no in-house marketing staf or department
                </li>
                <li>
                  The in-house marketing manager is swamped with an assortment
                  of tasks – and they’re struggling to keep pace with the
                  ever-growing list.
                </li>
              </ul>
              <Button alignLeft>Start your project</Button>
            </ContentBlock>
          </Section>
          <Section bottom>
            <CTA>
              <H1>Free Project Checklist</H1>
              <p>
                With 17 years of experience in this field, we know what things
                you should consider when starting your project. Download this
                free resource and start your project with confidence.
              </p>
              <form action="">
                <input type="text" name="name" id="" placeholder="Full Name" />
                <input type="email" name="email" id="" placeholder="Email" />
                <Button alignLeft alt>
                  Submit
                </Button>
              </form>
            </CTA>
            <YellowBar />
          </Section>
        </Styles>
      </Layout>
    )
  }
}

export default SodiumHalogen

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
