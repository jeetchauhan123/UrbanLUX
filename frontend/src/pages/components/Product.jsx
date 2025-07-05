import React, { useEffect, useState } from "react";

import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://urbanlux.onrender.com/products/product")
      .then((res) => {
        if (res.data.success) {
          setProducts(res.data.products);
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product._id} className="bg-[#d5d5f4] rounded shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-semibold">₹{product.price}</p>
            <p className="text-sm text-gray-400">Category: {product.category}</p>
            <button className="w-fit h-fit bg-fuchsia-800 text-white p-2 mt-2 rounded cursor-pointer">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
