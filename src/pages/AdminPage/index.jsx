import React, { Component } from 'react'

class AdminPage extends Component {
  state = {
    user: this.props.user.user
  }
  render() {
    return (
      <div className="mt5 tc">
        <h1 className=" text-h2">Admin Panel {this.state.user.first_name}</h1>
      </div>
    )
  }
}

export default AdminPage
