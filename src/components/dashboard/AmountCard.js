import React from "react";

const AmountCard = ({ title, balance }) => {
  return (
    <div className="amount-container">
      <p className="title">{title}</p>
      <p className="balance">NGN&nbsp;{balance}</p>
    </div>
  );
};

export default AmountCard;
