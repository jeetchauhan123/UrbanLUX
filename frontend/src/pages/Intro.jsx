import React, { useEffect, useRef, useState } from "react";
import "../styles/intro.css";
import { NavLink, useNavigate, Link } from "react-router-dom";

function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isIntersecting;
}

const Intro = () => {
    const navigate = useNavigate();
    const elementRef = useRef(null);
    const isVisible = useIsVisible(elementRef);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="box-border overflow-hidden">
            {/* navbar */}
            <nav className="flex justify-between items-center p-4 h-[12vh] bg-[#3a1051]">
                <div className="flex items-center h-full gap-3 rounded-[5px] px-5">
                    <a href="" className="h-full">
                        <img
                            src="./logo/light-nobg.png"
                            alt="Light_Close"
                            className="h-full rounded-[5px]"
                        />
                    </a>
                    {/* <img src="./logo/image-Photoroom (1).png" alt="" /> */}
                    <a href="">
                        <h1 className="text-amber-300 font-bold text-4xl font1 text-shadow-[2px_2px_30px]  text-shadow-amber-200">
                            URBANLUX
                        </h1>
                    </a>
                </div>
                <div className="hidden md:flex lighttxt h-10/12">
                    <ul className="font2 flex gap-5 text-[1.5rem] justify-center items-center h-full">
                        <li className="relative h-full">
                            <NavLink to="/home">
                                <span className="navhovercox py-5">Home</span>
                            </NavLink>
                        </li>
                        <li className="relative h-full">
                            <NavLink to="/products">
                                <span className="navhovercox py-5">Products</span>
                            </NavLink>
                        </li>
                        <li className="relative h-full">
                            <NavLink to="/about">
                                <span className="navhovercox py-5">About</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lighttxt font2 flex gap-4 mr-10">
                    <button
                        onClick={() => navigate("/log-in")}
                        className="border-2 border-[#e7e7fc] text-[#e7e7fc] px-5 py-2 rounded-[5px] hover:bg-[#e7e7fc] hover:text-[#3a1051] font-bold transition-all duration-200"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/sign-up")}
                        className="bg-[#e7e7fc] text-[#3a1051] px-5 py-2 rounded-[5px] hover:bg-[#3a1051] hover:text-[#e7e7fc] font-bold transition-all duration-200"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* hero section */}
            <section className="bg-[#3a1051] w-full flex justify-center items-center relative">
                <div className="flex justify-between items-center w-10/12 gap-5">
                    {/* left part */}
                    <div className="hero-left-con font2 w-[50%]">
                        <div className="hero-left-fix inline-block text-[#e7e7fc] text-[3.5rem] font-[500]">
                            Wanna
                        </div>{" "}
                        <br />
                        <div className="hero-left-wrap inline-flex">
                            <div className="hero-left-fix inline-block text-[#e7e7fc] text-[3.5rem] font-[500]">
                                Purchase:{" "}
                            </div>
                            <ul className="hero-left-move">
                                <li>
                                    <span>Kitchenware?</span>
                                </li>
                                <li>
                                    <span>Cloths?</span>
                                </li>
                                <li>
                                    <span>Sports?</span>
                                </li>
                                <li>
                                    <span>Gadgets?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* right part */}
                    <div className="relative w-[50%] h-[25rem]">
                        <img
                            src="./products.png"
                            alt="products"
                            className="heroproducts absolute top-0 left-0 h-[120%]"
                        />
                        <img
                            src="./beauty.png"
                            alt="beauty"
                            className="herobeauty absolute top-0 left-10 h-[60%]"
                        />
                        <img
                            src="./gameboy.png"
                            alt="gameboy"
                            className="herogameboy absolute top-10 -right-5 h-[50%]"
                        />
                        <img
                            src="./cloths.png"
                            alt="cloths"
                            className="herocloths absolute -bottom-10 -left-10 h-[50%]"
                        />
                        <img
                            src="./shoes.png"
                            alt="shoes"
                            className="heroshoes absolute -bottom-20 right-0 h-[50%]"
                        />
                    </div>
                </div>
                <div
                    className="absolute -bottom-75 -z-[1] bg-[#3a1051]"
                    style={{
                        clipPath: "ellipse(50% 60% at 50% 0%)",
                        width: "120%",
                        height: "300px",
                    }}
                ></div>

                <button
                    className="arrow h-10 w-10 absolute -bottom-40 left-[100vh] cursor-pointer rounded-full flex items-center justify-center"
                    onClick={() => scrollToSection("Brand")}
                >
                    {/* Link to #Brand */}
                    <img src="./arrowdown.png" alt="arrowdown" className="h-7 w-7" />
                    {/* </Link> */}
                </button>
            </section>

            {/* Brand Section */}
            <section id="Brand" className="edgeblur mt-[15rem] mb-[6rem]">
                <div className="w-full flex flex-col justify-center items-center mt-10">
                    <h1 className="font6 text-[#ffb300] text-[400%]">Top Brands</h1>
                    <div className="w-15 h-[0.3rem] rounded-full bg-amber-400 mt-2 mb-5"></div>
                </div>
                <div className="flex flex-row justify-center items-center gap-5 w-10/12 mx-auto">
                    <div
                        ref={elementRef}
                        className={` temp font4 w-[50%] text-[#3a1051]  !font-[600] ${isVisible ? "visible" : ""
                            }`}
                    >
                        <span className={`tx1`}>Discover</span>
                        <br />
                        <span className={`tx2`}>wide</span>
                        &emsp;
                        <span className={`tx3`}>range</span>
                        <br />
                        <span className={`tx4`}>of</span>
                        &emsp;
                        <span className={`tx5`}>Luxury</span>
                        <br />
                        <span className={`tx6`}>Brands</span>
                    </div>
                    {/* scrolling products */}
                    <div className="logoblur w-[40%] h-[30em] relative top-0  overflow-hidden">
                        <div className="logoscroll w-[100%] grid grid-cols-2 px-10 items-center gap-x-6 place-items-center ">
                            <img
                                className="logoimg w-50 h-20"
                                src="./comp/Alexander-Mcqueen.png"
                                alt="Alexander-Mcqueen.png"
                            />
                            <img
                                className="logoimg w-60 h-40"
                                src="./comp/Burberry.png"
                                alt="Burberry.png"
                            />
                            <img
                                className="logoimg w-45 h-30"
                                src="./comp/Chanel.png"
                                alt="Chanel.png"
                            />
                            <img
                                className="logoimg w-50 h-30"
                                src="./comp/CliveChristian.png"
                                alt="Clive Christian.png"
                            />
                            <img
                                className="logoimg w-40 h-20 m-5"
                                src="./comp/Givenchy.png"
                                alt="Givenchy.png"
                            />
                            <img
                                className="logoimg w-40 h-30"
                                src="./comp/hermes.png"
                                alt="hermes.png"
                            />
                            <img
                                className="logoimg w-45 h-20 m-5"
                                src="./comp/HMoser.png"
                                alt="HMoser.png"
                            />
                            <img
                                className="logoimg w-45 h-30"
                                src="./comp/Jimmy_Choo_logo.svg"
                                alt="Jimmy_Choo_logo.svg"
                            />
                            <img
                                className="logoimg w-35 h-25 m-4"
                                src="./comp/Lanvin.png"
                                alt="Lanvin.png"
                            />
                            <img
                                className="logoimg w-35 h-25"
                                src="./comp/LouisVuitton.png"
                                alt="LouisVuitton.png"
                            />
                            <img
                                className="logoimg w-40 h-30"
                                src="./comp/VictoriasSecret.png"
                                alt="VictoriasSecret.png"
                            />
                            <img
                                className="logoimg w-50 h-23"
                                src="./comp/YSL.png"
                                alt="YSL.png"
                            />
                            <img
                                className="logoimg w-50 h-30"
                                src="./comp/VacheronConstantin.png"
                                alt="VacheronConstantin.png"
                            />
                            <img
                                className="logoimg w-45 h-20"
                                src="./comp/Zenith.png"
                                alt="Zenith.png"
                            />
                            <img
                                className="logoimg w-45 h-20"
                                src="./comp/Prada.png"
                                alt="Prada.png"
                            />
                            <img
                                className="logoimg w-43 h-24"
                                src="./comp/Revlon.png"
                                alt="Revlon.png"
                            />
                            <img
                                className="logoimg w-33 h-22 m-4"
                                src="./comp/EsteeLauder.png"
                                alt="Estee Lauder.png"
                            />
                            <img
                                className="logoimg w-50 h-26"
                                src="./comp/GiorgioArmani.png"
                                alt="GiorgioArmani.png"
                            />
                            <img
                                className="logoimg w-45 h-25 m-2"
                                src="./comp/DandG.jpg"
                                alt="DandG.png"
                            />
                            <img
                                className="logoimg w-45 h-10"
                                src="./comp/Gucci.png"
                                alt="Gucci.png"
                            />
                            <img
                                className="logoimg w-50 h-20"
                                src="./comp/Alexander-Mcqueen.png"
                                alt="Alexander-Mcqueen.png"
                            />
                            <img
                                className="logoimg w-60 h-40"
                                src="./comp/Burberry.png"
                                alt="Burberry.png"
                            />
                            <img
                                className="logoimg w-45 h-30"
                                src="./comp/Chanel.png"
                                alt="Chanel.png"
                            />
                            <img
                                className="logoimg w-50 h-30"
                                src="./comp/CliveChristian.png"
                                alt="Clive Christian.png"
                            />
                            <img
                                className="logoimg w-40 h-20 m-5"
                                src="./comp/Givenchy.png"
                                alt="Givenchy.png"
                            />
                            <img
                                className="logoimg w-40 h-30"
                                src="./comp/hermes.png"
                                alt="hermes.png"
                            />
                            <img
                                className="logoimg w-45 h-20 m-5"
                                src="./comp/HMoser.png"
                                alt="HMoser.png"
                            />
                            <img
                                className="logoimg w-45 h-30"
                                src="./comp/Jimmy_Choo_logo.svg"
                                alt="Jimmy_Choo_logo.svg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <section className="footer lighttxt relative ">
                <div className="w-full bg-[#3a1051] flex justify-center items-center pt-7 pb-4">
                    <div className="w-10/12 flex flex-row justify-evenly">
                        <div className="flex flex-col gap-2">
                            <p className="flex flex-row gap-2">
                                <img src="./email.png" alt="email" className="w-7 h-6 opacity-80"/>
                                Stay updated for New Offers
                            </p>
                            <div className="flex flex-row gap-2">
                                <button className="border px-3 py-1 rounded-md hover:bg-[#e7e7fc] hover:text-[#3a1051]">Send</button>
                                <input type="email" name="email" id="email" className="bg-[#9ccaff38] rounded-sm" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center">
                                <img src="./mobile-phone.png" alt="mobile-phone"
                                className="w-8" />
                                <p>Experience the Mobile App</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Link to={'https://play.google.com/'}>
                                <img src="./google-play.png" alt="google-play"
                                className="h-15" /></Link>
                                <Link to={'https://apps.apple.com/app/'}>
                                <img src="./app-store.png" alt="app-store"
                                className="h-15" /></Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div>
                                <img src="info.png" alt="info" className="h-7 opacity-80"/>
                            </div>
                            <div>
                                <p>Enjoy Our Royal Service</p>
                                <p className="">For any doubt visit</p>
                                <p>our <Link to={'/about'}className="underline text-[#a5a5f8]">About</Link> page</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* columns */}
                <div className="bg-[#2b0b3d] flex justify-center pt-7 pb-10">
                    <div className="w-10/12 flex flex-row justify-around">
                        {/* line 1 */}
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center gap-2 mb-2">
                                    <img src="./logo/light-nobg.png" alt="UrbanLUX" 
                                    className="h-12"/>
                                    <p className="text-amber-300 font-bold text-3xl font1 text-shadow-[2px_2px_30px]  text-shadow-amber-200">UrbanLUX</p>
                                </div>
                                <p>Fashion Yourself With Luxuary</p>
                                <p>With the Ride of Urban Trend</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p>
                                UrbanLUX Commerce Limited<br />
                                Luxuary products for Premium people <br />
                                Quality goods right from production <br />
                                Partnered with Top Brands <br />
                                Why Stay Broke, Have Some Vogue<br />
                                </p>
                                <p>
                                Infinity Complex, 7th Piller,<br />
                                Near. rubber Lane, Grand Line,<br />
                                Opp. Clover Research Park,<br />
                                Reaper road, Shibuya Town,<br />
                                The World, East Blue Bay, Ohara<br />
                                </p>
                            </div>
                            

                        </div>

                        {/* line 2 */}
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-3">
                                <h3>Get to know us:</h3>
                                <Link>About UrbanLUX</Link>
                                <Link>Careers</Link>
                                <Link>Press Releases</Link>
                                <Link>UrbanLUX cares</Link>
                                <Link>Sustainability</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3>Let us help you:</h3>
                                <Link>Your Account</Link>
                                <Link>Track your Order</Link>
                                <Link>Returns & Refunds</Link>
                                <Link>Help Center</Link>
                                <Link>Contack Us</Link>
                            </div>
                            
                        </div>

                        {/* line 3 */}
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-3">
                                <h3>Policies:</h3>
                                <Link>Privacy Policy</Link>
                                <Link>Terms of Service</Link>
                                <Link>Cookie Policy</Link>
                                <Link>Returns Policy</Link>
                                <Link>Shipping Policy</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3>Partner with Us:</h3>
                                <Link>Sell on UrbanLux</Link>
                                <Link>Advertise Your Products</Link>
                                <Link>Become an Affiliate</Link>
                                <Link>Supplier Code of Conduct</Link>
                            </div>
                            
                        </div>
                        
                        {/* line 4 */}
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-3">
                                <h3>Payment Methods:</h3>
                                <Link>Credit / Debit Cards</Link>
                                <Link>UPI Payments</Link>
                                <Link>Wallets</Link>
                                <Link>Net Banking</Link>
                                <Link>Cash on Delivery</Link>
                            </div>
                            <div>
                                <h3>Customer Support:</h3>
                                <p>Call Us: 1111-1509-1408</p>
                                <button 
                                    onClick={() => window.location.href = 'mailto:yourmail@domain.com'}
                                    className="cursor-pointer">
                                        Contact Me
                                </button>
                                <p>Live Chat</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3>Follow Us On:</h3>
                                <div className="flex flex-row gap-1">
                                    <img src="./instagram-color.svg" alt="instagram-color" className="w-8" />
                                    <img src="./linkedin-color.svg" alt="linkedin-color" className="w-9" />
                                    <img src="./github-black.svg" alt="github-black" className="w-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1b0329] py-3 flex flex-col items-center text-[0.7rem] text-[#9d9da5]">
                    <p>&copy; UrbanLUX is Copyright Under my own Imagination Authority</p>
                    <p>Decleration: any or all image or content in this project is not owned by me</p>
                    <p>They are either AI generated or belongs to someone else</p>
                </div>
            </section>
        </div>
    );
};

export default Intro;
