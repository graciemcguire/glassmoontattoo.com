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
            <li>about</li>
            <li>artists</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
    )
  }
}
