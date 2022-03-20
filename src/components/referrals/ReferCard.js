import React from "react";
import head from "../../images/head-avatar.png";
export const ReferCardCompleted = ({ name, date, status }) => {
  return (
    <div>
      <div className="refer-card">
        <div className="icon">
          <img src={head} alt="icon" />
        </div>
        <div className="details">
          <p>{name}</p>
          <p>{date}</p>
          <p className="completed">{status}</p>
        </div>
      </div>
    </div>
  );
};

export const ReferCardPending = ({ name, date, status }) => {
  return (
    <div>
      <div className="refer-card">
        <div className="icon">
          <img src={head} alt="icon" />
        </div>
        <div className="details">
          <p>{name}</p>
          <p>{date}</p>
          <p className="pending">{status}</p>
        </div>
      </div>
    </div>
  );
};
