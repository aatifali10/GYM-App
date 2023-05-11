import React from "react";
import "./programs.css";

const Programs = () => {
  const cards = [
    {
      image: "../../assets/",
      title: "Strength Training",
      para: "In this ",
      button: "Join Now",
      icon: "",
    },
    {
      image: "",
      title: "Strength Training",
      para: "In this ",
      button: "Join Now",
      icon: "",
    },
    {
      image: "",
      title: "Strength Training",
      para: "In this ",
      button: "Join Now",
      icon: "",
    },
    {
      image: "",
      title: "Strength Training",
      para: "In this ",
      button: "Join Now",
      icon: "",
    },
  ];
  return (
    <>
      <div className="programs">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To Share you</span>
      </div>
    </>
  );
};

export default Programs;
