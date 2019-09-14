import React, { Component } from 'react';
import './Railwaycard.css'
class Railwaycard extends Component {
    color={
        backgroundColor:"#4caf50"
    }
    render() { 
         if (this.props.status==='Not Delivered'){
             this.color.backgroundColor="#f44336"
         }
        
        return ( 
        <div className={'mainCard'}>
            <img src={"https://portal.siesgst.ac.in/assets/redlocal.png"} className={'trainimg'}></img>
            <div className={'infoCard'}>
                <div className={'railwayText'}><strong>From</strong>: {this.props.from}</div>
                <div className={'railwayText'}><strong>To</strong>: Nerul</div>
                <div className={'railwayText'}><strong>Class</strong>: {this.props.class}</div>
                <div className={'railwayText'}><strong>Period</strong>: Quarterly</div>
            </div>
            <div className={'statusdiv'} style={this.color}>
              <div className={'statusText'}>  {this.props.status} </div>
            </div>
        </div> );
    }
}
 
export default Railwaycard;