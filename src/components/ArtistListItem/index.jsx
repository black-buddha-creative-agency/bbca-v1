import React from 'react'

const ArtistListItem = ({ artist, idx }) => {
  const { title, artistMeta } = artist
  const { link } = artistMeta
  return (
    <div className="mv2 mr4">
      {link ? (
        <a
          className="artist-list--item"
          style={{ cursor: 'ne-resize' }}
          rel="noopener noreferrer"
          target="_blank"
          href={`https://${link}`}
        >
          <h3>{title}</h3>
        </a>
      ) : (
        <a className="artist-list--item" style={{ cursor: 'default' }} href="#">
          <h3>{title}</h3>
        </a>
      )}
    </div>
  )
}

export default ArtistListItem
