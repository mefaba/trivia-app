import React from "react";
import "./banner.css";

const BannerUnit = ({ children, bannerImage }) => {
	return (
		<div className="banner-container">
			<div>
				{bannerImage?(<img src={bannerImage} alt="banner-img" />):null}
			</div>
			<div className="hero-text">
				<h1>{children}</h1>
			</div>
		</div>
	);
};

export default BannerUnit;
