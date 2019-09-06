import React, { Component } from 'react';
import './Carousel.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Carousel (){
   return ( 
    <AwesomeSlider>
    <div  data-src="https://react-slideshow.herokuapp.com/images/slide_7.jpg" />
    <div data-src="https://react-slideshow.herokuapp.com/images/slide_6.jpg" />
    <div data-src="https://react-slideshow.herokuapp.com/images/slide_5.jpg" />
  </AwesomeSlider>
    )
}
   
export default Carousel;