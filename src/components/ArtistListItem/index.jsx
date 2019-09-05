import React from 'react'

const ArtistListItem = ({ artist, onHover, idx }) => {
  const { first_name, last_name, link } = artist
  return (
    <>
      <div>
        <a rel="noopener noreferrer" target="_blank" href={`https://${link}`}>
          <h2 className="text-h2 artist-list--item">{`${first_name} ${last_name}`}</h2>
        </a>
      </div>
    </>
  )
}

export default ArtistListItem
