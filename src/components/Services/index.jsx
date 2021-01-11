import React from "react";
import hero from "../../SVG/hero.jpg";

const Services = ({ services, image }) => {
	return (
		<>
			<section className="section services" id="Services">
				<div className="services-container">
					<h1 className="text-h2 white bold">Our Services</h1>
					<div className="services-columns w-row">
						<div className="service-column first w-col w-col-6">
							{services?.map((service) => (
								<div className="services-item--container">
									<p className="text-p2 service-white">{service?.service}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="section image-breaker">
				<img
					alt=""
					className="imagebreak"
					sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, 99vw"
					src={image}
				/>
			</section>
		</>
	);
};

export default Services;
