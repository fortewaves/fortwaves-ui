import React from "react";
import head from "../../images/head-avatar.png";
const Overview = ({ name, amount }) => {
	return (
		<div className="overview-container">
			<div className="text">
				<p id="name">{name}</p>
				<p id="amount">&#8358; {amount}</p>
			</div>
			<div className="icon">
				<img src={head} alt="user-icon" />
			</div>
		</div>
	);
};

export default Overview;
