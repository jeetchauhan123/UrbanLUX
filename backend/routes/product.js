const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();


// getting all products
router.get('/product', async (req, res) => {
    try{
        const start = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (start - 1) * limit;
        
        const totalProducts = await ProductModel.countDocuments();
        const products = await ProductModel.find().skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            products,
            currentPage: page,
            totalPages: Math.ceil(totalProducts / limit),
            totalProducts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

// adding a new product
router.post('/product',async(req, res) => {
    try {
        const newProduct = new ProductModel(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

module.exports = router;