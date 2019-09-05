import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import ArtistsPage from './pages/ArtistsPage'
import SignUpPage from './pages/SignUpPage'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/events" render={() => <EventsPage />} />
        <Route exact path="/artists" render={() => <ArtistsPage />} />

        <Route exact path="/signup" component={SignUpPage} />
      </Router>
    )
  }
}

export default App
