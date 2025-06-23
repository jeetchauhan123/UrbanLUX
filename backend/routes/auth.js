const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const authMiddleware = require("../middleware/authMiddleware");

dotenv.config();

const router = express.Router();

const User = require('../models/userModel');
const { storage } = require('../cloudinary');


const upload = multer({ storage });

router.get("/me", authMiddleware, async (req, res) => {
  try {
    console.log("inside me block")
    const user = await User.findById(req.user.id).select("-password");
    if (!user){
        return res.status(404).json({ message: "User not found" });
    }
    console.log("frontend test1");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// register 
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashpassword });
        await newUser.save();
        
        const token = jwt.sign(
            { id: newUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.status(200).json({
            success: true,
            message: 'User created successfully',
            User: newUser,
            token,
        });
    }
    catch (error) {
        console.error("❌ Registration error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.message
        });
    }
})


// login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
        // if (existingUser.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign(
            { id: existingUser._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: existingUser._id,
                email: existingUser.email,
                name: existingUser.name,
                image: existingUser.image,
            },
            token
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

router.patch("/update-profile",authMiddleware, async (req,res)=>{
    try {
        const userId = req.user.id;
        const updates = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updates, {
            new:true,
        });
        res.status(200).json({
            message:"Profile Updated Successfully",
            user: updatedUser,
        });
    }
    catch (error){
        console.error("Profile update error: ",err);
        res.status(500).json({
            message:"Failed to upload profile"
        });
    }
});


// image upload
router.post("/upload-photo", authMiddleware, upload.single("photo"), async (req, res) => {
  try {
    const userId = req.user.id; // get logged-in user ID from token middleware
    const imageUrl = req.file.path; // cloudinary URL

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { image: imageUrl }, // add photo field to schema if not present
      { new: true }
    );

    res.status(200).json({ imageUrl: updatedUser.image });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;


// // view/read
// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     }
//     catch (error) {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });
//     }
// })

// update 
// router.put('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { email, password } = req.body;
//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, { email, password });
//         if (!updatedUser) {
//             res.json({
//                 message: 'User not found',
//             })
//         }
//         res.status(200).json({
//             success: true,
//             user: updatedUser,
//         });
//     }
//     catch (error) {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });
//     }
// })

// // delete
// router.delete('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedUser = await User.findByIdAndDelete(id);

//         if (!deletedUser) {
//             res.status(404).json({
//                 success: false,
//                 message: 'User not found'
//             });
//         }
//         res.status(200).json({
//             success: true,
//             message: 'User deleted successfully',
//             user: deletedUser
//         });
//     }
//     catch (error) {
//         res.status(500).json({
//             success: false,
//             message: err.message
//         });
//     }
// })