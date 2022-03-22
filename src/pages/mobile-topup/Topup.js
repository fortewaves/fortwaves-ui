import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnBlack } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";

const Topup = () => {
  const navigate = useNavigate();
  return (
    <div className="topup">
      <div className="top">
        <h3>Airtime top-up</h3>
      </div>
      <Card>
        <form className="content-body">
          <div>
            <label>Enter Mobile Number*</label>
            <input
              type="text"
              name="number"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>

          <div>
            <label>Enter Mobile Amount*</label>
            <div id="amount-container">
              <input
                type="text"
                id="ngn"
                disabled
                value="NGN"
                className="form-control"
              />
              <input
                type="text"
                id="amount"
                name="amount"
                className="form-control"
                placeholder="Amount"
              />
            </div>
          </div>

          <div>
            <label>Select your service provider*</label>
            <select name="provider" className="form-control">
              <option value="">Select Provider</option>
              <option value="">Select Provider</option>
              <option value="">Select Provider</option>
              <option value="">Select Provider</option>
              <option value="">Select Provider</option>
            </select>
          </div>
        </form>
        <div className="buttons">
          <BtnBlack onclick={() => navigate("success")} title={"Buy"} />
        </div>
      </Card>
    </div>
  );
};

export default Topup;
