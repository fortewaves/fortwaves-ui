import React from "react";
import { BsCheckCircle } from "react-icons/bs";

import { BtnBlack } from "../../components/buttons/Btns";

const Success = ({ title, text, onclick }) => {
  return (
    <>
      <div className="success">
        <div className="icon">
          <BsCheckCircle />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="buttons">
        <BtnBlack onclick={onclick} title={"Okay"} />
      </div>
    </>
  );
};

export default Success;
