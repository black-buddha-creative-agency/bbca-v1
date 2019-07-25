// * import ReactJS library components
import React from 'react'

// * import bespoke react components
import footer from '../../data/footer'
import NavItem from './NavItem'

const Footer = props => {
  return (
    <footer>
      {footer.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </footer>
  )
}

export default Footer
