import React from "react";
import ReactModal from "react-modal";
import { BsCheckCircle } from "react-icons/bs";
import { BtnBlack } from "../buttons/Btns";
import TransactionDetails from "./TransactionDetails";
import { MdOutlinePending, MdOutlineSmsFailed } from "react-icons/md";

export const TransactionModalS = ({ isOpen, handleOpen, details }) => {
  return (
    <ReactModal onRequestClose={()=> handleOpen(false)} className="Modal" overlayClassName="Overlay" isOpen={isOpen}>
      <h3>Transaction Details</h3>
      <div className="iconS">
        <BsCheckCircle />
      </div>

      <p>{details.status}</p>

      <div className="details">
        <TransactionDetails details={details} />
      </div>
      <div className="modalbtn">
        <BtnBlack title="Okay" onclick={() => handleOpen(!isOpen)} />
      </div>
    </ReactModal>
  );
};

export const TransactionModalP = ({ isOpen, handleOpen, details }) => {
  return (
    <ReactModal onRequestClose={()=> handleOpen(false)} className="Modal" overlayClassName="Overlay" isOpen={isOpen}>
      <h3>Transaction Details</h3>
      <div className="iconP">
        <MdOutlinePending />
      </div>

      <p>{details.status}</p>

      <div className="details">
        <TransactionDetails details={details} />
      </div>
      <div className="modalbtn">
        <BtnBlack title="Okay" onclick={() => handleOpen(!isOpen)} />
      </div>
    </ReactModal>
  );
};
export const TransactionModalF = ({ isOpen, handleOpen, details }) => {
  return (
    <ReactModal onRequestClose={()=> handleOpen(false)} className="Modal" overlayClassName="Overlay" isOpen={isOpen}>
      <h3>Transaction Details</h3>
      <div className="iconF">
        <MdOutlineSmsFailed />
      </div>

      <p>{details.status}</p>

      <div className="details">
        <TransactionDetails details={details} />
      </div>
      <div className="modalbtn">
        <BtnBlack title="Okay" onclick={() => handleOpen(!isOpen)} />
      </div>
    </ReactModal>
  );
};
