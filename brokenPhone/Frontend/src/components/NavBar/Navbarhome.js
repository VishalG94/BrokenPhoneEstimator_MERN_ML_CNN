import React, { Component } from 'react'
import './Navbarhome.css'
import cookie from 'react-cookies'
import Link from 'react-router-dom/es/Link'
import logo from '../../images/connect.png'
import Redirect from 'react-router-dom/es/Redirect'
import { States } from '../../URLSettings'
import Contact from '../Contact/Contact'

class Navbarhome extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout = e => {
    localStorage.removeItem('name')
    localStorage.removeItem('userName')
    localStorage.removeItem('userType')
    this.props.history.push('/home')
  }

  render() {
    let loggedIn = localStorage.getItem('name') === null
    let isAdmin = localStorage.getItem('userType') === 'mentor'
    let user = localStorage.getItem('name')
    let states = States.map(data => {
      return (
        <a className='dropdown-item' href={`/stateServices/${data}`}>
          {' '}
          {data}{' '}
        </a>
      )
    })

    return (
      <nav className='navbar navbar-expand-sm  fixed-top'>
        <a className='navbar-brand' href='/'>
          <p style={{ marginLeft: '50px', fontWeight: 'strong', fontSize: '35px', font: 'Satisfy' }} className='logoname'>Phone2Cash</p>
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {!loggedIn ? (
              <li className='nav-item btn-link'>
                <a className='nav-link'>
                  <Link to={'/home'}>
                    {' '}
                    Home <span className='sr-only'>current</span>
                  </Link>
                </a>
              </li>
            ) : (
                ''
              )}
            {isAdmin ? (
              <li className='nav-item btn-link'>
                <a className='nav-link'>
                  {' '}
                  <Link to={'/addService'}>
                    {' '}
                    Add Service <span className='sr-only'>current</span>
                  </Link>
                </a>
              </li>
            ) : (
                ''
              )}
            {isAdmin ? (
              <li className='nav-item btn-link'>
                <a className='nav-link'>
                  {' '}
                  <Link to={'/viewServices'}>
                    {' '}
                    My Services <span className='sr-only'>current</span>
                  </Link>
                </a>
              </li>
            ) : (
                ''
              )}
            <li className='nav-item btn-link'>
              <a style={{ textDecorationColor: 'transparent' }} className='nav-link' href='/#about'>
                About Us <span className='sr-only'>current</span>
              </a>
            </li>
            <li className='nav-item btn-link'>
              <a className='nav-link'>
                <Link to={'/faq'}>
                  {' '}
                  FAQ <span className='sr-only'>current</span>
                </Link>
              </a>
            </li>

            <li className='nav-item btn-link'>
              <a className='nav-link'>
                <Link to={'/Contact'}>
                  {' '}
                  Contact Us <span className='sr-only'>current</span>
                </Link>
              </a>
            </li>

            {!loggedIn ? (
              <li className='nav-item dropdown'>

                <div className='dropdown-menu'>{states}</div>
              </li>
            ) : (
                ''
              )}
            {!loggedIn ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {localStorage.getItem('userName')}
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <button onClick={this.logout} className='dropdown-item'>
                    {/* <Link to='/' >
                      Logout
                    </Link> */}
                    Logout
                  </button>
                </div>
              </li>
            ) : (
                ''
              )}
            {loggedIn ? (
              <li className='nav-item btn-link'>
                <a className='nav-link'>
                  <Link to={'/login'}>
                    {' '}
                    Login <span className='sr-only'>current</span>
                  </Link>
                </a>
              </li>
            ) : (
                ''
              )}
          </ul>
        </div>
      </nav >
    )
  }
}

export default Navbarhome
