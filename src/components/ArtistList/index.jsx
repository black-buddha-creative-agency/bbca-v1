import React, { Component } from 'react'
import data from '../../services/'
import ArtistListItem from '../ArtistListItem'

class ArtistList extends Component {
  state = {
    artists: []
  }
  onHover = idx => {
    console.log(`${idx} is being hovered on boi`)
  }
  async handleGetArtists() {
    const artists = await data.getAllArtists()
    this.setState({ artists })
  }
  async componentDidMount() {
    this.handleGetArtists()
  }

  render() {
    return (
      <div className="artists">
        {this.state.artists.map((artist, idx) => (
          <ArtistListItem
            artist={artist}
            key={artist._id}
            idx={idx}
            onHover={this.onHover}
          />
        ))}
      </div>
    )
  }
}

export default ArtistList
