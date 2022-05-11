import React from "react";
import bgImg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      style={{
        background: `url(${bgImg})`,
      }}
      className="my-20"
    >
      <div className="text-center p-10 ">
        <h3 className="text-xl text-primary font-bold">Contacts Us</h3>
        <h2 className="text-2xl font-mono text-white mb-5">
          Stay connected with us
        </h2>
        <div
          className="justify-center lg:grid lg:w-100
        "
        >
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-info w-full max-w-xs my-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info w-full max-w-xs my-2 "
          />
          <textarea
            className="textarea textarea-info w-5/6 lg:w-80 p-5 my-1"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="btn uppercase font-bold text-white btn-primary bg-gradient-to-r from-secondary to-primary mt-5">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
