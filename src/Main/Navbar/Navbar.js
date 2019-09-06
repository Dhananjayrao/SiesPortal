import React, { Component } from 'react';
import './Navbar.css'
import {FaList} from 'react-icons/fa'
import { tsPropertySignature } from '@babel/types';
function Navbar(props){
return (<div className={'mainnav'}>
            <a className={'navbutton'} onClick={props.drawerClickHandler}><FaList /></a>
            <div className={'text'}>SIESGST Portal</div>
        </div>
)
}

export default Navbar;