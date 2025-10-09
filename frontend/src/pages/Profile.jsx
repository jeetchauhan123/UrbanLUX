import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
// import axios from "axios";
import axios from "../axiosConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [file, setFile] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [isForgot, setIsForgot] = useState(0);
  const [toggleVlidate, setToggleVlidate] = useState(0);
  const [validate, setValidate] = useState("");
  const [newPass, setnewPass] = useState("");
  const [conNewPass, setconNewPass] = useState("");
  const [Token, setToken] = useState(null);

  const navigate = useNavigate();

  // const token = localStorage.getItem("token");
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
      console.log("Token from localStorage:", Token);
      const res = await axios.post(
        "https://urbanlux.onrender.com/users/upload-photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Token}`,
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

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      console.log("Token from localStorage:", Token);
      const res = await axios.patch(
        "https://urbanlux.onrender.com/users/update-profile",
        userData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      console.log("Profile updated Successfully");
      toast("Profile updated Successfully");
    } catch (error) {
      console.error("update failed: ", error);
    }
  };

  const validatePassword = async () => {
    try {
      const res = await axios.post(
        "https://urbanlux.onrender.com/users/validate-password",
        {
          email: userData.email,
          password: validate,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        console.log("valid password");
        setToggleVlidate(true);
        console.log(validate);
      } else {
        toast("Wrond password");
      }
    } catch (err) {
      console.error("Error during Validation:", err);
      if (err) {
        toast("Enter Correct Password");
      }
      // inspect status so you can tell why you were logged out
      const status = err?.response?.status;
      console.log("validate-password status:", status, err?.response?.data);
      if (status === 401) {
        toast("Wrong password");
      } else if (status === 403) {
        toast("Authentication failed — please login again");
        // don't call logout here if interceptor handles it — just show message
      } else {
        toast("Validation failed");
      }
    }
  };

  const setNewPassword = async (e) => {
    if (e?.preventDefault()) e.preventDefault();

    // empty check
    if (!newPass || !conNewPass) {
      toast.error("Enter both fields");
      return;
    }
    if (newPass !== conNewPass) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPass.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    }
    try {
      const res = await axios.patch(
        "https://urbanlux.onrender.com/users/change-password",
        { newPassword: newPass },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data?.success) {
        toast.success(res.data.message || "Password Changed Successfully");
        setnewPass("");
        setconNewPass("");
        setToggleVlidate(0);
        setIsForgot(0);
      } else {
        toast.error(res.data?.message || "Failed to update password");
      }
    } catch (err) {
      console.error("Error changing password:", err);
      const status = err?.response?.status;
      const msg = err?.response?.data?.message;

      if (status === 401) {
        toast.error(msg || "Incorrect current password");
      } else if (status === 403) {
        toast.error("Authentication failed. Please login again.");
        // optionally: force logout here
      } else {
        toast.error(msg || "Unable to update password. Try again later.");
      }
    }
  };

  useEffect(() => {
    const token1 = localStorage.getItem("token");
    setToken(token1);

    if (!token1) {
      navigate("/log-in");
    }
    const fetchUserData = async () => {
      console.log("Token from localStorage:", token1);
      console.log("inside the useeffect block");
      try {
        const res = await axios.get("https://urbanlux.onrender.com/users/me", {
          headers: {
            Authorization: `Bearer ${token1}`,
          },
        });
        setUserData({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
          image: res.data.image || "",
        });
        console.log("User data: ", res.data);
      } catch (error) {
        console.error("auth failed:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="relative w-full h-[100vh]">
      <Navbar />
      <div className="flex flex-row justify-center">
        {/* Profile Picture Upload */}
        <div className="max-w-[20%] w-full flex flex-col justify-center items-center p-10 m-2 mt-10 bg-[#d5d5f4] shadow-[0_0_40px_-20px_#7070e5]">
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
              type="button"
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

            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 m-3 cursor-pointer"
            >
              Update Profile
            </button>
            <button
              type="button"
              className="bg-green-500 text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 m-3"
              onClick={() => setIsForgot(1)}
            >
              Change Password
            </button>
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 m-3"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* password change */}
      <div
        className={`absolute h-[100vh] top-0 bottom-0 right-0 left-0 bg-[#00000077] flex ${
          isForgot ? "visible" : "hidden"
        }`}
      >
        <div className="relative bg-[#e7e7fc] w-[60vw] h-[70vh] mx-auto my-auto py-10 px-25 rounded-2xl flex items-center">
          {/* confirm user */}
          <div
            className={`flex flex-col gap-4 ${
              toggleVlidate ? "hidden" : "visible"
            }`}
          >
            <h1 className="font5 text-4xl mb-8 ">Validate User</h1>
            <p className="text-xl">Enter Current Password:</p>
            <input
              type="password"
              name="passcheck"
              id="passcheck"
              className="bg-[#cdcdee] border rounded-md py-2 px-2 w-60"
              onChange={(e) => setValidate(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#3a1051] py-2 px-8 w-fit text-white rounded-lg text-lg cursor-pointer my-5"
              onClick={validatePassword}
            >
              Check
            </button>
          </div>

          {/* reset password */}
          <div
            className={`flex flex-col gap-2 ${
              toggleVlidate ? "visible" : "hidden"
            }`}
          >
            <h1 className="font5 text-4xl mb-8 ">Reset Password</h1>
            <p className="text-xl">Enter New Password:</p>
            <input
              type="password"
              name="newpass"
              id="newpass"
              onChange={(e) => {
                setnewPass(e.target.value);
              }}
              className="bg-[#cdcdee] border rounded-md py-2 px-2 w-60"
            />
            <p className="text-xl">Confirm Password:</p>
            <input
              type="password"
              name="confirmpass"
              id="confirmpass"
              onChange={(e) => {
                setconNewPass(e.target.value);
              }}
              className="bg-[#cdcdee] border rounded-md py-2 px-2 w-60"
            />
            <button
              type="button"
              className="bg-[#3a1051] py-2 px-8 w-fit text-white rounded-lg text-lg cursor-pointer my-8"
              onClick={setNewPassword}
            >
              Reset Password
            </button>
          </div>

          {/* Cross */}
          <button
            type="button"
            className="absolute h-8 w-8 text-xl top-5 right-5 rounded-[100%] border bg-[#cdcdee] cursor-pointer text-center"
            onClick={() => {
              setIsForgot(0);
              setToggleVlidate(0);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
