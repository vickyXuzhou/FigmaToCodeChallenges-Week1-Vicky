import React from "react";
import "./header.css";
import hospSign from "../../assets/hospSign.jpg";
import circle from "../../assets/circle1.png";
import Button from "../button/Button";
const Header = () => {
  const navEl = ["Home", "About", "Services", "Contact"];
  return (
    <div className="header">
      <div className="docNameDiv">
        <span className="docName">Doctor</span>
        <span>
          <img className="hospSign" src={hospSign} alt="" />
        </span>
      </div>
      <div className="navEl">
        {navEl.map((item) => {
          return <li className="list">{item}</li>;
        })}
      </div>

      <Button
        width="10"
        height="1.75"
        paddingtop="1"
        paddingleft="1.25"
        text="Book Now"
      />
    </div>
  );
};

export default Header;
