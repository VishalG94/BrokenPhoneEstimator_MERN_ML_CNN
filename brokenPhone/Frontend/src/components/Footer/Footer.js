import React, { Component } from "react";
import './Footer.js'

class Footer extends Component {
  render() {
    return (
      <div className="footercontainer">
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center d-md-flex align-items-center">
              <i className="d-block fa fa-stop-circle fa-2x mr-md-5 text-primary"></i>
              <ul className="nav mx-md-auto d-flex justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Linkedkln
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Facebook
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="row">
                <div className="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2">
                  <a href="#">
                    <i className="d-block fa fa-facebook-official text-muted fa-lg mx-2"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="d-block fa fa-instagram text-muted fa-lg mx-2"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="d-block fa fa-twitter text-muted fa-lg ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mt-2 mb-0">
                © CMPE 272 Team 1-BrokenPhone
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;
