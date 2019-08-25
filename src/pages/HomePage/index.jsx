import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Services from '../../components/Services'

const HomePage = () => {
  return (
    <>
      <Hero
        text={
          'An agency fostering engagement, education and investment in creative arts'
        }
        image={'home '}
      />
      <About />
      <Services />
    </>
  )
}

export default HomePage
