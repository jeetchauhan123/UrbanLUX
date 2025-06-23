import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isLogout } from "../../redux/loginSlice";
import axios from "axios";

const Navbar = () => {
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
                alert("Session expired. Please login again.");
                const protectedRoutes = ["/profile", "/dashboard", "/users", "/settings"];
                const currentPath = window.location.pathname;

                if (protectedRoutes.includes(currentPath)) {
                    window.location.href = "/log-in";
                }
                console.error("useeffect error in navbar: ", error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>
            <nav className=" h-[10vh] w-full bg-[#3a1051] flex justify-center items-center">
                <div className="w-11/12 flex justify-between items-center">
                    {/* logo icon */}
                    <div className="flex items-center h-full gap-3 rounded-[5px] ">
                        <NavLink to={"/home"} className="">
                            <img
                                src="./logo/light-nobg.png"
                                alt="Light_Close"
                                className="h-18 rounded-[5px]"
                            />
                        </NavLink>
                        {/* <img src="./logo/image-Photoroom (1).png" alt="" /> */}
                    </div>

                    {/* navigation links */}
                    <div className="hidden md:flex lighttxt h-10/12">
                        <ul className="font2 flex gap-5 text-[1.5rem] justify-center items-center h-full">
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
                            <li className="relative h-full">
                                <NavLink to="/product/sales">
                                    <span className="navhovercox py-5">Sales</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* search bar */}
                    <div className="flex flex-row items-center font2 gap-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="bg-white rounded-md h-10 w-55"
                        />
                        <button
                            type="button"
                            className="text-[#3a1051] bg-[#e7e7fc] px-5 py-2 rounded-[5px] font-extrabold cursor-pointer hover:bg-[#d8d8f9]"
                        >
                            Search
                        </button>
                    </div>

                    {/* wishlist and cart icons and authentication button */}
                    <div className="flex flex-row items-center font2 gap-4">
                        {/* wishlist icon */}
                        <NavLink to="/wishlist">
                            <img
                                src="./wishlist.png"
                                alt=""
                                title="Wishlist"
                                className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </NavLink>
                        {/* cart icon */}
                        <NavLink to="/cart">
                            <img
                                src="./cart.png"
                                alt="Cart"
                                title="Cart"
                                className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        </NavLink>

                        {/* button as per authentication */}
                        <div className="lighttxt font2 flex">
                            {!isAuthenticated ? (
                                <>
                                    <button
                                        onClick={() => navigate("/log-in")}
                                        className="border-2 border-[#e7e7fc] text-[#e7e7fc] px-4 py-2 rounded-[5px] hover:bg-[#e7e7fc] hover:text-[#3a1051] font-extrabold transition-all duration-200 cursor-pointer"
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
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white px-3 py-2 rounded-[5px] hover:bg-red-600 font-extrabold transition-all duration-200 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                    <button onClick={() => navigate("/profile")}>
                                        <img
                                            src={imageLink.image}
                                            alt="account"
                                            title="Profile"
                                            className="h-10 cursor-pointer rounded-[50%]"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
