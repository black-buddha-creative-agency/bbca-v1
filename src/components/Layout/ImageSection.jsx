import React from "react";
import left from "../../SVG/left.png";
import right from "../../SVG/right.png";
import summerUnion from "../../SVG/summerUnion.jpg";
import mirror from "../../SVG/mirror.jpg";
import cftc1 from "../../SVG/cftc1.jpg";
import Section from "./Section";

const ImageSection = ({ images }) => {
	return (
		<Section>
			<div className="image-columns w-row">
				<div className="image-column--large w-col w-col-6 w-col-tiny-tiny-stack">
					<img
						alt=""
						className="photo-gallery"
						sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
						src={images?.[0]?.url}
					/>
				</div>
				<div className="image-column--small w-col w-col-6 w-col-tiny-tiny-stack">
					<img
						alt=""
						className="photo-gallery"
						sizes="(max-width: 479px) 66vw, (max-width: 767px) 34vw, (max-width: 991px) 28vw, 30vw"
						src={images?.[1]?.url}
					/>
				</div>
			</div>
			<img
				alt=""
				className="photo-gallery middle"
				sizes="(max-width: 479px) 100vw, 50vw"
				src={images?.[2]?.url}
			/>
			<div className="image-columns right w-row">
				<div className="image-column--small w-col w-col-6">
					<img
						alt=""
						className="photo-gallery"
						sizes="(max-width: 479px) 66vw, (max-width: 767px) 34vw, (max-width: 991px) 28vw, 30vw"
						src={images?.[3]?.url}
					/>
				</div>

				<div className="image-column--large w-col w-col-6">
					<img
						alt=""
						className="photo_gallery"
						sizes="(max-width: 479px) 87vw, (max-width: 767px) 42vw, (max-width: 991px) 47vw, 50vw"
						src={images?.[4]?.url}
					/>
				</div>
			</div>
		</Section>
	);
};

export default ImageSection;
