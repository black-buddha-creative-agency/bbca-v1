import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Section from '../../components/Layout/Section'
import Header from '../../components/Layout/Header'

class SignUpPage extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    redirectTo: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    //Server request
    event.preventDefault()
    console.log('handleSubmit login')

    axios
      .post('http://www.localhost:3001/users/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/'
          })
        }
      })
      .catch(error => {
        console.log('login error: ')
        console.log(error)
      })
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <>
          <Header />
          <Section>
            <div className="mt6 tc flex flex-column check">
              <h1 className="pa3 text-h2 tc">Log In</h1>
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
                    <Link to="/signup" className="">
                      Register?
                    </Link>
                  </div>
                  <div className="w-50">
                    <button
                      className="ph3 pv2"
                      type="submit"
                      value="Submit"
                      onClick={this.handleSubmit}
                    >
                      Log in{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Section>
        </>
      )
    }
  }
}

export default SignUpPage
