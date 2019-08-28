import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import logo from '../logo.png'
// import '../stylesheets/nav.scss'
import '../stylesheets/main.scss'

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <img className='logo-main' src={logo} alt='glass moon tattoo'/>
        <div className='home-nav-links'>
          <Link className='nav-link' to={ '/' }> HOME </Link> |
          <Link className='nav-link' to={ '/about' }> ABOUT </Link> |
          <Link className='nav-link' to={ '/artists' }> ARTISTS </Link> |
          <Link className='nav-link' to={ '/contact' }> CONTACT </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(MainContainer)

//
// <div className="component">
//   <h1>full site coming soon k</h1>
//   <h3>carousel - ananas</h3>
//   <h3>location - g</h3>
//   <h3>contact info - g</h3>
//   <h3>form? - g</h3>
//   <h3>hours - g</h3>
//   <h1>style the whole thing - both?</h1>
//   <h4>then...</h4>
//   <p>artist pages</p>
//   <p>instagram</p>
//   <p>more styling</p>
//   <p>probably make a backend</p>
//   <p>store client info, figure out uploading IDs</p>
// </div>
