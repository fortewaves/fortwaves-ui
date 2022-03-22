import React from "react";
import { BtnBlack } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import {
  ReferCardCompleted,
  ReferCardPending,
} from "../../components/referrals/ReferCard";
import { useNavigate } from "react-router-dom";
const Referral = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <h3>Referrals</h3>
        <div style={{ width: "max-content" }}>
          <BtnBlack
            onclick={() => navigate("refer")}
            title={"Refer a Friend"}
          />
        </div>
      </div>
      <Card>
        <h3>My Referrals</h3>
        <ReferCardCompleted
          name="Daniel"
          date="Sat, 29 Jan 2022"
          status="Completed"
        />
        <ReferCardPending
          name="Daniel"
          date="Sat, 29 Jan 2022"
          status="Pending"
        />
        <ReferCardPending
          name="Daniel"
          date="Sat, 29 Jan 2022"
          status="Pending"
        />
        <ReferCardPending
          name="Daniel"
          date="Sat, 29 Jan 2022"
          status="Pending"
        />
        <ReferCardPending
          name="Daniel"
          date="Sat, 29 Jan 2022"
          status="Pending"
        />
      </Card>
    </div>
  );
};

export default Referral;
