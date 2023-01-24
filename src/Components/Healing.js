import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import instaLogo from "../insta.svg";
import emailLogo from "../email.svg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default class Healing extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="about-section">
          <img
            className="about-image"
            src={`${process.env.PUBLIC_URL}/images/faq.jpg`}
            alt="glassmoontattoo"
          />
          <h3>TATTOO HEALING</h3>
        </div>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="faq">
                  Healing a tattoo with second-skin/saniderm bandage
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-panel-healing">
              <ul className="faq-a">
                <li>
                  If you are healing your tattoo with second-skin (tegaderm,
                  saniderm) you can leave this bandage on for 4 to 5 days as
                  long as it is fully sealed and has no leakage. Fluid build up
                  under the bandage is normal and actually aids the healing
                  process but if it leaks out of the bandage, the bandage should
                  be removed.
                </li>
                <br/>

                <li>
                  After the 4-5 days remove the second skin when you are in the
                  shower, clean the tattoo with soapy water (Dr. Bronner’s soap
                  preferred) and let the tattoo dry completely. With clean
                  hands, apply a layer of unscented lotion to the tattoo and rub
                  it all the way in.
                </li>
                <br/>

                <li>
                  Continue to apply lotion 2-3 times throughout the day as it
                  feels dry.
                </li>
                <br/>

                <li>
                  Wash your tattoo again at night, let dry and apply lotion.
                </li>
                <br/>

                <li>
                  Repeat this process for the following 1.5 weeks or until the
                  tattoo is healed (feels like regular skin again).
                </li>
                <br/>

                <li>
                  Do not at any point expose your healing tattoo to direct
                  sunlight, if you plan to be in the sun make sure to keep your
                  tattoo fully covered.
                </li>
                <br/>

                <li>
                  Do not submerge your tattoo in any bodies of water (hot-tub,
                  lake, ocean, pool) until it is fully healed.
                </li>
                <br/>

                <li>
                  Never touch your tattoo with dirty hands, keep your pets and
                  pet dander away from a fresh tattoo.
                </li>
                <br/>

                <li>
                  If your tattoo scabs at all do not pick at the scabs as it
                  will remove the pigment, scabs will heal on their own and
                  retain pigment if they are not messed with.
                </li>
                <br />
                
                <li>
                  You will know your tattoo is fully healed when it feels flush
                  with your skin again.
                </li>
                <br />
                
                <li>
                  If at any point you feel like your tattoo has become infected
                  please reach out to your artist and seek medical attention
                  immediately.
                </li>
                <br />
                
                <p className="about-text">
                  If at any point you have any questions please ask your artist
                  before you ask google!
                </p>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p className="faq">
                  Healing a tattoo without second-skin/saniderm bandage
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-panel-healing">
              <ul className="faq-a">
                <li>
                  If you are healing your tattoo without second skin, leave the
                  bandage on for 4-6 hours post tattoo, remove the bandage and
                  wash your tattoo gently with soapy water let tattoo dry out
                  all the way (you may use a dry, clean paper towel) apply a
                  thin layer of aquaphor and rub it in all the way, please do
                  not smother your tattoo!
                </li>
                <br/>

                <li>
                  Wash your tattoo 3 times a day for the following 5 days and
                  apply a thin layer of aquaphor once the tattoo has dried each
                  time. After those 5 days switch to washing your tattoo morning
                  and night and applying a thin layer of unscented lotion to the
                  tattoo throughout the day 2-3 times as it feels dry.
                </li>
                <br/>

                <li>
                  Do not at any point expose your healing tattoo to direct
                  sunlight, if you plan to be in the sun make sure to keep your
                  tattoo fully covered.
                </li>
                <br/>

                <li>
                  Do not submerge your tattoo in any bodies of water (hot-tub,
                  lake, ocean, pool) until it is fully healed.
                </li>
                <br/>

                <li>
                  Never touch your tattoo with dirty hands, keep your pets and
                  pet dander away from a fresh tattoo.
                </li>
                <br/>

                <li>
                  If your tattoo scabs at all do not pick at the scabs as it
                  will remove the pigment, scabs will heal on their own and
                  retain pigment if they are not messed with.
                </li>
                <br/>

                <li>
                  You will know your tattoo is fully healed when it feels flush
                  with your skin again.
                </li>
                <br/>

                <li>
                  If at any point you feel like your tattoo has become infected
                  please reach out to your artist and seek medical attention
                  immediately.
                </li>
                <br />
                
                <p className="about-text">
                  If at any point you have any questions please ask your artist
                  before you ask google!
                </p>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <div className="links">
          <a
            href="http://www.instagram.com/glassmoontattoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="link-images" src={instaLogo} alt="instagram" />
          </a>

          <a href="mailto:contact@glassmoontattoo.com">
            <img className="link-images" src={emailLogo} alt="email" />
          </a>
        </div>
      </Fragment>
    );
  }
}
