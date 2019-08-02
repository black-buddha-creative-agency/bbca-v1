import React from 'react'
import Hero from '../../components/Hero'
import About from '../AboutPage'
import Services from '../ServicesPage'
import Contact from '../ContactPage'

const HomePage = () => {
  return (
    <>
      <Hero
        title={null}
        body={
          ' An agency fostering engagement, education and investment in creative arts'
        }
        href={'#About'}
      />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage
