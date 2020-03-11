import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { Redirect } from 'react-router'

class Questionnaire extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Qs: [
        'Does the device power on ?',
        'Does the screen fully light up ?',
        'Are there cracks anywhere ?'
      ],
      Q0: 'Yes',
      Q1: 'Yes',
      Q2: 'Yes'
    }
    this.handle = this.handle.bind(this)
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      [changeEvent.target.id]: changeEvent.target.value
    });
  }
  handle = e => {
    e.preventDefault()
    alert(e.target.id)
    console.log(e.target.value + e.target.id)
    let QNo = e.target.id
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value })
  }
  onnext = e => {
    e.preventDefault()
    localStorage.setItem('Q0', this.state.Q0)
    localStorage.setItem('Q1', this.state.Q1)
    localStorage.setItem('Q2', this.state.Q2)
    this.props.history.push('/uploadpicture')
  }
  render() {
    let Questions = this.state.Qs.map((Q, index) => (
      <div class='container' align='center' key={index + 1}>
        <div class='card w-75'>
          <div class='card-body'>
            <h5 class='card-title'>{Q}</h5>
            <div className="radio">
              <label class="form-check-label" for={'Q' + index}>
                <input type="radio" value="Yes" id={'Q' + index}
                  checked={this.state['Q' + index] === 'Yes'}
                  onChange={this.handleOptionChange} />
                Yes
      </label>
            </div>
            <div className="radio">
              <label class="form-check-label" for={'Q' + index}>
                <input type="radio" value="No" id={'Q' + index}
                  checked={this.state['Q' + index] === 'No'}
                  onChange={this.handleOptionChange} />
                No
      </label>
            </div>
          </div>
        </div>
        <br />

      </div>

    ))
    return (
      <div className="estimatecontent">
        <div class='container' align='center'>
          <h3 class="display-4">Few Answers Please</h3>
          <br />
          <p>{Questions}</p>
          <button className='btn btn-outline-info' onClick={this.onnext}> Get Estimate</button>
        </div>
      </div>
    )
  }
}
export default Questionnaire
