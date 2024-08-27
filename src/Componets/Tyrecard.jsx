import React, { useState } from "react";
import tyres from "./Tyres.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";

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
    setIsFilterOpen(false); // Close modal on selection
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
    setIsSortOpen(false); // Close modal on selection
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
    <div className="bg-white h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row justify-between mb-4 ">
          <select
            onChange={handleDropChange}
            value={drop}
            className="p-2 border rounded mb-2 md:mb-0"
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
            className="p-2 border rounded mb-2 md:mb-0"
          >
            <option value="">Sort By Price</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
          <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterData.slice(0, visibleItems).map((tyre, index) => (
          <div
            key={index}
            className="relative max-w-xs rounded overflow-hidden shadow-lg border p-4 transition-transform duration-300 ease-in-out hover:shadow-2xl"
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
                <div
                  className="bg-green-500 text-white text-sm px-2 py-1 rounded flex items-center"
                  dangerouslySetInnerHTML={{ __html: tyre.tyre_rating }}
                ></div>
              </div>
              <div className="mt-4 text-xl font-bold text-gray-800">
                ₹{tyre.price}
              </div>
              <div className="mt-2 text-green-500 text-sm">Offer available</div>
              <div className="mt-2 text-gray-600">
                {tyre.tyre_type_display_name}
              </div>
              <a
                href={`https:${tyre.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 underline"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < tyres.data.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View More
          </button>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 md:hidden bg-white shadow-lg border-t border-gray-300 flex justify-around items-center p-2">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-gray-600"
        >
          <FontAwesomeIcon icon={faFilter} size="lg" />
          <p className="text-xs">Filter</p>
        </button>
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="text-gray-600"
        >
          <FontAwesomeIcon icon={faSort} size="lg" />
          <p className="text-xs">Sort</p>
        </button>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          
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
          
        </div>
      )}

      {isSortOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        
            <select
              value={sortOrder}
              onChange={handleSortOrderChange}
              className="p-2 border rounded w-full"
            >
              <option value="">Select Order</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
    
        </div>
      )}
    </div>
  );
};

export default TyreCard;
