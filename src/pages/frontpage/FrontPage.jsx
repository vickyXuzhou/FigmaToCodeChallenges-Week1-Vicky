import React from "react";
import "./frontpage.css";
import Header from "../../components/header/Header";
import HeadBody from "../../components/header-body/HeadBody";
import SquareBtn from "../../components/SquareBtn/SquareBtn";
import clock from "../../assets/clock.png";
import tick from "../../assets/tick.png";
import cross from "../../assets/cross.png";
const FrontPage = () => {
  return (
    <div className="frontPage">
      <Header />
      <HeadBody />
      <div className="squareSection">
        <SquareBtn
          clock={clock}
          h2Text="24 Hour Service"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareBtn
          clock={tick}
          h2Text="8 years of experience"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <SquareBtn
          clock={cross}
          h2Text="High quality care"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default FrontPage;
