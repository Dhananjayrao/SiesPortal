import React, { Component } from 'react';
import './Footer.css'
import {FaCopyright} from 'react-icons/fa'
function Footer (){
     
        return ( <div className={'container'}>
                <div className={'footertext'}><FaCopyright/> 2018 Copyright SIESGST</div>
                <div className={'footertext'}>Developed By Some People</div>
        </div> );
    
}
 
export default Footer;