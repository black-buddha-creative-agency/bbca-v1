import React, { Component } from 'react'
import Header from '../../components/Layout/Header'
import Section from '../../components/Layout/Section'
import { Link } from 'react-router-dom'
import { login } from '../../services/'

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  formText = {
    page: 'Login',
    altText: 'Register an account',
    link: '/signup'
  }

  handleChange = event => {
    this.updateMessage('')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
  }

  updateMessage = msg => {
    this.setState({ message: msg })
  }

  isFormInvalid() {
    return !(this.state.username && this.state.password)
  }

  render() {
    const { username, password } = this.state
    const { page, altText, link } = this.formText
    return (
      <>
        <Header />
        <Section>
          <div className="mt6 tc flex flex-column  check">
            <h1 className="pa3 text-h2 tc">{page}</h1>
            <form className="w-100" action="" autoComplete="off">
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

              <div className="ma4 flex justify-between">
                <div className="mr2 flex items-center justify-center">
                  <Link to={link} className="">
                    {altText}
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
                    {page}
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

export default LoginPage
