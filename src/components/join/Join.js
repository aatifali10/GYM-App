import React, { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z5aux9a",
        "template_8io48ca",
        form.current,
        "5z9NNlCiy5UPNnwqj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="join">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">Ready to</span>
            <span>Level up</span>
          </div>
          <div>
            <span>Your body</span>
            <span className="stroke-text">With us</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input
              type="email"
              name="user-email"
              id=""
              placeholder="Enter your email address"
            />
            <button className="btn btn-j">Join now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Join;
