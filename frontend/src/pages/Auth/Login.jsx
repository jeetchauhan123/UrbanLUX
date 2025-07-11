import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../redux/loginSlice";
import { Link, Links, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import "../../styles/Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const isAuthenticated = useSelector(
    (state) => state.userData.isAuthenticated
  );
  
  const validEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try{
      const res=await axios.post('https://urbanlux.onrender.com/users/login',{
        email,
        password,
      });
      if(res.data.success){
        console.log("User Login Successfull", res.data);
        // dispatch(isLogin({ email, password }));
        dispatch(isLogin());
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", res.data.token);
        setError("");
        navigate("/home");
      }
      else{
        alert("login failed");
      }
    }
    catch(err){
      console.error("Error during login:", err);
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password.");
      }
      else if (err.response && err.response.status === 404) {
        setError("User not found.");
      }
      else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if(error){
      const timer = setTimeout(()=>{
        setError("");
      },4000);
      return () => clearTimeout(timer);
    }
  }, [error])
  

  return (
    <div>
      {/* Login Page */}
      <section className="login max-w-[100vw] max-h-[100vh] relative">
        <img
          src="./login_bgimg4.jpg"
          alt=""
          className="h-[100vh] w-[100vw] blur-[2px]"
        />
        <Link to="/home">
          <img
            src="../logo/dark-nobg.png"
            alt="darklogo"
            className="brandlogo z-100 h-20 w-23 sm:h-25 sm:w-28 absolute top-4 right-5 md:left-5 md:right-auto"
          />
        </Link>
        
        <div className="w-[60vw] sm:w-[50vw] md:w-[40vw] h-[100vh] bg-[#3a1051] shadow-[0_0_3rem] shadow-[#3a1051] absolute top-0 left-0 md:left-[15%] z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center h-10/12 w-10/12">
            <h1 className="text-3xl font-bold text-[#e7e7fc]">Login</h1>
            <form
              className="flex flex-col items-center justify-center w-full h-full text-[#e7e7fc]"
              onSubmit={handleLogin}
            >
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-10/12 my-2 px-2 py-1 sm:p-2 rounded-md outline-none border-2 border-[#e7e7fc]"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full sm:w-10/12 my-2 px-2 py-1 sm:p-2 rounded-md outline-none border-2 border-[#e7e7fc]"
              />

              {/* Error message */}
              {error && (
                <p className="text-red-500 text-sm mb-2 w-10/12 text-left">
                  {error}
                </p>
              )}

              <div className="text-left w-full sm:w-10/12 font-bold">
                <Link
                  className="text-blue-500 hover:underline text-sm sm:text-base"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="loginbtn w-full sm:w-10/12 py-2 my-2 bg-[#e7e7fc] text-[#3a1051] font-bold rounded-md cursor-pointer  text-sm sm:text-base"
              >
                Login
              </button>

              <p className="text-[#e7e7fc] text-sm sm:text-base">
                Don't have an account?{" "}
                <Link
                  className="text-blue-500 cursor-pointer hover:underline"
                  to={"/sign-up"}
                >
                  Sign Up
                </Link>
              </p>
            </form>

            {/* company login */}
            <div className="w-full">
              <p className="text-[#e7e7fc] text-center mt-4">Or login with:</p>
              <div className="flex flex-col md:flex-row items-center justify-center mt-2 text-[#e7e7fc] font-medium gap-2 md:gap-5">
                <button className="h-9 w-full sm:w-10/12 md:h-18 md:w-20 bg-white flex flex-row md:flex-col items-center justify-center text-[#3a1051] rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../google-logo.svg"
                    alt="google"
                    className="h-6 w-6 md:h-8 md:w-8 mx-2"
                  />
                  Google
                </button>

                <button className="h-9 w-full sm:w-10/12 md:h-18 md:w-20 bg-[#1877F2] flex flex-row md:flex-col items-center justify-center rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../facebook-logo.svg"
                    alt="facebook"
                    className="h-6 w-6 md:h-8 md:w-8 mx-2"
                  />
                  Facebook
                </button>

                <button className="h-9 w-full sm:w-10/12 md:h-18 md:w-20 bg-black flex flex-row md:flex-col items-center justify-center rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../github-black.svg"
                    alt="github"
                    className="h-6 w-6 md:h-8 md:w-8 mx-2 bg-white rounded-[50%]"
                  />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
