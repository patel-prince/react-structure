import React from "react";
import PageNotFound from "../views/errors/PageNotFound";
import Unauthorized from "../views/errors/Unauthorized";
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
		title: "Unauthorized",
		path: "/unauthorized",
		component: <Unauthorized />,
		settings: ["Header", "Footer"],
	},
	{
		title: "Page Not Found",
		path: "/",
		component: <PageNotFound />,
		settings: ["Header", "Footer"],
		exact: false,
	},
];

export default RouterConfig;
