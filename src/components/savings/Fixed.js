import React from "react";
import head from "../../images/head-avatar.png";
import SavingsCard from "./SavingsCard";
const Fixed = () => {
  return (
    <div>
      <SavingsCard image={head} title="your goal" percent="20.3%" />
      <SavingsCard image={head} title="your goal" percent="20.3%" />
      <SavingsCard image={head} title="your goal" percent="20.3%" />
      <SavingsCard image={head} title="your goal" percent="20.3%" />
      <SavingsCard image={head} title="your goal" percent="20.3%" />
    </div>
  );
};

export default Fixed;
