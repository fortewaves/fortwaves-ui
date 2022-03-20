import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/container/Card";

import Success from "../../components/success/Success";
const InvestDone = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="new">
        <p className="title">Create new Investment</p>

        <Card>
          <Success
            title="Success"
            text="New investment plan created successfully!"
            onclick={() => navigate("../investment")}
          />
        </Card>
      </div>
    </div>
  );
};

export default InvestDone;
