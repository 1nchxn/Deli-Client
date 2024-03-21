import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4">
      {" "}
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials/>
      <OurServices/>
    </div>
  );
};

export default Home;
