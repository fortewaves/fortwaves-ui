import React from "react";
import { FcFinePrint } from "react-icons/fc";
import { FaPiggyBank } from "react-icons/fa";

import { Btn } from "../buttons/Btns";
import Card from "../container/Card";
import { NavLink } from "react-router-dom";
const Empty = ({ text, title }) => {
  return (
    <div className="savings">
      <div className="top">
        <h3>{title}</h3>
      </div>
      <Card>
        <div className="icon-cont">
          {/* // empty list */}
          <FcFinePrint className="icon" />
        </div>
        <p>
          You currently do not have {text}, please create one to get started
        </p>

        <div style={{ width: "max-content", margin: "2rem auto" }}>
          <NavLink to="new">
            <Btn icon={() => <FaPiggyBank />} title={`Create ${text}`} />
          </NavLink>
        </div>
      </Card>
    </div>
  );
};
export default Empty;
