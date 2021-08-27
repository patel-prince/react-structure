import React from "react";
import HomePage from "../views/front_pages/HomePage";
import { RouterConfigProps } from "./InterfacesAndTypes";

const RouterConfig: RouterConfigProps[] = [
	{
		title: "Home Page",
		path: "/",
		component: <HomePage />,
		settings: ["Header", "Footer"],
	},
	{
		title: "Page Not Found",
		path: "/",
		component: <HomePage />,
		settings: ["Header", "Footer"],
		exact: false,
	},
];

export default RouterConfig;
