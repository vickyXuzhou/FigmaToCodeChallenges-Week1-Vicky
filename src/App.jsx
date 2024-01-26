import { useState } from "react";
// import FrontPage from "./pages/frontpage";
import "./App.css";
import FrontPage from "./pages/frontpage/FrontPage";
import Section from "./pages/Section/Section";
// import Section3 from "./pages/section3/Section3";
import docSmiling from "../src/assets/docSmiling.png";
import skeleton from "../src/assets/skeleton.png";
// import Section4 from "./pages/section4/Section4";
import medicalItem from "../src/assets/medicalitem.png";
import ophtamologist from "../src/assets/ophtamologist.png";
import ophta2 from "../src/assets/ophta2.png";
import Section4 from "./pages/section4/Section4";
import Section5 from "./pages/section5/Section5";
import Section6 from "./pages/section6/Section6";
import Section7 from "./pages/section7/Section7";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <FrontPage />
      <Section
        background="white"
        isPosition="false"
        direction="row"
        image={docSmiling}
        about="About me"
        h2="A dedicated doctor with the core mission to help"
        p="orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin nibh 
        cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc elementum. 
        Tellus quam mauris aenean turpis vulputate sodales nullam lobortis. Vulputate tortor tincidun."
      />
      <Section
        direction="row-reverse"
        background="#F2F7FF"
        isPosition="true"
        image={ophta2}
        about="Services"
        h2="Experienced in multiple medical practices"
        p="orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas egestas viverra 
        turpis habitant eu sociis fermentum felis."
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <Footer /> */}
    </>
  );
}

export default App;
