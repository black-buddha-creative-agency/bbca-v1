import React from 'react'

const Contact = () => {
  return (
    <section className="section" id="Contact">
      <div className="section-container footer-bottom">
        <div className="grid-layout grid-container--content">
          <div className="grid-block--title">
            <h1 className="text-h2">Contact</h1>
          </div>
          <div className="grid-block--content">
            <p className="text_p2">
              We are located in the historic Third Ward area of Houston and
              surrounded by cafes, bars, and creative businesses. Contact us to
              arrange a quick chat about your next event or to view selected
              works.
              <br />
              <br />
              Call us
              <br />
              <a className="text_p2 event-link" href="tel:7135452011">
                713 545 2011
              </a>
              <br />
              <br />
              Email us
              <br />
              <a
                className="text_p2 event-link"
                href="mailto:india@blackbuddha.agency"
              >
                india@blackbuddha.agency
                <br />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
