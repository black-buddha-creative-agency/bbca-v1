import React, { Component } from 'react'
import UserForm from '../../components/UserForm'
import Header from '../../components/Layout/Header'

class LoginPage extends Component {
  formText = {
    page: 'Login',
    altText: 'Register an account',
    link: '/signup'
  }
  render() {
    return (
      <>
        <Header />
        <UserForm formText={this.formText} />
      </>
    )
  }
}

export default LoginPage
