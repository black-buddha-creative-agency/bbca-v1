import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Loader from 'react-loader-spinner'
import Section from '../../components/Layout/Section'

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
                    <h2 className="text-accent">
                      {props.data.event.eventMeta.eventDate}
                    </h2>
                    <div className="ba bw2 br-0 bb-0 bl-0 b--black b--solid pt3 mb4 grid-block--title flex flex-column">
                      <div className="mt3 mb4 flex flex-row ">
                        {props.data.event.eventMeta.exhibitionType.length >
                        1 ? (
                          props.data.event.eventMeta.exhibitionType.map(
                            (type, idx) => (
                              <p
                                className="mr2"
                                style={{ textDecoration: 'underline' }}
                                key={idx}
                              >
                                {type}
                              </p>
                            )
                          )
                        ) : (
                          <h3 className="mt3 mb2 ">
                            {props.data.event.eventMeta.exhibitionType}
                          </h3>
                        )}
                      </div>

                      <p className="mb2 text-accent">Artists</p>

                      <div className="flex flex-column">
                        <div className="artists mv2">
                          {props.data.event.eventMeta.artists.map(
                            (artist, idx) => (
                              <h5 className="pv2" key={idx}>
                                {artist} <br />
                              </h5>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className=" grid-block--title flex flex-column">
                      <p className="mb2 text-accent">
                        {props.data.event.eventMeta.curators.length > 2
                          ? 'Curators'
                          : 'Curator'}
                      </p>

                      <div className="flex flex-column">
                        <div className="artists mv2">
                          {props.data.event.eventMeta.curators.map(
                            (curator, idx) => (
                              <h5 className="pv2" key={idx}>
                                {curator} <br />
                              </h5>
                            )
                          )}
                        </div>
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
              <div className="flex flex-wrap justify-center items-center">
                {props.data.event.eventMeta.eventImages
                  ? props.data.event.eventMeta.eventImages.map((image, idx) => (
                      <div key={idx} className="pa2 w-100-m w-50-ns">
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

              {props.data.event.title === 'Collect It For The Culture II' ? (
                <div className="w-100 mt2">
                  <iframe
                    src="https://my.matterport.com/show/?m=rynrg7qeaEo&utm_source=4"
                    frameBorder="0"
                  />
                </div>
              ) : null}

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
                          <h5 className="pv2" key={idx}>
                            {sponsor} <br />
                          </h5>
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
