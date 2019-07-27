import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import HomePage from './pages/HomePage'

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" render={() => <HomePage />} />
        </Layout>
      </Router>
    )
  }
}

export default App
