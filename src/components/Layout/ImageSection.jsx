import React from 'react'
import left from '../../SVG/left.png'
import right from '../../SVG/right.png'
import summerUnion from '../../SVG/summerUnion.jpg'
import mirror from '../../SVG/mirror.jpg'
import cftc1 from '../../SVG/cftc1.jpg'
import Section from './Section'

const ImageSection = () => {
  return (
    <Section>
      <div className="image-columns w-row">
        <div className="image-column--large w-col w-col-6 w-col-tiny-tiny-stack">
          <img
            alt=""
            className="photo-gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={left}
          />
        </div>
        <div className="image-column--small w-col w-col-6 w-col-tiny-tiny-stack">
          <img
            alt=""
            className="photo-gallery"
            sizes="(max-width: 479px) 66vw, (max-width: 767px) 34vw, (max-width: 991px) 28vw, 30vw"
            src={right}
          />
        </div>
      </div>
      <img
        alt=""
        className="photo-gallery middle"
        sizes="(max-width: 479px) 100vw, 50vw"
        src={summerUnion}
      />
      <div className="image-columns right w-row">
        <div className="image-column--small w-col w-col-6">
          <img
            alt=""
            className="photo-gallery"
            sizes="(max-width: 479px) 66vw, (max-width: 767px) 34vw, (max-width: 991px) 28vw, 30vw"
            src={mirror}
          />
        </div>

        <div className="image-column--large w-col w-col-6">
          <img
            alt=""
            className="photo_gallery"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
            src={cftc1}
          />
        </div>
      </div>
    </Section>
  )
}

export default ImageSection
