import React from "react";
import "./section4.css";
import LittleSquare from "../../components/littleSquare/LittleSquare";
import ophtamologist from "../../assets/ophtamologist.png";
import heart from "../../assets/heart.png";
import ambulance from "../../assets/ambulance.png";
import medicalItem from "../../assets/medicalItem.png";
import doctorHand from "../../assets/doctorHand.png";
import dna from "../../assets/dna.png";
const Section4 = () => {
  return (
    <div className="section4">
      <div className="section4Div1">
        {/* <div> */}
        <LittleSquare
          photos={medicalItem}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />
        {/* </div> */}

        {/* <div> */}
        <LittleSquare
          photos={doctorHand}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />
        {/* </div> */}
        {/* <div> */}
        <LittleSquare
          photos={dna}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />
        {/* </div> */}
        {/* </div>
      <div className="section4Div1"> */}
        <LittleSquare
          photos={heart}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />

        <LittleSquare
          photos={ophtamologist}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />

        <LittleSquare
          photos={ambulance}
          h2="General"
          p="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
          iTristique id nibh lobortis nunc"
        />
      </div>
    </div>
  );
};

export default Section4;
