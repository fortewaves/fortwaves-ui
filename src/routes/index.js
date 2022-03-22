import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing components
import Layout from "../layout";
import Wallet from "../pages/wallet/Wallet";
import Savings from "../pages/savings/Savings";
import Type from "../components/savings/Type";
import Transfer from "../pages/transfer/Transfer";
// import Investment from "../pages/investment/Investment";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import New from "../pages/savings/New";
import InvestList from "../components/investment/InvestList";
// import SavingList from "../components/savings/SavingList";
import NewInvest from "../pages/investment/NewInvest";
import FTransfer from "../pages/transfer/FTransfer";
import FoTransfer from "../pages/transfer/FoTransfer";
import Referral from "../pages/referral/Referral";
import Invite from "../pages/referral/Invite";
import Topup from "../pages/mobile-topup/Topup";
import Transactions from "../pages/transactions/Transactions";
import { Amount, Title } from "../components/savings/TitleAmount";
import Mode from "../components/savings/Mode";
import ConfirmDetails from "../components/savings/ConfirmDetails";
import AddImage from "../components/savings/AddImage";
import InvestAmount from "../components/investment/InvestAmount";
import InvestDone from "../pages/investment/InvestDone";
import SavingsSuccess from "../components/savings/SavingsSuccess";
import TopupSuccess from "../components/mobile-topup/TopupSuccess";
import Dashboard from "../pages/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerify from "../components/email/EmailVerify";
// import TopupSuccess from "../components/mobile-topup/TopupSuccess";

const Router = () => {
	return (
		<BrowserRouter>
			<ToastContainer autoClose={3500} position="top-center" theme="dark" />
			<Routes>
				<Route path="/" element={<Signin />} />

				{/* dashboard routes */}
				<Route path="/dashboard" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="wallet" element={<Wallet />} />
					<Route path="savings" element={<Savings />} />

					<Route path="savings/new" element={<New />}>
						<Route index element={<Type />} />
						<Route path="title" element={<Title />} />
						<Route path="amount" element={<Amount />} />
						<Route path="mode" element={<Mode />} />
						<Route path="addimage" element={<AddImage />} />
						<Route path="verify" element={<ConfirmDetails />} />
						<Route path="success" element={<SavingsSuccess />} />
					</Route>

					<Route path="transfer" element={<Transfer />} />
					<Route path="transfer/f-f-transfer" element={<FTransfer />} />
					<Route path="transfer/f-o-transfer" element={<FoTransfer />} />

					<Route path="investment" element={<InvestList />} />
					<Route path="investment/new" element={<NewInvest />} />
					<Route path="investment/new/amount" element={<InvestAmount />} />
					<Route
						path="investment/new/amount/success"
						element={<InvestDone />}
					/>

					<Route path="referrals" element={<Referral />} />
					<Route path="referrals/refer" element={<Invite />} />

					<Route path="mobile-topup" element={<Topup />} />
					<Route path="mobile-topup/success" element={<TopupSuccess />} />

					<Route path="transactions" element={<Transactions />} />
				</Route>

				{/* // auth routes */}
				<Route path="/signin" element={<Signin />} />

				<Route path="/signup">
					<Route index element={<Signup />} />
					<Route path="verify" element={<EmailVerify />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
