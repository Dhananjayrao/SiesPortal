import React, { Component } from 'react';
import './Main.css'
import {FaHome} from 'react-icons/fa'
import Cards from '../Main/Cards/Cards'
import Footer from './Footer/Footer'
import Navigation from './Navbar/Navigation'
class Main extends Component {
   render() {
    return ( 
    <div >
    <Navigation/>
    <div className={'home'}><FaHome/> Home</div>
    <Cards/>
    <Footer/>
    </div> );
  }
}
 
export default Main;