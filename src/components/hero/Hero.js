import React from "react";
import Header from "../header/Header";
import "./hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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
        <div className="right-side">
          <button className="btn">Join Now</button>
          <div className="heart-rate">
            <img src={Heart} alt="heart" />
            <span>Heart rate</span>
            <span>116 bpm</span>
          </div>
          <img src={hero_image} alt="hero_image" className="hero_image" />
          <img
            src={hero_image_back}
            alt="hero_image"
            className="hero_image_back"
          />
          {/* Calories */}
          <div className="calories">
            <img src={Calories} alt="calories" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
