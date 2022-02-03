import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Address....</p>
          <p className="p__opensans">Phone....</p>
          <p className="p__opensans">2nd phone number....</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="gericht logo" />
          <p className="p__opensans">An inspiration quote would go here</p>
          <img src={images.spoon} alt="spoon" style={{ marginTop: "15" }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">08:00am - 11:00pm</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">08:00am - 11:45pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">All rights reserved. QualityPre 2022</p>
      </div>
    </div>
  );
};

export default Footer;
