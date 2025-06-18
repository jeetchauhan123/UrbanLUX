import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
// import axios from "axios";
import axios from "../axiosConfig";

const Profile = () => {
  const [file, setFile] = useState(null);
  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    image:"",
  });

  const token = localStorage.getItem("token");
  // console.log(token)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      console.log("Selected file:", e.target.files[0]);
    }
  };

  const handlePhotoUpload = async () => {
    if (!file) return alert("No file selected");

    const formData = new FormData();
    formData.append("photo", file);

    try {
      console.log("Token from localStorage:", token);
      const res = await axios.post(
        "http://localhost:3000/users/upload-photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // in case you use cookies for auth
        }
      );
      console.log("Uploaded URL: ", res.data.imageUrl);
      alert("Photo uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed!");
    }
  };

  const handleChange = (e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleUpdate = async ()=>{
    try{
      console.log("Token from localStorage:", token);
      const res = await axios.patch(
        "http://localhost:3000/users/update-profile", 
        userData,
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );
      console.log("Profile updated Successfully")
    }
    catch (error){
      console.error("update failed: ",error)
    }
  }

  useEffect(()=>{
    const fetchUserData = async () => {
      console.log("Token from localStorage:", token);
      console.log("inside the useeffect block")
      try{
        const res=await axios.get("http://localhost:3000/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
          image:res.data.image|| "",
        });
        console.log("User data: ",res.data);
      }
      catch(error){
        console.error("auth failed:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center">
        {/* Profile Picture Upload */}
        <div className="max-w-[20%] w-full flex flex-col justify-center items-center p-10 m-2 mt-10 bg-blue-200">
          <img
            src={userData.image}
            alt="User"
            className="rounded-[50%] shadow-lg "
          />
          {/* <input type="file" /> */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 m-3 text-center"
          >
            Custom Upload
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          {file && (
            <div>
              <p className="text-center mt-2 text-gray-500 text-sm">
                Selected File: {file.name}
              </p>
              <p className="text-center text-gray-500 text-sm">
                File Size: {(file.size / 1024).toFixed(2)} KB
              </p>
              <p className="text-center text-gray-500 text-sm">
                File Type: {file.type}
              </p>
            </div>
          )}
          {file && (
            <button
              onClick={handlePhotoUpload}
              className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 m-3"
            >
              Upload
            </button>
          )}
        </div>

        {/* Profile Information */}
        <div className="w-[70%] flex flex-col items-center ">
          <h1 className="text-4xl font-bold  mt-10">Profile Page</h1>
          <div className="w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 items-center text-right">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 m-2 col-span-2"
              placeholder="Enter your email"
            />

            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 m-2 col-span-2"
              placeholder="Enter your name"
            />

            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 m-2 col-span-2"
              placeholder="Enter your phone number"
            />

            <label htmlFor="address">Address: </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 m-2 col-span-2"
              placeholder="Enter your address"
            />

            <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 m-3">
              Update Profile
            </button>
            <button className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 m-3">
              Change Password
            </button>
            <button className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 m-3">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
