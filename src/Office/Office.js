import React, { Component } from 'react';
import Navigation from '../Main/Navbar/Navigation'
import {FaBuilding,FaArrowDown} from 'react-icons/fa'
import Card from '../Main/Cards/Cardprop/Cardprop'
import Footer from '../Main/Footer/Footer'
import './Office.css' 
class Office extends Component {
    state = {  
        cardContent:[
            {title:"Technical Team - Coordinators Selection", 
            content: "Hello Gstians, Ever wanted to work on drones and robots? Build App or Website that thousands of students"},
            {title:"The GST Gazette - Vol II Issue VII",
             content:"Greetings! We're back with the second edition of this semester's GST Gazette. The theme of this Gazette is "},
            {title:"ByteCamp '19",         
            content: "The student council of our college is back with its annual hackathon ByteCamp. This hackathon is open for all"},
            {title:"GSTians Developers Program (GDP) - Interviews",         
            content: "The GSTians Developers Program (GDP) conducted by the Technical Team..."},
            {title:"Notice",         
            content: "Invitation - Republic Day"}]
                        
        }
    render() { 
        return ( <div>
             <Navigation/>
            <div className={'allCourses'}>
              <div className={'Title7'}><FaBuilding/> Office |</div>
              <div className={'Title8'}>General Notices</div>
            </div>
            <div className={'lists'}>
            <div className={'dropdown'}>
                <button className={'dropbtn'}>Year   <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">FE</a>
                        <a href="#">SE</a>
                        <a href="#">TE</a>
                        <a href="#">BE</a>
                    </div>
                </div>
                <div className={'dropdown'}>
                <button className={'dropbtn'}>Branch    <FaArrowDown/></button>
                    <div className={'dropdown-content'}>
                        <a href="#">Computer</a>
                        <a href="#">EXTC</a>
                        <a href="#">PPT</a>
                        <a href="#">IT</a>
                        <a href="#">Mechanical</a>
                    </div>
                </div>    
                
            </div>
            <div>
                {this.state.cardContent.map(con => <Card cardContent={con.content} cardTitle={con.title}  />  )}
            </div>
            <Footer/>
            
        </div> );
    }
}
 
export default Office;