import React, { Component } from 'react';
import Navigation from '../Main/Navbar/Navigation'
import Footer from '../Main/Footer/Footer'
import './Examcell.css'
import {FaNewspaper,FaArrowDown} from 'react-icons/fa'
import Card from '../Main/Cards/Cardprop/Cardprop'
class Examcell extends Component {
    state = { 
        title:['Hall ticket Stamping'],
        content:['Dear Students, All the students of SE and TE are hereby informed that they can take the printout of their concern examination hall tickets']
     }
    render() { 
        return ( <div>
            <Navigation/>
            <div className={'allCourses'}>
              <div className={'Title1'}><FaNewspaper/> Ecell |</div>
              <div className={'Title3'}>Notices</div>
            </div>
            <div className={'lists'}>
                <div className={'dropdown'}>
                <button className={'dropbtn'}>Year    <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">All</a>
                        <a href="#">FE</a>
                        <a href="#">SE</a>
                        <a href="#">TE</a>
                        <a href="#">BE</a>
                    </div>
                </div>    
                <div className={'dropdown'}>
                <button className={'dropbtn'}>Branch    <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">CE</a>
                        <a href="#">PPT</a>
                        <a href="#">EXTC</a>
                        <a href="#">Mechanical</a>
                        <a href="#">IT</a>
                    </div>
                </div>
            </div>
            <Card cardContent={this.state.content} cardTitle={this.state.title}/>
        <Footer/>   
        </div> );
    }
}
 
export default Examcell;