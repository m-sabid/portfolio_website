import "./contact.css";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2jclo0v",
        "template_62hwuwl",
        formRef.current,
        "0u5wVZv6KJ1cBUPdV"
      )
      .then(
        (result) => {
          Swal({
            title: "Success!",
            text: `${result.text}`,
            icon: "success",
            button: "OK",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              <button
                onClick={() => (window.location.href = "tel:+8801985381288")}
              >
                +88 0198 538 1288
              </button>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="email" />
              <button
                onClick={() =>
                  (window.location.href = "mailto:sabidofficial@gmail.com")
                }
              >
                sabidofficial@gmail.com
              </button>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Reach Out and Start a Conversation: </b> Let's Discuss Your
            Ideas, Projects, and Opportunities for Collaboration
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-3 w-full"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
                className="input input-accent sm:w-auto w-full"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="email"
                placeholder="Email"
                name="user_email"
                className="input input-accent sm:w-auto w-full"
              />
            </div>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="input input-accent sm:w-auto w-full"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className="textarea textarea-accent"
            />
            <button className="submit_button rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
