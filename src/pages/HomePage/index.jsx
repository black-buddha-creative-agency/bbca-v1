import React, { useContext } from "react";
import Loader from "react-loader-spinner";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Services from "../../components/Services";
import { HomePageContext } from "../../data/context";

const HomePage = (props) => {
	const [homePage, loading] = useContext(HomePageContext);

	return loading ? (
		<div className="pa5 mt5 tc w-100 h-100 flex flex-row justify-center items-center">
			<Loader type="Oval" color="#ada4a4" height={80} width={80} />
		</div>
	) : (
		<main className="fadeIn">
			<Hero tagline={homePage?.tagline} image={homePage?.heroImage?.url} />
			<About
				imageSection={homePage?.imageSection}
				about={homePage?.about}
				selectedPress={homePage?.selectedPress}
				title={homePage?.aboutTitle}
			/>
			<Services
				services={homePage?.services}
				image={homePage?.bottomImage?.url}
			/>
		</main>
	);
};

export default HomePage;
