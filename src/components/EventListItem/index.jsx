import React from 'react'

const EventListItem = ({ event, handleClick, idx }) => {
  const { title, year, sponsors, artists, curators, isOpen } = event
  return (
    <>
      <li
        onClick={() => handleClick(idx)}
        className="event-list--item justify-between pv3 ba bl-0 bb-0 br-0 b--dotted b--black-30"
      >
        <p className="text-p1">{year}</p>
        <p className="text-p1">{title} </p>
        <p className="text-h2">{isOpen ? '–' : '+'} </p>
      </li>
      {isOpen ? <div>ok</div> : null}
    </>
  )
}

export default EventListItem
