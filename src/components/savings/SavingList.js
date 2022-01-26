import React, { useState } from "react";
import { FaPiggyBank } from "react-icons/fa";
import { Btn } from "../buttons/Btns";
import Flexible from "./Flexible";
import Fixed from "./Fixed";
import Card from "../container/Card";

const SavingList = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="saving-list">
      <div className="saving-top">
        <h3>Savings</h3>
        <div style={{ width: "max-content" }}>
          <Btn icon={() => <FaPiggyBank />} title={"Create a savings plan"} />
        </div>
      </div>

      <Card>
        <div className="plan-selector">
          <div
            id={active === 0 ? "active" : "tab"}
            onClick={() => setActive(0)}
          >
            Flexible
          </div>
          <div
            id={active === 1 ? "active" : "tab"}
            onClick={() => setActive(1)}
          >
            Fixed
          </div>
        </div>

        {active === 0 ? <Flexible /> : <Fixed />}
      </Card>
    </div>
  );
};

export default SavingList;
