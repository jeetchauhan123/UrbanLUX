import React from 'react'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="nfoundbg flex flex-col items-center justify-center w-[100vw] h-[100vh] text-lg ">
      <div className="flex flex-col items-center justify-center bg-[#3a1051] px-10 py-25 gap-5 rounded-4xl shadow-[0_0_50px_-10px]">
        <main className="flex flex-col items-center justify-center text-[#e7e7fc]">
          <p>Sorry people no page like this.</p>
          <p>would you like to return.</p>
        </main>
        <button className="cursor-pointer bg-[#e7e7fc] px-4 py-2 rounded-full text-[#3a1051] font-bold inset-shadow-[0_0_20px_-7px]" onClick={navigateHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound