import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {isLogout} from "../../redux/loginSlice";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import Product from "../components/Product";


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=> state.userData.isAuthenticated);

  
  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-row">
        <div className="max-w-[15%] w-full flex justify-center m-2 bg-white shadow-lg rounded-lg">
          <FilterBar />
        </div>
        <div className="w-full h-150 mr-4">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
