import { NamePath } from "antd/lib/form/interface";

export type ErrorProps = {
	[key: string]: string[];
};

export type FormatedErrorProps = {
	name: NamePath;
	errors: string[];
};
