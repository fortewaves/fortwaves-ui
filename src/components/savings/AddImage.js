import React from "react";
import Drop from "./Drop";
import { useNavigate } from "react-router-dom";
import { BtnGrey, BtnBlack } from "../../components/buttons/Btns";

const AddImage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content-body">
        <div className="add-image">
          <h3>Add Image</h3>
          <div className="image-container">
            <p>Identify your savings with a unique image</p>
            <Drop />
          </div>
        </div>
      </div>
      <div className="buttons">
        <BtnGrey onclick={() => navigate(-1)} title={"Back"} />
        <BtnBlack onclick={() => navigate("../verify")} title={"Next"} />
      </div>
    </>
  );
};

export default AddImage;
