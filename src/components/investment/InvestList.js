import React, { useEffect /* useState*/ } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { Btn } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import InvestCard from "./InvestCard";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/APIs";
import { toast } from "react-toastify";

const InvestList = () => {
	const navigate = useNavigate();
	// const [investList, setInvestList] = useState();
	useEffect(() => {
		const API = new Api();
		const token = localStorage.getItem("token");
		API.getInvestments(token)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				toast.error(`${err.message}. Please Refresh Page.`);
			});
	}, []);
	return (
		<div className="investment">
			<div className="top">
				<h3>Investment</h3>
				<div style={{ width: "max-content" }}>
					<Btn
						onclick={() => navigate("new")}
						icon={() => <FaPiggyBank />}
						title={"Create new Investment"}
					/>
				</div>
			</div>
			<Card>
				<InvestCard
					date="Sat 25 Jan 2022"
					status="Unripe"
					title="Real estate"
					amount="20,000"
				/>
				<InvestCard
					date="Sat 25 Jan 2022"
					status="Unripe"
					title="Real estate"
					amount="20,000"
				/>
				<InvestCard
					date="Sat 25 Jan 2022"
					status="Unripe"
					title="Real estate"
					amount="20,000"
				/>
				<InvestCard
					date="Sat 25 Jan 2022"
					status="Unripe"
					title="Real estate"
					amount="20,000"
				/>
				<InvestCard
					date="Sat 25 Jan 2022"
					status="Unripe"
					title="Real estate"
					amount="20,000"
				/>
			</Card>
		</div>
	);
};

export default InvestList;
