import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import axios from "axios";

const AboutUs = () => {
  const [review, setreview] = useState(false);
  const [errors, setErrors] = useState({});
  const [IsUploading, setIsUploading] = useState(false);
  const [ReviewData, setReviewData] = useState({
    name: "",
    starRate: 0,
    email: "",
    link: "",
    tips: "",
    review: "",
  });

  const handleChange = (e) => {
    setReviewData({ ...ReviewData, [e.target.name]: e.target.value });
  };

  const onClickReview = () => {
    setreview(true);
  };

  const uploadReview = async () => {
    setIsUploading(true);

    const newErrors = {};

    if (!ReviewData.name.trim()) newErrors.name = "Name is required.";
    if (ReviewData.starRate === 0)
      newErrors.starRate = "Please rate the project.";
    if (!ReviewData.tips.trim()) newErrors.tips = "Tips/Improvements required.";
    if (!ReviewData.review.trim())
      newErrors.review = "Review/Comment required.";

    // If any error exists, show them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsUploading(false);
      return;
    }

    setErrors({}); // clear previous errors

    try {
      const res = await axios.post(
        "https://urbanlux.onrender.com/review/review",
        ReviewData
      );
      if (res.data.success) {
        console.log("Review Uploaded successfully");
        toast.success("✅ Review uploaded successfully!");
        setReviewData({
          name: "",
          starRate: 0,
          email: "",
          link: "",
          tips: "",
          review: "",
        });
        setreview(false);
      } else {
        console.log("Something went wrong. Try again!");
      }
      setIsUploading(false);
      setreview(false);
    } catch (err) {
      console.error("Upload failed:", err);
      toast.error("❌ Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    setreview(false);
  }, []);

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <section className="w-11/12 mx-auto my-5 flex flex-row gap-5">
        {/* left Side */}
        <div className="w-[20%] p-4 ">
          {/* left list  */}
          <ul className="flex flex-col text-lg font-semibold border-t-1 border-t-[#c9c9c9] text-right sticky top-10 h-fit">
            <li className="border-b-1 py-3 border-[#c9c9c9]">
              <a href="#about-myself">About Myself</a>
            </li>
            <li className="border-b-1 py-3 border-[#c9c9c9]">
              <a href="#project-description">Project Description</a>
            </li>
            <li className="border-b-1 py-3 border-[#c9c9c9]">
              <a href="#skills">Skills used in this Project</a>
            </li>
            <li className="border-b-1 py-3 border-[#c9c9c9]">
              <a href="#review">Review This Project</a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-[75%] p-4 flex justify-center flex-col items-center">
          {/* About myself */}
          <section id="about-myself" className="w-11/12 bg-[#f2f2ff] px-10 py-6 rounded-2xl shadow-2xl mb-6">
            {/* Personal description */}
            <h1 className="font5 text-3xl font-bold">About Myself</h1>
            <div className="h-1 w-8 my-4 bg-[#3a1051] rounded-full"></div>

            {/* Personal Information */}
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font6 text-4xl inline">Jeet Chauhan</h1>
                <p className="py-1 text-lg text-gray-600">
                  spgtjeet123@gmail.com
                </p>
                <p className="text-lg text-gray-600">9054992802</p>
              </div>
              <div className="grid grid-cols-2 text-md gap-x-3">
                <p className="text-right inline">D.O.B: </p>
                <p className="inline">
                  28<sup>th</sup> Feb 2003
                </p>
                <p className="text-right">Nationality: </p>
                <p>Indian</p>
                <p className="text-right">Languages Known: </p>
                <p>English, Hindi, Gujarati</p>
                <p className="text-right">Marital Status: </p>
                <p>Unmarried</p>
                <p className="text-right">Location: </p>
                <p>Ahmedabad</p>
              </div>
            </div>

            {/* Education Profile */}
            <div>
              <h2 className="text-2xl font-semibold my-2">
                Education Profile:
              </h2>
              <table className="border-separate border-spacing-y-3 w-full">
                <tbody>
                  <tr>
                    <td className="text-3xl text-[#3a1051] pr-2">•</td>
                    <td>
                      <div className="flex flex-row justify-between">
                        <h3 className="font-semibold">
                          Master Of Computer Application (MCA)
                        </h3>
                        <p className="italic text-gray-600">2023-2025</p>
                      </div>
                      <p className="italic text-gray-700">
                        L.D. College of Engineering
                      </p>
                      <p className="italic text-gray-700">CGPA: 7.50/10</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-3xl text-[#3a1051]">•</td>
                    <td>
                      <div className="flex flex-row justify-between">
                        <h3 className="font-semibold">
                          Bachelor Of Computer Application (BCA)
                        </h3>
                        <p className="italic text-gray-600">2020-2023</p>
                      </div>
                      <p className="italic text-gray-700">
                        Chimanbhai Patel Institute of Computer Applications -
                        Gujarat University
                      </p>
                      <p className="italic text-gray-700">Percentage: 78.12%</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-3xl text-[#3a1051]">•</td>
                    <td>
                      <div className="flex flex-row justify-between">
                        <h3 className="font-semibold">
                          Senior Secondary (XII), Commerce
                        </h3>
                        <p className="italic text-gray-600">2018-2020</p>
                      </div>
                      <p className="italic text-gray-700">Hiramani School</p>
                      <p className="italic text-gray-700">GSEB board</p>
                      <p className="italic text-gray-700">Percentage: 71.20%</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-3xl text-[#3a1051]">•</td>
                    <td>
                      <div className="flex flex-row justify-between">
                        <h3 className="font-semibold">Secondary (X)</h3>
                        <p className="italic text-gray-600">-2018</p>
                      </div>
                      <p className="italic text-gray-700">
                        Kendriya Vidyalaya Afs Wadsar
                      </p>
                      <p className="italic text-gray-700">CBSE board</p>
                      <p className="italic text-gray-700">Percentage: 67.00%</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Hobby */}
            <div className="text-lg my-4">
              <h2 className="text-2xl font-semibold my-2">Hobbies:</h2>
              <p className="italic text-gray-600">Reading</p>
              <p className="italic text-gray-600">Listening to music</p>
              <p className="italic text-gray-600">Physical activities</p>
              <p className="italic text-gray-600">Learning New Things</p>
              <p className="italic text-gray-600">Playing Games</p>
            </div>

            {/* Skills */}
            <div className="my-4">
              <h2 className="text-2xl font-semibold my-2">Skills:</h2>
              <p className="font-semibold">o Well versed with:</p>
              <p className="italic text-gray-600">
                • HTML5, CSS3, TAILWIND, Visual Studio 2022 / 2025
              </p>
              <p className="italic text-gray-600">
                • JavaScript, React JS, Redux, React Router Dom
              </p>
              <p className="font-semibold">o Knowledgeable in:</p>
              <p className="italic text-gray-600">
                • JAVA, Node JS, Express JS, GitHub.
              </p>
              <p className="italic text-gray-600">
                • MySql, RDBMS, MongoDB, Mongoose, MongoDB Atlas, AWS.
              </p>
            </div>

            {/* WORK EXPERIENCE */}
            <h2 className="text-2xl font-semibold my-4">Experience:</h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="text-4xl text-[#3a1051] pr-2 align-top">•</td>
                  <td>
                    <p className="font-semibold">
                      CO. - Vardhan Insys, Ahmedabad:
                    </p>
                    <p>Intern Software Developer</p>
                    <p>Key Task:</p>
                    <p className="italic text-gray-600">
                      Managing, Planning, requirement gathering, Designing,
                      Responsiveness of web pages.
                    </p>
                    <p className="italic text-gray-600">
                      Designing, Developing, Testing and Deployment of project
                      on AWS
                    </p>
                    <p className="italic text-gray-600">
                      Duration: Dec-2024 to Apr-2025
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Projects */}
            <h2 className="text-2xl font-semibold my-4">Projects:</h2>
            <table className="border-separate border-spacing-y-3 w-full">
              <tbody>
                <tr>
                  <td className="text-4xl text-[#3a1051] pr-4 align-top">•</td>
                  <td>
                    <p className="font-semibold">
                      CMS: Complaint Management System
                    </p>
                    <p>Key Task:</p>
                    <p className="italic text-gray-600 text-justify">
                      This Web Software is accessed by users to file a complaint
                      regarding any issue for product or service malfunctioning,
                      Admin can track and assign complaints to technician and
                      manage technicians, Technician then resolve/pending the
                      job based on the actions taken and coordinator can add and
                      delete products and services and track complaint status.
                    </p>
                    <p className="italic text-gray-600">
                      Hosted on AWS - http://3.110.220.23:5000/
                    </p>
                    <p className="italic text-gray-600">
                      Duration: Dec-2024 to Apr-2025
                    </p>
                    <p className="text-red-400">
                      Note: Admin Dashboard, Coordinator dashboard and
                      Technician dashboard are only accessible by company.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-4xl text-[#3a1051] pr-2 align-top">•</td>
                  <td>
                    <p className="font-semibold">Project: UrbanLUX</p>
                    <p>Key Task:</p>
                    <p className="italic text-gray-600">
                      This is an E-Commerce Project created from scratch and
                      purely handwritten by myself to showcase my skills in the
                      field of web development.
                    </p>
                    <p className="italic text-gray-600">
                      Implemented features like user authentication - login,
                      registration, Profile Management, Review project.
                    </p>
                    <p className="italic text-gray-600">
                      Duration: May-2025 to In-Progress
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Project Description */}
          <section id="project-description" className="w-11/12 bg-[#f2f2ff] px-10 py-6 rounded-2xl shadow-2xl mb-6">
            <h1 className="font5 text-3xl font-bold">Project Description</h1>
            <div className="h-1 w-8 my-4 bg-[#3a1051] rounded-full"></div>
            <h2 className="font4 text-3xl font-normal">UrbanLUX</h2>
            <p className="font2 italic">Go Urban. Go Lux</p>
            <div>
              <p>Note: The Backend Requires time to reactive as the backend is hosted on render and it stops the project after inactivity</p>
              <p>The product images are taken from <a href="https://picsum.photos/">"Lorem Picsum"</a></p>
              <p>The data is generated from <a href="https://www.reactbd.com/tools/json-generator">"ReactBD"</a></p>
              <p>Free instance of Render will spin down with inactivity, which can delay requests by 50 seconds or more, So Please Be Patient".</p>
            </div>
          </section>

          {/* Skills used in the project */}
          <section id="skills" className="w-11/12 bg-[#f2f2ff] px-10 py-6 rounded-2xl shadow-2xl mb-6">
            <h1 className="font5 text-3xl font-bold">Skills used in project</h1>
            <div className="h-1 w-8 my-4 bg-[#3a1051] rounded-full"></div>
            <ul className="list-disc list-inside marker:text-[#3a1051] text-gray-600">
              <li>
                HTML5, CSS3, JavaScript, ReactJS, React-Redux, React-Router-Dom,
                TailwindCSS, axios
              </li>
              <li>
                NodeJS, ExpressJS, Mongoose, MongoDB, MongoDB Atlas, Bcrypt,
                Cors, JWT, Multer, Cloudinary
              </li>
              <li>
                Authentication, Cloud Database, Interactive UI, Animations,
                Image Upload on Cloudinary, Routing, Backend Connection, API
                Calling, Token Based Authentication, Password Encryption
              </li>
            </ul>
          </section>

          {/* Project Review */}
          <section id="review" className="w-11/12 bg-[#f2f2ff] px-10 py-6 rounded-2xl shadow-2xl flex flex-col gap-5">
            <h1 className={`font5 text-3xl font-bold`}>Review my project</h1>
            <div className="h-1 w-8  bg-[#3a1051] rounded-full"></div>

            {/* btn to show review form */}
            <button
              onClick={onClickReview}
              className={`w-30 bg-[#3a1051] text-white px-4 py-2 rounded-full text-lg cursor-pointer ${
                review ? "hidden" : "block"
              }`}
            >
              Review
            </button>

            {/* hidden/appear after button click */}
            <div
              className={`flex flex-col gap-3 ${review ? "block" : "hidden"}`}
            >
              {/* name */}
              <div className="flex flex-col gap-2">
                <p>Enter Your Affiliation/Email:</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={ReviewData.name}
                  onChange={handleChange}
                  className="bg-[#d5d5f4] border rounded-sm py-1 px-2 w-[20vw]"
                  required
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}
              </div>

              {/* star rating */}
              <div>
                <p>Rate The Project:</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() =>
                      setReviewData({ ...ReviewData, starRate: star })
                    }
                    style={{
                      cursor: "pointer",
                      fontSize: "30px",
                      color:
                        star <= ReviewData.starRate ? "orange" : "lightgray",
                    }}
                  >
                    ☆
                  </span>
                ))}
                {errors.starRate && (
                  <p className="text-red-600 text-sm mt-1">{errors.starRate}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <p>
                  Email <span>(optional)</span>:
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={ReviewData.email}
                  onChange={handleChange}
                  className="bg-[#d5d5f4] border rounded-sm py-1 px-2 w-[20vw]"
                />
              </div>

              {/* Linked/Social Media link */}
              <div className="flex flex-col gap-2">
                <p>
                  Linked/Social Media link <span>(optional)</span>:
                </p>
                <input
                  type="text"
                  name="link"
                  id="link"
                  onChange={handleChange}
                  className="bg-[#d5d5f4] border rounded-sm py-1 px-2 w-[20vw]"
                />
              </div>

              {/* tips or improvements */}
              <div className="flex flex-col gap-2">
                <p>Tips/Improvements:</p>
                <textarea
                  name="tips"
                  id="tips"
                  value={ReviewData.tips}
                  onChange={handleChange}
                  placeholder="What changes should i make"
                  className="bg-[#d5d5f4] border rounded-sm py-1 px-2 w-full h-[10vh]"
                  required
                ></textarea>
                {errors.tips && (
                  <p className="text-red-600 text-sm">{errors.tips}</p>
                )}
              </div>

              {/* review */}
              <div className="flex flex-col gap-2">
                <p>Review/Comment:</p>
                <textarea
                  name="review"
                  id="review"
                  value={ReviewData.review}
                  onChange={handleChange}
                  placeholder="What's your impression on this project"
                  className="bg-[#d5d5f4] border rounded-sm py-1 px-2 w-full h-[10vh]"
                  required
                ></textarea>
                {errors.review && (
                  <p className="text-red-600 text-sm">{errors.review}</p>
                )}
              </div>

              {/* submit */}
              <div>
                <p>Submit your Review:</p>
                <button
                  onClick={uploadReview}
                  disabled={IsUploading}
                  className="w-30 bg-[#3a1051] text-white px-4 py-2 mt-3 rounded-full text-lg cursor-pointer"
                >
                  {IsUploading ? "Uploading" : "Submit"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="w-full bg-[#3a1051] text-[#e7e7fc] flex flex-col items-center justify-center py-3">
        <p>Disclaimer:</p>
        <p>
          This Project is created from scratch and puerly handwritten. Every
          animation and logic is created by myself.
        </p>
        <p>
          Any Images or Data are taken from Internet or AI Generated. I does not
          possess any right to any of them.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
