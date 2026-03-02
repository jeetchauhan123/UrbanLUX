import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";

const Trending = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-row">
        <FilterBar />
        <div className="w-full h-150 mr-4">
          <InProgress />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trending;
