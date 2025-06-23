import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

const Brands = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <p>Brands page</p>
      <InProgress />
    </div>
  );
};

export default Brands;
