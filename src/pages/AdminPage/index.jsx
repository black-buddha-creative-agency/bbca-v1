import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Contact from '../../components/Contact'
import Header from '../../components/Layout/Header'
import menu from '../../data/menu'

class AdminPage extends Component {
  state = {}
  dashboardMenu = menu.slice(0, 2)
  render() {
    return (
      <div className="tc mt5">
        <h1 className="text-h2">Admin Panel</h1>
        <div className="mt3 pa3 flex flex-row justify-between">
          <Link to={this.props.match.url}>Dashboard</Link>
          {this.dashboardMenu.map(menuItem => (
            <Link to={`${this.props.match.url}/${menuItem.children}`}>
              {menuItem.children}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default AdminPage
