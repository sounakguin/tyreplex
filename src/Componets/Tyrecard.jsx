import React, { useState } from "react";
import tyres from "./Tyres.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faSort,
  faStar,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ITEMS_PER_PAGE = 12;

const TyreCard = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [drop, setDrop] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [query, setQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  const handleDropChange = (e) => {
    setDrop(e.target.value);
    setIsFilterOpen(false);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    setIsSortOpen(false);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filterData = tyres.data.filter((tyre) => {
    const dropdown = tyre.make_display_name === drop || drop === "";
    const searchQuery =
      tyre.make_display_name.toLowerCase().includes(query.toLowerCase()) ||
      tyre.model_display_name.toLowerCase().includes(query.toLowerCase()) ||
      tyre.variant_name.toLowerCase().includes(query.toLowerCase());
    return dropdown && searchQuery;
  });

  if (sortOrder === "lowToHigh") {
    filterData.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filterData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-white mt-0 md:mt-5 h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <p className="text-lg font-semibold pb-6">Tyres sold by this Dealer</p>
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row justify-between mb-4 ">
          <div className="flex justify-start md:pl-3 ">
            <select
              onChange={handleDropChange}
              value={drop}
              className="p-2 border rounded mb-2 md:mb-0 border-black"
            >
              <option value="">Filter By</option>
              <option value="Apollo">Apollo</option>
              <option value="MRF">MRF</option>
              <option value="Bridgestone">Bridgestone</option>
              <option value="CEAT">CEAT</option>
            </select>
            <select
              onChange={handleSortOrderChange}
              value={sortOrder}
              className="p-2 border rounded mb-2 md:mb-0  border-black ml-5"
            >
              <option value="">Sort By Price</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
          <div className="flex justify-end rounded-md border-2 border-blue-500 overflow-hidden max-w-md mr-3 font-[sans-serif]">
            <input
              type="text"
              placeholder="Search Something..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
              value={query}
              onChange={handleSearchChange}
            />
            <button
              type="button"
              className="flex items-center justify-center bg-[#007bff] px-5"
            >
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-x-1 gap-y-6 justify-center items-center">
        {filterData.slice(0, visibleItems).map((tyre, index) => (
          <a
            key={index}
            href={`https:${tyre.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg border p-2 transition-transform border-gray-300 duration-300 ease-in-out hover:shadow-2xl"
          >
            <div
              className="absolute right-0 bottom-3 w-40 h-40 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${tyre.image_url})` }}
            ></div>
            <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded z-10">
              {tyre.warranty_years} Year Warranty
            </div>
            <div className="relative z-10 bg-opacity-75 p-4 rounded">
              <h2 className="text-lg font-semibold text-gray-800">
                {tyre.make_display_name}
              </h2>
              <p className="text-gray-600">{tyre.model_display_name}</p>
              <p className="text-gray-600">{tyre.variant_name}</p>
              <div className="mt-4 flex items-center">
                <div className="bg-green-500 text-white px-1 rounded flex items-center">
                  <FontAwesomeIcon icon={faStar} className="text-sm" />
                  <span className="pl-1 text-sm font-bold pr-1">4</span>
                </div>
                <p className="text-black text-sm pl-1 hover:underline">
                  321 Reviews
                </p>
              </div>
              <div className="pt-4 text-xl font-bold text-gray-800">
                ₹{tyre.price}
              </div>
              <div className="pt-2 text-green-500 text-sm">Offer available</div>
              <div className="pt-2 text-gray-600 text-sm">
                {tyre.tyre_type_display_name}
              </div>
            </div>
          </a>
        ))}
      </div>

      {visibleItems < tyres.data.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleLoadMore}
            className="border border-blue-500 text-black hover:text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View More
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 md:hidden bg-gray-300 shadow-lg border-t border-black flex justify-around items-center p-2 z-10">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-black"
        >
          <FontAwesomeIcon icon={faFilter} size="lg" />
          <p className="text-xs">Filter</p>
        </button>
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="text-black"
        >
          <FontAwesomeIcon icon={faSort} size="lg" />
          <p className="text-xs">Sort</p>
        </button>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 p-4 rounded shadow-lg relative">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h3 className="text-lg font-semibold mb-4">Filter By Brand</h3>
            <select
              value={drop}
              onChange={handleDropChange}
              className="p-2 border rounded w-full"
            >
              <option value="">All Brands</option>
              <option value="Apollo">Apollo</option>
              <option value="MRF">MRF</option>
              <option value="Bridgestone">Bridgestone</option>
              <option value="CEAT">CEAT</option>
            </select>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}

      {isSortOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 p-4 rounded shadow-lg relative">
            <button
              onClick={() => setIsSortOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h3 className="text-lg font-semibold mb-4">Sort By Price</h3>
            <select
              value={sortOrder}
              onChange={handleSortOrderChange}
              className="p-2 border rounded w-full"
            >
              <option value="">Select Order</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
            <button
              onClick={() => setIsSortOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Apply Sort
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TyreCard;
