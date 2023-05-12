import React from "react";
import "./reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <>
      <div className="reasons">
        <div className="left-r">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
        </div>
        <div className="right-r">
          <span>Some Reasons</span>
          <div>
            <span className="stroke-text">Why</span>
            <span>Choose Us</span>
          </div>
          <div className="details-r">
            <div>
              <img src={tick} alt="" />
              <span>Over 140+ exporrt coachs</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>Train smartere and faster than before</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>I free program for new member</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>Reliable partners</span>
            </div>
          </div>
          <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
            Our parnters
          </span>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reasons;
