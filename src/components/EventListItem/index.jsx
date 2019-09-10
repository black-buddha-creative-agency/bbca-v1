import React from 'react'
import { Link } from 'react-router-dom'

const EventListItem = ({ event, handleClick, idx }) => {
  const { title, content, slug } = event
  const { isopen, eventDate, eventImages, socialLinks } = event.eventMeta
  return (
    <>
      <li
        onClick={() => handleClick(idx)}
        className="event-list--item justify-between pv3 ba bl-0 bb-0 br-0 b--solid b--black-30"
      >
        <p className="text-p1 title">{title}</p>

        <p className="text-h2">{isopen ? '–' : '+'} </p>
      </li>
      {isopen ? (
        <div className="event-detail--container pv3 ba bl-0 bb-0 br-0 b--solid b--black-30">
          <div className="event-detail--content">
            {eventImages ? (
              <img
                className="event-detail--photo"
                src={eventImages[0].sourceUrl}
                alt=""
              />
            ) : (
              <div className="event-detail--photo">No Image Available</div>
            )}
            <div className="event-detail--text ml3 ">
              <div className="flex flex-column">
                <div className="mb4">
                  <h2 className="text-p1">{eventDate}</h2>
                </div>
                <p>{content ? content.replace(/(<([^>]+)>)/gi, '') : null}</p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row mb2">
                  {socialLinks
                    ? socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="mr3 text-p2"
                          href={link.linkUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {link.linkText}
                        </a>
                      ))
                    : null}
                </div>
                <div>
                  <Link to={`/event/${slug}`}>
                    <h3 className="text-p2"> Read More ></h3>
                  </Link>
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
