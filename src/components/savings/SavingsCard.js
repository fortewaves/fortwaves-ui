import React from "react";

const SavingsCard = ({ image, title, percent }) => {
  return (
    <div className="save-card">
      <div className="head-icon">
        <img src={image} alt="head" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <p>{percent}</p>
      </div>
    </div>
  );
};

export default SavingsCard;
