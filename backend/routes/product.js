const express = require('express');
const ProductModel = require('../models/productModel');
const router = express.Router();


// getting all products
router.get('/product', async (req, res) => {
    try{
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;
        
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
        console.error("❌ Error in /product route:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

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
});

// getting random product
router.get("/random", async (req, res) => {
  try {
    const count = parseInt(req.query.count, 10) || 4;
    const products = await ProductModel.aggregate([{ $sample: { size: count } }]);
    res.json(products);
  } catch (err) {
    console.error("Failed to get random products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// getting product by id
router.get('/:id', async (req, res) => {
  

  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    console.error("Error in GET /:id:", error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});


module.exports = router;



// getting random product by catedory
// router.get("/random-by-category", async (req, res) => {
//   try {
//     const { category } = req.query;
//     const count = parseInt(req.query.count, 10) || 4;
//     if (!category) return res.status(400).json({ message: "category is required" });

//     const products = await Product.aggregate([
//       { $match: { category } },
//       { $sample: { size: count } }
//     ]);
//     res.json(products);
//   } catch (err) {
//     console.error("Failed to get random products by category:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });





// -----------------------------------
// if you wnat to excluse current object from random products
// /random?count=4&excludeId=...
// const { count = 4, excludeId } = req.query;
// const pipeline = [];
// if (excludeId && mongoose.Types.ObjectId.isValid(excludeId)) {
//   pipeline.push({ $match: { _id: { $ne: mongoose.Types.ObjectId(excludeId) } } });
// }
// pipeline.push({ $sample: { size: parseInt(count, 10) } });
// const products = await ProductModel.aggregate(pipeline);
// ------------------------------------