import React from "react";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "react-multi-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Header() {
  return (
    <div className="bg-white h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              SHREE HEMKUNT TYRES AND SERVICES{" "}
              <span className="text-green-500">Verified</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="bg-green-500 text-white rounded-full px-1 py-1 text-xs">
                4.9
              </span>
              <div className="text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <span className="text-gray-500">2278 Reviews</span>
            </div>
            <p className="text-gray-600">
              <FontAwesomeIcon icon={faLocationDot} className="pr-5" />
              PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
              <p className="md:pl-8">
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </p>
            </p>
            <p className="text-gray-600">
              <FontAwesomeIcon icon={faClock} className="pr-5" />
              Open - Monday to Sunday - 10:00AM to 8:00PM
            </p>
            <button className="border text-red-500 border-red-500 font-bold w-64 hover:text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600">
              Get Directions
            </button>
          </div>

          {/* Right Div - Carousel */}
          <div className="md:w-1/2 ">
            <MultiCarousel
              responsive={responsive}
              autoPlay
              infinite
              arrows={false}
              autoPlaySpeed={2000}
              transitionDuration={5000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              className="carousel"
            >
              <div className="px-2">
                <img
                  src="/Images/data.jpg"
                  alt="Exterior view of Shree Hemkunt Tyres"
                  loading="lazy"
                  className="md:h-52 md:w-auto border border-black rounded-xl"
                />
              </div>
              <div className="px-2">
                <img
                  src="/Images/data2.jpg"
                  alt="Service in progress at Shree Hemkunt Tyres"
                  loading="lazy"
                  className="md:h-52 md:w-auto  border-black rounded-xl"
                />
              </div>
              <div className="px-2">
                <img
                  src="/Images/data1.jpg"
                  alt="Interior view of Shree Hemkunt Tyres"
                  loading="lazy"
                  className="md:h-52 md:w-auto  border-black rounded-xl"
                />
              </div>
              <div className="px-2">
                <img
                  src="/Images/data2.jpg"
                  alt="Service in progress at Shree Hemkunt Tyres"
                  loading="lazy"
                  className="md:h-52 md:w-auto  border-black rounded-xl"
                />
              </div>
            </MultiCarousel>
          </div>
        </div>

        <div>
          <div className="flex">
            <p>2278 </p>
            <p>Google Reviews</p>
          </div>
          <MultiCarousel
            responsive={responsive1}
            autoPlay
            infinite
            arrows={false}
            autoPlaySpeed={2000}
            transitionDuration={5000}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className="carousel"
          >
            {reviews.map((details, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-start p-4 border border-gray-200 rounded-lg shadow-lg gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={details.Image}
                      alt={details.Name}
                      className="h-8 w-8 rounded-full"
                    />
                    <p className="text-sm font-bold pl-2">{details.Name}</p>
                  </div>
                  <p className="pt-4 text-sm">{details.Data}</p>
                </div>
              </div>
            ))}
          </MultiCarousel>
        </div>
      </div>
    </div>
  );
}

const reviews = [
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
  {
    Image: "/Images/unnamed.png",
    Name: "Rohit Bhati",
    Data: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
  },
];
