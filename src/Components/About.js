import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'

export default class About extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <img className='about-image' src={`${process.env.PUBLIC_URL}/images/faq.jpg`} alt='glassmoontattoo'/>
          <h3>ABOUT</h3>
          <p className='about-text'>Glass Moon Tattoo is a women owned and operated private tattoo studio in Denver, Colorado. At Glass Moon we seek to provide a unique, comfortable space where everyone feels welcomed. We strive to design custom tattoos of the highest quality and provide clients with an experience they can enjoy for a lifetime. To inquire about booking an appointment please visit our Artist page. </p>
        </div>

        <div className= 'links'>
          <a href= "http://www.instagram.com/glassmoontattoo" target="_blank" rel="noopener noreferrer" >
            <img className='link-images' src={ instaLogo } alt='instagram'/>
          </a>

          <a href= "mailto:contact@glassmoontattoo.com" >
            <img className='link-images' src={ emailLogo } alt='email'/>
          </a>
        </div>
      </ Fragment>
    )
  }
}
