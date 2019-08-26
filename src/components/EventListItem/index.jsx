import React from 'react'

const EventListItem = ({ event, handleClick, idx }) => {
  const { title, year, sponsors, artists, curators, isOpen } = event
  return (
    <>
      <li
        onClick={() => handleClick(idx)}
        className="event-list--item justify-between pv3 ba bl-0 bb-0 br-0 b--solid b--black-30"
      >
        <p className="text-p1 title">{title}</p>

        <p className="text-h2">{isOpen ? '–' : '+'} </p>
      </li>
      {isOpen ? (
        <div className="event-detail--container pv3 ba bl-0 bb-0 br-0 b--solid b--black-30">
          <div className="event-detail--content flex flex-row">
            <div className="event-detail--photo mr3"></div>
            <div className=" flex flex-column  justify-between event-detail--text ml3 ">
              <div className="mb5 flex flex-row justify-between">
                <h2 className="text-p1">What is the plan?</h2>
                <div className="flex flex-column tr">
                  <h2 className="text-p1">{year}</h2>
                  <p>18:30 – 19:30</p>
                </div>
              </div>
              <div className="mb5 pv3 ba bl-0 bb-0 br-0 b--solid b--black-30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati, qui accusamus! Nostrum doloribus, vitae, accusamus
                natus inventore esse, beatae ad tenetur quaerat laborum odit
                enim ex quia. Ab delectus inventore dolore, nostrum consectetur
                cupiditate blanditiis natus dolores enim maxime omnis excepturi,
                voluptatem dicta officia distinctio magnam deleniti corrupti
                nisi at!
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <a className="mr2" href="/">
                    Link
                  </a>
                  <a className="mr2" href="/">
                    Link
                  </a>
                  <a className="mr2" href="/">
                    Link
                  </a>
                </div>
                <div>
                  <a href="/">
                    <h2 className="text-p2"> Read More ></h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EventListItem
