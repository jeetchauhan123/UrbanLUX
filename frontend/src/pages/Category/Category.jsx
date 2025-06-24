import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-row">
        <div className="max-w-[15%] w-full flex justify-center m-2 bg-white shadow-lg rounded-lg">
          <FilterBar />
        </div>
        <div className="w-full h-150 mr-4">
          <InProgress />
        </div>
      </div>
    </div>
  );
};

export default Category;
