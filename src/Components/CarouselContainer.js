import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

class CarouselContainer extends Component {

  render() {
    return (
      <div>
      <Carousel autoPlay showArrows infiniteLoop className="carousel-container">
              <div>
                  <img src={img1} alt="img1"/>
                  <p className="legend">what a ladie</p>
              </div>
              <div>
                  <img src={img2} alt="img2"/>
                  <p className="legend">hydrangea?</p>
              </div>
              <div>
                  <img src={img3} alt="img3"/>
                  <p className="legend">le bisou de la lune</p>
              </div>
          </Carousel>
      </div>
    );
  }

}

export default CarouselContainer;
