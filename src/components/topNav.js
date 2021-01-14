// import React from 'react'
// import { DropdownButton, MenuItem } from 'react-bootstrap'
// import styled from 'styled-components'
// import { oneOfType, array, object } from 'prop-types'

// const NavMenu = styled.ul`
//   .open > a {
//     background: hsla(0, 0%, 100%, 0.1) !important;
//     color: #fff !important;
//     border-color: transparent !important;
//   }
// `

// const NavDropdown = styled(DropdownButton)`
//   color: #eee;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   font-size: 16px !important;
//   line-height: 20px !important;
//   padding-top: 15px !important;
//   padding-bottom: 15px !important;
//   background: transparent !important;
//   color: #eee !important;
//   border: none !important;
//   &:hover {
//     color: #fff !important;
//   }
// `

// const NavMenuItem = styled(MenuItem)`
//   color: #777 !important;
// `

// const NavLi = styled.li`
//   &:hover {
//     a {
//       &:after {
//         position: absolute;
//         height: 1px;
//         margin: 0 auto;
//         content: '';
//         left: 0;
//         right: 0;
//         width: 78%;
//         color: #000;
//         background-color: #fff;
//         bottom: 12px;
//       }
//     }
//   }
// `

// // The navbar for the entire site
// class TopNav extends React.Component {
//   constructor(props, context) {
//     super(props, context)

//     this.state = {
//       background: 0,
//       origin: '',
//       path: '',
//     }
//   }

//   listenScrollEvent = e => {
//     if (window.scrollY > 200) {
//       this.setState({ background: 1 })
//     } else {
//       this.setState({ background: 0 })
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.listenScrollEvent)
//     this.setState({ origin: window.location.origin })
//     this.setState({ path: window.location.pathname.split('/')[1] })
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.listenScrollEvent)
//   }

//   render() {
//     return (
//       <nav
//         className="navbar navbar-trn navbar-fixed-top"
//         role="navigation"
//         id="navbarSettings"
//         style={
//           this.state.background
//             ? {
//                 backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                 boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 5px',
//               }
//             : {
//                 backgroundColor: 'transparent',
//                 boxShadow: 'none',
//               }
//         }
//       >
//         <div className="container">
//           <div className="navbar-header">
//             <button
//               type="button"
//               className="navbar-toggle"
//               data-toggle="collapse"
//               data-target="#bs-navbar-collapse-1"
//             >
//               <span className="sr-only">Toggle navigation</span>
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//             <a className="navbar-brand" href="https://www.atacpa.net/">
//               ATA
//             </a>
//           </div>

//           <div id="bs-navbar-collapse-1" className="collapse navbar-collapse">
//             <NavMenu id="menu-header" className="nav navbar-nav navbar-right">
//               {this.props.items.map(
//                 ({
//                   title,
//                   url,
//                   wordpress_id,
//                   wordpress_children,
//                   object_slug,
//                 }) => (
//                   <NavLi
//                     key={wordpress_id}
//                     id={`menu-item-${wordpress_id}`}
//                     className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-${wordpress_id} dropdown`}
//                   >
//                     {url === '' || url === 'http://#' ? (
//                       <NavDropdown
//                         title={title.toUpperCase()}
//                         noCaret
//                         href="#"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         id={wordpress_id}
//                       >
//                         {wordpress_children.map(
//                           ({ title, url, wordpress_id }) => (
//                             (object_slug === 'services' ||
//                               object_slug === 'who-we-serve') &&
//                             this.state.path !== 'sodium-halogen'
//                               ? (url = url.replace(
//                                   'http://atacpa.net',
//                                   `${this.state.origin}/${this.state.path}`
//                                 ))
//                               : null,
//                             (
//                               <NavMenuItem
//                                 key={wordpress_id}
//                                 id={`menu-item-${wordpress_id}`}
//                                 className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${wordpress_id}`}
//                                 title={title}
//                                 href={url}
//                               >
//                                 {title.replace('#038;', '')}
//                               </NavMenuItem>
//                             )
//                           )
//                         )}
//                       </NavDropdown>
//                     ) : (
//                       <a
//                         title={title}
//                         href={url}
//                         data-toggle="dropdown"
//                         className="dropdown-toggle"
//                         aria-haspopup="true"
//                       >
//                         <span>{title}</span>
//                       </a>
//                     )}
//                   </NavLi>
//                 )
//               )}
//             </NavMenu>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

// TopNav.propTypes = {
//   items: oneOfType([array, object]).isRequired,
// }

// export default TopNav
