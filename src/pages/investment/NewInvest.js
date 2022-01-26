import React from "react";
import { BtnBlack, BtnGrey } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import Amount from "../../components/investment/Amount";
import InvestSuccess from "../../components/investment/InvestSuccess";

const NewInvest = () => {
  return (
    <div>
      <div className="new">
        <p className="title">Create new Investment</p>
        <div className="steps">
          <p>steps</p>
          <p>steps</p>
          <p>steps</p>
        </div>

        <Card>
          <div className="content-body">
            {/* <Amount /> */}
            <InvestSuccess />
          </div>
          <div className="buttons">
            {/* <BtnGrey title={"Back"} /> */}
            {/* <BtnBlack title={"Calculate Return"} /> */}
            <BtnBlack title={"Okay"} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewInvest;
