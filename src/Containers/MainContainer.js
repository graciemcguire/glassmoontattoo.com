import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import logo from '../logo.png'
// import '../stylesheets/main.scss'

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <img className='logo-main' src={logo} alt='glass moon tattoo'/>
        <div className='home-nav-links'>
          <Link className='nav-link' to={ '/about' }> ABOUT </Link>
          <Link className='nav-link' to={ '/artists' }> ARTISTS </Link>
          <Link className='nav-link' to={ '/healing' }> HEALING </Link>
          <Link className='nav-link' to={ '/faq' }> FAQ </Link>
        </div>

      </div>
    )
  }
}

export default withRouter(MainContainer)
