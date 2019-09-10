import React from 'react'
import Section from '../../components/Layout/Section'
import EventList from '../../components/EventList'

const EventPage = props => {
  return (
    <Section>
      <div className="section-container">
        <article className="grid-layout grid-container--content">
          <div className="grid-block--title">
            <h1 className="text-h2">Events</h1>
          </div>
          <div className="grid-block--content">
            <p className="text-p2">
              We have worked with local artists, curators, and creatives to
              activate spaces. These collaborations have been in the form of
              talks, exhibitions, and others. See our events past and present
              below.
            </p>
          </div>
        </article>
        <div className="mt5 event-list--container">
          <EventList />
        </div>
      </div>
    </Section>
  )
}

export default EventPage
