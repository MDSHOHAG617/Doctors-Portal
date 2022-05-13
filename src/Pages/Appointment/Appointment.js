import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer";
import Loading from "../Shared/Loading";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [date, setDate] = useState(new Date());

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
