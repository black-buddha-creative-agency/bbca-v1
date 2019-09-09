import React from 'react'
import Section from '../../components/Layout/Section'
import ArtistList from '../../components/ArtistList'
import Layout from '../../components/Layout/'

const ArtistPage = props => {
  return (
    <Layout handleLogout={props.handleLogout} user={props.user}>
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
    </Layout>
  )
}

export default ArtistPage
