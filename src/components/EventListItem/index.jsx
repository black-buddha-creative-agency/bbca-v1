import React from 'react'
import { Link } from 'react-router-dom'

const EventListItem = ({ event, handleClick, idx }) => {
  const { title, date, sponsors, artists, curators, slug } = event
  const { isopen } = event.eventMeta
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
            <div className="event-detail--photo mr3"></div>
            <div className="event-detail--text ml3 ">
              <div className="event-detail--header">
                <div className="flex flex-column">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate vel rerum, impedit inventore dignissimos unde sit
                    sequi? Eius ea, molestiae, earum officiis voluptate unde,
                    debitis a ipsa eaque recusandae nesciunt quia deserunt? Quas
                    saepe culpa, ad, suscipit accusamus quod, animi explicabo
                    laboriosam natus distinctio temporibus eum autem reiciendis
                    impedit officiis. Impedit culpa harum nulla numquam natus
                    dolorem obcaecati accusantium sit accusamus autem illum
                    sint, nesciunt id tempora. Neque delectus error nesciunt
                    necessitatibus quae eaque fuga eum commodi, perspiciatis
                    itaque a sunt culpa explicabo aspernatur veniam magnam
                    ratione laudantium soluta recusandae, aliquam dicta?
                    Consectetur quo ullam ut corporis nobis veritatis sed.
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row mb1">
                  <a className="mr2" href="/">
                    <p className="text-p2">Link</p>
                  </a>
                  <a className="mr2" href="/">
                    <p className="text-p2">Link</p>
                  </a>
                  <a className="mr2" href="/">
                    <p className="text-p2">Link</p>
                  </a>
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
