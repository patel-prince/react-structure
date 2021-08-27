import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const HeaderMenuComponent: React.FC = () => {
	const menuItems = [
		{ key: "home", text: "Home", url: "/" },
		{ key: "about-us", text: "About Us", url: "/about-us" },
		{ key: "blog", text: "Blog", url: "/blog" },
		{ key: "contact-us", text: "Contact Us", url: "/contact-us" },
	];

	const RenderMenuItems = menuItems?.map(({ key, text, url }) => (
		<Menu.Item className="header__menu__item" key={key}>
			{url ? <Link to={url}>{text}</Link> : text}
		</Menu.Item>
	));

	return (
		<Menu className="header__menu" mode={"horizontal"}>
			{RenderMenuItems}
		</Menu>
	);
};

export default HeaderMenuComponent;
