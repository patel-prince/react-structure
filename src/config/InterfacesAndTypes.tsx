import { FormItemProps, InputProps } from "antd";
import { Rule } from "antd/lib/form";

export type RouterSettingsType =
	| "Header"
	| "Footer"
	| "AppHeader"
	| "AppSidebar";

export interface RouterConfigProps {
	title: string;
	path: string;
	component: React.ReactNode;
	settings?: RouterSettingsType[]; // Optional
	exact?: boolean; // Optional: By default it is considered as false
	auth?: boolean; // Optional: By default it is considered as false
}

export interface InputBoxProps
	extends FormItemProps,
		Omit<InputProps, "name" | "children" | "onReset"> {
	options?: string;
}

export interface RequestProps {
	[key: string]: Rule[];
}

export type BreadcrumbComponentItemTypes = {
	name: React.ReactNode;
	link?: string;
};

export interface BreadcrumbComponentProps {
	items: BreadcrumbComponentItemTypes[];
}

export interface BreadcrumbConfigProps {
	title: string;
	path: BreadcrumbComponentItemTypes[];
}
