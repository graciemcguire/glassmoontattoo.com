import React, { Component } from 'react';
import NavBar from '../Components/NavBar'
import CarouselContainer from '../Components/CarouselContainer'

export default class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <CarouselContainer/>
        <div className="component">
          <h1>full site coming soon k</h1>
          <h3>carousel - ananas</h3>
          <h3>location - g</h3>
          <h3>contact info - g</h3>
          <h3>form? - g</h3>
          <h3>hours - g</h3>
          <h1>style the whole thing - both?</h1>
          <h4>then...</h4>
          <p>artist pages</p>
          <p>instagram</p>
          <p>more styling</p>
          <p>probably make a backend</p>
          <p>store client info, figure out uploading IDs</p>
        </div>
      </div>
    )
  }
}
