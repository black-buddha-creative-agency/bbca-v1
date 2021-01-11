import React from "react";
import Section from "../Layout/Section";
import ImageSection from "../Layout/ImageSection";
import ReactMarkdown from "react-markdown";

const About = ({ title, about, selectedPress, imageSection }) => {
	return (
		<>
			<Section id="About">
				<div className="section-container">
					<article className="grid-layout grid-container--content">
						<div className="grid-block--title">
							<h1 className="text-h2">{title}</h1>
						</div>
						<div className="grid-block--content">
							<p className="text-p2">
								<ReactMarkdown source={about} />
								{/* Black Buddha Creative Agency was founded in 2017 by India
								Lovejoy in Houston, Texas. India Lovejoy is a Houston transplant
								with a background in events, marketing, and alternative space
								making.
								<br />
								<br />
								Black Buddha Creative Agency is as a bridge between creatives,
								collectors, and entrepreneurs by producing exhibitions,
								organizing events, and offering fine art(ist) services
								throughout Houston. Black Buddha Creative Agency utilizes
								various spaces to establish connections and is best known for
								launching the alternative venue The Union HTX in the Washington
								Cultural Arts District in 2018.
								<br />
								<br /> */}
								<strong>Selected Press</strong>
								<br />
								{selectedPress?.map((press) => (
									<a
										className="mr2"
										href={press.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{press.title}
									</a>
								))}
							</p>
						</div>
					</article>
				</div>
			</Section>
			<ImageSection images={imageSection} />
		</>
	);
};

export default About;
