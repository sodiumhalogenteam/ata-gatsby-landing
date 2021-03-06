// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
// import Layout from '../layouts'

// import Particles from 'react-particles-js'

// // components
// import ContentBlock from '../components/SHPage/ContentBlock'
// import YoutubeIframe from '../components/YoutubeIframe'
// import FaqDropdown from '../components/SHPage/FaqDropdown'

// // images
// import ATALogoImg from '../img/sh-page/ata-logo-alpha.png'
// import SHLogoImg from '../img/sh-page/sh-logo.png'
// import DesignAtomImg from '../img/sh-page/designtific-molecule.png'
// import header from '../img/sh-page/brainstorming-branding-ideas.jpg'

// // svgs
// import BrandingIcon from '../img/sh-page/Branding.svg'
// import SoftwareIcon from '../img/sh-page/Software.svg'
// import UXIcon from '../img/sh-page/UX.svg'
// import VRIcon from '../img/sh-page/VR.svg'

// // logo section images
// import PopVoxLogo from '../img/sh-page/popvox-logo.png'
// import GELogo from '../img/sh-page/ge-logo.png'
// import VanderbiltLogo from '../img/sh-page/vanderbilt-logo.png'
// import NetworkForGoodLogo from '../img/sh-page/networkforgood-logo.png'
// import IronIoLogo from '../img/sh-page/ironio-logo.png'
// import EstateAssistLogo from '../img/sh-page/estateassist-logo.png'
// import HavenLogo from '../img/sh-page/haven-logo.png'
// import AllygnLogo from '../img/sh-page/allygn-logo.png'
// import BypassLogo from '../img/sh-page/bypass-logo.png'
// import ChickFilALogo from '../img/sh-page/chickfila-logo.png'
// import ZondaLogo from '../img/sh-page/zonda-logo.png'
// import MarsLogo from '../img/sh-page/mars-logo.png'

// const yellow = '#D3D655'
// const shGreen = '#BBCE00'

// const Ul = styled.ul`
//   padding-bottom: 50px;
//   li {
//     color: #656667;
//     font-size: 23px;
//     padding-top: 20px;
//     font-weight: 500;
//     font-family: freight-sans-pro, sans-serif;
//   }
// `

// const P = styled.p`
//   font-family: source-sans-pro, sans-serif;
//   text-align: center;
//   color: #656667;
//   font-size: 23px;
//   padding-top: 20px;
//   font-weight: 500;
// `

// const H1 = styled.h1`
//   font-family: freight-sans-pro, sans-serif;
//   text-align: ${props => (props.alignLeft ? 'left' : 'center')};
//   font-weight: 700;
//   padding: 10px 0 20px 0;
//   margin: 0;
//   color: #414d55;
//   font-size: 45px;
// `

// const H2 = styled.h2`
//   font-family: ${props =>
//     props.alt ? 'jubilat, serif' : 'freight-sans-pro, sans-serif'};
//   color: ${props => (props.alt ? 'rgb(88, 99, 107)' : '#414d55')};
//   text-align: ${props => (props.alignLeft ? 'left' : 'center')};
//   font-size: 37px;
// `

// const Section = styled.div`
//   padding: ${props => (props.top ? '0' : '75px')} 0
//     ${props => (props.bottom ? '0' : '75px')} 0;
//   ${props => (props.container ? 'width: 66%; margin: auto;' : null)}
//   ${props =>
//     props.noParticles
//       ? 'background: #fff;'
//       : null}
//   @media screen and (max-width: 480px) {
//     width: 95%;
//     margin: auto;
//   }
// `

// const Header = styled.div`
//   padding: 200px 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: url(${header});
//   background-color: #626365;
//   background-size: cover;
//   background-blend-mode: overlay;
//   background-position: center;
//   color: #fff;
//   & > h1 {
//     font-family: 'Merriweather';
//     font-size: 65px;
//     font-weight: 500;
//     color: #fff;
//   }
//   @media screen and (max-width: 480px) {
//     span {
//       display: none;
//     }
//   }
// `

// const SubHeader = styled.div`
//   width: 66%;
//   @media screen and (max-width: 480px) {
//     width: 95%;
//   }
//   margin: auto;
//   text-align: center;
//   padding: 50px 0;
//   & > h1 {
//     color: rgb(89, 103, 145);
//     font-weight: 600;
//     padding-bottom: 30px;
//     font-family: source-sans-pro, sans-serif;
//   }
// `

// const Logos = styled.div`
//   display: flex;
//   align-items: center;
//   @media screen and (max-width: 480px) {
//     flex-direction: column;
//   }
//   & > div {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 50%;
//     height: 400px;
//     @media screen and (max-width: 480px) {
//       width: 100%;
//     }
//   }
//   & > span {
//     width: 0px;
//     height: 0px;
//     z-index: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     p {
//       font-size: 300px;
//       color: #fff;
//       font-weight: 500;
//       @media screen and (max-width: 480px) {
//         position: relative;
//         top: -10px;
//       }
//     }
//   }
// `

// const ATALogo = styled.div`
//   background-color: rgb(89, 103, 145);
//   > img {
//     width: 420px;
//     @media screen and (max-width: 480px) {
//       width: 340px;
//     }
//   }
// `

// const SHLogo = styled.div`
//   background-color: ${shGreen};
//   > img {
//     width: 200px;
//   }
// `

// const AchievementGrid = styled.div`
//   @media screen and (min-width: 480px) {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-column-gap: 20%;
//     grid-row-gap: 100px;
//     grid-auto-rows: minmax(100px, auto);
//   }
//   margin-top: 100px;
//   margin-bottom: 50px;
//   & h1 {
//     font-size: 37px;
//     font-weight: 600;
//   }
// `

// const AchievementIcon = styled.img`
//   display: block;
//   margin: auto;
//   width: 70%;
//   height: ${props => props.height}px;
//   margin-bottom: 10px;
// `

// const Button = styled.a`
//   font-family: freight-sans-pro, sans-serif;
//   font-weight: 700;
//   letter-spacing: 3px;
//   padding: 10px 40px;
//   border-radius: 15px;
//   text-transform: uppercase;
//   text-align: center;
//   transition: all 0.25s;
//   cursor: pointer;
//   background-color: ${shGreen};
//   color: #fff;
//   font-size: 25px;
//   display: block;
//   &:hover {
//     background-color: ${shGreen}ab;
//     color: #fff;
//     font-size: 25px;
//   }
// `

// const DesignAtom = styled.img`
//   padding: 80px 0;
//   max-width: 100%;
//   display: block;
//   margin: auto;
// `

// const VideoTestimonial = styled.div`
//   @media screen and (min-width: 480px) {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-column-gap: 8%;
//   }
//   padding: 100px 8%;
//   background-color: rgb(231, 231, 232);
//   margin-bottom: 50px;
// `

// const QuoteContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `

// const QuoteComma = styled.p`
//   font-family: freight-sans-pro, sans-serif;
//   font-weight: 600;
//   font-size: 80px;
//   color: #231f20;
//   line-height: 40px;
//   width: 36px;
//   @media screen and (max-width: 480px) {
//     margin-top: 50px;
//   }
// `

// const CompanyLogoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   grid-column-gap: 1%;
//   grid-row-gap: 50 px;
//   grid-auto-rows: minmax(100px, auto);
//   padding: 0 10%;
//   margin: 30px 0 60px 0;
//   & > img {
//     width: 100%;
//     filter: brightness(1.5);
//   }
//   @media screen and (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//     grid-column-gap: 5%;
//     padding: 0 5%;
//   }
// `

// const CTA = styled.div`
//   padding: 60px 8% 100px 8%;
// `

// const YellowBar = styled.div`
//   height: 20px;
//   width: 100%;
//   background-color: ${shGreen};
// `

// const FaqContainer = styled.div`
//   margin: 0 8% 0 8%;
// `

// const FlexCenter = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// // the SodiumHalogen page
// class SodiumHalogen extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       achievementIconHeight: 100,
//     }
//     this.achievementIcon = React.createRef()
//   }

//   componentDidMount() {
//     this.updateAchievementIconWidth()
//   }

//   componentDidUpdate() {
//     this.updateAchievementIconWidth()
//   }

//   updateAchievementIconWidth() {
//     const { achievementIconHeight } = this.state

//     const width = this.achievementIcon.current.clientWidth
//     if (width === achievementIconHeight) return

//     this.setState({ achievementIconHeight: width })
//   }

//   // meta stuff

//   render() {
//     const { achievementIconHeight } = this.state

//     const title = 'Sodium Halogen'
//     const description =
//       'We create customer centered and results focused applications for web, mobile and virtual reality | Jackson, TN &amp; Nashville, TN'

//     return (
//       <Layout>
//         <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
//           <title>ATA CPA</title>
//           <meta name="description" content={description} />
//           <link rel="stylesheet" href="https://use.typekit.net/vkj7qzb.css" />
//           {/* <meta
//             name="image"
//             content={locations.better_featured_image.source_url}
//           /> */}
//           {/* Twitter Card tags */}
//           {/* <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:creator" content={seo.social.twitter} />
//           /* <meta name="twitter:title" content={`ATA CPA | ${title}`} />
//           <meta name="twitter:description" content={description} />
//           <meta
//             name="twitter:image"
//             content={locations.better_featured_image.source_url}
//           /> */}
//         </Helmet>
//         <div
//           style={{
//             paddingTop: '94px',
//             backgroundColor: '#222',
//             color: '#fff',
//           }}
//         />
//         <>
//           <Particles
//             style={{
//               position: 'fixed',
//               top: 0,
//               zIndex: -1,
//             }}
//             params={{
//               particles: {
//                 number: {
//                   value: 80,
//                   density: {
//                     enable: true,
//                     value_area: 800,
//                   },
//                 },
//                 color: { value: '#000' },
//                 shape: {
//                   type: 'circle',
//                   stroke: {
//                     width: 0,
//                     color: '#000000',
//                   },
//                   polygon: { nb_sides: 5 },
//                   image: {
//                     src: 'img/github.svg',
//                     width: 100,
//                     height: 100,
//                   },
//                 },
//                 opacity: {
//                   value: 0.2,
//                   random: false,
//                   anim: {
//                     enable: false,
//                     speed: 1,
//                     opacity_min: 0.1,
//                     sync: false,
//                   },
//                 },
//                 size: {
//                   value: 3,
//                   random: true,
//                   anim: {
//                     enable: false,
//                     speed: 40,
//                     size_min: 0.1,
//                     sync: false,
//                   },
//                 },
//                 move: {
//                   enable: true,
//                   speed: 1,
//                   direction: 'none',
//                   random: false,
//                   straight: false,
//                   out_mode: 'out',
//                   bounce: false,
//                   attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200,
//                   },
//                 },
//               },
//               retina_detect: true,
//             }}
//           />
//           <Header>
//             <H1>
//               Design <span>• </span>Web <span>• </span>Software
//             </H1>
//           </Header>
//           <Section top noParticles>
//             <SubHeader>
//               <H1>ATA + Sodium Halogen Design</H1>
//               <P>
//                 Once your business is financially sound, it’s time to start
//                 growing. Many businesses don’t know where to start when they
//                 reach this point. We have partnered with Sodium Halogen to help
//                 your company create new digital tools to be more efficient and
//                 stand out in the market place.
//               </P>
//             </SubHeader>
//           </Section>
//           <Logos>
//             <ATALogo>
//               <img src={ATALogoImg} />
//             </ATALogo>
//             <span>
//               <P>+</P>
//             </span>
//             <SHLogo>
//               <img src={SHLogoImg} />
//             </SHLogo>
//           </Logos>
//           <Section container>
//             <H1>Work with Sodium Halogen</H1>
//             <P>
//               We can help you design and build apps, branding, websites, and
//               digital tools that will boost your bottom line
//             </P>
//           </Section>
//           <Section>
//             <ContentBlock>
//               <H1 alignLeft>Technology should solve problems.</H1>
//               <Ul>
//                 <li>Get rid of inefficiencies in your workflow.</li>
//                 <li>
//                   Improve your customer's user experience with your company.
//                 </li>
//                 <li>
//                   Create products and tools that get you noticed by your ideal
//                   customer.
//                 </li>
//               </Ul>
//               <H2 alt alignLeft>
//                 Sodium Halogen can help you design and build it.
//               </H2>
//             </ContentBlock>
//           </Section>
//           <Section container>
//             <H1>What you can achieve with Sodium Halogen:</H1>
//             <AchievementGrid>
//               <div>
//                 <AchievementIcon
//                   ref={this.achievementIcon}
//                   height={achievementIconHeight}
//                   src={BrandingIcon}
//                 />
//                 <H2>Brand Identity Design & Development</H2>
//                 <P>
//                   Create an entire brand identity system that helps you achieve
//                   your goals and works for your business
//                 </P>
//                 <P>
//                   Refine your company message to connect with how you solve your
//                   customer's problems
//                 </P>
//                 <P>
//                   Create marketing materials that are an extension of your
//                   overall brand
//                 </P>
//               </div>
//               <div>
//                 <AchievementIcon
//                   height={achievementIconHeight}
//                   src={SoftwareIcon}
//                 />
//                 <H2>Software Application Design & Development</H2>
//                 <P>
//                   Does your organization have internal processes that software
//                   could automate? Maybe you have an idea but don’t know how to
//                   make it happen?
//                 </P>
//                 <P>
//                   Our team can help you design and build it from start to
//                   finish.
//                 </P>
//               </div>
//               <div>
//                 <AchievementIcon height={achievementIconHeight} src={UXIcon} />
//                 <H2>Web & Interaction DesignUX/UI</H2>
//                 <P>
//                   Is your website or application not converting the way it
//                   should? Are users getting stuck or not understanding how to
//                   accomplish simple tasks?
//                 </P>
//                 <P>
//                   We use our Designtific Method to craft a product that your
//                   customers will love first and foremost.
//                 </P>
//               </div>
//               <div>
//                 <AchievementIcon height={achievementIconHeight} src={VRIcon} />
//                 <H2>Virtual Reality Design & Development</H2>
//                 <P>
//                   Got a crazy brilliant idea for how you can use virtual reality
//                   to accomplish your business goals? Sounds like our kind of
//                   crazy.
//                 </P>
//                 <P>
//                   We’ve built immersive experiences for the Oculus Rift and HTC
//                   Vive to help businesses like yours stand out.
//                 </P>
//               </div>
//             </AchievementGrid>
//             <FlexCenter>
//               <Button href="http://bit.ly/shform">Start your project</Button>
//             </FlexCenter>
//           </Section>
//           <Section container>
//             <H1>Our Process: The Designtific Method</H1>
//             <P>
//               Our Designtific Method focuses on solving your customers’ problems
//               while accomplishing your business goals.
//             </P>
//             <DesignAtom src={DesignAtomImg} alt="designtific molecule" />
//             <P>
//               Our small, multi-disciplinary team has spent the last 18 years
//               experimenting and refining our process for turning great ideas
//               into solid strategy and great digital products and experiences.
//             </P>
//           </Section>
//           {/* <VideoTestimonial>
//             <YoutubeIframe />
//             <QuoteContainer>
//               <QuoteComma>“</QuoteComma>
//               <P>
//                 you .......Lorem ipsum dolor sit amet, consectetuer adipiscing
//                 elit, sed diam nonummy nibh euismod lit, sed diam nonummy nibh
//                 euismod lit, sed diam nonummy nibh euismod ut laoreet
//               </P>
//               <P>- John Doe, President</P>
//             </QuoteContainer>
//           </VideoTestimonial> */}
//           <Section>
//             <H1>Over the past 18 years we've helped:</H1>
//             <CompanyLogoGrid>
//               <img src={PopVoxLogo} />
//               <img src={GELogo} />
//               <img src={VanderbiltLogo} />
//               <img src={NetworkForGoodLogo} />
//               <img src={IronIoLogo} />
//               <img src={EstateAssistLogo} />
//               <img src={HavenLogo} />
//               <img src={AllygnLogo} />
//               <img src={BypassLogo} />
//               <img src={ChickFilALogo} />
//               <img src={ZondaLogo} />
//               <img src={MarsLogo} />
//             </CompanyLogoGrid>
//             <FlexCenter>
//               <Button href="http://bit.ly/shform">Start your project</Button>
//             </FlexCenter>
//           </Section>
//           <Section>
//             {/* <FaqContainer>
//               <FaqDropdown header="How does it work?">
//                 <P>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//                   sollicitudin pretium dui eu cursus. Maecenas ultrices justo
//                   vitae augue egestas, vitae mattis dolor tristique. Cras ut
//                   mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
//                   sed mauris tempus, vitae placerat purus fringilla. Etiam
//                   ultrices tincidunt justo, sit amet dignissim nulla rhoncus
//                   non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
//                   orci aliquet. Phasellus eget elementum lorem. In hac habitasse
//                   platea dictumst.
//                 </P>
//               </FaqDropdown>
//               <FaqDropdown header="What kind of ROI can I expect?">
//                 <P>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//                   sollicitudin pretium dui eu cursus. Maecenas ultrices justo
//                   vitae augue egestas, vitae mattis dolor tristique. Cras ut
//                   mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
//                   sed mauris tempus, vitae placerat purus fringilla. Etiam
//                   ultrices tincidunt justo, sit amet dignissim nulla rhoncus
//                   non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
//                   orci aliquet. Phasellus eget elementum lorem. In hac habitasse
//                   platea dictumst.
//                 </P>
//               </FaqDropdown>
//               <FaqDropdown header="What kinds of services can I get? ">
//                 <P>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//                   sollicitudin pretium dui eu cursus. Maecenas ultrices justo
//                   vitae augue egestas, vitae mattis dolor tristique. Cras ut
//                   mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
//                   sed mauris tempus, vitae placerat purus fringilla. Etiam
//                   ultrices tincidunt justo, sit amet dignissim nulla rhoncus
//                   non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
//                   orci aliquet. Phasellus eget elementum lorem. In hac habitasse
//                   platea dictumst.
//                 </P>
//               </FaqDropdown>
//               <FaqDropdown header="How much will it cost?">
//                 <P>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//                   sollicitudin pretium dui eu cursus. Maecenas ultrices justo
//                   vitae augue egestas, vitae mattis dolor tristique. Cras ut
//                   mauris in urna lobortis mollis ut eu nunc. Sed suscipit risus
//                   sed mauris tempus, vitae placerat purus fringilla. Etiam
//                   ultrices tincidunt justo, sit amet dignissim nulla rhoncus
//                   non. Vestibulum aliquam ante vel ipsum dapibus, eu ultricies
//                   orci aliquet. Phasellus eget elementum lorem. In hac habitasse
//                   platea dictumst.
//                 </P>
//               </FaqDropdown>
//             </FaqContainer> */}
//           </Section>
//           <Section>
//             <ContentBlock flip>
//               <H1 alignLeft>Is Sodium Halogen right for you?</H1>
//               <P>
//                 The types of organizations that benefit most tend to be small to
//                 mid-sized, privately held organizations where:
//               </P>
//               <Ul>
//                 <li>The owner has been doing his/her own marketing</li>
//                 <li>
//                   There is little to no in-house marketing staff, or they’re
//                   struggling to keep pace
//                 </li>
//                 <li>
//                   The organization is faced with an issue that technology could
//                   solve, but doesn't have the means to resolve it
//                 </li>
//               </Ul>
//               <Button href="http://bit.ly/shform">Start your project</Button>
//             </ContentBlock>
//           </Section>
//           <CTA>
//             <H1>Your bottom-line called.</H1>
//             <P>It wants to know how our Designtific Method can help.</P>
//             <FlexCenter style={{ paddingTop: '50px' }}>
//               <Button href="http://bit.ly/shform">
//                 Tell us about your project
//               </Button>
//             </FlexCenter>
//           </CTA>
//           <YellowBar />
//         </>
//       </Layout>
//     )
//   }
// }

// export default SodiumHalogen

// // Set here the ID of the home page.
// export const pageQuery = graphql`
//   query {
//     allWordpressWpLocations(sort: { fields: [date] }) {
//       edges {
//         node {
//           title
//           slug
//           acf {
//             specialties {
//               post_name
//               post_title
//             }
//           }
//         }
//       }
//     }
//   }
// `
