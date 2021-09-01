import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import HeaderView from "./Header/HeaderView";
import { RouterSettingsType } from "../../config/InterfacesAndTypes";
import useStore from "../../store";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import SidebarView from "./Sidebar/SidebarView";
import AppHeaderView from "./AppHeader/AppHeaderView";

interface LayoutProps {
	component: React.ReactNode;
	settings?: RouterSettingsType[];
	isAuthenticationRequired?: boolean;
}

const LayoutView: React.FC<LayoutProps> = observer(
	({ component, settings, isAuthenticationRequired }) => {
		const contentClasses = [];
		const [collapsed, SetCollapsed] = useState<boolean>(false);
		const history = useHistory();
		const { AUTH } = useStore();
		const { token } = AUTH;

		useEffect(() => {
			if (isAuthenticationRequired && !token) {
				history.replace("/");
			}
		}, [token, isAuthenticationRequired, history]);

		if (settings?.includes("Header")) {
			contentClasses.push("has__header");
		}
		if (settings?.includes("AppSidebar")) {
			contentClasses.push("has__appsidebar");
		}

		return (
			<Layout className={`main__page__wrapper ${contentClasses.join(" ")}`}>
				<HeaderView visible={settings?.includes("Header")} />
				<SidebarView
					collapsed={collapsed}
					visible={settings?.includes("AppSidebar")}
				></SidebarView>
				<Layout.Content className="main__page__content">
					<AppHeaderView
						collapsed={collapsed}
						SetCollapsed={SetCollapsed}
						visible={settings?.includes("AppHeader")}
					/>
					{settings?.includes("AppHeader") ? (
						<Layout.Content className="main__app__content">
							{component}
						</Layout.Content>
					) : (
						component
					)}
				</Layout.Content>
			</Layout>
		);
	}
);

export default LayoutView;
