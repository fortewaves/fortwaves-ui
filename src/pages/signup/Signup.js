import { Input, Checkbox, Typography } from "antd";
import React from "react";
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { Button } from "../../components/buttons/Btns";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../apis/APIs";
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import app from "../../firebase";

const { Title } = Typography;
const API = new Api();
const auth = getAuth(app);
const Signup = () => {
	const navigate = useNavigate();

	const handleSignup = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(
			auth,
			e.target.email.value,
			e.target.password.value
		)
			.then((userCredential) => {
				sendEmailVerification(userCredential.user)
					.then(() => {
						toast.info(
							"Email Verification sent!!\nPlease check your email to verify your account"
						);
					})
					.then(() => {
						API.register(e.target.email.value, e.target.name.value)
							.then((res) => {
								if (res.data !== null) {
									navigate("verify", {
										state: {
											name: e.target.name.value,
											email: e.target.email.value,
										},
									});
								} else {
									toast.error(res.data.message);
								}
							})
							.catch((err) => {
								toast.error(err.message);
							});
					});
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	return (
		<div className="auth">
			<div style={{ borderBottom: "1px solid #c5c5c5" }}>
				<header>
					<Title level={4}>Fortewaves</Title>
				</header>
			</div>
			<div className="container">
				<form className="form" onSubmit={handleSignup}>
					<Title style={{ fontWeight: "200", marginBottom: "2rem" }} level={3}>
						Signup
					</Title>
					<div className="input-container">
						<AiOutlineEdit />
						<Input name="name" required placeholder="Name" />
					</div>
					<div className="input-container">
						<AiOutlineMail />
						<Input type="email" name="email" required placeholder="Email" />
					</div>
					<div className="input-container">
						<GrSecure />
						<Input
							name="password"
							required
							type={"password"}
							placeholder="Password"
						/>
					</div>
					<div className="terms">
						<Checkbox required style={{ fontWeight: "200", fontSize: ".8rem" }}>
							- I have read and agreed to the terms of service
						</Checkbox>
					</div>

					<div className="cta">
						<Button title={"Signup"} />
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							fontWeight: "100",
							fontSize: ".8rem",
							justifyContent: "flex-end",
						}}
					>
						<p>Already have an account? </p>
						<NavLink to={"/signin"}>. Login</NavLink>
					</div>
				</form>

				<Title level={5}>OR</Title>

				<div className="social">
					<button className="soc google">
						<FcGoogle size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
						<p>Signin with Google</p>
					</button>
					<button className="soc fb">
						<BsFacebook size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
						<p>Signin with Facebook</p>
					</button>
					<button className="soc ap">
						<BsApple size={"1.5em"} style={{ marginRight: "1rem" }} />{" "}
						<p>Signin with Apple</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
