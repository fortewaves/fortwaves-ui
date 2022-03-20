import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnBlack, BtnGrey } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";

const NewInvest = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="new">
        <p className="title">Create new Investment</p>

        <Card>
          <div className="content-body">
            <div className="title">
              <h3>How Much Would You Like To invest</h3>

              <p>Amount to Invest</p>
              <input type="text" placeholder="Please enter an Amount" />
            </div>
          </div>
          <div className="buttons">
            <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
            <BtnBlack
              onclick={() => navigate("./amount")}
              title={"Calculate Return"}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewInvest;
