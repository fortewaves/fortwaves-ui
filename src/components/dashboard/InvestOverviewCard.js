import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { BtnBlack } from "../buttons/Btns";
import { useNavigate } from "react-router-dom";

export const InvestOverviewCardS = () => {
  const navigate = useNavigate();
  return (
    <div className="invest-overview-card-s">
      <div className="head-icon">
        <BsGraphUp className="icon" />
      </div>
      <div className="title">
        <p>Start Saving</p>
        <p>Create your first Savings plan</p>
      </div>
      <div className="btn">
        <BtnBlack onclick={() => navigate("savings/new")} title={"Start"} />
      </div>
    </div>
  );
};

export const InvestOverviewCardI = () => {
  const navigate = useNavigate();
  return (
    <div className="invest-overview-card-i">
      <div className="head-icon">
        <BsGraphUp className="icon" />
      </div>
      <div className="title">
        <p>Start Investing</p>
        <p>Create your first Investment plan</p>
      </div>
      <div className="btn">
        <BtnBlack onclick={() => navigate("investment/new")} title={"Start"} />
      </div>
    </div>
  );
};
