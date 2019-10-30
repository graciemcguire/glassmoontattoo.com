import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'

export default class Contact extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <h3>CONTACT</h3>
        </div>
      </ Fragment>
    )
  }
}
