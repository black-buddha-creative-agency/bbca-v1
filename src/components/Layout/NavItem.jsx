import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ className, activeClass, to, children }) => {
  return (
    <NavLink exact to={to} className={className} activeClassName={activeClass}>
      {children}
    </NavLink>
  )
}

export default NavItem
