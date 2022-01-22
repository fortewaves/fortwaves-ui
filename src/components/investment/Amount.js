import React from "react";
import Return from "./Return";

const Amount = () => {
  return (
    <div className="title">
      <h3>How Much Would You Like To invest</h3>

      <p>Amount to Invest</p>
      <input type="text" placeholder="Please enter an Amount" />
      <Return />
    </div>
  );
};

export default Amount;
