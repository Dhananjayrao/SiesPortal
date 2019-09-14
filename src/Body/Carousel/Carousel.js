import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

function Images () {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://portal.siesgst.ac.in/assets/redlocal.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://portal.siesgst.ac.in/assets/redlocal.png"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://portal.siesgst.ac.in/assets/redlocal.png"
      alt="Third slide"
    />
   </Carousel.Item>
</Carousel>    
  )
}

export default Images;