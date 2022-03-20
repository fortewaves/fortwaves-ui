import React from "react";
import { Link } from "react-router-dom";
import { VscBellDot } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
const Header = () => {
  return (
    <div className="header">
      <div className="navs">
        <Link to="">Overview</Link>
        <Link to="">Policy</Link>
        <Link to="">Report</Link>
      </div>

      <div className="others">
        <div className="bg-icon">
          <VscBellDot />
        </div>

        <div className="bg-icon">
          <FiUser/>
        </div>
      </div>
    </div>
  );
};

export default Header;
