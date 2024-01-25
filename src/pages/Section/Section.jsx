import React from "react";
import "./section.css";
// import docSmiling from "../../assets/docSmiling.png";
import Button from "../../components/button/Button";
const Section = ({
  image,
  about,
  h2,
  p,
  isPosition,
  direction,
  background,
}) => {
  return (
    <div
      className={isPosition ? "section2" : "section2 order"}
      style={{
        flexDirection: `${direction}`,
        background: `${background}`,
      }}
    >
      <div className="section2Img">
        <img src={image} alt="" />
      </div>
      <div className="section2Text">
        <p className="secAboutme">{about}</p>
        <h2 className="sectionh2">{h2}</h2>
        <p className="secP">{p}</p>
        <div>
          <div className="sec2Btn">
            <Button
              width="18"
              height="2"
              paddingtop="1"
              paddingleft="0"
              text="Book An Appointment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
