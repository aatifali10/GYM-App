import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerHeight <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li onClick={() => setMenuOpened(false)}>
              <Link to="home" span={true} smooth={true} activeClass="active">
                Home
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link to="programs" span={true} smooth={true}>
                Programs
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link to="why-us" span={true} smooth={true}>
                Why us
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link to="plans" span={true} smooth={true}>
                Plans
              </Link>
            </li>

            <li onClick={() => setMenuOpened(false)}>
              <Link to="testimonials" span={true} smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
