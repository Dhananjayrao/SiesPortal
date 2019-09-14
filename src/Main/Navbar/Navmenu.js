import React, { Component } from 'react';
import {FaHome,FaMale,FaBook,FaNewspaper,FaBuilding,FaTrain,FaLongArrowAltRight} from 'react-icons/fa'
import './Navmenu.css'
import {Link} from 'react-router-dom'

function Navmenu (props){ 
  let drawerClasses='navmenu';
  if (props.show){
          drawerClasses='navmenu open';
  }  
        return (<nav className={drawerClasses}>
                <div className={'Myprofile'}>
                <div className={'profileContent'}>
                        <div className={'letter1'}>d</div>        
                        <div className={'name'}>Dhananjaya Rao</div>
                        <div className={'name'}>dhananjaya.rao17@siesgst.ac.in</div>
                </div> 
                </div>
                <div>
                <ul>
                        <li><Link to="/Home"><FaHome/>Home</Link></li>
                        <li><Link to="/Profile"><FaMale/>Profile</Link></li>
                        <li><Link to="/Courses"><FaBook/>Courses</Link></li>
                        <li><Link to="/Examcell"><FaNewspaper/>Exam Cell</Link></li>
                        <li><Link to="/Office"><FaBuilding/>Office</Link></li>
                        <li><Link to="/Railway"><FaTrain/>Railway Concession</Link></li>
                        <li><Link to="/"><FaLongArrowAltRight/>Logout</Link></li>
                </ul>
                </div>
        </nav>  );

}
 
export default Navmenu;