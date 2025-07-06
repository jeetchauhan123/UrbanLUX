import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productSectionRef = useRef(null);

  const fetchProducts = async (pageNumber = 1) => {
    try {
      const res = await axios.get(
        `https://urbanlux.onrender.com/products/product?page=${pageNumber}&limit=12`
      );
      if (res.data.success) {
        setProducts(res.data.products);
        setPage(res.data.currentPage);
        setTotalPages(res.data.totalPages);
        if (productSectionRef.current) {
          productSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const handlePageClick = (num) => {
    if (num !== page) {
      setPage(num);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    if (page <= 3) {
      end = Math.min(5, totalPages);
    } else if (page >= totalPages - 2) {
      start = Math.max(totalPages - 4, 1);
    }

    if (start > 1) pages.push(<span key="start">...</span>);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={i === page}
          className={`px-3 py-1 rounded-md mx-1 ${
            i === page ? "bg-purple-800 text-white" : "bg-[#d5d5f4]"
          }`}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) pages.push(<span key="end">...</span>);

    return pages;
  };

  // useEffect(() => {
  //   axios
  //     .get("https://urbanlux.onrender.com/products/product")
  //     .then((res) => {
  //       if (res.data.success) {
  //         setProducts(res.data.products);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching products:", err));
  // }, []);

  return (
    <div ref={productSectionRef} className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#d5d5f4] rounded shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-semibold">₹{product.price}</p>
              <p className="text-sm text-gray-400">
                Category: {product.category}
              </p>
              <button className="w-fit h-fit bg-fuchsia-800 text-white p-2 mt-2 rounded cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center my-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 mx-1 bg-[#d5d5f4] rounded disabled:opacity-50"
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 mx-1 bg-[#d5d5f4] rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
