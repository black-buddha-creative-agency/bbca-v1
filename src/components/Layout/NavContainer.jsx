// * import ReactJS library components
import React from 'react'
import { Link } from 'react-router-dom'
// * import bespoke react components
import menu from '../../data/menu'
import NavItem from './NavItem'

const NavContainer = () => {
  return (
    <div className="nav-container">
      <div className="nav-columns row">
        <div className="nav-column--logo">
          <Link to="/">
            {' '}
            <h1 className="text-h2">
              BB<span className="text-accent">CA</span>
            </h1>
          </Link>
        </div>
        <div className="nav-column--links">
          <a href="/#About" className="nav-link">
            About
          </a>
          {menu.map((item, idx) => (
            <NavItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavContainer
