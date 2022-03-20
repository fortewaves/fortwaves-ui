import React from "react";
import { BtnBlack, BtnGrey } from "../../components/buttons/Btns";
import Card from "../../components/container/Card";
import { useNavigate } from "react-router-dom";
const Invite = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="top">
        <h3>Refer a Friend</h3>
      </div>
      <Card>
        <div className="content-body">
          <h3>Copy your referal link</h3>
          <div className="invite-link">
            <div id="text">https://fortewavesdev.netlify.app/dashboard</div>
            <div id="btn">
              <BtnBlack title="Copy Link" />
            </div>
          </div>
        </div>
        <div className="buttons">
          <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        </div>
      </Card>
    </div>
  );
};

export default Invite;
