import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './EstimatePrice.css'
import '../HomeLanding/HomeLanding.css'
import axios from 'axios'
// import GoogleLogin from 'react-google-login'
import { ROOT_URL } from '../../URLSettings'

class EstimatePrice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedModel: 'Model',
      Brand: 'Brand',
      password: '',
      name: '',
      authFlag: false,
      errorMessage: '',
      modelSelected: '',
      showButton: '',
      brands: ['Apple', 'Samsung', 'OnePlus'],
      Apple: [
        'iPhone 7',
        'iPhone 7 Plus',
        'iPhone 8',
        'iPhone 8 Plus',
        'iPhone X',
        'iPhone XR',
        'iPhone XS',
        'iPhone XS Max',
        'iPhone 11',
        'iPhone 11 Pro',
        'iPhone 11 Pro Max'
      ],
      Samsung: [
        'Galaxy Note 10+ 512GB',
        'Galaxy Note 10+ 256GB',
        'Galaxy Note 10 256GB',
        'Samsung Galaxy Note9 512GB',
        'Samsung Galaxy Note9 256GB',
        'Samsung Galaxy A10 32GB',
        'Samsung Galaxy A70 128GB',
        'Samsung Galaxy S8 Plus 64GB',
        'Samsung Galaxy S8 64GB -350',
        'Samsung Galaxy S7 -130'
      ],
      OnePlus: [
        'OnePlus 5',
        'OnePlus 5T',
        'OnePlus 6',
        'OnePlus 6T',
        'OnePlus 7',
        'OnePlus 7T'
      ]
    }
  }

  componentWillMount () {
    this.setState({
      authFlag: false
    })
  }
  onnext = event => {
    event.preventDefault()
    localStorage.setItem('Brand', this.state.Brand)
    localStorage.setItem('Model', this.state.selectedModel)
    this.props.history.push('/Questionaire')
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  show = event => {
    event.preventDefault()
    this.setState({ selectedModel: event.target.id })
    this.setState({ showButton: 'true' })
  }
  selectModel = event => {
    event.preventDefault()
    // selected model
    this.setState({
      modelSelected: this.state[event.target.id]
    })
    // selected brand
    this.setState({ Brand: event.target.id })
  }

  render () {
    let loggedIn = localStorage.getItem('name') === null
    // console.log(loggedIn)
    // alert(localStorage.getItem('name'))

    let brandslist = null
    let allBrands = this.state.brands
    brandslist = Object.keys(allBrands).map(brand => {
      return (
        <div>
          <a
            class='dropdown-item'
            href='#'
            id={allBrands[brand]}
            onClick={this.selectModel}
          >
            {allBrands[brand]}
          </a>
        </div>
      )
    })
    let modelslist = null
    let allSelectedModels = this.state.modelSelected
    modelslist = Object.keys(allSelectedModels).map(model => {
      return (
        <div>
          <li
            class='dropdown-item'
            onClick={this.show}
            href='#'
            id={allSelectedModels[model]}
          >
            {allSelectedModels[model]}
          </li>
        </div>
      )
    })
    let availableModels = null
    if (this.state.modelSelected) {
      availableModels = (
        <div>
          <div class='dropdown'>
            <button
              class='btn btn-light dropdown-toggle'
              // style={{
              //   // float: 'right',
              //   position: 'relative',
              //   align: 'center',
              //   color: 'black',
              //   fontSize: '19px',
              //   fontWeight: 'bold',
              //   width: '50%',
              //   height: '50px',
              //   lineHeight: '50px',
              //   padding: '0px'
              // }}
              type='button'
              id='dropdownMenu2'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {this.state.selectedModel}
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>
              {modelslist}
            </div>
          </div>
        </div>
      )
    }
    let estimatorButton = null
    if (this.state.showButton) {
      estimatorButton = (
        <div className="nextbutton">
          <button
            id='getEstimate'
            className='btn btn-outline-info'
            onClick={this.onnext}
          >
            Next
          </button>
        </div>
      )
    }

    if (loggedIn) {
      return <Redirect to='/' />
    } else {
      return (
        <div className='estimatecontent'>
            <div class='container'>
              <h1 class='display-4' align='CENTER'>
                <p />
                For your Broken Phone needs
              </h1>
            </div>
            <br/>

            <div  className="estimate" align='center'>
              <div>
                <br/>
              <p class='lead' align='CENTER'>
                
                Choose your Device Brand
              </p>
              </div>
              <br/>

              <div class='dropdown'>
                <button
                  class='btn btn-light dropdown-toggle'
                  // style={{
                  //   // float: 'right',
                  //   position: 'relative',
                  //   align: 'center',
                  //   color: 'black',
                  //   fontSize: '19px',
                  //   fontWeight: 'bold',
                  //   width: '50%',
                  //   height: '50px',
                  //   lineHeight: '50px',
                  //   padding: '0px'
                  // }}
                  type='button'
                  id='dropdownMenu2'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {this.state.Brand}
                </button>
                <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                  {brandslist}
                </div>
              </div>
              <br/>
              {availableModels}
              <br/>
              {estimatorButton}
              <br/>
            </div>
          {/* </div> */}
        </div>
      )
    }
  }
}

export default EstimatePrice
