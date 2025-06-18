const { Schema, model } = require("mongoose");


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
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
        maxlength: 50
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