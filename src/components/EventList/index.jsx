import React, { Component } from 'react'

import events from '../../data/events'
import EventListItem from '../EventListItem'

class EventList extends Component {
  state = {
    events: events
  }

  handleClick = idx => {
    this.setState({events: [!!this.state.event]})
  }
  render() {
    return (
      <div className="event-list list">
        {this.state.events.map((event, idx) => (
          <EventListItem title={event.title} handleClick={this.handleClick} />
        ))}
      </div>
    )
  }
}

export default EventList
