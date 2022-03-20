import React from "react";
import { BsGraphUp } from "react-icons/bs";

const InvestCard = ({ status, date, title, amount }) => {
  return (
    <div className="save-card">
      <div className="head-icon">
        <BsGraphUp className="icon" />
      </div>
      <div className="title">
        <p className="top-title">{title}</p>
        <p className="date">{date}</p>
      </div>

      <div className="card-text">
        <p>1 Year</p>
        <p>25%</p>
      </div>
      <div className="status">
        <p>{status}</p>
      </div>
      <div className="amount">
        <p>NGN{amount}</p>
        {/* <p className="lower">One Year investment</p> */}
      </div>
    </div>
  );
};

export default InvestCard;
