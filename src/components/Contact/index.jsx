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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              possimus exercitationem velit sapiente quaerat mollitia omnis
              porro aliquam, nemo quos rem dolorum temporibus beatae
              dignissimos.
              <br />
              <br />
              Call us
              <br />
              <a className="text_p2 event-link" href="tel:5555555555">
                555 555 5555
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
