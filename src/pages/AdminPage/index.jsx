import React from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom'

const Test = ({ match }) => {
  return (
    <div className="mt7 tc">
      {console.log(match)}
      <p>slug = {match.params.id}</p>
    </div>
  )
}

const AdminPage = ({ match }) => {
  return (
    <>
      <div className="mt5 tc">
        <h1 className="text-h2">Admin Panel</h1>
        <ul>
          <li>
            <Link to={`${match.url}/test`}>Test</Link>
          </li>
        </ul>
      </div>
      <Route path={`${match.path}/:id`} component={Test} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </>
  )
}

export default AdminPage
