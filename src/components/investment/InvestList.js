import React from "react";

import { FaPiggyBank } from "react-icons/fa";
import { Btn } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import InvestCard from "./InvestCard";
const InvestList = () => {
  return (
    <div className="investment">
      <div className="investment-top">
        <h3>Investment</h3>
        <div style={{ width: "max-content" }}>
          <Btn icon={() => <FaPiggyBank />} title={"Create new Investment"} />
        </div>
      </div>
      <Card>
        <InvestCard serial="1" title="Inv Title" amount="20,000" />
        <InvestCard serial="2" title="Inv Title" amount="20,000" />
        <InvestCard serial="3" title="Inv Title" amount="20,000" />
        <InvestCard serial="4" title="Inv Title" amount="20,000" />
        <InvestCard serial="5" title="Inv Title" amount="20,000" />
      </Card>
    </div>
  );
};

export default InvestList;
