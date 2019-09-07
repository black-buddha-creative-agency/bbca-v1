import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import ArtistsPage from './pages/ArtistsPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import data from './services/'

class App extends Component {
  state = {
    user: data.getUser()
  }

  handleLogout = () => {
    data.logout()
    this.setState({ user: null })
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
          render={props => (
            <SignUpPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <LoginPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
        />
        <Route
          exact
          path="/buddha"
          render={() => (
            <AdminPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
        />
      </Router>
    )
  }
}

export default App
