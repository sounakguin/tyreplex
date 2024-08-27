import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Paymentmode() {
  return (
<>
    <div className="text-sm text-black mb-4 md:pl-16 pl-3 pt-7">
        Home / Tyre Dealers / Tyre Dealers Ghaziabad / SHREE HEMKUNT TYRES AND
        SERVICES
      </div>
    <div className="bg-white mt-0 md:mt-5 h-auto w-full md:w-11/12 lg:w-11/12 mx-auto p-4 rounded-md shadow-md border border-gray-300">
      
      <div className="">
        <div className="text-lg font-semibold mb-4">Payment Mode</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <p className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 pr-2" />
            Deposit to Account
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 pr-2" />
            Net Banking
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <p className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 pr-2" />
            Credit Card/Debit Card
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 pr-2" />
            UPI
          </p>
        </div>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green-500 pr-2" />
          Wallets (PayTM/PhonePe/Amazon etc.)
        </p>
      </div>
    </div>
    </>
  );
}
