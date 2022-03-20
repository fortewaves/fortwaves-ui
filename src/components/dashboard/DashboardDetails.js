import React from "react";
import { BtnBlack } from "../buttons/Btns";
import { useNavigate } from "react-router-dom";
import InvestOverview from "./InvestOverview";
const DashboardDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-details">
        <h3>Refer and earn</h3>
        <div>
          <p>
            Refer a friend today and stand a chance to win up to NGN 1000 on
            evey referal hjdb wueky euk kejnd iuw IU iue ke ejn ek e.
          </p>
          <div className="btn">
            <BtnBlack
              onclick={() => navigate("referrals/refer")}
              title="Refer Now"
            />
          </div>
        </div>
      </div>
      <InvestOverview />
    </>
  );
};

export default DashboardDetails;
