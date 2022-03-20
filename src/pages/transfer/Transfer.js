import React from "react";
import Card from "../../components/container/Card";
import { TransferType } from "../../components/transfer/TransferType";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const navigate = useNavigate();
  return (
    <div className="transfer">
      <div className="top">
        <h3>Transfers</h3>
      </div>

      <Card>
        <div className="transfer-collection">
          <TransferType
            onclick={() => navigate("f-f-transfer")}
            title="F-F transfer"
            desc="Transfer money from your Fortewaves 
        account to another fortewaves account"
          />
          <TransferType
            onclick={() => navigate("f-o-transfer")}
            title="F-Other Transfer"
            desc="Transfer money from your Fortewaves 
          account to a local bank account"
          />
        </div>
      </Card>
    </div>
  );
};

export default Transfer;
