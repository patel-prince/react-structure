import { Button, Result, Space } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Unauthorized: React.FC = () => {
	const history = useHistory();

	return (
		<section className="section unauthorized__section">
			<Result
				status="403"
				title="403"
				subTitle="Sorry, you are not authorized to access this page."
				extra={
					<Space size="large">
						<Button
							size="large"
							type="primary"
							onClick={() => history.goBack()}
						>
							Go Back
						</Button>
						<Button size="large" type="primary">
							<Link to="/">Bact Home</Link>
						</Button>
					</Space>
				}
			/>
		</section>
	);
};

export default Unauthorized;
