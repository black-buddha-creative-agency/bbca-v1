import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Section from '../../components/Layout/Section'
import ArtistList from '../../components/ArtistList'
import Loader from 'react-loader-spinner'

const ArtistPage = props => {
  return (
    <Section>
      <div className="section-container">
        <article className="grid-layout grid-container--content">
          <div className="grid-block--title">
            <h1 className="text-h2">Artists</h1>
          </div>
          <div className="artist-block grid-block--content">
            <Query
              query={gql`
                {
                  artists {
                    edges {
                      node {
                        title
                        artistMeta {
                          link
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
                return <ArtistList artists={data.artists.edges} />
              }}
            </Query>
          </div>
        </article>
      </div>
    </Section>
  )
}

export default ArtistPage
