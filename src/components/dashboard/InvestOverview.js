import React from "react";
import { InvestOverviewCardS, InvestOverviewCardI } from "./InvestOverviewCard";

const InvestOverview = () => {
  return (
    <div className="invest-overview">
      <InvestOverviewCardS />
      <InvestOverviewCardI />
    </div>
  );
};

export default InvestOverview;
