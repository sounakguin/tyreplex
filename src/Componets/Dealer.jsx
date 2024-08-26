import React from "react";

export default function Dealer() {
  return (
    <div className="bg-white h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <p className="text-lg font-semibold mb-2">Services offered by this dealer</p>
      <div className="p-4">
        <div className="flex flex-wrap gap-4"> {/* Use flex-wrap and gap for responsiveness */}
          <div className="flex-col max-w-sm bg-white shadow-lg rounded-lg overflow-hidden flex-1">
            <img
              src="Images/bale.jpg"
              alt="logo"
              className="h-20 w-auto rounded-md"
            />
            <div className="p-4">
              <p className="text-base font-medium">Wheel Balancing</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Book Now
              </button>
            </div>
          </div>
          <div className="flex-col max-w-sm bg-white shadow-lg rounded-lg overflow-hidden flex-1">
            <img
              src="Images/bale.jpg"
              alt="logo"
              className="h-20 w-auto rounded-md"
            />
            <div className="p-4">
              <p className="text-base font-medium">Wheel Balancing</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
