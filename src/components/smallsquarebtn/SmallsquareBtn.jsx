import React from "react";
import "./smallsquarebtn.css";
const SmallsquareBtn = ({ image, p }) => {
  return (
    <div className="smallSquarebtn">
      <div className="smallSquareImg">
        <img src={image} alt="" />
      </div>
      <div className="smallSquareP">{p}</div>
    </div>
  );
};

export default SmallsquareBtn;
