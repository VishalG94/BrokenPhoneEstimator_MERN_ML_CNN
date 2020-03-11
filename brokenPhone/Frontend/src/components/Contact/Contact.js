import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, Redirect} from 'react-router-dom';
 
 
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name : "",
      userType :""
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length >0;
  }
  render() {
    return (
    <div className='estimatecontent'>
        <div className="about container" id="contact">
          <div className="row">
            <div className="px-5 col-md-8 text-center mx-auto">
              <h3 className=" display-4">
                <b>Contact us</b>
              </h3>
              <h4 class="display-4" style={{fontSize:'30px'}}>
              - We are always listening -
              </h4>
              <h4 class="display-4" style={{fontSize:'30px'}}>Thank you for your interest in Phone2Cash</h4>
              
              
              
              
              <MDBContainer style={{marginTop:'50px'}} className="signincard ">
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard 
            className='card-image mb-3'
            style={{
              borderRadius: '10px',
              marginLeft:'40%',
              backgroundImage:
                'url(https://cdn.pixabay.com/photo/2015/11/07/11/59/foggy-1031703_960_720.jpg)',
              background:'rgba(255,255,255,0.2)',
              width: '24rem',
 
            }}
          >
           
          
                          <form align="center" width="100px" className="signupcard">
                          <h2 className='white-text mb-5 mt-4 '>
                          <h4 class="display-4" style={{fontSize:'30px'}}>Please Provide your Info to revert back</h4>
                  
                </h2>
                              <Form.Group >
                                  <Form.Control
                                      autoFocus
                                      placeholder='Email'
                                      type="email"
                                      value={this.state.email}
                                      onChange={this.handleChange}
                                  />
                              </Form.Group>
                              
                              <Form.Group >
                                  <Form.Control
                                  placeholder='Name'
                                      value={this.state.name}
                                      onChange={this.handleChange}
                                      type="text"
                                  />
                              </Form.Group>
                              
                              <Button
                                  block
 
                                  disabled={!this.validateForm()}
                                  type="button" onClick={this.signUpStudent}
                              >
                                Submit
                                 
                              </Button>
                          </form>
                   
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
            </div>
          </div>
      </div>
 
    </div>
    );
  }
}
 
export default Contact;