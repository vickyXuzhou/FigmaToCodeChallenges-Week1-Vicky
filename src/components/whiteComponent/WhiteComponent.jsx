import React from "react";
import "./whiteComponent.css";
const WhiteComponent = ({ p, image, h2, smallP }) => {
  return (
    <div className="whiteComponent">
      <div className="sectionPart1">
        <p>{p}</p>
      </div>
      <div className="sectionPart2">
        <div className="whiteImg">
          <img src={image} alt="" />
        </div>
        <div className="whiteText">
          <h2>{h2}</h2>
          <p>{smallP}</p>
        </div>
      </div>
    </div>
  );
};

export default WhiteComponent;
