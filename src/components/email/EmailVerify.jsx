import React from "react";
import { Typography } from "antd";
import email from "../../images/email.jpeg";
import { Link, useLocation } from "react-router-dom";
const { Title } = Typography;

const EmailVerify = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<div className="auth">
			<div style={{ borderBottom: "1px solid #c5c5c5" }}>
				<header>
					<Title level={4}>Fortewaves</Title>
				</header>
			</div>
			<div className="email-content">
				<div>
					<img src={email} alt="email" />
				</div>
				<p>Hello {state.name}</p>

				<h1>
					Welcome to <b>Fortewaves</b>
				</h1>
				<p>
					We have sent a verification link to your email{" "}
					<b>
						<em>{state.email}</em>
					</b>
				</p>
				<p>
					Please verify your email and proceed to{" "}
					<Link to={"/signin"}>Sign In Page</Link> to continue
				</p>
			</div>
		</div>
	);
};

export default EmailVerify;
