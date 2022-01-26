import React from "react";
import head from "../../images/head-avatar.png";
import SavingsCard from "./SavingsCard";
const Flexible = () => {
  return (
    <div>
      <SavingsCard image={head} title="my goal" percent="35.3%" />
      <SavingsCard image={head} title="my goal" percent="35.3%" />
      <SavingsCard image={head} title="my goal" percent="35.3%" />
      <SavingsCard image={head} title="my goal" percent="35.3%" />
      <SavingsCard image={head} title="my goal" percent="35.3%" />
    </div>
  );
};

export default Flexible;
