import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnGrey, BtnBlack } from "../../components/buttons/Btns";
export const Title = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-body">
        <div className="title">
          <h3>What would you like to save for</h3>

          <p>Savings Title</p>
          <input type="text" placeholder="Please enter a title" />
        </div>
      </div>
      <div className="buttons">
        <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        <BtnBlack onclick={() => navigate("../amount")} title={"Next"} />
      </div>
    </>
  );
};

export const Amount = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-body">
        <div className=" title">
          <h3>How much would you like to save</h3>

          <p>Amount to save</p>
          <input type="text" placeholder="Please enter an amount" />
        </div>
      </div>
      <div className="buttons">
        <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        <BtnBlack onclick={() => navigate("../mode")} title={"Next"} />
      </div>
    </>
  );
};
