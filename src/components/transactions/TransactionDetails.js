import React from "react";

const TransactionDetails = ({ details }) => {
  return (
    <div className="ss">
      <div id="trans-details">
        <div>
          <span className="left"> Created at:</span>
          <span className="right">{details.date}</span>
        </div>
        <div>
          <span className="left"> Transaction type:</span>
          <span className="right">{details.type}</span>
        </div>
        <div>
          <span className="left"> Transaction ID:</span>
          <span className="right">{details.id}</span>
        </div>
        <div>
          <span className="left"> Amount:</span>
          <span className="right">{details.amount}</span>
        </div>
        <div>
          <span className="left">Status:</span>
          <span className="right">{details.status}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
