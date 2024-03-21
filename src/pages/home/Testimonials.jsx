import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/Testimonials/test.png" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5"></div>
          <p className="text-orange uppercase tracking-wide font-medium text-lg">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl md:leading-snug font-bold my-2;">
            What Our Customers
          </h2>
          <h2 className="text-4xl md:text-5xl md:leading-snug font-bold my-2;">
           Say About us
          </h2>
          <blockquote className="my-5 text-secondary leading-[30px]">
            "I had the pleasure of dining at Saranayts-Deli last night, and I am
            still raving about it! "The attention to detail in presentation and
            service was superb".
          </blockquote>
          {/* avatar */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/Testimonials/c1.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/Testimonials/c2.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/Testimonials/c3.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <h5 className="text-lg-font-semibold">Costumer Feedback</h5>
            <div className="flex item-center gap-2">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">4.9</span>{" "}
              <span className="text-[#807E7E]">(18.6k Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
