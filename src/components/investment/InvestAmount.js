import React from "react";
import Return from "./Return";
import { useNavigate } from "react-router-dom";
import { BtnGrey, BtnBlack } from "../../components/buttons/Btns";
import Card from "../container/Card";
import Api from "../../apis/APIs";
const InvestAmount = () => {
	const navigate = useNavigate();
	const API = new Api();
	const CreateInvestment = (
		user,
		sponsor,
		amount,
		name,
		percentage,
		reference
	) => {
		API.newInvestment(user, sponsor, amount, name, percentage, reference)
			.then((res) => {
				console.log(res);
				if (res.data === "Investment created successfully") {
					navigate("success");
				} else {
					console.log(res.data);
				}
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	return (
		<>
			<div className="new">
				<p className="title">Create new Investment</p>
				<Card>
					<div className="content-body">
						<div className="title">
							<h3>How Much Would You Like To invest</h3>

							<p>Amount to Invest</p>
							<input type="text" placeholder="Please enter an Amount" />

							<Return />
						</div>
					</div>
					<div className="buttons">
						<BtnGrey onclick={() => navigate(-1)} title={"Back"} />
						<BtnBlack
							onclick={() => {
								CreateInvestment(
									"user",
									"sponsor",
									10000,
									"name",
									0.25,
									"reference"
								);
							}}
							title={"Next"}
						/>
					</div>
				</Card>
			</div>
		</>
	);
};

export default InvestAmount;
