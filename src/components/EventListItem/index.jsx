import React from 'react'

const EventListItem = ({ event, handleClick, idx }) => {
  const { title, date, sponsors, artists, curators, isOpen } = event
  let currentYear = new Date().getFullYear()
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
          <div className="event-detail--content">
            <div className="event-detail--photo mr3"></div>
            <div className="event-detail--text ml3 ">
              <div className="event-detail--header">
                <h2 className="text-p1">
                  {date.year >= currentYear
                    ? 'What is the plan?'
                    : 'What was the plan?'}
                </h2>
                <div className=" date flex flex-column tr">
                  <h2 className="text-p1">
                    {date.month.slice(0, 3)} {date.year}
                  </h2>
                </div>
              </div>
              <div className="mb5 pv3 ba bl-0 bb-0 br-0 b--solid b--black-30">
                <div className=" mv3 flex flex-column">
                  <p className="text-p2">Sponsors</p>
                  <div className="mv3 flex flex-row">
                    {sponsors.map(sponsor => (
                      <a
                        className="mr3 pv2"
                        href={sponsor.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {sponsor.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mv3 flex flex-column">
                  <p className="text-p2">Artists</p>
                  <div className="mv3 flex flex-column">
                    <p className="artists mv2">
                      {artists.map(artist => (
                        <>
                          {artist}
                          <br />
                        </>
                      ))}
                    </p>
                  </div>
                </div>
                <div className=" mv3 flex flex-column">
                  <p className="text-p2">Curatorial</p>
                  <div className="mv3 flex flex-row">
                    {curators.map(curator => (
                      <p className="mr3 pv2">{curator}</p>
                    ))}
                  </div>
                </div>
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
