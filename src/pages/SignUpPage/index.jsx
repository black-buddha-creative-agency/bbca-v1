import React, { Component } from 'react'

import Header from '../../components/Layout/Header'
import UserForm from '../../components/UserForm'

class SignUpPage extends Component {
  state = {
    message: ''
  }
  updateMessage = msg => {
    this.setState({ message: msg })
  }
  formText = {
    page: 'Sign Up',
    altText: 'Log in instead?',
    link: '/login'
  }

  render() {
    return (
      <div className="tc">
        <Header />
        <UserForm
          {...this.props}
          formText={this.formText}
          updateMessage={this.updateMessage}
        />
        <p className="mt4 text-error">{this.state.message}</p>
      </div>
    )
  }
}

export default SignUpPage
