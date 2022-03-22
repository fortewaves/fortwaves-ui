import React from "react";
import Success from "../success/Success";
import { useNavigate } from "react-router-dom";
import Card from "../container/Card";
const TopupSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <Success
          title="Success"
          text="Airtime purchase successful!"
          onclick={() => navigate("../mobile-topup")}
        />
      </Card>
    </div>
  );
};

export default TopupSuccess;
