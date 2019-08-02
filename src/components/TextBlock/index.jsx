import React from 'react'

const TextBlock = ({ title, p1, p2, p3 }) => {
  return (
    <div className="section-container">
      <article className="grid-layout grid-container--content">
        <div className="grid-block--title">
          <h1 className="text-h2">{title}</h1>
        </div>
        <div class="grid-block--content">
          <p class="text-p2">
            {p1}
            <br />
            <br />
            {p2}
            <br />
            <br />
            {p3}
          </p>
        </div>
      </article>
    </div>
  )
}

export default TextBlock
