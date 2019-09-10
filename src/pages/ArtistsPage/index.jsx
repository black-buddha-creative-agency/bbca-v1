import React from 'react'
import Section from '../../components/Layout/Section'
import ArtistList from '../../components/ArtistList'


const ArtistPage = props => {
  return (
    <Section>
      <div className="section-container">
        <article className="grid-layout grid-container--content">
          <div className="grid-block--title">
            <h1 className="text-h2">Artists</h1>
          </div>
          <div className="grid-block--content">
            <ArtistList />
          </div>
        </article>
      </div>
    </Section>
  )
}

export default ArtistPage
