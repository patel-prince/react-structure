import { NamePath } from "antd/lib/form/interface";

export type ErrorProps = {
	[key: string]: string[];
};

export type FormatedErrorProps = {
	name: NamePath;
	errors: string[];
};

export interface ListProps {
	current_page: number;
	first_page_url: string;
	from: number;
	last_page: number;
	last_page_url: string | null;
	next_page_url: string | null;
	path: string;
	per_page: number;
	prev_page_url: string | null;
	to: number;
	total: number;
}
