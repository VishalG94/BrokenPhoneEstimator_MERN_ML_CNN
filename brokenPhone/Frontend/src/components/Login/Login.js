import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import cookie from 'react-cookies';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import GoogleLogin from "react-google-login";
import { ROOT_URL } from '../../URLSettings';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

import FacebookLogin from 'react-facebook-login';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      name: "",
      authFlag: false,
      errorMessage: ""
    };
  }

  validateForm() {
    return this.state.password.length > 0 && this.state.name.length > 0;
  }

  componentWillMount() {
    this.setState({
      authFlag: false
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  signInStudent = event => {
    event.preventDefault();

    //Creating data to be sent
    var data = {
      password: this.state.password,
      email: this.state.name
    }

    axios.defaults.withCredentials = true;
    axios.post(`${ROOT_URL}/users/login`, data)
      .then(res => {
        console.log(res.status + "Result bkwsde");
        // var resultData = res.data[0];
        if (res.status === 200) {

          console.log("Correct Login");
          console.log(res);
          //localStorage.setItem('token', resultData.x);
          localStorage.setItem('name', res.data.email);
          localStorage.setItem('userType', res.data.role);
          localStorage.setItem('userName', res.data.username);
          this.setState({
            authFlag: true
          })
          this.props.history.push('/estimateprice')
        }
        else {

          console.log("Invaid Login");
          this.setState({
            authFlag: false,
            errorMessage: "Invalid Login",

            password: "",
            name: "",
          })
        }
      });

  }





  render() {

    let loggedIn = (localStorage.getItem("name") === null);
    if (!loggedIn) {
      return (<Redirect to='/estimateprice' />);
    }
    else {

      const responseGoogle = (response) => {
        // var data = {
        //   email: response.profileObj.email,
        //   username: response.profileObj.name
        // }
        // console.log(response.profileObj);
        // alert('data:' + data);
        if (typeof (response.profileObj.name) !== 'undefined' && response.profileObj.name !== null) {
          localStorage.setItem('name', response.profileObj.name);
          localStorage.setItem('userType', "user");
          localStorage.setItem('userName', response.profileObj.name);
          window.location.reload();
        }

        // axios.defaults.withCredentials = true;
        // axios.post(`${ROOT_URL}/users/signupWithGoogle`, data)
        //     .then(res => {
        //         console.log(res.status + "Resulyt bkwsde");
        //         // var resultData = res.data[0];
        //         if (res.status === 200) {

        //             console.log("Correct Login");
        //             //localStorage.setItem('token', resultData.x);
        //             localStorage.setItem('name', response.profileObj.name);
        //             localStorage.setItem('userType', "user");
        //             localStorage.setItem('userName', response.profileObj.name);
        //             this.setState({
        //                 authFlag: true
        //             })
        //             this.props.history.pun
        //             sh('/estimateprice')
        //         }
        //         else {

        //             console.log("Invaid Login");
        //             this.setState({
        //                 authFlag: false,
        //                 errorMessage: "Invalid Login",

        //                 password: "",
        //                 name: "",
        //             })
        //         }
        //     });
      }

      const responseFacebook = (response) => {

        if (typeof (response.email) !== 'undefined' && response.email !== null) {
          localStorage.setItem('name', response.email);
          localStorage.setItem('userType', "user");
          localStorage.setItem('userName', response.name);
          window.location.reload();
        }


        // alert('data:' + data);
        // alert(JSON.stringify(response))
        // var data = {
        //     email: response.email,
        //     username: response.name
        // }
        // axios.defaults.withCredentials = true;
        // axios.post(`${ROOT_URL}/users/signupWithFacebook`, data)
        //     .then(res => {
        //         alert(res.status + "Resulyt bkwsde");
        //         // var resultData = res.data[0];
        //         if (res.status === 200) {

        //             console.log("Correct Login");
        //             //localStorage.setItem('token', resultData.x);
        //             localStorage.setItem('name', res.data.email);
        //             localStorage.setItem('userType', "user");
        //             localStorage.setItem('userName', res.data.username);
        //             this.setState({
        //                 authFlag: true
        //             })
        //             this.props.history.push('/estimateprice')
        //         }
        //         else {
        //             console.log("Invaid Login");
        //             this.setState({
        //                 authFlag: false,
        //                 errorMessage: "Invalid Login",
        //                 password: "",
        //                 name: ""
        //             })
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
      }

      const failureGoogle = (response) => {
        console.log(response);
      }

      // const responseGoogle = (response) => {
      //     var data = {
      //         email: response.profileObj.email,
      //         username: response.profileObj.name
      //     }
      //     console.log(response.profileObj);
      //     console.log('data:' + data);

      //     axios.defaults.withCredentials = true;
      //     axios.post(`${ROOT_URL}/users/signupWithGoogle`, data)
      //         .then(res => {
      //             console.log(res.status + "Resulyt bkwsde");
      //             // var resultData = res.data[0];
      //             if (res.status === 200) {

      //                 console.log("Correct Login");
      //                 //localStorage.setItem('token', resultData.x);
      //                 localStorage.setItem('name' , res.data.email);
      //                 localStorage.setItem('userType' , "user");
      //                 localStorage.setItem('userName' , res.data.username);
      //                 this.setState({
      //                     authFlag: true
      //                 })
      //                 this.props.history.push('/userPage')
      //             }
      //             else {

      //                 console.log("Invaid Login");
      //                 this.setState({
      //                     authFlag: false,
      //                     errorMessage: "Invalid Login",

      //                     password: "",
      //                     name: "",
      //                 })
      //             }
      //         });
      // }

      // const failureGoogle = (response) => {
      //   //  alert("Login using Google Failed. Please check console for more details.");
      //     console.log(response);
      // }

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
                    width: '26rem'
                  }}
                >
                  <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                    <div className='text-center'>
                      <h3 className='white-text mb-5 mt-4 '>
                        <strong>SIGN</strong>
                        <strong style={{ color: '#fff' }}> IN</strong>

                      </h3>
                    </div><form align="center">

                      <Form.Group controlId="name">
                        <Form.Control
                          value={this.state.name}
                          placeholder="Email"
                          onChange={this.handleChange}
                          type="text"
                        />
                      </Form.Group>
                      <Form.Group controlId="password">
                        <Form.Control
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          type="password"
                        />
                      </Form.Group>


                      <Button
                        block

                        //disabled={!this.validateForm()}
                        onClick={this.signInStudent}
                        type="button"
                      >
                        Sign In
</Button>
                      <br />
                      Not a Member? <Link to="/signup">Signup</Link>
                      <p>  {this.state.errorMessage}</p>

                      <GoogleLogin
                        clientId="84996024599-n7n6fr55qf3d6ii8seoe20l2snbd59q1.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                        buttonText="LOGIN WITH GOOGLE"
                        // render={renderProps => (
                        //     <button class="my-facebook-button-class" onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN WITH GOOGLE</button>
                        // )}
                        onSuccess={responseGoogle}
                        onFailure={failureGoogle}
                      />
                      <br></br>
                      <br></br>
                      <FacebookLogin
                        appId="433867077242221"
                        fields="name,email,picture"
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                        textButton='LOGIN WITH FACEBOOK'
                      />
                    </form>

                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }
  }
}