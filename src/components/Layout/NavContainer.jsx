// * import ReactJS library components
import React from 'react'

// * import bespoke react components
import menu from '../../data/menu'
import NavItem from './NavItem'

const NavContainer = props => {
  return (
    <div className="nav-container">
      <div className="nav-columns row">
        <div className="nav-column--logo">
          <h1 className="text-h2">
            BB<span className="text-accent">CA</span>
          </h1>
        </div>
      </div>
      <div className="nav-column--links">
        {menu.map((item, idx) => (
          <NavItem key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default NavContainer
