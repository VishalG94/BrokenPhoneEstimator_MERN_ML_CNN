import React, { Component } from 'react'
import './About.css'

class About extends Component {

  render() {
    return (
      <div className='faqcontentabout'>
        <div className='py-0'>
          <div className='about container' id='about'>
            <div className='row'>
              <div className='px-0 col-md-20 text-center mx-auto'>
                <h3 className='text-primary display-4'>
                  <br />
                  <br />
                  <h3 style={{ fontSize: '50px' }} class="display-4 text-white text-center" >More About us! </h3>
                </h3>
                {/* <button class='btn btn-outline-info' onClick={this.goToLogin}>
                  Estimator
                </button> */}
                {/* <h2 className='my-3'>- Our Mission -</h2> */}
                {/* <h1>To provide the best and fair prices to customers</h1> */}
                <p style={{ marginLeft: '20%', width: '650px', height: '100px', background: 'transparent' }} className='mb-3'>
                  The pain of losing a phone is extreme. Our daily life stops
                  functioning perfectly. We want to provide a clean and fair
                  menthod of phone exchange and recycle for better green.
                </p>{' '}
                <br></br>
                <div class='row'>
                  <div class='col-sm-6'>
                    <h2 class="display-4 text-white text-center" style={{ fontSize: '30px' }}>
                      <b> What you can do?</b>
                    </h2>

                    <iframe
                      style={{ border: 'none', borderRadius: '5px' }}
                      width='500'
                      height='372'
                      src='https://www.youtube.com/embed/__sidP3SY-0'
                    />
                  </div>
                  {/* <div class='col-sm-1'></div> */}
                  <div class='col-sm-6'>
                    <h2 class="display-4 text-white text-center" style={{ fontSize: '30px' }}>
                      <p className='mb-0'> What and How are we gonna do?</p>
                    </h2>
                    <iframe
                      style={{ border: 'none', borderRadius: '5px' }}
                      width='500'
                      height='372'
                      src='https://www.youtube.com/embed/p4LnEafIzsk'
                    />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
