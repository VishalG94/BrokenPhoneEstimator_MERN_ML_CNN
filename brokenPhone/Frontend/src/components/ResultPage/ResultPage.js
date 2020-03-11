import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Route } from "react-router-dom";
import gif2 from "../../images/SciFi_LoaderBlue.gif";
import { Redirect } from 'react-router';



export default class ResultPage extends Component {
  render() {

    return (

      <div className='estimatecontent' style={{ paddingRight: '10%' }}>

        <div className='estimate' style={{ width: '700px', alignContent: 'center', paddingLeft: '7%', padding: '09%', marginLeft: '' }}>



          <h4 className="display-4" style={{ fontSize: '40px' }}>
            Your details are
        </h4>
          <h4 className="display-4" style={{ fontSize: '30px' }}>
            Your brand is:  {localStorage.getItem('Brand')}
          </h4><h4 className="display-4" style={{ fontSize: '30px' }}>
            Your model is:  {localStorage.getItem('Model')}
          </h4><h4 className="display-4" style={{ fontSize: '30px' }}>
            Your estimated price is:  {localStorage.getItem('Price')}
          </h4>
          <br></br>
          <button style={{ marginLeft: '30%' }} class='btn btn-outline-link'>Accept trade-in</button>
        </div>
      </div>
    );
  }
}

