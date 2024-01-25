import React from "react";
import "./section.css";
import ophta2 from "../../assets/ophta2.png";
import Button from "../../components/button/Button";
const Section3 = () => {
  return (
    <div className="section2">
      <div className="section2Text">
        <p className="secAboutme">About me</p>
        <h2 className="sectionh2">
          A dedicated doctor with the core mission to help
        </h2>
        <p className="secP">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
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
      <div className="section2Img">
        <img src={ophta2} alt="" />
      </div>
    </div>
  );
};

export default Section3;
