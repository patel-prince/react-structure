import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { BreadcrumbConfigProps } from "./InterfacesAndTypes";

const defaultBreadcrumbPath = [{ name: <HomeOutlined />, link: "/dashborad" }];

export const UserBreadcrumb: BreadcrumbConfigProps = {
	title: "User Management",
	path: [
		...defaultBreadcrumbPath,
		{ name: "User Management", link: "/user-management" },
	],
};
