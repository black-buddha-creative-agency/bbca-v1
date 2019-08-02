import React from 'react'

const Hero = ({ body, title, href, arrowImage }) => {
  return (
    <>
      <section className="section-hero">
        <div className="section-container--hero">
          <div className="grid-layout grid-container--hero">
            <div className="grid-block--hero grid-span">
              <h1 className="mb5">{title}</h1>
              <h1 className="text-h1">{body}</h1>
            </div>
          </div>
        </div>
        <div className="hero-arrow--section">
          <a href={href} className="hero-arrow--link-block">
            <img
              src={require(`../../SVG/${arrowImage}`)}
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
    </>
  )
}

export default Hero
