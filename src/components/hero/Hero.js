import React from "react";
import Header from "../header/Header";
import "./hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerHeight <= 768 ? true : false;
  return (
    <>
      <div className="hero" id="home">
        <div className="blur blur-h"></div>
        <div className="left-side">
          <Header />
          <div className="the-ad">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
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
              <span>
                <NumberCounter end={140} start={100} delay="4" preFix="+" />
              </span>
              <span>Expert coachs</span>
            </div>
            <div>
              <span>
                {" "}
                <NumberCounter end={978} start={800} delay="4" preFix="+" />
              </span>
              <span>Member joind</span>
            </div>
            <div>
              <span>
                {" "}
                <NumberCounter end={50} start={0} delay="4" preFix="+" />
              </span>
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
          <motion.div
            className="heart-rate"
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
          >
            <img src={Heart} alt="heart" />
            <span>Heart rate</span>
            <span>116 bpm</span>
          </motion.div>
          <img src={hero_image} alt="hero_image" className="hero_image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            alt="hero_image"
            className="hero_image_back"
          />
          {/* Calories */}
          <motion.div
            className="calories"
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
          >
            <img src={Calories} alt="calories" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
