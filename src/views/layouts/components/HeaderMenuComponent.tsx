import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const HeaderMenuComponent: React.FC = () => {
	const location = useLocation();
	const menuItems = [
		{ key: "/", text: "Home", url: "/" },
		{ key: "/about-us", text: "About Us", url: "/about-us" },
		{ key: "/blog", text: "Blog", url: "/blog" },
		{ key: "/contact-us", text: "Contact Us", url: "/contact-us" },
		{ key: "/login", text: "Login", url: "/login" },
		{ key: "/register", text: "Register", url: "/register" },
	];

	const RenderMenuItems = menuItems?.map(({ key, text, url }) => (
		<Menu.Item className="header__menu__item" key={key}>
			{url ? <Link to={url}>{text}</Link> : text}
		</Menu.Item>
	));

	return (
		<Menu
			className="header__menu"
			mode={"horizontal"}
			activeKey={location.pathname}
		>
			{RenderMenuItems}
		</Menu>
	);
};

export default HeaderMenuComponent;
