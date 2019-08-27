import React, { Component, Fragment } from 'react';
import '../stylesheets/nav.scss'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div className='nav'>
        <h1 className='logo'>glass moon tattoo</h1>
        <h2 className='denver'>Denver, CO</h2>
        <div>
          <div className='nav-links'>
            <Link className='nav-link' to={ '/' }> HOME </Link>
            <Link className='nav-link' to={ '/about' }> ABOUT </Link>
            <Link className='nav-link' to={ '/artists' }> ARTISTS </Link>
            <Link className='nav-link' to={ '/contact' }> CONTACT </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
