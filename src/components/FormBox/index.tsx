import { Form, FormProps } from "antd";
import React from "react";
import InputBox from "./InputBox";

const FormBox: React.FC<FormProps> = ({
	layout = "vertical",
	autoComplete = "off",
	requiredMark = "optional",
	scrollToFirstError = { behavior: "smooth" },
	children,
	...rest
}) => {
	return (
		<Form
			layout={layout}
			autoComplete={autoComplete}
			requiredMark={requiredMark}
			scrollToFirstError={scrollToFirstError}
			{...rest}
		>
			{children}
		</Form>
	);
};

export { InputBox };
export default FormBox;
