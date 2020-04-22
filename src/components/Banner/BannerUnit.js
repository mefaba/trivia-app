import React from "react";
import "./banner.css";

const BannerUnit = ({ children, bannerImage }) => {
	return (
		<div className="banner-container">
			<div>
				<img src={bannerImage} alt="banner-img" />
			</div>
			<div className="hero-text">
				<h1>{children}</h1>
			</div>
		</div>
	);
};

export default BannerUnit;
