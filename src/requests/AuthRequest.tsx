import { RequestProps } from "../config/InterfacesAndTypes";
import Message from "../config/Message";
import Regex from "../config/Regex";

export const RegisterRequest: RequestProps = {
	firstname: [{ required: true, message: Message.required("Firstname") }],
	lastname: [{ required: true, message: Message.required("Lastname") }],
	email: [
		{ required: true, message: Message.required("Email ID") },
		{ type: "email", message: Message.type.email("Email ID") },
	],
	password: [
		{ required: true, message: Message.required("Password") },
		{ pattern: Regex.password, message: Message.pattern.password("Password") },
	],
};

export const LoginRequest: RequestProps = {
	email: [
		{ required: true, message: Message.required("Email ID") },
		{ type: "email", message: Message.type.email("Email ID") },
	],
	password: [{ required: true, message: Message.required("Password") }],
};
