const fieldName = "The Field";

export interface MessageProps {
	required: (field_name?: string) => string;
	type: {
		email: (field_name?: string) => string;
	};
	pattern: {
		password: (field_name?: string) => string;
	};
}

const Message: MessageProps = {
	required: (field_name = fieldName) => `${field_name} is required.`,
	type: {
		email: (field_name = fieldName) => `${field_name} is not a valid email.`,
	},
	pattern: {
		password: (field_name = fieldName) =>
			`${field_name} should contain atleast an uppercase letter, a lowercase letter, a number and a special character.`,
	},
};

export default Message;
