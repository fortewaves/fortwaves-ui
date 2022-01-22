import React from "react";

const InvestCard = ({ serial, title, amount }) => {
  return (
    <div className="save-card">
      <div className="head-icon">
        <p>{serial}.</p>
      </div>
      <div className="card-text">
        <p>{title}</p>
        <p>NGN {amount}</p>
      </div>
    </div>
  );
};

export default InvestCard;
