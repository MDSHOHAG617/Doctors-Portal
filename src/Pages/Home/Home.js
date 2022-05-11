import React from "react";
import Appointments from "./Appointments";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Info from "./Info";
import SecondBanner from "./SecondBanner";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <SecondBanner></SecondBanner>
      <Appointments></Appointments>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
