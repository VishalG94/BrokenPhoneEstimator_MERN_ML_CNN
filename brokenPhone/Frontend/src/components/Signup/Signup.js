import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { ROOT_URL } from '../../URLSettings';
import '../Login/Login.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';


const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export default class signUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      userType: ""
    };
  }

  //Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0;
  }

  componentWillMount() {
    this.setState({
      authFlag: false
    })
    console.log("Root url:" + ROOT_URL);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  setGender(event) {
    console.log(event.target.value);
    var value = event.target.value;
    this.setState({
      gender1: value
    });
  }


  setUserType(event) {
    console.log(event.target.value);
    var value = event.target.value;
    this.setState({
      userType: value
    });
  }



  signUpStudent = event => {
    event.preventDefault();
    var data = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.name,
      role: this.state.userType
    }
    console.log(data);

    axios.defaults.withCredentials = true;
    axios.post(`${ROOT_URL}/users/signup`, data)
      .then(res => {
        this.props.history.push('/');
      });

  }

  render() {

    let loggedIn = (localStorage.getItem("name") === null);
    if (!loggedIn) {
      return (<Redirect to='/userPage' />);
    }
    else {
      return (
        <div className="Fullpage">


          <MDBContainer style={{}} className="signincard">
            <MDBRow>
              <MDBCol md='6'>
                <MDBCard
                  className='card-image'
                  style={{
                    borderRadius: '10px',
                    marginLeft: '130%',
                    top: '150px',
                    backgroundImage:
                      'url(https://cdn.pixabay.com/photo/2015/11/07/11/59/foggy-1031703_960_720.jpg)',
                    background: 'transparent',
                    width: '24rem'
                  }}
                >


                  <form align="center" width="100px" className="signupcard">
                    <h2 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong style={{ color: '#fff' }}>SIGN UP  NOW</strong>

                    </h2>
                    <Form.Group controlId="email">
                      <Form.Control
                        autoFocus
                        placeholder='Email'
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="password">

                      <Form.Control
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                      />
                    </Form.Group>
                    <Form.Group controlId="name">
                      <Form.Control
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                      />
                    </Form.Group>
                    <fieldset>
                      <div onChange={this.setUserType.bind(this)}>
                        I am a &nbsp;
                                      <input type="radio" value="user" name="gender" /> User &nbsp;
                                      <input type="radio" value="mentor" name="gender" /> Admin
                                  </div>
                    </fieldset>

                    <Button
                      block

                      disabled={!this.validateForm()}
                      type="button" onClick={this.signUpStudent}
                    >

                      Create an account
                              </Button>
                    <div style={{ color: '#fff', weight: 'bold' }}>Already a Member?</div> <Link to="/login">Login</Link>
                  </form>

                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>


        </div>
      );
    }
  }
}
