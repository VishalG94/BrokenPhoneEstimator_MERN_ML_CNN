import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cookie from 'react-cookies'
import { Redirect } from 'react-router'
import { ROOT_URL } from '../../URLSettings'
import { FLASK_URL } from '../../URLSettings'
import logo from './upload.png'
import Modal from 'react-awesome-modal/lib'
import loader from '../../images/SciFi_LoaderBlue.gif'

class PicUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      selectedImg: null,
      price: '',
      crack: '',
      visible: false
    }
  }
  componentDidMount() {
    localStorage.setItem('price', '')
    this.setState({ price: '' })
  }
  func() {
    let p = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log('Hello, World!')
        resolve('done')
      }, 2000)
    })
    return p;
  }
  async openModal() {
    this.setState({
      visible: true
    })


    let x = await this.func();
    this.closeModal()
    this.gotoresult()

  }

  closeModal() {
    this.setState({
      visible: false
    })
  }
  onChangeHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      selectedImg: URL.createObjectURL(event.target.files[0])
    })
    this.setState({ selectedFile: event.target.files[0], loaded: 0 })
  }

  onClickHandler = event => {
    event.preventDefault()
    const data = new FormData()
    // this.setState({selectedImg: })

    data.append('file', this.state.selectedFile)
    console.log(...data)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.defaults.withCredentials = true
    axios.post(`${ROOT_URL}/users/uploadpicture`, data, config).then(res => {
      console.log('Response' + JSON.stringify(res))
    })
  }
  calculate() {
    console.log('In calculate')
    let deductionRatio = 0
    switch (this.state.crack) {
      case 'CrackO':
        deductionRatio = 0.1
        break
      case 'Crack1':
        deductionRatio = 0.3
        break
      case 'Crack2':
        deductionRatio = 0.5
        break
      case 'Crack3':
        deductionRatio = 0.7
        break
    }
    console.log('deductionRatio' + deductionRatio)
    let dummyPrice = Math.round(localStorage.getItem('price') * deductionRatio)
    console.log('dummy price' + dummyPrice)
    this.setState({ price: dummyPrice })
    localStorage.setItem('Price', this.state.price)
    this.openModal()


  }
  gotoresult() {
    this.props.history.push('/result')
  }
  hitFlask = event => {
    event.preventDefault()
    const data = new FormData()
    // this.setState({
    //   selectedImg: URL.createObjectURL(event.target.files[0])
    // })
    data.append('file', this.state.selectedFile)
    console.log(...data)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    // axios.defaults.withCredentials = true
    axios.post(`${FLASK_URL}/`, data).then(res => {
      console.log('Response' + JSON.stringify(res.data))
      this.setState({ crack: res.data })

      axios
        .get(`${ROOT_URL}/phones/getprice`, {
          params: {
            brand: localStorage.getItem('Brand'),
            model: localStorage.getItem('Model')
          }
        })
        .then(res => {
          console.log('Response' + JSON.stringify(res.data[0].price))
          localStorage.setItem('price', res.data[0].price)
          console.log('calling calculate')
          this.calculate()


        })
    })
  }


  render() {
    return (
      <div className="estimatecontent">
        <div className="estimate " style={{ width: '700px' }}>
          <div
            class='container-fluid'
            align='center'
            style={{ paddingBottom: '40px' }}
          >
            <table>
              <td>
                <div class='container' >
                  <div class='row'>
                    <div class='col-md-6'>
                      <form
                        align='center'
                        onSubmit={this.hitFlask}
                        enctype='multipart/form-data'
                      >
                        {this.state.selectedImg ? (
                          <div class='form-group'>
                            <img
                              class='preview-img'
                              style={{ borderRadius: '20px' }}
                              src={this.state.selectedImg}
                              alt='Preview Image'
                              width='200'
                              height='200'
                            />
                          </div>
                        ) : (
                            <div class='form-group'>
                              <img
                                class='preview-img ml-5'
                                src={logo}
                                alt='Preview Image'
                                width='150'
                                height='150'

                              />
                            </div>
                          )}
                        <label>Only upload .jpeg or .jpg</label>
                        <input
                          class='form-control btn  btn-outline-info'
                          type='file'
                          onChange={this.onChangeHandler}
                          name='file'
                        />
                        <br />
                        <br />
                        {this.state.selectedFile ? (
                          <div class='form-group'>
                            <input
                              type='submit'
                              value='Upload'
                              className='form-control btn  btn-info'
                            />
                          </div>
                        ) : null}

                      </form>

                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class='container' style={{ marginTop: '100px' }}>
                  <p class='lead' style={{ fontSize: '30px' }}>Model details</p>
                  <p class='lead' style={{ fontSize: '30px' }}>Brand: {localStorage.getItem('Brand')}</p>
                  <p class='lead' style={{ fontSize: '30px' }}>Model: {localStorage.getItem('Model')}</p>

                </div>
              </td>

            </table>
            <Modal
              visible={this.state.visible}
              width='500'
              height='400'
              effect='fadeInUp'
              style={{ borderRadius: '50%', background: 'transparent' }}
              onClickAway={() => this.closeModal()}
            >
              <div>
                <img
                  class='preview-img'
                  style={{ background: 'transparent' }}
                  src={loader}
                  alt='Preview Image'
                  width='500'
                  height='400'
                />

                <a href='javascript:void(0);' onClick={() => this.closeModal()}>
                  Close this
            </a>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}
export default PicUpload



