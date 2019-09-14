import React, { Component } from 'react';
import './courses.css'
import {FaBook,FaArrowDown} from 'react-icons/fa'
import Navigation from '../Main/Navbar/Navigation'
import Footer from '../Main/Footer/Footer';
class Courses extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Navigation/>
            
            <div className={'parent'}>
            <div className={'allCourses'}>
              <div className={'Title1'}><FaBook/> Courses |</div>
              <div className={'Title2'}>All Courses</div>
            </div>
            <div className={'lists'}>
                <div className={'dropdown'}>
                <button className={'dropbtn'}>Branch    <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">Computer</a>
                        <a href="#">EXTC</a>
                        <a href="#">PPT</a>
                    </div>
                </div>    
                <div className={'dropdown'}>
                <button className={'dropbtn'}>Semester    <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                    </div>
                </div>
            </div>
            <img src="https://portal.siesgst.ac.in/assets/empty/empty_green.svg" className={'image'}></img>
            <div className={'Title1'}>There are no courses!</div>
            </div>
            <Footer/>    
        </div> );
    }
}
 
export default Courses;