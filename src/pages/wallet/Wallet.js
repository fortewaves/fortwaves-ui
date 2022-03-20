import React, { useEffect /*useState*/ } from "react";
import { Btn } from "../../components/buttons/Btns";

import { Typography } from "antd";
import Api from "../../apis/APIs";

const { Title } = Typography;

const Wallet = () => {
	// const [wallet, setWallet] = useState();

	useEffect(() => {
		const API = new Api();
		const token = localStorage.getItem("token");
		API.getWallet(token)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	return (
		<div className="">
			<div className="top">
				<h3>My wallet</h3>
				<div style={{ width: "max-content" }}></div>
			</div>

			<section className="info">
				<section className="balance">
					<Title level={5}>Available Balance</Title>
					<Title level={2}>NGN0.00</Title>
				</section>
				<section className="option">
					{/* // deposit funds to wallet */}
					<Title className="heading" level={5}>
						Add funds{" "}
					</Title>
					<div className="body">
						<div className="inner">
							<p>Add money to your Fortewaves wallet.</p>
							<p>
								This could be done by a verity of payment methods including:
								VISA, Master card, Verve card.
							</p>
							<p>
								The payment will settle in your wallet 1-2 business days after
								the payment has been confirmed
							</p>
						</div>
						<div className="cta">
							<Btn title={"Add funds"} />
						</div>{" "}
					</div>
				</section>

				<section className="option">
					{/* // withdraw funds from wallet */}
					<Title className="heading" level={5}>
						Withdraw funds
					</Title>
					<div className="body">
						<div className="inner">
							<p>Take out funds from your Fortewaves wallet</p>
							<p>
								Withdrawals to your local bank account usually take between 2-3
								business days
							</p>
						</div>
						<div className="cta">
							<Btn title={"Withdraw funds"} />
						</div>
					</div>
				</section>
			</section>
		</div>
	);
};

export default Wallet;
