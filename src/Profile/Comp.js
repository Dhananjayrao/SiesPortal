import React, { Component } from 'react';
import './Comp.css'

class Comp extends Component {
        render() { 
        return ( 
            
            <div className={"component"}>
                <div className={"innerComponent"}>
                    <div>{this.props.logo}</div>
                    <div className={'compText'}>{this.props.title}</div>
                </div>
                <div className={'compText'}>{this.props.answer}</div>
            </div>
            
         );
    }
}
 
export default Comp;