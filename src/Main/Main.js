import React, { Component } from 'react';
import './Main.css'
import {FaHome} from 'react-icons/fa'
import Navbar from '../Main/Navbar/Navbar';
import Navmenu from './Navbar/Navmenu'
import Cards from '../Main/Cards/Cards'
import Footer from './Footer/Footer'
import Backdrop from './Navbar/Backdrop/Backdrop'

class Main extends Component {
  state={
    sideDrawerOpen:false
  }
  
  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler=()=>{
    this.setState({sideDrawerOpen:false})
  }

  render() { 
    
    let backDrop; 
    if(this.state.sideDrawerOpen) {
        backDrop=<Backdrop click={this.backdropClickHandler}/>;
    } 
    return ( 
    <div style={{height:'100vh'}}>
    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <Navmenu show={this.state.sideDrawerOpen}/>     {/* change for navmenu*/ }
    {backDrop}
    <div className={'home'}><FaHome/> Home</div>
    <Cards/>
    <Footer/>
    </div> );
  }
}
 
export default Main;