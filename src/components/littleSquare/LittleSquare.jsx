import React from "react";
import "./littleSquare.css";
// import medicalItem from "../../assets/";
import Button from "../button/Button";
const LittleSquare = ({ photos, h2, p }) => {
  return (
    <div className="littleSquare">
      <div className="littleSecImg">
        <img src={photos} alt="" />
      </div>
      <div className="littleSecText">
        <h2 className="littleSech2">{h2}</h2>
        <p className="littleSecp">{p}</p>
        <div className="littleSecBtn">
          <Button
            width="17"
            height="2"
            paddingtop="1"
            paddingleft="0"
            text="Book An Appointment"
          />
        </div>
      </div>
    </div>
  );
};

export default LittleSquare;
