import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Services from '../../components/Services'

const HomePage = props => {
  return (
    <main className="fadeIn">
      <Hero
        text={
          'An agency fostering engagement, education and investment in creative arts'
        }
        image={'home '}
      />
      <About />
      <Services />
    </main>
  )
}

export default HomePage
