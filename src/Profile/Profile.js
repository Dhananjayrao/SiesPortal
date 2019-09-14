import React, { Component } from 'react';
import Navigation from "../Main/Navbar/Navigation"
import {FaInfo,FaPhone,FaHome,FaBirthdayCake,FaLink,FaStar} from 'react-icons/fa'
import './Profile.css'
import Comp from './Comp'
import Footer from '../Main/Footer/Footer'
import {Link} from 'react-router-dom'

class Profile extends Component {
    state = { 
        Account:[{
            logo:<FaInfo/>,
            title:"About",
            answer:"Yes"
        },{
            logo:<FaPhone/>,
            title:"Contact",
            answer:"654551238"
        },{
            logo:<FaHome/>,
            title:"Address",
            answer:"C-103,xoxo apt, la cal"
        },{
            logo:<FaBirthdayCake/>,
            title:"DOB",
            answer:"22/07/1999"
        },{
            logo:<FaLink/>,
            title:"Links",
            answer:"ok"
        },{
            logo:<FaStar/>,
            title:"Interests",
            answer:"None"
        }]
     }
    render() { 
        return ( 
            <div>
            <Navigation/>
            <div className={'profileCard'}>
                <div className={'profileImage'}>
                    <div className={'profileLetter'}>d</div>
                </div>    
                <div className={'profileDetails'}>
                    <div className={'primaryInfo'}>
                    <div className={'profileText'}>Dhananjaya Rao</div>
                    <div className={'profileText'}>TE</div>
                    <div className={'profileText'}>CE</div>    
                    <div className={'profileText'}>D</div>    
                    </div>    
                    <div className={'primaryInfo'}>
                        <div className={'subtext'}>dhananjaya.rao17@siesgst.ac.in</div>
                        <div className={'subtext'}>Year</div>
                        <div className={'subtext'}>Branch</div>
                        <div className={'subtext'}>Division</div>
                    </div>
                    <Link to="/Form"><div className={'updateButton'}>Update Profile</div></Link>
                    <div className={'profileInfo'}>
                        {this.state.Account.map(ind=><Comp logo={ind.logo} title={ind.title} answer={ind.answer}/>)}
                    </div>    
                </div>    
            </div>
            <Footer/>
        </div>
     
    
         );
    }
}
 
export default Profile;