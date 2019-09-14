import React, { Component } from 'react';
import './Footer.css'
import {FaCopyright} from 'react-icons/fa'
/*function Footer (){
     
        return ( <footer className={'container'}>
                <div className='footer text-center'><FaCopyright/> 2018 Copyright SIESGST</div>
                <div className='footer-text'>All rights reserved</div>
        </footer> );
    
}*/

function Footer (){
        return (<div>
                <div className="content">
                        <div className="content-inside">
                                2018 copyright SIESGST
                        </div>
                </div>
                <footer class="footer"></footer>
                </div>)
}
 
export default Footer;