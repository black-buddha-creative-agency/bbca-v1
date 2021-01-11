import React from "react";

const Contact = ({ phone, email, description, title }) => {
	return (
		<section className="section" id="Contact">
			<div className="section-container footer-bottom">
				<div className="grid-layout grid-container--content">
					<div className="grid-block--title">
						<h1 className="text-h2">{title}</h1>
					</div>
					<div className="grid-block--content">
						<p className="text_p2">
							{description}
							<br />
							<br />
							Call us
							<br />
							<a className="text_p2 event-link" href="tel:7135452011">
								{phone}
							</a>
							<br />
							<br />
							Email us
							<br />
							<a
								className="text_p2 event-link"
								href="mailto:india@blackbuddha.agency"
							>
								{email}
								<br />
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
