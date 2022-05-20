import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  // console.log(appointments);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://intense-fjord-49146.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setAppointments(data);
        });
    }
  }, [user]);
  return (
    <div>
      {/* <h2>my apo: {appointments.length}</h2> */}

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
                <td>
                  {appointment.price && !appointment.paid && (
                    <Link to={`/dashboard/payment/${appointment._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {appointment.price && appointment.paid && (
                    <div>
                      <p>
                        <span className=" text-success">Paid</span>
                      </p>
                      <p>
                        Transaction Id:{" "}
                        <span className="text-success">{appointment._id} </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
