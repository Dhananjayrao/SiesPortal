import React from 'react';
import "./Body.css";
import Images from './Carousel/Carousel'
import {Link} from 'react-router-dom'
import Navigation from '../Main/Navbar/Navigation'
function Body(){
   return ( 
        <div>    
        <div className={"center1"}>
            <div className={"card1"}>
                <div className={"imglink"}>
                   <a href="https://play.google.com/store/apps/details?id=in.edu.siesgst.companion&hl=en"> <img style={{height:'90%',width:'50%',cursor:'pointer'}} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"></img></a>
                </div>
            <div className={"letter2"}>Welcome To SIESGST Portal</div>
            <div className={"para"}>Sign Up to SIES GST Portal with your GST Gmail Account
            to get college updates, railway concession, halltickets, results and other features.</div>
            <Images/>
           <div className={'buttons'}>
            <Link className={'bluebutton'} to="/Signin">Login</Link>
            <Link className={'bluebutton'} to="/Form" >Register</Link>
           </div>
            </div>
        </div>
        </div>

   )
}
export default Body;