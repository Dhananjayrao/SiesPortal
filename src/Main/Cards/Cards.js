import React, { Component } from 'react';
import Card from './Cardprop/Cardprop';
class Cards extends Component {
    
    
        state = {  
        cardContent:[
            {title:"Technical Team - Coordinators Selection", 
            content: "Hello Gstians, Ever wanted to work on drones and robots? Build App or Website that thousands of students"},
            {title:"The GST Gazette - Vol II Issue VII",
             content:"Greetings! We're back with the second edition of this semester's GST Gazette. The theme of this Gazette is "},
            {title:"ByteCamp '19",         
            content: "The student council of our college is back with its annual hackathon ByteCamp. This hackathon is open for all"}]
                        
        }   
 
    render() { 
        return (
             <div >  
            <div>
                {this.state.cardContent.map(con => <Card cardContent={con.content} cardTitle={con.title}  />  )}
            </div>
            </div>
        );
    }

} 
export default Cards;