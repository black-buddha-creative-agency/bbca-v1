import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Section from '../../components/Layout/Section'
import Header from '../../components/Layout/Header'

class SignUpPage extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log('signup handleSubmit, username ')
    console.log(this.state.username)
    event.preventDefault()

    //Server request
    axios
      .post('http://www.localhost:3001/users/signup', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('signup success!')
          this.setState({
            username: '',
            password: '',
            redirectTo: '/login'
          })
        } else {
          console.log('username already taken')
        }
      })
      .catch(error => {
        console.log('signup error:')
        console.log(error)
      })
  }

  render() {
    return (
      <>
        <Header />
        <Section>
          <div className="mt6 tc flex flex-column check">
            <h1 className="pa3 text-h2 tc">Sign Up</h1>
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
                    Log in instead?
                  </Link>
                </div>
                <div className="w-50">
                  <button
                    className="ph3 pv2"
                    type="submit"
                    value="Submit"
                    onClick={this.handleSubmit}
                  >
                    Submit{' '}
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

export default SignUpPage
