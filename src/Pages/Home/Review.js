import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card shadow-xl w-96  text-primary-content  mx-auto">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ea
          quisquam rerum perspiciatis asperiores recusandae!
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="">
            <h4 className="text-xl"> {review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
