import React from "react";
import "./section6.css";
import docSpeak from "../../assets/docSpeak.png";
import SquareBtn from "../../components/SquareBtn/SquareBtn";
import LittleSquare from "../../components/littleSquare/LittleSquare";
import clock from "../../assets/clock.png";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
import SmallsquareBtn from "../../components/smallsquarebtn/SmallsquareBtn";

const Section6 = () => {
  return (
    <div className="section6">
      <div className="section6p">
        <p>Why Dr. Matthew Anderson?</p>
      </div>
      <div className="section6part2">
        <div className="section6Img">
          <img src={docSpeak} alt="" />
        </div>
        <div className="section6Text">
          <h2 className="section6Texth2">
            A dedicated doctor with the core mission to help
          </h2>
          <p className="section6Textp">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
        </div>
        <div className="section6Btn">
          <SmallsquareBtn image={clock} p="+15 years of experience" />
          <SmallsquareBtn image={tick} p="Urgent 24h service" />
          <SmallsquareBtn image={cross} p="High quality care" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
