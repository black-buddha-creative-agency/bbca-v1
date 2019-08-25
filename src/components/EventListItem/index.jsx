import React from 'react'

const EventListItem = ({ title, handleClick }) => {
  return (
    <li
      onClick={handleClick}
      className="event-list--item justify-between pv3 ba bl-0 bb-0 br-0 b--dotted b--black-30"
    >
      <p className="text-p1 ">{title}</p>

      <p className="text-h2">+</p>
    </li>
  )
}

export default EventListItem
