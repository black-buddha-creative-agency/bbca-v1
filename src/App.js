import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import ArtistsPage from './pages/ArtistsPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import userService from './services/User'

class App extends Component {
  state = {
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <HomePage user={this.state.user} handleLogout={this.handleLogout} />
          )}
        />
        <Route
          exact
          path="/events"
          render={props => (
            <EventsPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/artists"
          render={props => (
            <ArtistsPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignUpPage
              history={history}
              user={this.state.user}
              handleLogout={this.handleLogout}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              user={this.state.user}
              handleLogout={this.handleLogout}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route path="/buddha" render={props => <AdminPage {...props} />} />
      </Router>
    )
  }
}

export default App
