import React from "react";
import AmountCard from "./AmountCard";

const DashBoardAmounts = () => {
  return (
    <div className="dashboard-amounts">
      <AmountCard title={"Available Balance"} balance={"0.00"} />
      <AmountCard title={"Savings"} balance={"0.00"} />
      <AmountCard title={"Investment"} balance={"0.00"} />
    </div>
  );
};

export default DashBoardAmounts;
