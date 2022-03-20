import React, { useState } from "react";
import {
  TransactionModalS,
  TransactionModalF,
  TransactionModalP,
} from "./TransactionModal";

export const TransactionSuccess = ({ date, id, amount, type, status }) => {
  const [isOpen, handleOpen] = useState(false);

  return (
    <>
      <div className="trans-card" onClick={() => handleOpen(!isOpen)}>
        <span className="success-dot"></span>

        <p>{date}</p>
        <p>{id}</p>
        <p>{amount}</p>
        <div className="other">
          <p className="type">{type}</p>
          <p className="completed">{status}</p>
        </div>
      </div>
      <TransactionModalS
        details={{
          date: date,
          id: id,
          amount: amount,
          type: type,
          status: status,
        }}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
    </>
  );
};

export const TransactionPending = ({ date, id, amount, type, status }) => {
  const [isOpen, handleOpen] = useState(false);
  return (
    <>
      <div className="trans-card" onClick={() => handleOpen(!isOpen)}>
        <span className="pending-dot"></span>

        <p>{date}</p>
        <p>{id}</p>
        <p>{amount}</p>
        <div className="other">
          <p className="type">{type}</p>
          <p className="pending">{status}</p>
        </div>
      </div>
      <TransactionModalP
        details={{
          date: date,
          id: id,
          amount: amount,
          type: type,
          status: status,
        }}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
    </>
  );
};

export const TransactionFailed = ({ date, id, amount, type, status }) => {
  const [isOpen, handleOpen] = useState(false);
  return (
    <>
      <div className="trans-card" onClick={() => handleOpen(!isOpen)}>
        <span className="failed-dot"></span>

        <p>{date}</p>
        <p>{id}</p>
        <p>{amount}</p>
        <div className="other">
          <p className="type">{type}</p>
          <p className="failed">{status}</p>
        </div>
      </div>
      <TransactionModalF
        details={{
          date: date,
          id: id,
          amount: amount,
          type: type,
          status: status,
        }}
        isOpen={isOpen}
        handleOpen={handleOpen}
      />
    </>
  );
};
