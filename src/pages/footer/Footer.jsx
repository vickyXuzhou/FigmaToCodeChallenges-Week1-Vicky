import React from "react";
import "./footer.css";
import hospSign from "../../assets/hospSign.jpg";
import youtube from "../../assets/youtube.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerPart1">
        <div className="footerSect">
          <div className="footerImg">
            <h2>Doctor</h2>
            <div>
              <img src={hospSign} alt="" />
            </div>
          </div>
          <p>
            8 W. South St.Buford, GA 30518 5Briarwood LaneVienna, VA 22180 RER
          </p>
          <div>
            <img src={youtube} alt="" />
            <img src={youtube} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>

        <div className="footerSect">
          <h2>Company Info</h2>
          <ul>
            <li>about</li>
            <li>services</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="footerSect">
          <h2>Book Now</h2>
          <ul>
            <li>Appointment</li>
          </ul>
        </div>
        <div className="footerSect">
          <h2>Contact</h2>
          <ul>
            <li>+1 123456789</li>
            <li>remmcal@mail.com</li>
            <li>Phone: +1 12345678</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="footerPart2">
        <p>© Doctor all rights 2023 - Designed by remmcal</p>
      </div>
    </div>
  );
};

export default Footer;
