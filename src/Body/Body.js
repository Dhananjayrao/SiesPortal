import React from 'react';
import "./Body.css";
import Carousel from './Carousel/Carousel'


function Body(){
   return ( 
        
        <div className={"centering"}>
            <div className={"card"}>
                <div className={"imglink"}>
                    <img style={{height:'90%',width:'50%'}} src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"></img>
                </div>
            <div className={"letter1"}>Welcome To SIESGST Portal</div>
            <div className={"para"}>Sign Up to SIES GST Portal with your GST Gmail Account
            to get college updates, railway concession, halltickets, results and other features.</div>
            <Carousel/>
           <div className={'buttons'}>
            <div className={'button1'} >Login</div>
            <div className={'button1'} >Register</div>
           </div>
            </div>
        </div>


   )
}
export default Body;