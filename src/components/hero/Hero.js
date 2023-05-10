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
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>

            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                In here we will help you to share and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
          {/* figures */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>Expert coachs</span>
            </div>
            <div>
              <span>+978</span>
              <span>Member joind</span>
            </div>
            <div>
              <span>+50</span>
              <span>Fitness programs</span>
            </div>
          </div>
          {/* hero-button */}
          <div className="hero-buttons">
            <button className="btn">Get started</button>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <div className="right-side">right side</div>
      </div>
    </>
  );
};

export default Hero;
