import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" bg-white shadow-md z-10 p-3 lg:px-32">
      <div className="flex justify-between items-center">
        <div className="font-mono">
          <Link to="/" className="text-2xl">
            <img src="/Images/TP-logo.png" alt="Logo" className="h-8 md:h-10" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/Allmovies" className="text-black" onClick={closeMenu}>
            Car Tyres
          </Link>
          <Link to="/People" className="text-black" onClick={closeMenu}>
            Bike Tyres
          </Link>
          <Link to="/TV" className="text-black" onClick={closeMenu}>
            Tyre Pressure
          </Link>
          <Link to="/TV" className="text-black" onClick={closeMenu}>
            Commercial Tyres
          </Link>
          <Link to="/TV" className="text-black" onClick={closeMenu}>
            Accessories
          </Link>
          <Link to="/TV" className="text-black" onClick={closeMenu}>
            More
          </Link>
        </div>
        <div className="flex items-center space-x-2 md:space-x-0">
          <FontAwesomeIcon icon={faUser} className="text-black" />
          <button className="text-black pl-2">Login</button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-black"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 bg-white z-30 w-full h-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <div className="flex justify-between items-center ">
          <img src="/Images/TP-logo.png" alt="Logo" className="h-8 md:h-10" />
            <button
              onClick={toggleMenu}
              className=" text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="border border-black"></div>
          <div className="flex flex-col flex-grow">
            <Link
              to="/Allmovies"
              className=" py-2"
             
            >
              Car Tyres
            </Link>
            <Link to="/People" className=" py-2" onClick={closeMenu}>
              Bike Tyres
            </Link>
            <Link to="/TV" className="py-2" onClick={closeMenu}>
              Tyre Pressure
            </Link>
            <Link to="/TV" className=" py-2" onClick={closeMenu}>
              Commercial Tyres
            </Link>
            <Link to="/TV" className=" py-2" onClick={closeMenu}>
              Accessories
            </Link>
            <Link to="/TV" className=" py-2" onClick={closeMenu}>
              More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
