import React from "react";
import { Layout, Menu } from "antd";
import LogoComponent from "../components/LogoComponent";
import Config from "../../../config/Config";
import { Link } from "react-router-dom";

interface AppSidebarViewProps {
	visible?: boolean;
	collapsed?: boolean;
}

const SidebarView: React.FC<AppSidebarViewProps> = ({ visible, collapsed }) => {
	return !visible ? null : (
		<Layout.Sider
			collapsed={collapsed}
			width={Config.sidebar_width}
			className="main__page__appsidebar"
		>
			<LogoComponent />
			<Menu mode="inline" theme="dark">
				<Menu.Item key="1">Option 1</Menu.Item>
				<Menu.Item key="2">Option 2</Menu.Item>
				<Menu.SubMenu key="sub1" title="User Management">
					<Menu.Item key="3">
						<Link to="/user-management">Users</Link>
					</Menu.Item>
					<Menu.Item key="4">Bill</Menu.Item>
					<Menu.Item key="5">Alex</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Sider>
	);
};

export default SidebarView;
