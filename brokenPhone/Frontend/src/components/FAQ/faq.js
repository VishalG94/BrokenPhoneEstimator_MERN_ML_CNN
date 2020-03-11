import React, { Component } from 'react';
import './faq.css';

class faq extends Component {
  render() {
    return (
      <div className="faqcontent">
        <div id="accordion" class="accordian">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button style={{ textDecoration: 'none' }} class="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Our pricing determination?
        </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <p>We decide the price based on multiple factors:</p>
                <ul>
                  <li>Model</li>
                  <li>Specific Condition</li>
                  <li>Recycling Value</li>
                </ul>
                <p>The specific condition of each individual phone is carefully determined by our machine vision system and artificial intelligence system in order to get the best price we can find. For example, a phone with water damage or a broken LCD will be worth less than a fully functional phone, and an older phone will be priced lower than a phone that’s still performing well in the secondary markets.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link text-white collapsed" style={{ textDecoration: 'none' }} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What happens to my device once I’ve ended my transaction
        </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                The majority of the devices we receive are reused, while the remaining devices are responsibly recycled. Almost all consumer electronics contain toxic materials such as lead, cadmium, mercury, arsenic and a broad variety of other materials that pose a threat to the environment and our health. The best thing we can do for the environment is to extend the usage of existing devices as long as possible so that there is no need to build new devices to take their place.
      </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed text-white" style={{ textDecoration: 'none' }} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can I get my device back after I've sold it?
        </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                All sales to ecoATM are final and therefore cannot be returned.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h5 class="mb-0">
                <button class="btn btn-link text-white collapsed" style={{ textDecoration: 'none' }} data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Do you accept accessories, like chargers?
        </button>
              </h5>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div class="card-body">
                Accessories cannot provide any monetary input but your effort will be appreciated if donated towards recycling.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;