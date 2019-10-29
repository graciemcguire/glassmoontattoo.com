import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import logo from '../logo.png'
// import '../stylesheets/main.scss'

class MainContainer extends Component {

  render() {
    console.log("Made with ❤️ by Gracie McGuire in 2019");
    console.log("github.com/graciemcguire 🏝");
    return (
      <div className="main-container">
        <img className='logo-main' src={logo} alt='glass moon tattoo'/>
        <div className='home-nav-links'>
          <Link className='nav-link' to={ '/' }> HOME </Link>
          <Link className='nav-link' to={ '/about' }> ABOUT </Link>
          <Link className='nav-link' to={ '/artists' }> ARTISTS </Link>
          <Link className='nav-link' to={ '/contact' }> CONTACT </Link>
        </div>

      </div>
    )
  }
}

export default withRouter(MainContainer)
