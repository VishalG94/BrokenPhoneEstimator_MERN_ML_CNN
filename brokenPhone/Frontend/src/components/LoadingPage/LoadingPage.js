import React, { Component } from "react";
import ReactDOM from "react-dom";

import logo from "../../images/Logo.png";
import Navbarhome from "../NavBar/Navbarhome";
import { Route } from "react-router-dom";
import SlideshowComponent from "../SlideShow/App";
import Footer from "../Footer/Footer";
import gif2 from "../../images/SciFi_LoaderBlue.gif";
import { Redirect } from 'react-router';




export default class LoadingPage extends Component {
    state = {
        redirect: false,
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 5000)
    }

    
  render() {
    if (this.state.redirect) {
        return (
            <Redirect to={'/result'} />
        )
    }
    return (
      <div class='landing'>
       {/* <SlideshowComponent /> */}
        <div> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={gif2} height="300px" witdh="1000px"></img>
            <br></br>
            <br></br>
        <h4 className="my-3">
              - Your result is being generated -
        </h4>

        </div>
        <Footer />
      </div>
    );
  }
}