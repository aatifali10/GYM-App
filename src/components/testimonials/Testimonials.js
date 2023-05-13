import React from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="left-t">
          <span>Testimonials</span>
          <span className="stroke-text">What they</span>
          <span>Say about us</span>
          {testimonialsData[0].review}
        </div>
        <div className="right-t">right side images</div>
      </div>
    </>
  );
};

export default Testimonials;
