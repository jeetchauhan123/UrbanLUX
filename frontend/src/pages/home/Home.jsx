import React from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import Product from "../components/Product";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-row">
        <FilterBar />
        <div className="w-full h-150 mr-4">
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
