import React from "react";
import treatment from "../../assets/images/treatment.png";

const SecondBanner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col gap-5 lg:flex-row lg:m-20">
        <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:px-20">
          <h1 class="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn uppercase font-bold text-white btn-primary bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
