import React, { Component } from 'react';
import Navbar from './Navbar';
import Navmenu from './Navmenu'
import Backdrop from './Backdrop/Backdrop'

class Navigation extends Component {
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
    <div >
    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <Navmenu show={this.state.sideDrawerOpen}/>     {/* change for navmenu*/ }
    {backDrop}
   
    </div> );
  }
}
 
export default Navigation;