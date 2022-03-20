import React from "react";

import DashBoardAmounts from "../../components/dashboard/DashBoardAmounts";
import DashboardDetails from "../../components/dashboard/DashboardDetails";
import TransactionOverview from "../../components/dashboard/TransactionOverview";

const Dashboard = () => {
	return (
		<>
			<div className="dashboard-top">
				<DashBoardAmounts />
			</div>
			<div className="dashboard-top">
				<DashboardDetails />
			</div>
			<div className="dashboard-top">
				<TransactionOverview />
			</div>
		</>
	);
};

export default Dashboard;
