import React, { useState } from "react";
import tyres from "./Tyres.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const ITEMS_PER_PAGE = 12;

const TyreCard = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [drop, setdrop] = useState("");
  const [sortorder, setsortorder] = useState("");
  const [query, setqury] = useState("");

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  const handeldrop = (e) => {
    setdrop(e.target.value);
  };

  const handleSortOrder = (e) => {
    setsortorder(e.target.value);
  };

  const handelsearch = (e) => {
    setqury(e.target.value);
  };

  const filterdata = tyres.data.filter((tyre) => {
    const dropdown = tyre.make_display_name === drop || drop === "";
    const searchQuery =
      tyre.make_display_name.toLowerCase().includes(query.toLowerCase()) ||
      tyre.model_display_name.toLowerCase().includes(query.toLowerCase()) ||
      tyre.variant_name.toLowerCase().includes(query.toLowerCase());
    return dropdown && searchQuery;
  });

  if (sortorder === "lowToHigh") {
    filterdata.sort((a, b) => a.price - b.price);
  } else if (sortorder === "highToLow") {
    filterdata.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-white h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <select
          onChange={handeldrop}
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
          onChange={handleSortOrder}
          value={sortorder}
          className="p-2 border rounded mb-2 md:mb-0"
        >
          <option value="">Sort By Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <div class="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <input
            type="email"
            placeholder="Search Something..."
            class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
            value={query}
            onChange={handelsearch}
          />
          <button
            type="button"
            class="flex items-center justify-center bg-[#007bff] px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              class="fill-white"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filterdata.slice(0, visibleItems).map((tyre, index) => (
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
    </div>
  );
};

export default TyreCard;
