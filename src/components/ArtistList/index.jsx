import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import ArtistListItem from '../ArtistListItem'

class ArtistList extends Component {
  state = {
    artists: this.props.artists
  }

  render() {
    return this.state.artists.length ? (
      <div className="w-100 artists-3">
        {this.state.artists.map((artist, idx) => (
          <div key={idx}>
            <ArtistListItem artist={artist.node} idx={idx} />
            <br />
          </div>
        ))}
      </div>
    ) : (
      <div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
        <Loader type="Oval" color="#ada4a4" height={80} width={80} />
      </div>
    )
  }
}

export default ArtistList
