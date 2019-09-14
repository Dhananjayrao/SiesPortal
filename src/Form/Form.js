import React from "react";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Form.css'
const initialState = {
  name: "",
  email: "",
  password: "",
  contact:"",
  address:"",
  batch:"",
  dob:"",
  prn:"",
  nameError: "",
  emailError: "",
  passwordError: "",
  contactError:"",
  addressError:"",
  batchError:"",
  dobError:"",
  prnError:""
};
let isValid;
export default class Validation extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
        
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let contactError="";
    let addressError="";
    let batchError="";
    let dobError="";
    let prnError="";
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    
    if (!this.state.address) {
      addressError = "address cannot be blank";
    }

    if (!this.state.prn) {
      prnError = "prn cannot be blank";
    }

    if (!this.state.batch) {
      batchError = "batch cannot be blank";
    }
    
    if (!this.state.dob) {
      dobError="Date of Birth cannot be blank"
    }

    if (!this.state.contact) {
      contactError = "contact cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
  
    if (!this.state.password) {
      passwordError="password cannot be blank";
    }

    if (emailError || nameError || passwordError || contactError || addressError || batchError || dobError) {
      this.setState({ emailError, nameError, passwordError, contactError,addressError,batchError,dobError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
     isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      console.log(isValid)
    }
  };

  render() {
    
    
    

    return (

      <div style={{backgroundColor:"#2196F3"}}>
        <div className={"mainForm"} style={{height:"100%"}}>
            <div className={"formElements"}>
                <h1 style={{paddingLeft:"90px"}}>Welcome to SIESGST Portal</h1>
                <div style={{color:"#1F2421", paddingLeft:"40px"}}>Register to SIES GST Portal with your GST Gmail Account to get college updates, railway concession, halltickets, results and other features.</div>

      <form className={'form'} onSubmit={this.handleSubmit}>
        <div className={"elements1"}>
          <label>Enter Name</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div className={'elements1'}>
          <label>Enter Email</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div className={'elements1'}>
          <label>Enter Password</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>

        <div className={"elements1"}>
          <label>Enter Contact No.</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="contact"
            placeholder="contact"
            value={this.state.contact}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.contactError}
          </div>
        </div>

        <div className={"elements1"}>
          <label>Enter Address</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.addressError}
          </div>
        </div>

        <div className={"elements1"}>
          <label>Enter Batch</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="batch"
            placeholder="batch"
            value={this.state.batch}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.batchError}
          </div>
        </div>
        
        <div className={"elements1"}>
          <label>Enter Date Of Birth</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="dob"
            placeholder="Date of Birth"
            value={this.state.dob}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dobError}
          </div>
        </div>

        <div className={"elements1"}>
          <label>Enter Prn</label>
          <input style={{padding:"5px",borderStyle:"solid",borderRadius:"5px",borderColor:"#dedede"}}
            name="prn"
            placeholder="Enter prn"
            value={this.state.prn}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.prnError}
          </div>
        </div>

        <Form>
        <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label size="sm">Gender</Form.Label>
                <Form.Control as="select">
                <option value="MALE" >MALE</option>
                <option value="FEMALE" >FEMALE</option>
                <option value="OTHERS" >OTHERS</option>
                </Form.Control>
                </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label size="sm">Branch</Form.Label>
                <Form.Control as="select">
                <option value="COMPS" >COMPS</option>
                <option value="IT" >IT</option>
                <option value="EXTC" >EXTC</option>
                <option value="MECH" >MECH</option>
                <option value="PPT" >PPT</option>
                </Form.Control>
                </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label size="sm">Semester</Form.Label>
                <Form.Control as="select">
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
                </Form.Control>
                </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label size="sm">Division</Form.Label>
                <Form.Control as="select">
                <option value="A" >A</option>
                <option value="B" >B</option>
                <option value="C" >C</option>
                <option value="D" >D</option>
                <option value="E" >E</option>
                <option value="F" >F</option>
                </Form.Control>
                </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect4">
                <Form.Label size="sm">Year</Form.Label>
                <Form.Control as="select">
                <option value="FE" >FE</option>
                <option value="SE" >SE</option>
                <option value="TE" >TE</option>
                <option value="BE" >BE</option>
                </Form.Control>
                </Form.Group>    
        </Form>

        {/*<button type="submit">submit</button>*/}
        
        <Button variant="primary" type="submit" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px"}}>check</Button>

        <Link to="/Home">
        <Button variant="primary" type="submit" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px",width:"760px"}}>submit</Button>
        </Link>
        
        
      </form>
    </div> 
    </div> 
    </div>
    
    );
  }
}
