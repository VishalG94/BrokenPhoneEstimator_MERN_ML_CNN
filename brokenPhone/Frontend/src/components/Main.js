import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './Login/Login'
import signUp from './Signup/Signup'
import landingPage from './LandingPage/LandingPage'
import Navbarhome from './NavBar/Navbarhome'

import userPage from './UserPage/UserPage'
import adminPage from './AdminPage/AdminPage'
import ContactPage from './Contact/Contact'
import Questionaire from './Questionaire/Questionaire'
import EstimatePrice from './EstimatePrice/EstimatePrice'
import PicUpload from './PicUpload/PicUpload'
import faq from './FAQ/faq'
import HomeLanding from './HomeLanding/HomeLanding'
import Footer from './Footer/Footer'
import LandingPage from './LandingPage/LandingPage'
import ResultPage from './ResultPage/ResultPage'
import LoadingPage from './LoadingPage/LoadingPage'

// Create a Main Component
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Render Different Component based on Route */}
          <Route path='/' component={Navbarhome} />
          <Route path='/Home' exact component={HomeLanding} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/' exact component={HomeLanding} />
          <Route path='/signUp' exact component={signUp} />
          <Route path='/userPage' exact component={userPage} />
          <Route path='/addService' exact component={adminPage} />
          <Route path='/Contact' exact component={ContactPage} />
          <Route path='/Questionaire' exact component={Questionaire} />
          <Route path='/estimateprice' exact component={EstimatePrice} />
          <Route path='/uploadpicture' exact component={PicUpload} />
          <Route path='/loading' exact component={LoadingPage} />
          <Route path='/result' exact component={ResultPage} />

          <Route path='/faq' exact component={faq} />
          <Route path='/footer' component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}
// Export The Main Component
export default Main
