import React from "react";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "react-multi-carousel";

export default function Dealsin() {

  const responsive1 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  return (
    <div className="bg-white mt-0 md:mt-5 h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <p className="text-lg font-semibold pb-4">Deals in</p>
      <div>
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
          {tires.map((details, index) => (
            <div key={index} className="pr-4">
              <div className="bg-white shadow-sm rounded-lg p-4 flex cursor-pointer justify-center items-center border border-gray-300">
                <img
                  src={details.Image}
                  alt="logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </MultiCarousel>
      </div>
    </div>
  );
}

const tires = [
  {
    Image: "/Images/Kumho.png",
  },
  {
    Image: "/Images/ceat-tyres.jpg",
  },
  {
    Image: "/Images/imagesgd.png",
  },
  {
    Image: "/Images/imageskl.png",
  },
  {
    Image: "/Images/bdra.png",
  },
  {
    Image: "/Images/kenta.jpg",
  },
  {
    Image: "/Images/images.png",
  },
];
