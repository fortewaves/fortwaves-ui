import React from "react";
import {
  TransactionFailed,
  TransactionPending,
  TransactionSuccess,
} from "../../components/transactions/TransactionCards";
const TransactionOverview = () => {
  return (
    <div>
      <div className="head">
        <span className="black-dot"></span>

        <p>Date</p>
        <p>Transaction id</p>
        <p>Amount</p>
        <div className="other">
          <p className="type">Type</p>
          <p className="completed">Status</p>
        </div>
      </div>
      <div className="content-body">
        <TransactionSuccess
          date="Sat, 29 Jan 2022"
          id="7832ht432h2h7b"
          amount="NGN 20,000"
          type="deposit"
          status="Completed"
        />
        <TransactionPending
          date="Sat, 29 Jan 2022"
          id="7832ht432h2h7b"
          amount="NGN 20,000"
          type="withdrawal"
          status="Pending"
        />
        <TransactionFailed
          date="Sat, 29 Jan 2022"
          id="7832ht432h2h7b"
          amount="NGN 20,000"
          type="deposit"
          status="Failed"
        />
      </div>
    </div>
  );
};

export default TransactionOverview;
