import React, { Component } from 'react'

import EventListItem from '../EventListItem'
import Loader from 'react-loader-spinner'

class EventList extends Component {
  state = {
    events: this.props.events
  }
  
  handleClick = idx => {
    let events = this.state.events
    let index = idx
    console.log(events)
    events.forEach((event, idx) => {
      if (idx === index) {
        events[idx].node.eventMeta.isopen = !events[idx].node.eventMeta.isopen
      } else {
        event.node.eventMeta.isopen = false
      }
    })

    this.setState({
      events: events
    })
  }
  render() {
    return this.state.events.length ? (
      <div className="event-list list fadeIn">
        {this.state.events.map((event, idx) => (
          <EventListItem
            event={event.node}
            key={event.node.slug}
            idx={idx}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    ) : (
      <div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
        <Loader type="Oval" color="#ada4a4" height={80} width={80} />
      </div>
    )
  }
}

export default EventList
