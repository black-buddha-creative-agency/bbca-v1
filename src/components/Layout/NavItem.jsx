import React from 'react'
import { NavLink } from 'react-router-dom'


const NavItem = ({className, to, children }) => {
    return ( 
        <li>
            <NavLink exact to={to} className={className}>
                Link 1
            </NavLink>
        </li>
     );
}
 
export default NavItem;