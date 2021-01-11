import React from "react";
import { HeroImage } from "../../styles";
import arrow from "../../SVG/Arrow.svg";

const Hero = ({ tagline, image }) => {
	return (
		<>
			<section className="section-hero">
				<div className="section-container--hero">
					<div className="grid-layout grid-container--hero">
						<div className="grid-block--hero grid-span">
							<h1 className="text-h1 text-accent--2 ">
								{/* An agency fostering{" "}
								<span className="text-accent--2">engagement, </span>
								<span className="text-accent--2">education</span> and{" "}
								<span className="text-accent--2"> investment </span>
								in creative arts */}
								{tagline}
							</h1>
						</div>
					</div>
				</div>
				<div className="hero-arrow--section">
					<a href="#About" className="hero-arrow--link-block">
						<img
							src={arrow}
							alt="arrow"
							className="herodownarrow"
							width="13.5"
						/>
					</a>
				</div>
				<div className="hero-image--wrapper">
					<HeroImage src={image} />
				</div>
			</section>
			<section className="mobile-hero--image">
				<img
					className="image-break"
					src={image}
					alt="mobile-hero"
					sizes="100vw"
				/>
			</section>
		</>
	);
};

export default Hero;
