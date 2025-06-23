import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";

const Trending = () => {
  return (
    <div>
      <Navbar />
      <FilterBar />
      Trending
      <InProgress />
    </div>
  );
};

export default Trending;
