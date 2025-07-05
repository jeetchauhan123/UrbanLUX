const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: false,
        maxlength: 50,
        default: 'Guest'
    },
    phone: {
        type: String,
        required: false,
        maxlength: 15,
        default: ''
    },
    age:{
        type:Number,
        required: false,
        default: 0,
    },
    address: {
        type: String,
        required: false,
        maxlength: 100,
        default: ''
    },
    email: {
        type: String,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: 'https://res.cloudinary.com/dgff46mle/image/upload/v1749877596/user2_ucg1zr.png'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const UserModel = model('User', UserSchema);

module.exports = UserModel;