import React from "react";
import "./button.css";
import circle from "../../assets/circle2.png";
const Button = ({
  width,
  height,
  paddingtop,
  paddingleft,
  text,
  color,
  background,
}) => {
  return (
    <>
      <div
        className="booking"
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          color: `${color}`,
          background: `${background}`,
          padding: `${paddingtop}rem ${paddingleft}rem`,
        }}
      >
        <span>
          <img className="call" src={circle} alt="" />
        </span>
        <span className="bookNow">{text}</span>
      </div>
    </>
  );
};

export default Button;
