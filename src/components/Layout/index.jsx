import React, { useContext } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { HomePageContext } from "../../data/context";

const Layout = (props) => {
	const [homePage, loading] = useContext(HomePageContext);
	return (
		<>
			<Header />
			{props.children}
			<Footer {...props} data={homePage?.Footer} />
		</>
	);
};

export default Layout;
