import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Services from '../../components/Services'
import Layout from '../../components/Layout/'

const HomePage = props => {
  return (
    <Layout handleLogout={props.handleLogout} user={props.user}>
      <Hero
        text={
          'An agency fostering engagement, education and investment in creative arts'
        }
        image={'home '}
      />
      <About />
      <Services />
    </Layout>
  )
}

export default HomePage
