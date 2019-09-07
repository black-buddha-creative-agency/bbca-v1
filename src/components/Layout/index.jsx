import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer handleLogout={props.handleLogout} user={props.user} />
    </>
  )
}

export default Layout
