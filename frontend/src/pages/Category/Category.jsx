import React from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";


const categories = [
  // { id: "electronics", name: "Electronics", description: "Phones, laptops & more", count: 128, image: "/images/electronics.jpg", color: "from-indigo-400 to-indigo-600" },
  { id: "Headphones", name: "Headphones", description: "Phones, laptops & more", count: 128, image: "/category/Headphones2.jpg", color: "from-indigo-400 to-indigo-600" },
  { id: "Mobile", name: "Mobile", description: "Phones, laptops & more", count: 128, image: "/category/Mobile.jpg", color: "from-indigo-400 to-indigo-600" },
  { id: "Laptop", name: "Laptop", description: "Furniture, decor & kitchen", count: 74, image: "/category/Laptop.jpg", color: "from-yellow-400 to-yellow-600" },
  { id: "Camera", name: "Camera", description: "Furniture, decor & kitchen", count: 74, image: "/category/Camera2.jpg", color: "from-yellow-400 to-yellow-600" },
  { id: "Shoes", name: "Shoes", description: "Clothing & accessories", count: 241, image: "/category/Shoes.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Book", name: "Book", description: "Clothing & accessories", count: 241, image: "/category/Book3.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Gaming", name: "Gaming", description: "Clothing & accessories", count: 241, image: "/category/Game3.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Stationery", name: "Stationery", description: "Clothing & accessories", count: 241, image: "/category/Stationery2.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Healthcare", name: "Healthcare", description: "Clothing & accessories", count: 241, image: "/category/Healthcare2.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Sports", name: "Sports", description: "Clothing & accessories", count: 241, image: "/category/Sports.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Fitness", name: "Fitness", description: "Clothing & accessories", count: 241, image: "/category/Fitness3.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Baby Wear", name: "Baby Wear", description: "Clothing & accessories", count: 241, image: "/category/Kids.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Pet", name: "Pet", description: "Clothing & accessories", count: 241, image: "/category/Pet.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Speakers", name: "Speakers", description: "Clothing & accessories", count: 241, image: "/category/Speakers.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Beauty", name: "Beauty", description: "Clothing & accessories", count: 241, image: "/category/Beauty2.jpg", color: "from-pink-400 to-pink-600" },
  { id: "HomeDecor", name: "HomeDecor", description: "Clothing & accessories", count: 241, image: "/category/HomeDecor3.jpg", color: "from-pink-400 to-pink-600" },
  { id: "MenWear", name: "MenWear", description: "Clothing & accessories", count: 241, image: "/category/MenWear.jpg", color: "from-pink-400 to-pink-600" },
  { id: "WomenWear", name: "WomenWear", description: "Clothing & accessories", count: 241, image: "/category/WomenWear.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Wearable", name: "Wearable", description: "Clothing & accessories", count: 241, image: "/category/Wearable.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Perfume", name: "Perfume", description: "Clothing & accessories", count: 241, image: "/category/Perfume.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Kitchen", name: "Kitchen", description: "Clothing & accessories", count: 241, image: "/category/Kitchen2.jpg", color: "from-pink-400 to-pink-600" },
  // { id: "Lighting", name: "Lighting", description: "Clothing & accessories", count: 241, image: "/category/Lighting.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Jewelry", name: "Jewelry", description: "Clothing & accessories", count: 241, image: "/category/Jewelry5.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Personal Care", name: "Personal Care", description: "Clothing & accessories", count: 241, image: "/category/PersonalCare2.jpg", color: "from-pink-400 to-pink-600" },
  { id: "Bath", name: "Bath", description: "Clothing & accessories", count: 241, image: "/category/Bath.jpg", color: "from-pink-400 to-pink-600" },
  /* add more categories... */
];

const CategoryCard = ({ cat }) => {
  return (
    <Link
      to={`/category/${cat.id}`}
      aria-label={`Open Category: ${cat.name}`}
      className="relative block group"
    >
      <div className="h-40 relative flex items-center justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-lg transition-transform transform group-hover:-translate-y-3 focus-within:-translate-y-3 bg-[#3a1051]">
        {/* decorative tilted image - absolute and behind */}
        <div className="absolute -top-4 -left-4 w-36 h-36 md:w-48 md:h-48 pointer-events-none z-10">
          <img
            src={cat.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover rounded-lg opacity-90 transform rotate-[-12deg] group-hover:rotate-[-6deg] group-focus:rotate-[-6deg] transition-transform duration-300 shadow-inner scale-[1.02]"
          />
        </div>
        <div className="absolute h-20 w-60 -rotate-35 -top-4 left-8 bg-[#9e0eec]"></div>

        {/* content */}
        <div className="relative z-10 pl-2 md:pl-14 ">
          <div className="w-full flex items-center justify-end">
            <h3 className="text-xl md:text-3xl font-semibold text-[#e7e7fc]">
              {cat.name}
            </h3>
          </div>
          <p className="mt-2 text-md text-right text-[#e7e7fc]">{cat.description}</p>

          {/* little preview product thumbnails (optional) */}
          {/* <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img src="./category/Headphones.jpg" alt="" className="w-8 h-8 rounded-md border border-white shadow" />
              
            </div>
            <button className="ml-auto inline-flex items-center gap-2 bg-violet-700 text-white px-3 py-1 rounded-md text-sm hover:bg-violet-800 transition">
              View
            </button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

const Category = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <div className="min-h-screen">
          <div className="w-10/12 mx-auto px-6 py-12">
            <section className="relative w-1/2 px-4 py-4 rounded-2xl overflow-hidden bg-[#cfccff]">
              <div className="absolute h-40 w-120 rotate-40 -right-5 bottom-30 border-[#2431bc3e] border-3"></div>
              <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
              <p className="text-slate-600">
                Explore categories and find what you need
              </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {categories.map((c) => (
                <CategoryCard key={c.id} cat={c} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Category;

// Headphones, Mobiles. Laptops, Cameras, Shoes, Books, Gaming, Stationery, Health, Sports, Fitness, KidsClothing, PetSupplies, Speakers, Beauty, HomeDecor, MensFashion, WomensFashion, Wearables, Perfume, Kitchen, Jewelry, PersonalCare, Bath

// Electronics, , , , , Televisions, , HomeAppliances, , Furniture, , Lighting, Bedding, , OfficeFurniture, , , BabyCare, Movies, Toys, , , , , Accessories, , , , , Outdoor, Automotive, Tools, Garden, Grocery, , , , TravelGear, , Sustainable, Gifts
