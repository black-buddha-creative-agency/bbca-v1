// * import ReactJS library components
import React from 'react'

// * import bespoke react components
import footer from '../../data/footer'
import Contact from '../Contact'

const Footer = () => {
  return (
    <>
      <Contact />
      <footer>
        <div className="footer-container">
          <div className="grid-layout grid-container--footer">
            <div className="grid-block--footer-left">
              <h1 className="text-p3">
                &copy; Black Buddha &nbsp;–&nbsp; Website by
                <a
                  rel="noopener noreferrer"
                  href="https://www.gideonjr.com"
                  className="text-p3 event-link"
                  target="_blank"
                >
                  &nbsp; GIIIID
                </a>
              </h1>
            </div>
            <div className="grid-block--footer-right">
              {footer.map((item, idx) => (
                <a
                  key={idx}
                  href={item.to}
                  rel="noopener noreferrer"
                  className={item.className}
                >
                  {item.children}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
