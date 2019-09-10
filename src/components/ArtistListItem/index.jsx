import React from 'react'

const ArtistListItem = ({ artist, idx }) => {
  const { title, artistMeta } = artist
  const { link } = artistMeta
  return (
    <div className="mb3 mr4">
      {link ? (
        <a
          className="artist-list--item"
          style={{ cursor: 'ne-resize' }}
          rel="noopener noreferrer"
          target="_blank"
          href={`https://${link}`}
        >
          {title}
        </a>
      ) : (
        <a style={{ cursor: 'default' }} href="#">
          {title}
        </a>
      )}
    </div>
  )
}

export default ArtistListItem
