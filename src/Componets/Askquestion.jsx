import React, { useState } from "react";

export default function Askquestion() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    setSubmitted(true);
  };

  return (
    <div
      className="bg-cover bg-center mt-5 mb-5 h-auto text-white w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300"
      style={{
        backgroundImage: `url('/Images/opi.jpeg')`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 mb-4 md:mb-0">
          <div className="text-lg font-semibold mb-2 text-center md:text-left">
            Have a question about Tyres?
          </div>
          <div className="text-sm mb-4 text-center md:text-left">
            Get an answer in 24 hours from our experts.
          </div>
          {submitted ? (
            <div className="text-lg font-semibold text-center md:text-left">
              Thank you for your question! We will get back to you within 24 hours.
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2.5 text-[16px] border border-gray-300 rounded-md w-full md:w-auto md:flex-grow text-black"
                />
                <button
                  type="submit"
                  className="bg-[#989494] border border-white text-white cursor-pointer p-2.5 text-[16px] rounded-md hover:bg-[#756d6d] w-full md:w-auto"
                >
                  Ask me now
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
