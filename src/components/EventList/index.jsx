import React, { Component } from 'react'
import { getAllEvents } from '../../services/events'
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
    return (
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
    )
  }
}

export default EventList
