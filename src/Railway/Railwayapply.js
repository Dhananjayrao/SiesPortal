import React, { Component } from 'react';
import {FaTrain} from 'react-icons/fa'
import './Railwayapply.css'
import Navigation from '../Main/Navbar/Navigation'
import Footer from '../Main/Footer/Footer'
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Railwayapply extends Component {
    state = {  }
    render() { 
        return ( <div style={{height:"100vh"}}>
        <Navigation/>
        <div className={'allCourses'}>
          <div className={'Title5'}><FaTrain/> Railway Concession |</div>
          <div className={'Title6'}>Your Applications</div>
        </div>
        <div className={'concession'}>
        <img src={"https://portal.siesgst.ac.in/assets/redlocal.png"} style={{width:'40%',marginLeft:'80px'}}></img>
            
            <Form className={'form1'} >
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label size="sm">Railway Line</Form.Label>
                <Form.Control as="select">
                <option value="Harbour" >Harbour</option>
                <option value="Western" >Western</option>
                <option value="Central" >Central</option>
                <option value="Trans Harbour" >Trans Harbour</option>
                <option value="Uran" >Uran</option>
                </Form.Control>
                </Form.Group>    
            <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label size="sm">Select Class</Form.Label>
                <Form.Control as="select">
                <option value="First" >First</option>
                <option value="Second" >Second</option>
                </Form.Control>
                </Form.Group>
            <Form.Group controlId="formBasicBatch">
                <Form.Label>Enter Station</Form.Label>
                <Form.Control  type="text" placeholder="station" />
            </Form.Group>   
            <Link to="/Railway"> 
            <Button variant="primary" type="submit" style={{margin:"0 auto"}} >
                    Apply Now
                </Button>
                </Link>    
            </Form>
            
        </div>
        <Footer/>
        </div> );
    }
}
 
export default Railwayapply;