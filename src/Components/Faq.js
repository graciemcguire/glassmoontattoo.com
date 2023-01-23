import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'
import instaLogo from '../insta.svg'
import emailLogo from '../email.svg'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default class Faq extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <img className='about-image' src={`${process.env.PUBLIC_URL}/images/faq.jpg`} alt='glassmoontattoo'/>
          <h3>FAQ</h3>

        </div>
        <Accordion>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                  <p className='faq'>Where are you located?</p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='accordion-panel' className='accordion-panel'>
              <p className='faq-a'>
                1151 S. Huron St, Denver CO, 80223
              </p>
            </AccordionItemPanel>
          </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <p className='faq'>Do you take walk-ins?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  Our studio is appointment only and we do not take walk-ins, we do have flash events a few times a year where we offer discounted flash-tattoos on a first-come first-serve basis.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <p className='faq'>What are your hours?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                Because Glass Moon is an appointment only studio we do not have set hours; while our schedules are somewhat consistent they tend to vary a bit week to week and we cannot guarantee that an artist will be present in the shop if you do not have an appointment.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <p className='faq'>How much will my tattoo cost?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  The cost of the tattoo will vary depending on your artist, the size of the tattoo, the placement on the body, and the complexity of the design.  For some projects artists will charge by the hour and for others they will provide a flat price.  Each artist sets their own prices and will happily discuss your budget and the expected price prior to the tattoo.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <p className='faq'>Are deposits required?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  All tattoos require a non-refundable deposit, the deposit amount varies by artist.  We require 48-hour notice to reschedule and retain your deposit. Deposits go toward the final price of your tattoo.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                    <p className='faq'>How old do you have to be to get tattooed?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  Glass Moon is a strictly 18+ studio.  We do not tattoo anyone under the age of 18 with or without parental permission.  We do require ID prior to getting tattooed.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className='faq'>How can I make an appointment?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  Our artists do all of their own booking, please visit our artist page to find out more about how each artist prefers to do their booking.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className='faq'>Can I bring my friends with me to my appointment?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  While we understand that getting a new tattoo is a very exciting experience we ask that you bring no more than one friend along with you to your appointment.  Our studio is quite small and we want to ensure everyone is comfortable.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className='faq'>Will you tattoo my neck/face/hands?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  We will generally only tattoo the neck, face, or hands of those who are heavily tattooed.  We take tattooing these highly visible places very seriously and want to ensure clients have a lot of experience being tattooed before committing to these parts of the body.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <p className='faq'>Do you take on all tattoo projects/ideas?</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className='accordion-panel'>
                <p className='faq-a'>
                  Our artists reserve the right to accept or refuse projects at their own discretion.  We encourage our artists to pursue projects that align with their artistic vision which means your project may not always be accepted.  If an artist declines your project we are happy to recommend another artist in town whose work more consistently aligns with your idea.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

        </Accordion>

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
