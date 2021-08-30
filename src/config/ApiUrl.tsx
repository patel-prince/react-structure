const API_URL = {
	LOGIN_WITH_EMAIL: (): string => "login",
	REGISTER_WITH_EMAIL: (): string => "register",
	VERIFY_ACCOUNT: (verification_code: string): string =>
		"verify-email/" + verification_code,
	RESEND_VERIFICATION_LINK: (email: string): string =>
		"resend-verification-code/" + btoa(email),
	ME: (): string => "me",
	LOGOUT: (): string => "logout",
};

export default API_URL;
