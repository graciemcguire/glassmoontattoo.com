import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'

export default class Faq extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <img className='about-image' src={`${process.env.PUBLIC_URL}/images/faq.jpg`} alt='glassmoontattoo'/>
          <h3>FAQ</h3>
          <p className='about-text'>De possumus arbitrantur o ex si velit elit ipsum. Noster voluptate ut
            imitarentur ita id aute mentitum. Legam proident sempiternum, iis ullamco
            coniunctione ea excepteur se cillum voluptate, magna id appellat in o et amet
            ingeniis.</p>
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
