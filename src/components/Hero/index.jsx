import React from 'react'
import arrow from '../../SVG/Arrow.svg'
import hero from '../../SVG/hero.jpg'
const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="section-container--hero">
          <div className="grid-layout grid-container--hero">
            <div className="grid-block--hero grid-span">
              <h1 className="text-h1">
                An agency fostering engagement, education and investment in
                creative arts
              </h1>
            </div>
          </div>
        </div>
        <div className="hero-arrow--section">
          <a href="#About" className="hero-arrow--link-block">
            <img
              src={arrow}
              alt="arrow"
              className="herodownarrow"
              width="13.5"
            />
          </a>
        </div>
        <div className="hero-image--wrapper">
          <div className="hero-image--container" />
        </div>
      </section>
      <section className="mobile-hero--image">
        <img
          className="image-break"
          src={hero}
          alt="mobile-hero"
          sizes="100vw"
        />
      </section>
    </>
  )
}

export default Hero
