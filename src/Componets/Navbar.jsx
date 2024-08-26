import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const showDropdown = (dropdownId) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setActiveDropdown(dropdownId);
  };

  const hideDropdown = () => {
    setHideTimeout(
      setTimeout(() => {
        setActiveDropdown(null);
      }, 1000)
    );
  };

  const toggleDropdownMobile = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <nav className="bg-white shadow-md z-10 p-3 lg:px-32">
      <div className="flex justify-between items-center">
        <div className="font-mono">
          <Link to="/" className="text-2xl">
            <img src="/Images/TP-logo.png" alt="Logo" className="h-8 md:h-10" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <div
            className="relative group"
            onMouseEnter={() => showDropdown("carTyres")}
            onMouseLeave={hideDropdown}
          >
            <Link to="" className="text-black flex items-center">
              Car Tyres
            </Link>
            {activeDropdown === "carTyres" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg w-44 border border-gray-200">
                <ul className="py-2">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      CEAT Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      CEAT Tyres
                    </Link>
                  </li><li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      CEAT Tyres
                    </Link>
                  </li><li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      CEAT Tyres
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Second menu */}
          <div
            className="relative group"
            onMouseEnter={() => showDropdown("bikeTyres")}
            onMouseLeave={hideDropdown}
          >
            <Link to="" className="text-black flex items-center">
              Bike Tyres
            </Link>
            {activeDropdown === "bikeTyres" && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg w-44 border border-gray-200">
                <ul className="py-2">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      MRF Tyres
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      CEAT Tyres
                    </Link>
                  </li>
                  {/* Add more items as needed */}
                </ul>
              </div>
            )}
          </div>
          <Link to="" className="text-black" onClick={closeMenu}>
            Tyre Pressure
          </Link>
          <Link to="" className="text-black" onClick={closeMenu}>
            Commercial Tyres
          </Link>
          <Link to="" className="text-black" onClick={closeMenu}>
            Accessories
          </Link>
          <Link to="" className="text-black" onClick={closeMenu}>
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
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 bg-white z-30 w-full h-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <div className="flex justify-between items-center">
            <img src="/Images/TP-logo.png" alt="Logo" className="h-8 md:h-10" />
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="border border-black"></div>
          <div className="flex flex-col flex-grow">
            <div className="relative">
              <button
                className="py-2 flex items-center justify-between w-full text-left"
                onClick={() => toggleDropdownMobile("carTyres")}
              >
                Car Tyres
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              </button>
              {activeDropdown === "carTyres" && (
                <div className="bg-white shadow-lg w-full border border-gray-200">
                  <ul className="py-2">
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        SUV Tyres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Sedan Tyres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Sport Tyres
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="py-2 flex items-center justify-between w-full text-left"
                onClick={() => toggleDropdownMobile("bikeTyres")}
              >
                Bike Tyres
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              </button>
              {activeDropdown === "bikeTyres" && (
                <div className="bg-white shadow-lg w-full border border-gray-200">
                  <ul className="py-2">
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        MRF Tyres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        CEAT Tyres
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Apollo Tyres
                      </Link>
                    </li>
                    {/* Add more items as needed */}
                  </ul>
                </div>
              )}
            </div>
            <Link to="" className="py-2" onClick={closeMenu}>
              Tyre Pressure
            </Link>
            <Link to="" className="py-2" onClick={closeMenu}>
              Commercial Tyres
            </Link>
            <Link to="" className="py-2" onClick={closeMenu}>
              Accessories
            </Link>
            <Link to="" className="py-2" onClick={closeMenu}>
              More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
