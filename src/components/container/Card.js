import React from "react";

const Card = ({ children }) => {
  return (
    <div className="info">
      <div>{children}</div>
    </div>
  );
};

export default Card;
