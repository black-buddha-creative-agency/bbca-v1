import React, { Component } from 'react'
import UserForm from '../../components/UserForm'
import Header from '../../components/Layout/Header'

class LoginPage extends Component {
  formText = {
    page: 'Login',
    altText: 'Register an account',
    link: '/signup'
  }
  updateMessage = msg => {
    this.setState({ message: msg })
  }
  render() {
    return (
      <>
        <Header />
        <UserForm formText={this.formText} updateMessage={this.updateMessage} />
      </>
    )
  }
}

export default LoginPage
