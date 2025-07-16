import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <section className="footer lighttxt relative ">
                {/* Upper Footer */}
                <div className="w-full bg-[#3a1051] flex justify-center items-center pt-7 pb-4">
                    <div className="w-10/12 flex flex-row flex-wrap gap-y-10 justify-evenly">
                        {/* Email Part */}
                        <div className="sm:w-40 lg:w-fit flex flex-col gap-2">
                            <p className="flex flex-row justify-center items-center gap-2">
                                <img
                                    src="./email.png"
                                    alt="email"
                                    className="w-7 h-6 opacity-80"
                                />
                                Stay updated for New Offers
                            </p>
                            <div className="flex flex-row sm:flex-col-reverse lg:flex-row gap-2">
                                <button className="w-20 px-3 py-1 border rounded-md hover:bg-[#e7e7fc] hover:text-[#3a1051] ">
                                    Send
                                </button>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-[#9ccaff38] rounded-sm px-2 py-1 w-40"
                                />
                            </div>
                        </div>

                        {/* Google Play/Apple Store */}
                        <div className="w-fit sm:w-40 lg:w-fit flex flex-col gap-2">
                            <div className="flex flex-row items-center justify-center text-center">
                                <img
                                    src="./mobile-phone.png"
                                    alt="mobile-phone"
                                    className="w-8"
                                />
                                <p>Experience the Mobile App</p>
                            </div>
                            <div className="flex flex-row sm:flex-col lg:flex-row justify-center items-center gap-1 lg:gap-2">
                                <Link to={"https://play.google.com/"}>
                                    <img
                                        src="./google-play.png"
                                        alt="google-play"
                                        className="h-10"
                                    />
                                </Link>
                                <Link to={"https://apps.apple.com/app/"}>
                                    <img src="./app-store.png" alt="app-store" className="h-10" />
                                </Link>
                            </div>
                        </div>

                        {/* About Navigation */}
                        <div className="w-55 sm:w-40 lg:w-55 flex flex-row gap-2">
                            <div>
                                <img src="info.png" alt="info" className="h-7 w-13 opacity-80" />
                            </div>
                            <div>
                                <p>Enjoy Our Royal Service For any doubt visit</p>
                                <p>
                                    our{" "}
                                    <Link to={"/about"} className="underline text-[#a5a5f8]">
                                        About
                                    </Link>{" "}
                                    page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* columns */}
                <div className="bg-[#2b0b3d] flex justify-center pt-7 pb-10">
                    <div className="w-10/12 grid md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr_1fr] justify-around gap-x-6 gap-y-8 lg:gap-4">
                        {/* line 1 */}
                        <div className="flex flex-col gap-2 lg:gap-7">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center gap-2 mb-2">
                                    <img
                                        src="./logo/light-nobg.png"
                                        alt="UrbanLUX"
                                        className="h-12"
                                    />
                                    <p className="text-amber-300 font-bold text-3xl font1 text-shadow-[2px_2px_30px]  text-shadow-amber-200">
                                        UrbanLUX
                                    </p>
                                </div>
                                <p>Fashion Yourself With Luxuary</p>
                                <p>With the Ride of Urban Trend</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p>
                                    UrbanLUX Commerce Limited
                                    <br />
                                    Luxuary products for Premium people <br />
                                    Quality goods right from production <br />
                                    Partnered with Top Brands <br />
                                    Why Stay Broke, Have Some Vogue
                                    <br />
                                </p>
                                <p>
                                    Infinity Complex, 7th Piller,
                                    <br />
                                    Near. rubber Lane, Grand Line,
                                    <br />
                                    Opp. Clover Research Park,
                                    <br />
                                    Reaper road, Shibuya Town,
                                    <br />
                                    The World, East Blue Bay, Ohara
                                    <br />
                                </p>
                            </div>
                        </div>

                        {/* line 2 */}
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-7">
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
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-7">
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
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-7">
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
                                    onClick={() =>
                                        (window.location.href = "mailto:yourmail@domain.com")
                                    }
                                    className="cursor-pointer"
                                >
                                    Contact Me
                                </button>
                                <p>Live Chat</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3>Follow Us On:</h3>
                                <div className="flex flex-row gap-1">
                                    <img
                                        src="./instagram-color.svg"
                                        alt="instagram-color"
                                        className="w-8"
                                    />
                                    <img
                                        src="./linkedin-color.svg"
                                        alt="linkedin-color"
                                        className="w-9"
                                    />
                                    <img
                                        src="./github-black.svg"
                                        alt="github-black"
                                        className="w-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1b0329] py-3 px-6 flex flex-col items-center text-center text-[0.7rem] text-[#9d9da5]">
                    <p>&copy; UrbanLUX is Copyright Under my own Imagination Authority</p>
                    <p>
                        Decleration: any or all image or content in this project is not
                        owned by me
                    </p>
                    <p>They are either AI generated or belongs to someone else</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;
