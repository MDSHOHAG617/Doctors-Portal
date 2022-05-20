import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L1XPtAKPn8xk6KREJGFJCE114R5OBzhaRgucW30fy9HBpfBOLdnUXAsjdf3qP9gQ85h67NUpQzGJcg2C8E5Q2au009d7jkPud"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://intense-fjord-49146.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md mx-auto bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success">Hello, {appointment.patientName}</p>
          <h2 class="card-title">Please pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            <span className="text-orange-700">{appointment.slot}</span>
          </p>
          <p>
            Please pay: <span className="font-mono ">${appointment.price}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
