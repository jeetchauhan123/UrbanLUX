const { model, Schema, Types } = require('mongoose');

const ReviewSchema = new Schema({
    name:{
        type:String,
        required: true,
        maxlength: 50
    },
    starRate:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:false,
    },
    link:{
        type:String,
        required:false,
    },
    tips:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    }
})

const ReviewModel = model('Review', ReviewSchema);

module.exports = ReviewModel;