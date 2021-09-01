import React from "react";
import { Layout } from "antd";
import HeaderLogoComponent from "../components/LogoComponent";
import HeaderMenuComponent from "../components/HeaderMenuComponent";

interface HeaderViewProps {
	visible?: boolean;
}

const HeaderView: React.FC<HeaderViewProps> = ({ visible }) => {
	return !visible ? null : (
		<Layout.Header className="main__page__header">
			<div className="container">
				<HeaderLogoComponent />
				<HeaderMenuComponent />
			</div>
		</Layout.Header>
	);
};

export default HeaderView;
