import React from "react";
import Header from "../header/Header";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left-side">
          <Header />
          <div className="the-ad">
            <div></div>
            <span>the best fitness club in the town</span>
          </div>
          {/* Hero text  */}
          <div className="hero-text">
            <div>
              <span>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
          </div>
        </div>
        <div className="right-side">right side</div>
      </div>
    </>
  );
};

export default Hero;
