const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();


// getting all products
router.get('/product', async (req, res) => {
    try{
        const products = await ProductModel.find();
        res.status(200).json({
            success: true,
            products
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