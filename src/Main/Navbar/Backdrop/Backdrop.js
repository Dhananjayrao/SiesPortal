import React, { Component } from 'react';
import './Backdrop.css'
import { tsPropertySignature } from '@babel/types';
function Backdrop(props) {
    
     
        return ( 
            <div className={'backdrop'} onClick={props.click}></div>
         );
    
    
    }
export default Backdrop;