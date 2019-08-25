import React, { Component } from 'react';
import '../stylesheets/nav.scss'

export default class NavBar extends Component {

  render() {
    return (
      <div className='nav'>
        <h1 className='logo'>glass moon tattoo</h1>
        <h2 className='denver'>Denver, CO</h2>
        <div>
          <ul className='nav-links'>
            <li className='nav-link'>about</li>
            <li className='nav-link'>artists</li>
            <li className='nav-link'>contact us</li>
          </ul>
        </div>
      </div>
    )
  }
}
