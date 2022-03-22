import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import { BsGraphUp, BsPiggyBank, BsWallet } from "react-icons/bs";
import { BiHistory, BiTransfer, BiSupport } from "react-icons/bi";
import { MdDashboard, MdMobileFriendly, MdPeopleOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Overview from "../components/overview/Overview";
// import Api from "../apis/APIs";
// import { toast } from "react-toastify";
const { Title } = Typography;

const SideBar = () => {
	const navigate = useNavigate();

	const [wallet, setWallet] = useState(0);
	useEffect(() => {
		setWallet(10000);
	},[])

	// useEffect(() => {
	// 	const API = new Api();
	// 	const token = localStorage.getItem("token");
	// 	API.getWallet(token)
	// 		.then((res) => {
	// 			setWallet(res.data.wallet.balance);
	// 		})
	// 		.catch((err) => {
	// 			toast.error(`${err.message}. Please Refresh Page`);
	// 		});
	// }, []);

	return (
		<div className="sidebar">
			<header>
				<Title style={{ padding: "1rem" }} level={4}>
					Fortewaves
				</Title>
			</header>
			<div className="overview">
				<Overview name={"John Doe"} amount={wallet} />
			</div>

			<nav>
				<ul>
					<li onClick={() => navigate("/dashboard")}>
						<MdDashboard className="icon" />
						<Title className="title" level={5}>
							Dashboard
						</Title>
					</li>
					<li
						onClick={() =>
							navigate("/dashboard/wallet", { state: { wallet: wallet } })
						}
					>
						<BsWallet className="icon" />
						<Title className="title" level={5}>
							Wallet
						</Title>
					</li>
					<li onClick={() => navigate("/dashboard/savings")}>
						<BsPiggyBank className="icon" />
						<Title className="title" level={5}>
							Savings
						</Title>
					</li>
					<li onClick={() => navigate("/dashboard/investment")}>
						<BsGraphUp className="icon" />
						<Title className="title" level={5}>
							Investment
						</Title>
					</li>
					<li onClick={() => navigate("/dashboard/transfer")}>
						<BiTransfer className="icon" />
						<Title className="title" level={5}>
							Transfers
						</Title>
					</li>
					{/* <li onClick={()=> navigate('home')}>
                        <BsCashStack className='icon'/>
                        <Title className='title' level={5}>Withdraw</Title>
                    </li> */}
					<li onClick={() => navigate("/dashboard/referrals")}>
						<MdPeopleOutline className="icon" />
						<Title className="title" level={5}>
							Refer
						</Title>
					</li>
					<li onClick={() => navigate("/dashboard/mobile-topup")}>
						<MdMobileFriendly className="icon" />
						<Title className="title" level={5}>
							Mobile top-up
						</Title>
					</li>
					<li onClick={() => navigate("/dashboard/transactions")}>
						<BiHistory className="icon" />
						<Title className="title" level={5}>
							Transactions
						</Title>
					</li>
					<li onClick={() => navigate("home")}>
						<BiSupport className="icon" />
						<Title className="title" level={5}>
							Support
						</Title>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideBar;
