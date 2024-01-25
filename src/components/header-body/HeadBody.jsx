import React from "react";
import "./headbody.css";
import doctors from "../../assets/doctor1.png";
import Button from "../button/Button";
const HeadBody = () => {
  return (
    <div className="headerbody">
      <div className="headerBodyText">
        <p className="ptext">Dr Matthew Anderson</p>
        <h2 className="h2Text">
          A dedicated doctor<br></br> you can trust
        </h2>
        <p className="passage">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
          Elementum eget vel, nunc nulla feugiat. Metus ut.
        </p>
        <div className="headerBodyButton">
          <Button
            width="18"
            height="2"
            paddingtop="1"
            paddingleft="0"
            text="Book An Appointment"
          />
        </div>
      </div>
      <div className="headerBodyImage">
        <img src={doctors} alt="" />
      </div>
    </div>
  );
};

export default HeadBody;
