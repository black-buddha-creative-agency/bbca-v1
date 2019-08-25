import React from 'react'
import hero from '../../SVG/hero.jpg'

const Services = () => {
  return (
    <>
      <section className="section services">
        <div className="services-container">
          <h1 className="text-h2 white bold">Our Services</h1>
          <div className="services-columns w-row">
            <div className="service-column first w-col w-col-6">
              <div className="services-item--container">
                <div
                  className="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i className="fas fa-hammer" />
                </div>
                <p className="text-p2 service-white">
                  Installation/De-installation
                </p>
              </div>
              <div className="services-item--container">
                <div
                  className="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i className="fas fa-ruler-combined" />
                </div>
                <p className="text-p2 service-white">Framing</p>
              </div>
              <div className="services-item--container">
                <div
                  className="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i className="fas fa-camera-retro" />
                </div>
                <p className="text-p2 service-white">Fine Art Photography</p>
              </div>
              <div className="services-item--container bottom">
                <div
                  className="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i className="fas fa-i-cursor" />
                </div>
                <p className="text-p2 service-white">Curatorial Writing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section image-breaker">
        <img
          alt=""
          className="imagebreak"
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, 99vw"
          src={hero}
        />
      </section>
    </>
  )
}

export default Services
