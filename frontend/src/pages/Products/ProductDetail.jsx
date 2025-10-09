import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomProducts, setRandomProducts] = useState([]);
  const [prodReview, setProdReview] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://urbanlux.onrender.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };
    const fetchRandom = async () => {
      try {
        const res = await axios.get(
          "https://urbanlux.onrender.com/products/random?count=4"
        );
        setRandomProducts(res.data || []);
      } catch (err) {
        console.error("Failed to fetch random products:", err);
      }
    };

    fetchProduct();
    fetchRandom();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found</p>;
  console.log("product: ", product);
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] w-10/12 flex flex-row justify-between items-center mx-auto">
        {/* image con */}
        <div className="w-[35%] h-[80%] flex justify-center items-center rounded-4xl shadow-[0_5px_30px_-14px]  transition-all duration-300 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.8)] ">
          <img
            src={product.image}
            alt=""
            className="w-full h-full  rounded-4xl hover:-z-10"
          />
        </div>

        {/* details con */}
        <div className="w-[58%] h-[80%] bg-[#d5d5f4] px-8 py-6 rounded-4xl shadow-[0_5px_30px_-14px] ">
          <h1 className="font-bold text-4xl leading-20">{product.name}</h1>
          <p className="text-xl leading-10">{product.description}</p>
          <p className="text-xl leading-10">
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p className="text-xl leading-10">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-xl leading-10">
            <strong>In Stock:</strong> {product.inStock ? "Yes" : "No"}
          </p>
          <div className="flex gap-4 my-5">
            {product?.subCategory && (
              <p className="text-base px-2 py-1 border-1 rounded-full cursor-pointer">
                {product.subCategory}
              </p>
            )}
            {product?.type && (
              <p className="text-base px-2 py-1 border-1 rounded-full cursor-pointer">
                {product.type}
              </p>
            )}
          </div>

          {/* buttons */}
          <div className="flex gap-4 my-5 font-medium text-white text-lg">
            <button className="py-2 px-4 rounded-lg bg-[#3a1051] flex justify-center items-center gap-2">
              <img src="/./wishlist.png" alt="" className="w-7 h-7 inline" />
              Wishlist
            </button>
            <button className="py-2 px-4 rounded-lg bg-[#3a1051] flex justify-center items-center gap-2">
              <img src="/./cart.png" alt="" className="w-7 h-7 inline" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* random products and review */}
      <div className="mt-10 w-11/12 mx-auto mb-20">
        <div className="grid grid-cols-2 gap-8 h-full w-full">
          {/* product review */}
          <div className="w-11/12 mx-auto">
            <h2 className="text-4xl font-semibold text-[#3a1051] mb-8 px-10">Product review</h2>
            <h3 className="text-2xl px-10 my-2">Help users know about the Product</h3>
            <div className="flex gap-4 px-10 mt-4 mb-2">
              <input type="text" name="" id="" className="w-full bg-[#f6f6ff] px-4 py-2 text-[17px] rounded-md shadow-[0_0_20px_-10px_#3a1051]"/>
              <button className="bg-[#3a1051] px-4 py-2 text-[17px] font-medium rounded-md text-[#e7e7fc] shadow-[0_0_20px_-10px_#3a1051]">Review</button>
            </div>
            <p className="px-10 text-sm">*Note: Please abide by law and don't mislead others with false statements</p>
            {prodReview && prodReview > 0 ? (
              <div>Products review will be displayed here</div>
            ) : (
              // <div className="w-13/14 mx-auto bg-[#f9f9ff] px-7 py-4 my-6 rounded-xl text-lg text-center shadow-[0_0_20px_-10px_#3a1051]">Currenlty no Review Available</div>
              <div className="w-13/14 mx-auto bg-[#f9f9ff] px-7 py-4 my-6 rounded-xl text-lg text-center shadow-[0_0_20px_-10px_#3a1051]">Products reviews will be displayed here</div>
            )}
          </div>

          {/* product recommandatoin */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold text-[#3a1051] mb-8">You may also like</h2>
            {randomProducts.map((p) => (
              <div className="shadow-[0px_0px_30px_-10px_#3a1051] rounded-xl mb-8 h-full w-11/12 min-w-50 overflow-hidden">
                <Link
                  key={p._id}
                  to={`/products/${p._id}`}
                  className="bg-white rounded-xl h-full w-full min-w-140 flex gap-2"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-1/2 h-60 object-cover rounded-l-xl shadow-[0px_0_40px] shadow-[#3a1051]"
                  />
                  <div className="p-4  leading-6">
                    <h3 className="font-bold text-2xl leading-10">{p.name}</h3>
                    <p className="text-medium leading-5">₹{p.price}</p>
                    <p className="text-medium font-semibold leading-5">
                      {p.description}
                    </p>
                    <p className="text-medium font-semibold leading-5">
                      {p.category}
                    </p>
                    <p className="text-medium font-semibold leading-5">
                      {p.subCategory}
                    </p>
                    <p className="text-medium leading-5">{p.type}</p>
                    <p className="text-medium font-semibold leading-5">
                      {p.inStock}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;





// const [reviews, setReviews] = useState([]); // initially empty

// <div className="reviews-section">
//   <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
//   {reviews && reviews.length > 0 ? (
//     <div className="space-y-4">
//       {reviews.map((review, index) => (
//         <div
//           key={index}
//           className="p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200"
//         >
//           <p className="font-medium text-lg">{review.name}</p>
//           <p className="text-gray-700">{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p className="text-gray-500 italic">No reviews yet.</p>
//   )}
// </div>

// -----------------------------

// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(`/api/reviews/${productId}`);
//       setReviews(res.data || []);
//     } catch (err) {
//       console.error("Failed to load reviews:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchReviews();
// }, []);

// {loading ? (
//   <p>Loading reviews...</p>
// ) : reviews.length > 0 ? (
//   // display reviews
// ) : (
//   <p>No reviews yet.</p>
// )}
