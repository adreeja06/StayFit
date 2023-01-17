import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vei17uz",
        "template_p6gigpf",
        form.current,
        "pSd7VnJbG2xeoz4yR"
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
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="enter your email to address"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
