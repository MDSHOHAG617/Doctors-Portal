import React from "react";
import Appointments from "./Appointments";
import Banner from "./Banner";
import Info from "./Info";
import SecondBanner from "./SecondBanner";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <h2>this is home</h2>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <SecondBanner></SecondBanner>
      <Appointments></Appointments>
    </div>
  );
};

export default Home;
