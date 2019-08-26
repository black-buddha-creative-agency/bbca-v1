import React from 'react'
import hero from '../../SVG/hero.jpg'

const Services = () => {
  return (
    <>
      <section class="section services" id="Services">
        <div class="services-container">
          <h1 class="text-h2 white bold">Our Services</h1>
          <div class="services-columns w-row">
            <div class="service-column first w-col w-col-6">
              <div class="services-item--container">
                <div
                  class="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i
                    class="fas fa-microphone"
                    style={{ color: 'white', background: 'transparent' }}
                  ></i>
                </div>
                <p class="text-p2 service-white">Event Hosting</p>
              </div>
              <div class="services-item--container">
                <div
                  class="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i
                    class="fas fa-tasks"
                    style={{ color: 'white', background: 'transparent' }}
                  ></i>
                </div>
                <p class="text-p2 service-white">Event Management</p>
              </div>
              <div class="services-item--container">
                <div
                  class="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i
                    class="fas fa-ruler-combined"
                    style={{ color: 'white', background: 'transparent' }}
                  ></i>
                </div>
                <p class="text-p2 service-white">Framing</p>
              </div>
              <div class="services-item--container">
                <div
                  class="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i
                    class="fas fa-print"
                    style={{ color: 'white', background: 'transparent' }}
                  ></i>
                </div>
                <p class="text-p2 service-white">Vinyl Cutting</p>
              </div>
              <div class="services-item--container bottom">
                <div
                  class="services-icon--container"
                  style={{ background: 'transparent' }}
                >
                  <i
                    class="fas fa-hammer"
                    style={{ color: 'white', background: 'transparent' }}
                  ></i>
                </div>
                <p class="text-p2 service-white">Installation</p>
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
