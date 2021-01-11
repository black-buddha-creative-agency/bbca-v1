import React, { useEffect, useCallback, useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useApiUrl } from "../../hooks";
import Section from "../../components/Layout/Section";
import EventList from "../../components/EventList";
import Loader from "react-loader-spinner";

const EventPage = (props) => {
	const { API_URL } = useApiUrl(window.location);

	const [eventsPage, setEventsPage] = useState();
	const [loading, setLoading] = useState(true);

	const loadEventsPage = useCallback(() => {
		try {
			fetch(`${API_URL}/event-page`, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					setEventsPage(data);
				});
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	});

	useEffect(() => {
		loadEventsPage();
	}, []);

	return loading ? (
		<div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
			<Loader type="Oval" color="#ada4a4" height={80} width={80} />
		</div>
	) : (
		<Section>
			<div className="section-container">
				<article className="grid-layout grid-container--content">
					<div className="grid-block--title">
						<h1 className="text-h2">Events</h1>
					</div>
					<div className="grid-block--content">
						<p className="text-p2">{eventsPage?.description}</p>
					</div>
				</article>
				<div className="mt5 event-list--container">
					<Query
						query={gql`
							{
								events {
									edges {
										node {
											title
											slug
											content
											eventMeta {
												isopen
												eventDate
												eventImages {
													sourceUrl(size: MEDIUM_LARGE)
												}
												socialLinks {
													linkText
													linkUrl
												}
											}
										}
									}
								}
							}
						`}
					>
						{({ loading, error, data }) => {
							if (loading) {
								return (
									<div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
										<Loader
											type="Oval"
											color="#ada4a4"
											height={80}
											width={80}
										/>
									</div>
								);
							}

							return <EventList events={data.events.edges} />;
						}}
					</Query>
				</div>
			</div>
		</Section>
	);
};

export default EventPage;
