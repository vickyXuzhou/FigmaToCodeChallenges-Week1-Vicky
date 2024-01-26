import React from "react";
import "./section7.css";
import WhiteComponent from "../../components/whiteComponent/WhiteComponent";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
const Section7 = () => {
  return (
    <div className="section7">
      <div className="section7text">
        <h2 className="section7Texth2">
          What our great customers say about Dr. Matthew Anderson
        </h2>
        <p className="section7Textp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="section7Component">
        <WhiteComponent
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore"
          image={profile1}
          h2="Samy White"
          smallP="Cardiology Patient"
        />
        <WhiteComponent
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore"
          image={profile2}
          h2="Samy White"
          smallP="Nutrion Patient"
        />
        <WhiteComponent
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore"
          image={profile3}
          h2="Samy White"
          smallP="Orthopedics Patient"
        />
        <WhiteComponent
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore"
          image={profile4}
          h2="Samy White"
          smallP="Ophthalmology Patient"
        />
      </div>
    </div>
  );
};

export default Section7;
