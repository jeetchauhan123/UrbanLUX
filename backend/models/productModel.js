const { Schema, model } = require("mongoose");


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    category: {
        type: String,
        required: true,
        maxlength: 50,
        lowercase: true,
        trim: true,
    },
    subCategory: {
        type: String,
        required: false,
        trim: true,
        lowercase: true, // "men", "women", "kids"
    },
    type: {
        type: String,
        required: false,
        trim: true,
        lowercase: true, // "shirt", "pant"
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ProductModel = model('product', ProductSchema);

module.exports = ProductModel;