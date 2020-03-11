import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import 'feather-icons';
import './HomeLanding.css';
import About from '../About/About'

class HomeLanding extends Component {
  // state = {}
  goToLogin = e => {
    window.location.replace('/Login')
  }
  render() {

    return (
      <div>
        <div className="landinggrid" >
          <div className='content'>
            <section className="">
              <h3 class="display-3 text-white text-center" >Broken Phone</h3>
              <br />
              <h3 class="display-4 mt-1 mb-2 text-center" >The Simple Four Step Process</h3>
              <br /><br />

              <MDBRow>
                <MDBCol >
                  <MDBRow className="smallbox mr-0">
                    <MDBIcon icon="search-location" size='5x' />
                    <p class='lead text-white m-4'>
                      Find a kiosk and give in your phone for Check</p>
                  </MDBRow>
                </MDBCol>
                <MDBCol  >
                  <MDBRow className="smallbox mr-0">  <p class='lead text-white m-4'>
                    Answer few simple questions about the conditions of your phone</p></MDBRow>
                </MDBCol>
                <MDBCol >
                  <MDBRow className="smallbox"><p class='lead text-white m-4'>
                    Wait few moments while our system estimates the price</p></MDBRow>
                </MDBCol>
                <MDBCol >
                  <MDBRow className="smallbox mr-0">
                    <MDBIcon icon="search-location" size='5x' />
                    <p class='lead text-white m-4'>
                      Like the price? Trade in your phone for cash instantly</p>
                  </MDBRow>
                </MDBCol>
              </MDBRow>


              <br />
              <br />
              <br />
              <MDBRow >
                <MDBCol md="4">
                  <MDBRow className="mb-3" >
                    <MDBCol size="2">
                      <MDBIcon
                        icon="recycle"
                        size="3x"
                        className="cyan-text my-5 "
                      />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 class='text-white'>Recycle</h5>
                      <p class='text-white'>
                        In order to combat the growing problem of e-waste, our kiosks conveniently recycle these electronics for instant monetary reward.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <br /><br />
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon
                        icon="mobile"
                        size="4x"
                        className="cyan-text my-4 ml-2"
                      />                  </MDBCol>
                    <MDBCol size="10">
                      <h5 class='text-white'>Devices</h5>
                      <p class='text-white'>
                        We recycle electronic devices from nearly every major brand and we keep adding support for newer models as well.
                      </p>
                    </MDBCol>
                  </MDBRow>

                </MDBCol>

                <MDBCol md="4" className="text-name">
                  <MDBRow>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
                      alt=""
                      style={{ height: '600px' }}
                    />
                  </MDBRow>
                  <MDBRow style={{ marginLeft: '33.5%' }}><button style={{ fontSize: '16px', height: '60px', width: '200px' }} class='btn btn-outline-info' onClick={this.goToLogin}>
                    Estimator
        </button></MDBRow>
                </MDBCol>


                <MDBCol md="4">
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon
                        icon="money"
                        size="3x"
                        className="cyan-text my-5 mr-3"
                      />                  </MDBCol>
                    <MDBCol size="10">
                      <h5 class='text-white'>Hard Cash</h5>
                      <p class='text-white'>
                        We reward you with cold hard cash for promoting a healthier environment. Cheers for being Eco-Friendly!
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <br /><br />
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon
                        icon="id-badge"
                        size="3x"
                        className="cyan-text my-5"
                      />                  </MDBCol>
                    <MDBCol size="10">
                      <h5 class='text-white'>Identity</h5>
                      <p class='text-white'>
                        Your personal details including your identity are safely destroyed if any traces are left after the reset.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </section>
          </div>
        </div>


        <About></About>
      </div>


    );
  }
}

export default HomeLanding;