import React, { useState } from "react";
import { Button, Card, Col, Divider, Form, Row, Space } from "antd";
import { RegisterRequest } from "../../../requests/AuthRequest";
import Config from "../../../config/Config";
import FormBox, { InputBox } from "../../../components/FormBox";
import { Link, useHistory } from "react-router-dom";
import useStore from "../../../store";
import { ErrorProps } from "../../../store/RootStore/RootInterface";

const Register: React.FC = () => {
	const [form] = Form.useForm();
	const history = useHistory();

	const [saving, setSaving] = useState<boolean>(false);

	const { AUTH, ROOT } = useStore();
	const { doRegister } = AUTH;
	const { AssignErrorToInput } = ROOT;

	const handleSubmit = (data: any) => {
		setSaving(true);
		doRegister(data)
			.then(() => {
				history.push("/resend-verification-link");
			})
			.catch((e: ErrorProps) => {
				AssignErrorToInput(form, e?.errors);
			})
			.finally(() => setSaving(false));
	};

	return (
		<section className="section register__section">
			<Card className="width-500">
				<h2 className="card__title">Register</h2>
				<Divider />
				<FormBox form={form} onFinish={handleSubmit}>
					<Row gutter={Config.gutter}>
						<Col span={12}>
							<InputBox
								name="firstname"
								label="Firstname"
								placeholder="Firstname"
								rules={RegisterRequest.firstname}
								size="large"
							/>
						</Col>
						<Col span={12}>
							<InputBox
								name="lastname"
								label="Lastname"
								placeholder="Lastname"
								rules={RegisterRequest.lastname}
								size="large"
							/>
						</Col>
					</Row>
					<InputBox
						name="email"
						label="Email ID"
						placeholder="example@domain.com"
						size="large"
						rules={RegisterRequest.email}
					/>
					<InputBox
						type="password"
						name="password"
						label="Password"
						placeholder="xxxxxxx"
						size="large"
						rules={RegisterRequest.password}
					/>
					<Button
						loading={saving}
						className="width-150"
						type="primary"
						size="large"
						htmlType="submit"
					>
						Register
					</Button>
					<Divider />
					<div className="text-center">
						<Space>
							{`Aleady have an account?`}
							<Link to="/login">
								<b>Log In</b>
							</Link>
						</Space>
					</div>
				</FormBox>
			</Card>
		</section>
	);
};

export default Register;
