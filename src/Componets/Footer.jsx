import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setThankYouMessage(`Thank you for subscribing with ${email}!`);
    setEmail("");

    setTimeout(() => {
      setThankYouMessage("");
    }, 3000);
  };

  return (
    <footer className="bg-[#192733] text-white p-5 mb-12 md:mb-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-between gap-5 mb-5 pt-5">
          <div className="flex-1 min-w-[200px] text-center md:text-left ">
            <img
              src="/Images/TP-logo.png"
              alt="Logo"
              className="w-[150px] mb-2.5 mx-auto md:mx-0"
            />
            <div className="max-w-[300px] mx-auto md:mx-0">
              <h3 className="text-xl font-bold mb-2.5 pt-3">
                The Best Performance anytime, anywhere.
              </h3>
              <p className="text-[16px] leading-6">
              Find the perfect tires for every journey, with collections designed to keep you safe and on the road.
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left pt-2 pl-0 md:pl-10">
            <h3 className="text-xl mb-2.5 font-bold ">About Us</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Milestones
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Awards & Achievements
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Research & Design
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Our Presence
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-xl mb-2.5 pt-2 font-bold">Our Products</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Tyres
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Sports Goods
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Funskool
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Paints & Coats
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  PreTreads
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left pt-2">
            <h3 className="text-[18px] mb-2.5">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2.5 text-[16px] border border-gray-300 rounded-md w-full box-border text-black"
              />
              <button
                type="submit"
                className="bg-[#989494] text-white cursor-pointer p-2.5 text-[16px] border-none rounded-md hover:bg-[#756d6d] w-full"
              >
                Subscribe
              </button>
            </form>
            {thankYouMessage && (
              <div className="text-green-500 mt-2.5 text-center transition-opacity duration-500 ease-in-out">
                {thankYouMessage}
              </div>
            )}
            <div className="flex mt-5 justify-center md:justify-center gap-5">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600 transition-transform duration-300 transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-transform duration-300 transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-transform duration-300 transform hover:-translate-y-2"
              >
                <FontAwesomeIcon icon={faReddit} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-2.5 border-t border-white text-[14px]">
          <p className="m-[5px]">
            © 2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p className="m-[5px]">
            Design & Developed by TyrePlex Technologies & Commerce Pvt. Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
