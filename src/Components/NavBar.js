import React, { Component } from 'react';
// import '../stylesheets/nav.scss'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div className='nav'>
        <h1>GLASS MOON TATTOO</h1>
        <div className='nav-links'>
            <Link className='nav-link' to={ '/' }> HOME </Link>|
            <Link className='nav-link' to={ '/about' }> ABOUT </Link>|
            <Link className='nav-link' to={ '/artists' }> ARTISTS </Link>|
            <Link className='nav-link' to={ '/faq' }> FAQ </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
