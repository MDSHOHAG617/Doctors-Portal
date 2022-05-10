import React from "react";
import doctor from "../../assets/images/doctor.png";

import appointment from "../../assets/images/appointment.png";

const Appointments = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center lg:items-center sm:items-center lg:my-52"
    >
      <div className="flex-1">
        <img className="mt-[-150px] hidden lg:block " src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white sm:mx-auto">
        <h3 className="text-3xl font-bold text-primary">Appointment</h3>
        <h2 className="text-3xl py-3">Make an Appointment Today </h2>
        <p className="pb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi iste
          consequatur asperiores temporibus laudantium autem dolor corrupti sint
          ab facilis ex vel reiciendis voluptatibus est blanditiis nemo, tempore
          minima porro!
        </p>
        <button class="btn uppercase font-bold text-white btn-primary bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Appointments;
