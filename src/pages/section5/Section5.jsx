import React from "react";
import "./section5.css";
import Button from "../../components/button/Button";
const Section5 = () => {
  return (
    <div className="section5">
      <div className="section5p">
        <p>Book an appointment</p>
      </div>
      <div className="section5Text">
        <h2 className="section5h2">
          Schedule a virtual or presential appointment today
        </h2>
        <p className="section5passage">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          egestas viverra turpis habitant eu sociis fermentum felis.
        </p>
        <div>
          <Button
            color="#1678F2"
            background="white"
            width="18"
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

export default Section5;
