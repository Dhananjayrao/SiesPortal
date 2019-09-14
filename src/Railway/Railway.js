import React, { Component } from 'react';
import {FaTrain} from 'react-icons/fa'
import './Railway.css'
import Railwaycard from './Railwaycard/Railwaycard'
import Navigation from '../Main/Navbar/Navigation'
import Footer from '../Main/Footer/Footer'
import {Link} from "react-router-dom"
class Railway extends Component {
    state = { 
        status:[{from:'khandeshwar',class:'I',status:'Delivered'},
                {from:'Thane',class:'II',status:'Delivered'},
                {from:'Dombivli',class:'I',status:'Not Delivered'}]
     }
    render() { 
        return ( <div style={{height:"100vh"}}>
            <Navigation/>
            <div className={'allCourses'}>
              <div className={'Title5'}><FaTrain/> Railway Concession |</div>
              <div className={'Title6'}>Your Applications</div>
            </div>
          <Link to="/RAILWAYCONCESSION"><div className={'apply'}>Apply Now</div></Link>
          <div className={'railwayCards'}>
                {this.state.status.map(stat=><Railwaycard status={stat.status} from={stat.from} class={stat.class} />)}
          </div>  
         <Footer/> 
        </div> );
    }
}
 
export default Railway;