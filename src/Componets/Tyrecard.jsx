import React, { useState } from "react";
import tyres from "./Tyres.json";

const ITEMS_PER_PAGE = 12;

const TyreCard = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [drop, setdrop] = useState("");
  const [sortorder, setsortorder] = useState("");

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  const handeldrop = (e) => {
    setdrop(e.target.value);
  };

  const handleSortOrder = (e) => {
    setsortorder(e.target.value);
  };

  const filterdata = tyres.data.filter((tyre) => {
    const dropdown = tyre.make_display_name === drop || drop === "";
    return dropdown;
  });

  if (sortorder === "lowToHigh") {
    filterdata.sort((a, b) => a.price - b.price);
  } else if (sortorder === "highToLow") {
    filterdata.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-white h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <div>
        <select onChange={handeldrop} value={drop}>
          <option value="">Filter By</option>
          <option value="Apollo">Apollo</option>
          <option value="MRF">MRF</option>
          <option value="Bridgestone">Bridgestone</option>
          <option value="CEAT">CEAT</option>
        </select>
      </div>
      <select
        onChange={handleSortOrder}
        value={sortorder}
        className="p-2 border rounded"
      >
        <option value="">Sort By Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
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
