import React from "react";
import { useNavigate } from "react-router-dom";

import Success from "../../components/success/Success";
const SavingsSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Success
        title="Success"
        text="New savings plan created successfully!"
        onclick={() => navigate("../../savings")}
      />
    </div>
  );
};
export default SavingsSuccess;
