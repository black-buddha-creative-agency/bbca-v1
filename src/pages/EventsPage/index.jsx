import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

import Section from '../../components/Layout/Section'
import EventList from '../../components/EventList'
import Loader from 'react-loader-spinner'

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
          <Query
            query={gql`
              {
                events {
                  edges {
                    node {
                      title
                      slug
                      eventMeta {
                        isopen
                      }
                    }
                  }
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
                    <Loader
                      type="Oval"
                      color="#ada4a4"
                      height={80}
                      width={80}
                    />
                  </div>
                )
              }
              console.log(data)
              return <EventList events={data.events.edges} />
            }}
          </Query>
        </div>
      </div>
    </Section>
  )
}

export default EventPage
