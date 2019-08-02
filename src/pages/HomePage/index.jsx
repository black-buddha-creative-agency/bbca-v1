import React from 'react'
import Hero from '../../components/Hero'
import About from '../AboutPage'
import Services from '../ServicesPage'
import Contact from '../ContactPage'
import hero from '../../SVG/hero.jpg'
const HomePage = () => {
  return (
    <>
      <Hero
        title={null}
        body={
          ' An agency fostering engagement, education and investment in creative arts'
        }
        href={'#About'}
        heroImage={'hero.jpg'}
        arrowImage={'Arrow.svg'}
      />
      <section className="mobile-hero--image">
        <img
          className="image-break"
          src={hero}
          alt="mobile-hero"
          sizes="100vw"
        />
      </section>
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default HomePage
