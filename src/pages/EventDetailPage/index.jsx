import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Loader from 'react-loader-spinner'
import Section from '../../components/Layout/Section'
import left from '../../SVG/hero.jpg'

class EventDetailPage extends Component {
  state = {}
  render() {
    const props = this.props

    const { loading } = this.props.data

    console.log(props, loading)
    return (
      <Section>
        <div className="section-container">
          {loading ? (
            <div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
              <Loader type="Oval" color="#ada4a4" height={80} width={80} />
            </div>
          ) : (
            <>
              <article className="mb4 grid-layout grid-container--content">
                <div className="grid-block--title flex flex-column">
                  <div>
                    <h1 className="text-h2 mb5 text-accent--2">
                      {props.data.event.title}
                    </h1>
                    {props.data.event.eventMeta.exhibitionType.length > 1 ? (
                      props.data.event.eventMeta.exhibitionType.map(
                        (type, idx) => (
                          <h3 className="mt3 mb2" key={idx}>
                            {type}
                          </h3>
                        )
                      )
                    ) : (
                      <h3 className="mt3 mb2">
                        {props.data.event.eventMeta.exhibitionType}
                      </h3>
                    )}
                    <hr />
                    <div className="mb4 grid-block--title flex flex-column">
                      <h4 className="mb1">Artists</h4>

                      <div className="flex flex-column">
                        <p className="artists mv2">
                          {props.data.event.eventMeta.artists.map(
                            (artist, idx) => (
                              <span key={idx}>
                                {artist} <br />
                              </span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                    <div className=" grid-block--title flex flex-column">
                      <h4 className="mb1">
                        {props.data.event.eventMeta.curators.length > 2
                          ? 'Curators'
                          : 'Curator'}
                      </h4>

                      <div className="flex flex-column">
                        <p className="artists mv2">
                          {props.data.event.eventMeta.curators.map(
                            (curator, idx) => (
                              <span key={idx}>
                                {curator} <br />
                              </span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="event grid-block--content">
                  <p className="text-p2">
                    {props.data.event.content
                      ? props.data.event.content.replace(/(<([^>]+)>)/gi, '')
                      : null}
                  </p>
                </div>
              </article>
              <div className="">
                {props.data.event.eventMeta.eventImages
                  ? props.data.event.eventMeta.eventImages.map((image, idx) => (
                      <div key={idx} className="fl w-100 w-50-ns pa2">
                        <img
                          alt=""
                          className=" photo-gallery"
                          sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
                          src={image.sourceUrl}
                        />
                      </div>
                    ))
                  : null}
              </div>

              <div className="mv5 grid-layout grid-container--content">
                <div className=" grid-block--title flex flex-column">
                  <h1 className="text-h2 mb5">Partner + Sponsors</h1>
                </div>
                <div className="event grid-block--content">
                  <p className="text-p2">
                    Thank you to all our partners and sponsors for helping make{' '}
                    {props.data.event.title} possible!
                  </p>
                  <div className="mt5 w-100 flex flex-column">
                    <h3 className="artists text-p1">
                      {props.data.event.eventMeta.sponsors.map(
                        (sponsor, idx) => (
                          <span key={idx}>
                            {sponsor} <br />
                          </span>
                        )
                      )}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Section>
    )
  }
}
const getEventBySlug = gql`
  query getEventBySlug($slug: String) {
    event: eventBy(uri: $slug) {
      title
      content
      eventMeta {
        exhibitionType
        artists
        curators
        sponsors
        eventDate
        activations
        eventImages {
          sourceUrl
        }
      }
    }
  }
`
export default graphql(getEventBySlug, {
  options: props => {
    const slug = props.match.params.slug
    return {
      variables: {
        slug
      }
    }
  }
})(EventDetailPage)
