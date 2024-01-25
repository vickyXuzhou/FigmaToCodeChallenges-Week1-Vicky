import React from "react";
import "./squarebtn.css";

const SquareBtn = ({ clock, h2Text, pText }) => {
  return (
    <div className="squareSec">
      <div>
        <img src={clock} alt="" />
      </div>
      <div>
        <h2 className="h2SquareText">{h2Text}</h2>

        <p className="pSquareText">{pText}</p>
      </div>
    </div>
  );
};

export default SquareBtn;
