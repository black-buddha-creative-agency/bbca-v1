import React from "react";

import Contact from "../Contact";

const Footer = ({ data }) => {
	return (
		<>
			<Contact
				email={data?.email}
				phone={data?.phone}
				description={data?.description}
				title={data?.title}
			/>
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
							{data?.social_link?.map((social) => (
								<a
									key={social._id}
									href={social.link}
									rel="noopener noreferrer"
									target="_blank"
									className="footer-link"
								>
									{social.title}
								</a>
							))}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
