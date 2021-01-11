import React, { useCallback, useEffect, useState, createContext } from "react";
import { useApiUrl } from "../hooks";

const { API_URL } = useApiUrl(window.location);
export const HomePageContext = createContext();

export const HomePageContextProvider = (props) => {
	const [homePage, setHomePage] = useState();
	const [loading, setLoading] = useState(true);

	const loadHomePage = useCallback(() => {
		try {
			fetch(`${API_URL}/home-page`, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					setHomePage(data);
				});
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	});

	useEffect(() => {
		loadHomePage();
	}, []);
	return (
		<HomePageContext.Provider value={[homePage, loading]}>
			{props.children}
		</HomePageContext.Provider>
	);
};
