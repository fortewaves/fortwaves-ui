import React from "react";

import Card from "../../components/container/Card";
import { Outlet } from "react-router-dom";

const New = () => {
  return (
    <div className="new">
      <p className="title">Create a new savings plan</p>

      <Card>
        <Outlet />
      </Card>
    </div>
  );
};

export default New;
