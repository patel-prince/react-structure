import React from "react";
import { Button, Card, Divider, Form, Space } from "antd";
import { LoginRequest } from "../../../requests/AuthRequest";
import FormBox, { InputBox } from "../../../components/FormBox";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
	const [form] = Form.useForm();

	const handleSubmit = (data: any) => {
		console.log(data);
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
