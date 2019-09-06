import React, { Component } from 'react'
import { getAllEvents } from '../../services'
import EventListItem from '../EventListItem'

class EventList extends Component {
  state = {
    events: []
  }

  handleClick = idx => {
    let events = this.state.events
    let index = idx
    events.forEach((event, idx) => {
      if (idx === index) {
        events[idx].isOpen = !events[idx].isOpen
      } else {
        event.isOpen = false
      }
    })

    this.setState({
      events: events
    })
  }
  async handleGetEvents() {
    const events = await getAllEvents()
    this.setState({ events })
  }
  async componentDidMount() {
    this.handleGetEvents()
  }

  render() {
    return this.state.events.length ? (
      <div className="event-list list">
        {this.state.events.map((event, idx) => (
          <EventListItem
            event={event}
            key={event._id}
            idx={idx}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    ) : (
      <div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
        <h2 className="text-h2">No events to show...check back soon!</h2>
      </div>
    )
  }
}

export default EventList
