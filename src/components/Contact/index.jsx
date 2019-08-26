import React from 'react'

const Contact = () => {
  return (
    <section class="section" id="Contact">
      <div class="section-container footer-bottom">
        <div class="grid-layout grid-container--content">
          <div class="grid-block--title">
            <h1 class="text-h2">Contact</h1>
          </div>
          <div class="grid-block--content">
            <p class="text_p2">
              We are located in the historic Third Ward area of Houston and
              surrounded by cafes, bars, and creative businesses. Contact us to
              arrange a quick chat about your next event or to view selected
              works.
              <br />
              <br />
              Call us
              <br />
              <a class="text_p2 event-link" href="tel:7135452011">
                713 545 2011
              </a>
              <br />
              <br />
              Email us
              <br />
              <a
                class="text_p2 event-link"
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
