import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        "dASCLPNcal6NTRb65"
      )
      .then(
        () => {
          console.log("Message sent");
        },
        () => {
          console.log("Message not sent");
        }
      );

    e.target.querySelector(".fullName").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };
  return (
    <div className="contact mt-40" id="contact">
      <SectionTitle title={"Contact"} />
      <form
        onSubmit={sendEmail}
        className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-40"
        ref={formRef}
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
            className="fullName bg-transparent outline-none border w-full focus:border-cyan-400 py-10 px-28"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="email bg-transparent outline-none border w-full focus:border-cyan-400 py-10 px-28"
          />
        </div>
        <div className="form-control">
          <textarea
            type="text"
            placeholder="write your message"
            name="message"
            required
            className="message resize-none block bg-transparent outline-none border w-full focus:border-cyan-400 pt-16 pb-8 px-28 "
          />
        </div>
        <div className="form-control">
          <input
            type="submit"
            value="send message"
            className="uppercase text-center bg-transparent outline-none border w-full  hover:bg-cyan-100 cursor-pointer hover:text-black py-10 px-28"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
