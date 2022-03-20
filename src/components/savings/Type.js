import React from "react";
import { BsPiggyBank } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BtnGrey, BtnBlack } from "../../components/buttons/Btns";
const Type = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-body">
        <h3>Select a savings type</h3>

        <div className="card">
          <div className="icon">
            {" "}
            <BsPiggyBank className="piggy" />
          </div>
          <div className="card-content">
            <h3>Flexible</h3>
            <p>
              lorem ipsum dorfiet lorem ipsum lorem ipsum dorfiet lorem ipsum
              dorfietlorem ipsum dorfiet
            </p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            {" "}
            <BsPiggyBank className="piggy" />
          </div>
          <div className="card-content">
            <h3>Fixed</h3>
            <p>
              lorem ipsum dorfiet lorem ipsum lorem ipsum dorfiet lorem ipsum
              dorfietlorem ipsum dorfiet
            </p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        <BtnBlack onclick={() => navigate("../title")} title={"Next"} />
      </div>
    </>
  );
};

export default Type;
