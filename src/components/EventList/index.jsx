import React, { Component } from 'react'

import events from '../../data/events'
import EventListItem from '../EventListItem'

class EventList extends Component {
  state = {
    events: events
  }

  handleClick = idx => {
    let events = this.state.events

    events[idx].isOpen = !events[idx].isOpen

    this.setState({
      events: events
    })
  }

  render() {
    return (
      <div className="event-list list">
        {events.map((event, idx) => (
          <EventListItem
            isOpen={event.isOpen}
            key={idx}
            idx={idx}
            title={event.title}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    )
  }
}

export default EventList
