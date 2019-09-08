import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Contact from '../../components/Contact'
import Header from '../../components/Layout/Header'

const Test = ({ match }) => {
  return <div className="tc">{match.params.id}</div>
}

class AdminPage extends Component {
  state = {}
  render() {
    return (
      <div className="tc mt5">
        <h1 className="text-h2">Admin Panel</h1>
        <div className="mt3 pa3 flex flex-row justify-between">
          <Link to={this.props.match.url}>Dashboard</Link>
          <Link to={`${this.props.match.url}/events`}>Events</Link>
          <Link to={`${this.props.match.url}/artists`}>Artists</Link>
        </div>
      </div>
    )
  }
}

export default AdminPage
