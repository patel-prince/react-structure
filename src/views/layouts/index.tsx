import React from "react";
import { Layout } from "antd";
import HeaderView from "./Header/HeaderView";
import { RouterSettingsType } from "../../config/InterfacesAndTypes";

interface LayoutProps {
	component: React.ReactNode;
	settings?: RouterSettingsType[];
	isAuthenticationRequired?: boolean;
}

const LayoutView: React.FC<LayoutProps> = ({ component, settings }) => {
	const contentClasses = [];
	if (settings?.includes("Header")) {
		contentClasses.push("has__header");
	}

	return (
		<Layout className={`main__page__wrapper ${contentClasses.join(" ")}`}>
			<HeaderView visible={settings?.includes("Header") || false} />
			<Layout.Content className="main_page__content">
				{component}
			</Layout.Content>
		</Layout>
	);
};

export default LayoutView;
