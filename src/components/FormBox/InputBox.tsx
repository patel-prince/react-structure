import React from "react";
import { Form, Input } from "antd";
import { InputBoxProps } from "../../config/InterfacesAndTypes";

const InputBox: React.FC<InputBoxProps> = ({
	name,
	label,
	rules,
	type,
	...rest
}) => {
	const formItemsOptions = {
		name,
		label,
		rules,
	};

	const RenderInput = () => {
		switch (type) {
			case "password":
				return <Input.Password {...rest} />;
			default:
				return <Input {...rest} />;
		}
	};

	return <Form.Item {...formItemsOptions}>{RenderInput()}</Form.Item>;
};

export default InputBox;
