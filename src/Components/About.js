import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'

export default class About extends Component {
  render(){
    return(
      <Fragment >
        <NavBar />
        <div className='about-section'>
          <img className='about-image' src='../images/about.jpg'/>
          <h3>ABOUT</h3>
          <p className='about-text'>De possumus arbitrantur o ex si velit elit ipsum. Noster voluptate ut
            imitarentur ita id aute mentitum. Legam proident sempiternum, iis ullamco
            coniunctione ea excepteur se cillum voluptate, magna id appellat in o et amet
            ingeniis, ab export pariatur sempiternum, legam nam vidisse si nescius legam
            velit quamquam tamen.Et fore eruditionem ex excepteur cillum ex appellat
            coniunctione. Quo esse transferrem, ea si reprehenderit, admodum do multos, iis
            id tamen culpa quid, pariatur cillum est offendit reprehenderit ab commodo quid
            legam excepteur multos, incurreret enim iis arbitror comprehenderit, fore
            voluptate an comprehenderit. Sint excepteur e praetermissum, quis cohaerescant
            singulis export laborum, elit probant cohaerescant, pariatur ita sint. Deserunt
            eruditionem o constias ab nam noster mentitum litteris, elit probant te
            relinqueret, iudicem ipsum probant quamquam.    </p>
        </div>
      </ Fragment>
    )
  }
}
