import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className="w-11/12 mx-auto my-5 flex flex-col gap-5">
        <div>
          {/* list  */}
          <ul>
            <li>About Myself</li>
            <li>Skills used in this Project</li>
            <li>Project Description</li>
            <li></li>
          </ul>
        </div>
        <div>
          {/* project description */}
          <h1 className="text-2xl font-bold">About Myself</h1>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
