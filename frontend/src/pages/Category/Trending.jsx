import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

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
    </div>
  );
};

export default Trending;
