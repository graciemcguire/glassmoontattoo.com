import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'
import AccordianSection from './AccordianSection.js'

export default class Faq extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <AccordianSection />
        <div className='about-section'>
          <img className='about-image' src={`${process.env.PUBLIC_URL}/images/faq.jpg`} alt='glassmoontattoo'/>
          <h3>FAQ</h3>
          <p className='about-text'>Where are you located?</p>
          <p className='about-text'>1151 s Huron st, Denver CO, 80223</p>

          <p className='about-text'>Do you take walk-ins?</p>
          <p className='about-text'>Our studio is appointment only and we do not take walk-ins, we do have flash events a few times a year where we offer discounted flash-tattoos on a first-come first-serve basis.</p>

          <p className='about-text'>What are your hours?</p>
          <p className='about-text'>Because Glass Moon is an appointment only studio we do not have set hours; while our schedules are somewhat consistent they tend to vary a bit week to week and we cannot guarantee that an artist will be present in the shop if you do not have an appointment.</p>

          <p className='about-text'>How much will my tattoo cost?</p>
          <p className='about-text'>The cost of the tattoo will vary depending on your artist, the size of the tattoo, the placement on the body, and the complexity of the design.  For some projects artists will charge by the hour and for others they will provide a flat price.  Each artist sets their own prices and will happily discuss your budget and the expected price prior to the tattoo.</p>

          <p className='about-text'>Are deposits required?</p>
          <p className='about-text'>All tattoos require a non-refundable deposit, the deposit amount varies by artist.  We require 48-hour notice to reschedule and retain your deposit. Deposits go toward the final price of your tattoo.</p>

          <p className='about-text'>How old do you have to be to get tattooed?</p>
          <p className='about-text'>Glass Moon is a strictly 18+ studio.  We do not tattoo anyone under the age of 18 with or without parental permission.  We do require ID prior to getting tattooed.</p>

          <p className='about-text'>How can I make an appointment?</p>
          <p className='about-text'>Our artists do all of their own booking, please visit our artist page to find out more about how each artist prefers to do their booking.</p>

          <p className='about-text'>Can I bring my friends with me to my appointment?</p>
          <p className='about-text'>While we understand that getting a new tattoo is a very exciting experience we ask that you bring no more than one friend along with you to your appointment.  Our studio is quite small and we want to ensure everyone is comfortable.</p>

          <p className='about-text'>Will you tattoo my neck/face/hands?</p>
          <p className='about-text'>We will generally only tattoo the neck, face, or hands of those who are heavily tattooed.  We take tattooing these highly visible places very seriously and want to ensure clients have a lot of experience being tattooed before committing to these parts of the body.</p>

          <p className='about-text'>Do you take on all tattoo projects/ideas?</p>
          <p className='about-text'>Our artists reserve the right to accept or refuse projects at their own discretion.  We encourage our artists to pursue projects that align with their artistic vision which means your project may not always be accepted.  If an artist declines your project we are happy to recommend another artist in town whose work more consistently aligns with your idea.</p>

          <p className='about-text'>How do I heal my tattoo and how long does it take?</p>
          <ul>
          <li>If you are healing your tattoo with second skin (tegaderm, saniderm) you can leave this bandage on for 3 to 4 days as long as it is fully sealed and has no leakage.  Fluid build up under the bandage is normal but if it leaks out of the bandage the bandage should be removed.</li>
          <li>After the 3-4 days remove the second skin when you are in the shower, clean the tattoo with soapy water (dr. Bronner’s soap preferred) and let the tattoo dry completely.  Apply a layer of unscented lotion to tattoo and rub it all the way in.</li>
          <li>Continue to apply lotion 2-3 times throughout the day</li>
          <li>Wash your tattoo again at night, let dry and apply lotion.</li>
          <li>Repeat this process for the following 1.5 weeks or until the tattoo is healed (feels like regular skin again)</li>
          <li>If you are healing your tattoo without second skin, leave the bandage on for 4-6 hours post tattoo, remove the bandage and wash your tattoo gently with soapy water let tattoo dry out all the way (you may use a dry, clean paper towel) apply a thin layer of aquaphor and rub it in all the way, please do not smother your tattoo!</li>
          <li>Wash your tattoo 3 times a day for the following 5 days and apply a thin layer of aquaphor once the tattoo has dried each time. after those 5 days you should switch to unscented lotion  and follow on from step 3 in this list.</li>
          <li>Never touch your tattoo with dirty hands, keep your pets and pet dander away from a fresh tattoo, do not go in a hot tub, pool or ANY bodies of water while it is healing.</li>
          <li>If your tattoo scabs at all do not pick at the scabs as it will remove the pigment, scabs will heal on their own and retain pigment if they are not messed with.</li>
          </ul>
          <p className='about-text'>If at any point you have any questions please ask your artist before you ask google!</p>
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
