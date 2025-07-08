import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isLogout } from "../../redux/loginSlice";
import axios from "axios";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [imageLink, setImageLink] = useState({
        image: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(
        (state) => state.userData.isAuthenticated
    );

    const token = localStorage.getItem("token");
    console.log("token:", token);

    const handleLogout = () => {
        dispatch(isLogout());
        navigate("/log-in");
    };

    useEffect(() => {
        if (!token) {
            console.log("No token, not fetching user data");
            return;
        }

        const fetchUserData = async () => {
            try {
                const res = await axios.get("https://urbanlux.onrender.com/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setImageLink({ image: res.data.image });
            } catch (error) {
                localStorage.removeItem("token");
                console.error("useeffect error in navbar: ", error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>
            {/* navbar */}
            <nav className="flex flex-row justify-around items-center w-[100vw] sm:hidden bg-[#3a1051]">
                <div className="flex items-center justify-center h-full rounded-[5px] ">
                    <NavLink to={"/home"} className="">
                        <img
                            src="/./logo/light-nobg.png"
                            alt="Dark"
                            className="h-15 rounded-[5px] my-3"
                        />
                    </NavLink>
                    <a href="">
                        <h1 className="text-amber-300 font-bold text-4xl font1 text-shadow-[2px_2px_30px]  text-shadow-amber-200">
                            URBANLUX
                        </h1>
                    </a>
                    {/* <img src="./logo/image-Photoroom (1).png" alt="" /> */}
                </div>
                <button className="px-3.5 py-1.5 text-xl text-[#e7e7fc] border rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
            </nav>

            {/* tab/laptop view */}
            <nav className=" h-[10vh] w-full bg-[#3a1051] hidden sm:flex justify-center items-center">
                <div className="w-11/12 flex justify-between items-center">
                    {/* logo icon */}
                    <div className="flex items-center h-full gap-3 rounded-[5px] ">
                        <NavLink to={"/home"} className="">
                            <img
                                src="/./logo/light-nobg.png"
                                alt="Light_Close"
                                className="h-15 md:h-13 lg:h-18 rounded-[5px]"
                            />
                        </NavLink>
                        {/* <img src="./logo/image-Photoroom (1).png" alt="" /> */}
                    </div>

                    {/* navigation links */}
                    <div className="hidden sm:flex lighttxt h-10/12">
                        <ul className="font2 flex gap-2 lg:gap-5 text-[1.3rem] md:text-[1.3rem] lg:text-[1.5rem] justify-center items-center h-full">
                            <li className="relative h-full">
                                <NavLink to="/product/category">
                                    <span className="navhovercox py-5">Categories</span>
                                </NavLink>
                            </li>
                            <li className="relative h-full">
                                <NavLink to="/product/brands">
                                    <span className="navhovercox py-5">Brand</span>
                                </NavLink>
                            </li>
                            <li className="relative h-full">
                                <NavLink to="/product/trending">
                                    <span className="navhovercox py-5">Trending</span>
                                </NavLink>
                            </li>
                            {/* <li className="relative h-full">
                                <NavLink to="/product/sales">
                                    <span className="navhovercox py-5">Sales</span>
                                </NavLink>
                            </li> */}
                            <li className="relative h-full">
                                <NavLink to="/about">
                                    <span className="navhovercox py-5">About</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* search bar */}
                    <div className="flex flex-row items-center font2 gap-0 lg:gap-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="bg-white rounded-md h-8 lg:h-8 w-30 lg:w-45 py-2 px-2 hidden md:block text-sm"
                        />
                        <button
                            type="button"
                            className="text-[#3a1051] bg-[#e7e7fc] px-2 py-1.5 lg:px-4 lg:py-1.6 rounded-[5px] font-extrabold cursor-pointer hover:bg-[#d8d8f9] hidden md:block text-sm lg:text-sm"
                        >
                            Search
                        </button>
                    </div>

                    {/* wishlist and cart icons and authentication button */}
                    <div className="flex flex-row items-center font2 gap-2 md:gap-2 lg:gap-4">
                        {/* wishlist icon */}
                        <NavLink to="/wishlist">
                            <img
                                src="/./wishlist.png"
                                alt=""
                                title="Wishlist"
                                className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </NavLink>
                        {/* cart icon */}
                        <NavLink to="/cart">
                            <img
                                src="/./cart.png"
                                alt="Cart"
                                title="Cart"
                                className="h-7 w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </NavLink>

                        {/* button as per authentication */}
                        <div className="lighttxt font2 flex">
                            {!isAuthenticated ? (
                                <>
                                    <button
                                        onClick={() => navigate("/log-in")}
                                        className="border-2 border-[#e7e7fc] text-[#e7e7fc] px-3 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-[5px] hover:bg-[#e7e7fc] hover:text-[#3a1051] font-extrabold transition-all duration-200 cursor-pointer text-md lg:text-md"
                                    >
                                        Login
                                    </button>
                                    {/* <button
                                        onClick={() => navigate("/sign-up")}
                                        className="bg-[#e7e7fc] text-[#3a1051] px-5 py-2 rounded-[5px] hover:bg-[#3a1051] hover:text-[#e7e7fc] font-bold transition-all duration-200"
                                    >
                                        Sign Up
                                    </button> */}
                                </>
                            ) : (
                                <div className="flex items-center gap-1.5 lg:gap-3">
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white px-3 py-1.5 md:px-2 md:py-2 lg:px-3 lg:py-2 rounded-[5px] hover:bg-red-600 font-extrabold transition-all duration-200 cursor-pointer md:text-sm lg:text-base"
                                    >
                                        Logout
                                    </button>
                                    <button onClick={() => navigate("/profile")}>
                                        <img
                                            src={imageLink.image}
                                            alt="account"
                                            title="Profile"
                                            className="h-10 min-h-10 w-12 cursor-pointer rounded-[50%]"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="sm:hidden flex flex-col items-start gap-4 px-6 py-4 bg-[#3a1051] text-white font2 text-lg transition-all duration-300">
                    <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/product/category" onClick={() => setIsMenuOpen(false)}>
                        Categories
                    </NavLink>
                    <NavLink to="/product/brands" onClick={() => setIsMenuOpen(false)}>
                        Brand
                    </NavLink>
                    <NavLink to="/product/trending" onClick={() => setIsMenuOpen(false)}>
                        Trending
                    </NavLink>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </NavLink>
                    <hr className="border-white w-full" />
                    {/* Authentication Buttons */}
                    {!isAuthenticated ? (
                        <button
                            onClick={() => {
                                navigate("/log-in");
                                setIsMenuOpen(false);
                            }}
                            className="border-2 border-white px-3 py-1 rounded"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="bg-red-500 text-white px-3 py-2 rounded"
                            >
                                Logout
                            </button>
                            <button
                                onClick={() => {
                                    navigate("/profile");
                                    setIsMenuOpen(false);
                                }}
                            >
                                <img
                                    src={imageLink.image}
                                    alt="account"
                                    className="h-10 w-12 rounded-[50%]"
                                />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
