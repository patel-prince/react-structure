const fieldName = "The Field";

export interface MessageProps {
	required: (field_name?: string) => string;
	max: (max_limit: number, field_name?: string) => string;
	min: (min_limit: number, field_name?: string) => string;
	type: {
		email: (field_name?: string) => string;
	};
	pattern: {
		password: (field_name?: string) => string;
	};
	global: {
		networkIssue: string;
	};
}

const Message: MessageProps = {
	required: (field_name = fieldName) => `${field_name} is required.`,
	max: (max_limit, field_name = fieldName) =>
		`${field_name} cannot be longer than ${max_limit} characters.`,
	min: (min_limit, field_name = fieldName) =>
		`${field_name} should contain at least ${min_limit} characters.`,
	type: {
		email: (field_name = fieldName) => `${field_name} is not a valid email.`,
	},
	pattern: {
		password: (field_name = fieldName) =>
			`${field_name} should contain atleast an uppercase letter, a lowercase letter, a number and a special character.`,
	},
	global: {
		networkIssue: "Network Issue!",
	},
};

export default Message;
