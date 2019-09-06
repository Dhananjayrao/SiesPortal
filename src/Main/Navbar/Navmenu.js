import React, { Component } from 'react';
import {FaHome,FaMale,FaBook,FaNewspaper,FaBuilding,FaTrain,FaLongArrowAltRight} from 'react-icons/fa'
import './Navmenu.css'
function Navmenu (props){ 
  let drawerClasses='navmenu';
  if (props.show){
          drawerClasses='navmenu open';
  }  
        return (<nav className={drawerClasses}>
                <div className={'Myprofile'}>
                <div className={'profileContent'}>
                        <div className={'letter1'}>D</div>        
                        <div className={'name'}>Dhananjaya Rao</div>
                        <div className={'name'}>dhananjaya.rao17@siesgst.ac.in</div>
                </div> 
                </div>
                <div>
                <ul>
                        <li><a href="/"><FaHome/>Home</a></li>
                        <li><a href="/"><FaMale/>Profile</a></li>
                        <li><a href="/"><FaBook/>Courses</a></li>
                        <li><a href="/"><FaNewspaper/>Exam Cell</a></li>
                        <li><a href="/"><FaBuilding/>Office</a></li>
                        <li><a href="/"><FaLongArrowAltRight/>Logout</a></li>
                </ul>
                </div>
        </nav>  );

}
 
export default Navmenu;