import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Section from '../Layout/Section'

import data from '../../services'

class UserForm extends Component {
  state = {
    first_name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = event => {
    this.props.updateMessage('')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await data.signup(this.state)
      this.props.handleSignupOrLogin()
      this.props.history.push('/')
    } catch (error) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(error.message)
    }
  }

  isFormInvalid() {
    return !(
      this.state.first_name &&
      this.state.username &&
      this.state.password === this.state.passwordConf
    )
  }
  render() {
    const { formText } = this.props
    const { first_name, username, password, passwordConf } = this.state
    return (
      <Section>
        <div className="mt6 tc flex flex-column  check">
          <h1 className="pa3 text-h2 tc">{formText.page}</h1>
          <form className="w-100" action="" autoComplete="off">
            <div className="ma4 flex justify-between input">
              <label className="mr2" htmlFor="first_name">
                First Name
              </label>
              <input
                id="username"
                placeholder="First Name"
                name="first_name"
                type="text"
                value={first_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="ma4 flex justify-between input">
              <label className="mr2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                placeholder="Username"
                name="username"
                type="text"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ma4 flex justify-between input">
              <label className="mr2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="ma4 flex justify-between input">
              <label className="mr2" htmlFor="passwordConf">
                Confirm
              </label>
              <input
                id="password"
                placeholder="Password"
                name="passwordConf"
                type="password"
                value={passwordConf}
                onChange={this.handleChange}
              />
            </div>
            <div className="ma4 flex justify-between">
              <div className="mr2 flex items-center justify-center">
                <Link to="/login" className="">
                  {formText.altText}
                </Link>
              </div>
              <div className="">
                <button
                  className="ph3 pv2"
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
                  disabled={this.isFormInvalid()}
                >
                  {formText.page}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Section>
    )
  }
}

export default UserForm
