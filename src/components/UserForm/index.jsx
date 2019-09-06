import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Section from '../Layout/Section'

import { signup, login } from '../../services'

class UserForm extends Component {
  state = {
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
      if (this.props.formText.page === 'Sign Up') {
        await signup(this.state)
        this.props.history.push('/')
      } else {
        console.log('Login not prepared')
      }
    } catch (error) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(error.message)
    }
  }

  isFormInvalid() {}
  render() {
    const { formText } = this.props
    return (
      <Section>
        <div className="mt6 tc flex flex-column check">
          <h1 className="pa3 text-h2 tc">{formText.page}</h1>
          <form className="w-100" action="" autoComplete="off">
            <div className="ma4 input">
              <label className="mr2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                placeholder="Username"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ma4 input">
              <label className="mr2" htmlFor="username">
                Password
              </label>
              <input
                id="password"
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="flex flex-end justify-center">
              <div className="w-50 flex justify-center items-center">
                <Link to="/login" className="">
                  {formText.altText}
                </Link>
              </div>
              <div className="w-50">
                <button
                  className="ph3 pv2"
                  type="submit"
                  value="Submit"
                  onClick={this.handleSubmit}
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
