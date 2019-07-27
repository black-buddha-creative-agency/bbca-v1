import React from 'react'
import Section from '../../components/Layout/Section'
import ImageSection from '../../components/Layout/ImageSection'

const About = () => {
  return (
    <>
      <Section id="About">
        <div className="image-columns w-row">
          <div className="section-container">
            <article className="grid-layout grid-container--content">
              <div className="grid-block--title">
                <h1 className="text-h2">About</h1>
              </div>
              <div class="grid-block--content">
                <p class="text-p2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit numquam, corrupti explicabo fugit dicta quos
                  eius nam quod in fuga blanditiis pariatur ex eaque
                  dignissimos. Nihil minima quis ducimus nisi hic fugiat
                  aspernatur.
                  <br />
                  <br />
                  Quaerat dignissimos sint omnis fugit, cupiditate totam ipsa
                  beatae minus sed atque molestiae facere sequi, suscipit amet
                  ratione autem esse, architecto neque ex?
                  <br />
                  <br />
                  Architecto, sint. Natus ut esse a! Ex alias blanditiis
                  reiciendis suscipit ipsam minus rem voluptatibus nisi incidunt
                  consectetur est mollitia sint architecto odit quia, atque
                  sequi? Officiis perferendis sit hic amet, repudiandae deleniti
                  est voluptates aspernatur ea unde minus quidem obcaecati.
                  Optio temporibus ipsa sunt eaque ducimus necessitatibus,
                  blanditiis dolor explicabo eligendi voluptatem voluptates
                  nisi, dolorum cupiditate, aliquid vitae quae sequi debitis
                  ullam id! Obcaecati atque officiis inventore?
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>
      <ImageSection />
    </>
  )
}

export default About
