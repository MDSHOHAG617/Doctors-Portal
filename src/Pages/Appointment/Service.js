import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  //   console.log(name);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto  text-center">
      <div className="card-body ">
        <h2 className="card-title text-secondary mx-auto my-2">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <p>
          <small>Price: $ {price}</small>
        </p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-sm btn-primary text-white bg-gradient-to-r from-secondary to-primary mx-auto my-2"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
