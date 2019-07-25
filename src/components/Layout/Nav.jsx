// * import ReactJS library components
import React from 'react'

// * import bespoke react components
import menu from '../../data/menu'
import NavItem from './NavItem'

const Nav = props => {
  return (
    <div class="nav-container">
      {menu.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </div>
  )
}

export default Nav
