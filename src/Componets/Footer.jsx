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
              <h3 className="text-[20px] font-bold mb-2.5 pt-3">
                The best look anytime, anywhere.
              </h3>
              <p className="text-[16px] leading-6">
                Find the perfect jewelry for every occasion, with collections
                designed to make you shine.
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-[18px] mb-2.5">For Her</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Women Jeans
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Tops and Shirts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Women Jackets
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Heels and Flats
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  Women Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-[18px] mb-2.5">For Him</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  <i className="fa-solid fa-angle-right"></i> Men Jeans
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  <i className="fa-solid fa-angle-right"></i> Men Shirts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  <i className="fa-solid fa-angle-right"></i> Men Shoes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  <i className="fa-solid fa-angle-right"></i> Men Accessories
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white no-underline hover:underline">
                  <i className="fa-solid fa-angle-right"></i> Men Jackets
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[200px] text-center md:text-left">
            <h3 className="text-[18px] mb-2.5">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2.5 text-[16px] border border-gray-300 rounded-md w-full box-border"
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
            <div className="flex mt-5 justify-center md:justify-start gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600"
              >
                <FontAwesomeIcon icon={faReddit} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-2.5 border-t border-white text-[14px]">
          <p className="m-[5px]">
            Copyright © 2024 Jewellery. Powered by Jewellery.
          </p>
          <p className="m-[5px]">Design & Developed by Sounak Guin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
