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

const yellow = '#D3D655'

const Ul = styled.ul`
  padding-bottom: 50px;
  li {
    color: rgb(149, 150, 152);
    font-size: 25px;
    padding-top: 20px;
    font-weight: 500;
    font-family: freight-sans-pro, sans-serif;
  }
`

const P = styled.p`
  font-family: source-sans-pro, sans-serif;
  text-align: center;
  color: rgb(149, 150, 152);
  font-size: 25px;
  padding-top: 20px;
  font-weight: 500;
`

const H1 = styled.h1`
  font-family: freight-sans-pro, sans-serif;
  text-align: ${props => (props.alignLeft ? 'left' : 'center')};
  font-weight: 700;
  padding: 10px 0 20px 0;
  margin: 0;
  color: rgb(65, 77, 85);
  font-size: 45px;
`

const H2 = styled.h2`
  font-family: jubilat, serif;
  color: rgb(88, 99, 107);
  text-align: ${props => (props.alignLeft ? 'left' : 'center')};
  font-size: 37px;
`

const Section = styled.div`
  padding: ${props => (props.top ? '0' : '30px')} 0
    ${props => (props.bottom ? '0' : '30px')} 0;
  ${props => (props.container ? 'width: 66%; margin: auto;' : null)}
  @media screen and (max-width: 480px) {
    width: 95%;
    margin: auto;
  }
`

const Header = styled.div`
  padding: 200px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(149, 150, 152);
  color: #fff;
  & > h1 {
    font-family: 'Merriweather';
    font-size: 65px;
    font-weight: 500;
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    span {
      display: none;
    }
  }
`

const SubHeader = styled.div`
  width: 66%;
  @media screen and (max-width: 480px) {
    width: 95%;
  }
  margin: auto;
  text-align: center;
  padding: 50px 0;
  & > h1 {
    color: rgb(89, 103, 145);
    font-weight: 600;
    padding-bottom: 30px;
    font-family: source-sans-pro, sans-serif;
  }
`

const Logos = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 400px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  & > span {
    width: 0px;
    height: 0px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 300px;
      color: #fff;
      font-weight: 500;
      @media screen and (max-width: 480px) {
        position: relative;
        top: -10px;
      }
    }
  }
`

const ATALogo = styled.div`
  background-color: rgb(89, 103, 145);
  > img {
    width: 420px;
    @media screen and (max-width: 480px) {
      width: 340px;
    }
  }
`

const SHLogo = styled.div`
  background-color: rgb(187, 192, 91);
  > img {
    width: 200px;
  }
`

const AchievementGrid = styled.div`
  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20%;
    grid-row-gap: 100px;
    grid-auto-rows: minmax(100px, auto);
  }
  margin-top: 100px;
  margin-bottom: 50px;
  & h1 {
    font-size: 37px;
    font-weight: 600;
  }
`

const AchievementIcon = styled.img`
  display: block;
  margin: auto;
  width: 70%;
  height: ${props => props.height}px;
  margin-bottom: 10px;
`

const Button = styled.button`
  font-family: freight-sans-pro, sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  border: 5px solid ${yellow};
  color: ${yellow};
  font-size: 30px;
  background: none;
  padding: 10px 40px;
  border-radius: 15px;
  text-transform: uppercase;
  ${props => (!props.alignLeft ? 'margin: auto; display: block;' : null)}
  ${props =>
    props.alt
      ? `background-color:${yellow}; color:#fff; font-size: 25px;`
      : null}
`

const DesignMolecule = styled.img`
  padding: 80px 0;
  max-width: 100%;
`

const VideoTestimonial = styled.div`
  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 8%;
  }
  padding: 100px 8%;
  background-color: rgb(231, 231, 232);
  margin-bottom: 50px;
`

const QuoteComma = styled.p`
  font-family: freight-sans-pro, sans-serif;
  font-weight: 600;
  font-size: 80px;
  color: #231f20;
  line-height: 40px;
  margin: auto;
  width: 36px;
  @media screen and (max-width: 480px) {
    margin-top: 50px;
  }
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
    @media screen and (max-width: 480px) {
      align-items: center;
      flex-direction: column;
    }
    margin-top: 50px;
    input {
      font-family: freight-sans-pro, sans-serif;
      font-style: italic;
      font-weight: 500;
      width: 30%;
      font-size: 20px;
      padding-left: 25px;
      margin-right: 25px;
      @media screen and (max-width: 480px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 25px;
        height: 50px;
      }
    }
    button {
      margin-left: 15px;
      @media screen and (max-width: 480px) {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
`

const YellowBar = styled.div`
  height: 20px;
  width: 100%;
  background-color: ${yellow};
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

  // meta stuff

  render() {
    const { achievementIconHeight } = this.state

    const title = 'Sodium Halogen'
    const description =
      'We create customer centered and results focused applications for web, mobile and virtual reality | Jackson, TN &amp; Nashville, TN'

    return (
      <Layout>
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
          <title>ATA CPA</title>
          <meta name="description" content={description} />
          <link rel="stylesheet" href="https://use.typekit.net/vkj7qzb.css" />
          {/* <meta
            name="image"
            content={locations.better_featured_image.source_url}
          /> */}
          {/* Twitter Card tags */}
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={seo.social.twitter} />
          /* <meta name="twitter:title" content={`ATA CPA | ${title}`} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content={locations.better_featured_image.source_url}
          /> */}
        </Helmet>
        <div
          style={{
            paddingTop: '94px',
            backgroundColor: '#222',
            color: '#fff',
          }}
        />
        <>
          <Header>
            <H1>
              Design <span>• </span>Web <span>• </span>Software
            </H1>
          </Header>
          <Section top>
            <SubHeader>
              <H1>ATA + Sodium Halogen Design</H1>
              <P>
                Once your business is financially sound, it’s time to start
                growing. Many businesses don’t know where to start when they
                reach this point. We have partnered with Sodium Halogen to help
                your company create new digital tools to be more efficient and
                stand out in the market place.
              </P>
            </SubHeader>
          </Section>
          <Logos>
            <ATALogo>
              <img src={ATALogoImg} />
            </ATALogo>
            <span>
              <P>+</P>
            </span>
            <SHLogo>
              <img src={SHLogoImg} />
            </SHLogo>
          </Logos>
          <Section container>
            <H1>Work with Sodium Halogen</H1>
            <P>
              We can help you design and build apps, branding, websites, and
              digital tools that will boost your bottom line
            </P>
          </Section>
          <Section>
            <ContentBlock>
              <H1 alignLeft>Technology should solve problems.</H1>
              <Ul>
                <li>Get rid of inefficiencies in your workflow.</li>
                <li>
                  Improve your customer's user experience with your company.
                </li>
                <li>
                  Create products and tools that get you noticed by your ideal
                  customer.
                </li>
              </Ul>
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
                <H1>Brand Identity Design & Development</H1>
                <P>
                  Create an entire brand identity system that helps you achieve
                  your goals and works for your business
                </P>
                <P>
                  Refine your company message to connect with how you solve your
                  customer's problems
                </P>
                <P>
                  Create marketing materials that are an extension of your
                  overall brand
                </P>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={appDesignIcon}
                />
                <H1>Software Application Design & Development</H1>
                <P>
                  Does your organization have internal processes that software
                  could automate? Maybe you have an idea but don’t know how to
                  make it happen?
                </P>
                <P>
                  Our team can help you design and build it from start to
                  finish.
                </P>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={userExperienceIcon}
                />
                <H1>Web & Interaction DesignUX/UI</H1>
                <P>
                  Is your website or application not converting the way it
                  should? Are users getting stuck or not understanding how to
                  accomplish simple tasks?
                </P>
                <P>
                  We use our Designtific Method to craft a product that your
                  customers will love first and foremost.
                </P>
              </div>
              <div>
                <AchievementIcon
                  height={achievementIconHeight}
                  src={virtualRealityIcon}
                />
                <H1>Virtual Reality Design & Development</H1>
                <P>
                  Got a crazy brilliant idea for how you can use virtual reality
                  to accomplish your business goals? Sounds like our kind of
                  crazy.
                </P>
                <P>
                  We’ve built immersive experiences for the Oculus Rift and HTC
                  Vive to help businesses like yours stand out.
                </P>
              </div>
            </AchievementGrid>
            <Button>Start a project</Button>
          </Section>
          <Section container>
            <H1>Our Process: The Designtific Method</H1>
            <P>
              Our Designtific Method focuses on solving your customers’ problems
              while accomplishing your business goals.
            </P>
            <DesignMolecule
              src={DesignMoleculeImg}
              alt="designtific molecule"
            />
            <P>
              Our small, multi-disciplinary team has spent the last 18 years
              experimenting and refining our process for turning great ideas
              into solid strategy and great digital products and experiences.
            </P>
          </Section>
          <VideoTestimonial>
            <YoutubeIframe />
            <div>
              <QuoteComma>“</QuoteComma>
              <P>
                you .......Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod lit, sed diam nonummy nibh
                euismod lit, sed diam nonummy nibh euismod ut laoreet
              </P>
              <P>- John Doe, President</P>
            </div>
          </VideoTestimonial>
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
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </P>
              </FaqDropdown>
              <FaqDropdown header="What kind of ROI can I expect?">
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </P>
              </FaqDropdown>
              <FaqDropdown header="What kinds of services can I get? ">
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </P>
              </FaqDropdown>
              <FaqDropdown header="How much will it cost?">
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  sollicitudin pretium dui eu cursus. Maecenas ultrices justo
                  vitae augue egestas, vitae mattis dolor tristique. Cras ut
                  mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
                  sed mauris tempus, vitae placerat purus fringilla. Etiam
                  ultrices tincidunt justo, sit amet dignissim nulla rhoncus
                  non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
                  orci aliquet. Phasellus eget elementum lorem. In hac habitasse
                  platea dictumst.
                </P>
              </FaqDropdown>
            </FaqContainer>
          </Section>
          <Section>
            <ContentBlock flip>
              <H1 alignLeft>Is Sodium Halogen right for you?</H1>
              <P>
                The types of organizations that benefit most tend to be small to
                mid-sized, privately held organizations where:
              </P>
              <Ul>
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
              </Ul>
              <Button alignLeft>Start your project</Button>
            </ContentBlock>
          </Section>
          <CTA>
            <H1>Free Project Checklist</H1>
            <P>
              With 17 years of experience in this field, we know what things you
              should consider when starting your project. Download this free
              resource and start your project with confidence.
            </P>
            <form action="">
              <input type="text" name="name" id="" placeholder="Full Name" />
              <input type="email" name="email" id="" placeholder="Email" />
              <Button alignLeft alt>
                Submit
              </Button>
            </form>
          </CTA>
          <YellowBar />
        </>
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
