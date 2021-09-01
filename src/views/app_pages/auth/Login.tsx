import React, { useState } from "react";
import { Button, Card, Divider, Form, Space } from "antd";
import { LoginRequest } from "../../../requests/AuthRequest";
import FormBox, { InputBox } from "../../../components/FormBox";
import { Link, useHistory } from "react-router-dom";
import useStore from "../../../store";
import { ErrorProps } from "../../../store/RootStore/RootInterface";

const Login: React.FC = () => {
	const [form] = Form.useForm();
	const [saving, setSaving] = useState<boolean>(false);
	const history = useHistory();
	const { AUTH, ROOT } = useStore();
	const { doLogin } = AUTH;
	const { AssignErrorToInput } = ROOT;

	const handleSubmit = (data: any) => {
		setSaving(true);
		doLogin(data)
			.then(() => {
				history.replace("/dashboard");
			})
			.catch((e: ErrorProps) => {
				AssignErrorToInput(form, e?.errors);
				setSaving(false);
			});
	};

	return (
		<section className="section login__section">
			<Card className="width-500">
				<h2 className="card__title">Login</h2>
				<Divider />
				<FormBox form={form} onFinish={handleSubmit}>
					<InputBox
						name="email"
						label="Email ID"
						placeholder="example@domain.com"
						size="large"
						rules={LoginRequest.email}
					/>
					<InputBox
						type="password"
						name="password"
						label="Password"
						placeholder="xxxxxxx"
						size="large"
						rules={LoginRequest.password}
					/>
					<Button
						className="width-150"
						loading={saving}
						type="primary"
						size="large"
						htmlType="submit"
					>
						Login
					</Button>
					<Divider />
					<div className="text-center">
						<Space>
							{`Don't have an account?`}
							<Link to="/register">
								<b>Register Now</b>
							</Link>
						</Space>
					</div>
				</FormBox>
			</Card>
		</section>
	);
};

export default Login;
