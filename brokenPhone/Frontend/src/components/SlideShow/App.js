//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./Slideshow";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";
import './custom.css'

//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH dGray overflowH col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5];

//===========================================
// APP COMPONENT
//===========================================
class SlideshowComponent extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
            </div>
        );
    }
}

export default SlideshowComponent;
