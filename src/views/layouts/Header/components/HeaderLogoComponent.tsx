import React from "react";
import LOGO_IMAGE from "../../../../assets/images/logo.png";

const HeaderLogoComponent: React.FC = () => {
	return (
		<div className="header__logo">
			<img src={LOGO_IMAGE} alt="HEADER LOGO" />
			<span>REACT APP</span>
		</div>
	);
};

export default HeaderLogoComponent;
