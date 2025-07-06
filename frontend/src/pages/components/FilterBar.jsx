import React from "react";

import "../../styles/components.css";

const FilterBar = () => {
  return (
    <div className="min-w-[14rem] h-fit m-4 bg-[#d5d5f4] shadow-lg rounded-lg hidden md:block lg:block">
      <div className="w-9/12 flex flex-col gap-5 my-5 mx-auto">
        <h3 className="text-3xl">Filters</h3>

        {/* price range filter */}
        <div>
          <p className="filcat font-semibold">Price</p>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={0}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>

        {/* Product Category filter */}
        <div>
          <p className="filcat font-semibold">Category</p>
          <select className="w-full h-10 rounded-md border-2 border-gray-400 bg-[#e7e7fc]">
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div>
          <p className="filcat font-semibold">Brand</p>
          <input
            type="checkbox"
            name="brand"
            id="Samsung"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="Samsung" className="ml-2">
            Samsung
          </label>
          <br />

          <input
            type="checkbox"
            name="brand"
            id="Apple"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="Apple" className="ml-2">
            Apple
          </label>
          <br />

          <input
            type="checkbox"
            name="brand"
            id="Nike"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="Nike" className="ml-2">
            Nike
          </label>
          <br />

          <input
            type="checkbox"
            name="brand"
            id="Adidas"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="Adidas" className="ml-2">
            Adidas
          </label>
          <br />
        </div>

        {/* Rating Filter */}
        <div>
          <p className="filcat font-semibold">Rating</p>
          <input
            type="radio"
            name="rating"
            id="4-stars"
            value="4"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="4-stars" className="ml-2">
            4&#x2605; Stars & Above
          </label>
          <br />
          <input
            type="radio"
            name="rating"
            id="5-stars"
            value="5"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="5-stars" className="ml-2">
            5&#9733;Stars Only
          </label>
          <br />
        </div>

        {/* Availability Filter */}
        <div>
          <p className="filcat font-semibold">Availability</p>
          <input
            type="checkbox"
            name="availability"
            id="in-stock"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="in-stock" className="ml-2">
            In Stock
          </label>
          <br />
          <input
            type="checkbox"
            name="availability"
            id="out-of-stock"
            className="accent-fuchsia-600 scale-120"
          />
          <label htmlFor="out-of-stock" className="ml-2">
            Out of Stock
          </label>
          <br />
        </div>

        {/* Sort By Filter */}
        <div>
          <p className="filcat font-semibold">Sort By</p>
          <select className="w-full h-10 rounded-md border-2 border-gray-400 bg-[#e7e7fc]">
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="best-rated">Best Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
