const express = require('express')
const ReviewModel = require('../models/reviewModel')
const router = express.Router();


// uploading review
router.post('/review', async(req,res)=>{
    try{
        const newReview=new ReviewModel(req.body);
        const saveReview = await newReview.save();
        res.status(201).json({
            success:true,
            message:"Review uploaded successfully",
            review:saveReview
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;