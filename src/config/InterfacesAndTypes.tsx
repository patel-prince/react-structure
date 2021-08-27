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
