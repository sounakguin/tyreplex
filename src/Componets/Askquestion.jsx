import React, { useState } from "react";

export default function Askquestion() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add any logic to handle the form submission here, such as sending the data to a server.
    console.log("Form submitted with email:", email);

    // After handling the submission, update the state to show the thank-you message.
    setSubmitted(true);
  };

  return (
    <div>
      <div className="bg-white mt-0 md:mt-5 md:mb-5 h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      <div className="">
        <div className="flex">
        <div className="">
         <div className="text-lg font-semibold mb-2">
            Have a question about Tyres?
          </div>
          <div className="text-sm mb-1">
            Get an answer in 24 hours from our experts.
          </div>
          {submitted ? (
            <div className="text-lg font-semibold text-center">
              Thank you for your question! We will get back to you within 24
              hours.
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex-col gap-2.5 md:flex">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2.5 text-[16px] border border-gray-300 rounded-md w-80 box-border"
                />
                <button
                  type="submit"
                  className="bg-[#989494] text-white cursor-pointer p-2.5 text-[16px] border-none rounded-md hover:bg-[#756d6d] w-28"
                >
                  Ask me now
                </button>
              </form>
            </>
          )}
           </div>
           <div>

           </div>
        </div>
         
        
        </div>
      </div>
    </div>
  );
}
