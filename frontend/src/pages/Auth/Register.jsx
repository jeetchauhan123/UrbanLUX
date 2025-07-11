import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../../redux/loginSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    try {
      const res = await axios.post("https://urbanlux.onrender.com/users/register", {
        email,
        password,
      });
      if (res.data.success) {
        console.log("user registered successfully", res.data);
        // dispatch(isLogin({ email, password }));
        dispatch(isLogin());
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("user", JSON.stringify({ email }));
        setError("");
        navigate("/home");
      } else {
        alert("Registration failed. Please try again.");
      }
    }
    catch (err) {
      console.error("Error during registration:", err);
      if (err.response && err.response.status === 400) {
        setError("Email already exists. Use different email.");
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
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 4000);
    }
  }, [error]);

  return (
    <div>
      {/* register page */}
      <section className="bg-blue-400">
        <img
          src="./login_bgimg4_rev.jpg"
          alt=""
          className="h-[100vh] w-[100vw] blur-[2px]"
        />
        <Link to="/home">
          <img
            src="../logo/dark-nobg.png"
            alt="darklogo"
            className="brandlogo z-100 h-20 w-23 sm:h-25 sm:w-28 absolute top-4 left-5 md:right-5 md:left-auto"
          />
        </Link>

        <div className="w-[60vw] sm:w-[50vw] md:w-[40vw] h-[100vh] bg-[#3a1051]  shadow-[0_0_3rem] shadow-[#3a1051] absolute top-0 right-0 md:right-[15%] z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center h-10/12 w-10/12">
            <h1 className="text-3xl font-bold text-[#e7e7fc]">Registration</h1>
            <form
              className="flex flex-col items-center justify-center w-full h-full text-[#e7e7fc]"
              onSubmit={handleRegister}
            >
              <p className="w-full sm:w-10/12 text-sm sm:text-base text-left">Enter Your Email:</p>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-10/12 my-2 px-2 py-1 sm:p-2 rounded-md outline-none border-2 border-[#e7e7fc]"
              />
              <p className="mx-auto w-full sm:w-10/12 text-sm sm:text-base text-left">Enter Your Password:</p>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full sm:w-10/12 my-2 px-2 py-1 sm:p-2 rounded-md outline-none border-2 border-[#e7e7fc]"
              />
              <p className="mx-auto w-full sm:w-10/12 text-sm sm:text-base text-left">
                Confirm Your Password:
              </p>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full sm:w-10/12 my-2 px-2 py-1 sm:p-2 rounded-md outline-none border-2 border-[#e7e7fc]"
              />
              {/* Error message */}
              {error && (
                <p className="text-red-500 text-sm mt-2 w-10/12 text-left">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="loginbtn w-full sm:w-10/12 py-2 my-2 bg-[#e7e7fc] text-[#3a1051] font-bold rounded-md cursor-pointer text-sm sm:text-base"
              >
                Register
              </button>

              <p className="w-full sm:w-10/12 text-sm sm:text-base text-left text-[#e7e7fc]">
                Already have account?{" "}
                <Link
                  className="text-blue-500 cursor-pointer hover:underline"
                  to={"/log-in"}
                >
                  Login
                </Link>
              </p>
            </form>

            {/* company login */}
            <div className="w-full">
              <p className="text-[#e7e7fc] text-center mt-4">Or login with:</p>
              <div className="flex flex-col md:flex-row items-center justify-center mt-2 text-[#e7e7fc] font-medium gap-2 md:gap-5">
                <button className="h-8 w-full sm:w-10/12 md:h-18 md:w-20 bg-white flex flex-row md:flex-col items-center justify-center text-[#3a1051] rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../google-logo.svg"
                    alt="google"
                    className="h-5 w-5 md:h-8 md:w-8 mx-2"
                  />
                  Google
                </button>

                <button className="h-8 w-full sm:w-10/12 md:h-18 md:w-20 bg-[#1877F2] flex flex-row md:flex-col items-center justify-center rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../facebook-logo.svg"
                    alt="facebook"
                    className="h-5 w-5 md:h-8 md:w-8 mx-2"
                  />
                  Facebook
                </button>

                <button className="h-8 w-full sm:w-10/12 md:h-18 md:w-20 bg-black flex flex-row md:flex-col items-center justify-center rounded-md cursor-pointer text-sm sm:text-base">
                  <img
                    src="../github-black.svg"
                    alt="github"
                    className="h-5 w-5 md:h-8 md:w-8 mx-2 bg-white rounded-[50%]"
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

export default Register;
