import { images } from "../../constants";
import "./AboutUs.css";

import React from "react";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex-center">
        <img src={images.G} alt="G letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            optio eligendi libero labore. Reiciendis numquam dignissimos maxime
            libero molestias et hic ea commodi perspiciatis placeat.
          </p>
          <button className="custom__button">Learn More</button>
        </div>
        <div className="app__aboutus-content_knife flex-center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant"> Our History</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            optio eligendi libero labore. Reiciendis numquam dignissimos maxime
            libero molestias et hic ea commodi perspiciatis placeat.
          </p>
          <button className="custom__button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
