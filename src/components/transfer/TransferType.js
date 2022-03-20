import React from "react";
import { BiTransfer } from "react-icons/bi";
import { BtnBlack } from "../buttons/Btns";
export const TransferType = ({ title, desc, onclick }) => {
  return (
    <div>
      <div className="transfer-card">
        <div className="outer-container">
          <div className="icon-container">
            <BiTransfer className="icon" />
          </div>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="btn-transfer">
          <BtnBlack onclick={onclick} title="Proceed" />
        </div>
      </div>
    </div>
  );
};
