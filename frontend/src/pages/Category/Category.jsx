import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

const Category = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      Category
      <InProgress />
    </div>
  );
};

export default Category;
