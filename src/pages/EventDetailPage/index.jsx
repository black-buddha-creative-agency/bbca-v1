import React from 'react'
import Section from '../../components/Layout/Section'
import left from '../../SVG/hero.jpg'
const EventDetailPage = props => {
  return (
    <Section>
      <div className="section-container">
        <article className="grid-layout grid-container--content">
          <div className=" grid-block--title flex flex-column">
            <div>
              <h1 className="text-h2 mb5">Event Title</h1>
              <h3 className="mt3 mb4 ">Event Type</h3>
              <hr />
              <div className="mb4 grid-block--title flex flex-column">
                <h4 className="mb1">Artists</h4>

                <div className="flex flex-column">
                  <p className="artists mv2">
                    Hello Goodbor <br />
                    Good Saves <br />
                    Hello Jas <br />
                    Good Techo <br />
                    Hello Bring <br />
                    Goods Seiv <br />
                    Hello Pelsa <br />
                    Good Wirls <br />
                  </p>
                </div>
              </div>
              <div className=" grid-block--title flex flex-column">
                <h4 className="mb1">Curators</h4>

                <div className="flex flex-column">
                  <p className="artists mv2">
                    Hello Goodbor <br />
                    Good Saves <br />
                    Hello Jas <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="event grid-block--content">
            <p className="text-p2">
              We have worked with local artists, curators, and creatives to
              activate spaces. These collaborations have been in the form of
              talks, exhibitions, and others. See our events past and present
              below.
              {props.match.params.slug}
            </p>
          </div>
        </article>
        <div className="w-100 mt4">
          <img
            alt=""
            className=" photo-gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={left}
          />
        </div>
        <div className="w-100 mt4">
          <img
            alt=""
            className=" photo-gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={left}
          />
        </div>
        <div className="w-100 mt4">
          <img
            alt=""
            className=" photo-gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={left}
          />
        </div>
        <div className="w-100 mt4">
          <img
            alt=""
            className=" photo-gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={left}
          />
        </div>
        <div className="mv5 grid-layout grid-container--content">
          <div className=" grid-block--title flex flex-column">
            <h1 className="text-h2 mb5">Partner + Sponsors</h1>
          </div>
          <div className="event grid-block--content">
            <p className="text-p2">
              Thank you to all our partners and sponsors for helping make [event
              title] possible!
            </p>
            <div className="mt5 w-100 flex flex-column">
              <h3 className="artists text-h1">
                Hello Goodbor <br />
                Good Saves <br />
                Hello Jas <br />
                Good Techo <br />
                Hello Bring <br />
                Goods Seiv <br />
                Hello Pelsa <br />
                Good Wirls <br />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default EventDetailPage
