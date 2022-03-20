import React from "react";
import { FaPiggyBank } from "react-icons/fa";
import { Btn } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import InvestCard from "./InvestCard";
import { useNavigate } from "react-router-dom";

const InvestList = () => {
  const navigate = useNavigate();
  return (
    <div className="investment">
      <div className="top">
        <h3>Investment</h3>
        <div style={{ width: "max-content" }}>
          <Btn
            onclick={() => navigate("new")}
            icon={() => <FaPiggyBank />}
            title={"Create new Investment"}
          />
        </div>
      </div>
      <Card>
        <InvestCard
          date="Sat 25 Jan 2022"
          status="Unripe"
          title="Real estate"
          amount="20,000"
        />
        <InvestCard
          date="Sat 25 Jan 2022"
          status="Unripe"
          title="Real estate"
          amount="20,000"
        />
        <InvestCard
          date="Sat 25 Jan 2022"
          status="Unripe"
          title="Real estate"
          amount="20,000"
        />
        <InvestCard
          date="Sat 25 Jan 2022"
          status="Unripe"
          title="Real estate"
          amount="20,000"
        />
        <InvestCard
          date="Sat 25 Jan 2022"
          status="Unripe"
          title="Real estate"
          amount="20,000"
        />
      </Card>
    </div>
  );
};

export default InvestList;
