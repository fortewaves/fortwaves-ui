import React from "react";
import { FcFinePrint } from "react-icons/fc";
import { FaPiggyBank } from "react-icons/fa";
import { Typography } from "antd";
import { Btn } from "../buttons/Btns";
const { Title } = Typography;
const Empty = ({ text, title }) => {
  return (
    <div className="savings">
      <header>
        <Title level={4}>{title}</Title>
      </header>

      <div className="icon-cont">
        {/* // empty list */}
        <FcFinePrint className="icon" />
      </div>
      <p>You currently do not have {text}, please create one to get started</p>
      <div style={{ width: "max-content", margin: "2rem auto" }}>
        <Btn icon={() => <FaPiggyBank />} title={`Create ${text}`} />
      </div>
    </div>
  );
};
export default Empty;
