import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../images/Logo.png";
import Navbarhome from "../NavBar/Navbarhome";
import { Route } from "react-router-dom";
import SlideshowComponent from "../SlideShow/App";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Chatbot from "../Chatbot/CustomChatBot";

export default class LandingPage extends Component {
  render() {
    return (
      <div class='landing' >
       {/* <SlideshowComponent /> */}
        <About />
        <Footer />
        <Chatbot />
      </div>
    );
  }
}
