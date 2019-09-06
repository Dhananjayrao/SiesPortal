import React, { Component } from 'react';
import './Cardprop.css'
import {FaSistrix, FaArrowDown,FaClock} from 'react-icons/fa'
class Card extends Component {

    red={
        backgroundColor:"#f44336" 
    }
    blue={
        backgroundColor:"#2196F3"
    }
    d=Date();
    render() { 
        return ( 
            <div className={'cardprop'}>
                <div>                   {/*upper layer above border*/}
                <div className={'title'}>{this.props.cardTitle}</div>
                <div className={'buttonoffice'}>Office</div>
                <div className={'longtext'}>{this.props.cardContent}</div>
                <div className={'allbut'}>
                    <div className={'date'}><FaClock/> {this.d.toString()}</div>
                    <div className={'button2'} style={this.red}>All</div>
                    <div className={'button2'} style={this.blue}>All</div>
                </div>
                </div>
                <div className={"icons"}>                   {/*lower layer below border*/}
                <div className={'innericon'}> <FaSistrix/> View</div>
                <div className={'innericon'}> <FaArrowDown/> Download</div>
                </div>
            </div>
         );
    }
}
 
export default Card;