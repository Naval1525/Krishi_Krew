// components/generalComponents/Card.jsx
import React from "react";

const Card = ({ logo, heading, description, onClick }) => {
  return (
    <div
      className="flex flex-col items-start p-6 border border-gray-300 rounded-3xl shadow-md space-y-4 h-96 w-72 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick} // Handle click events
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-12 h-12" />

      {/* Main Heading */}
      <h1 className="text-xl font-bold text-green-500 whitespace-pre-line !text-start">{heading}</h1>

      {/* Paragraph */}
      <p className="text-sm text-gray-600 !text-start">{description}</p>

      {/* Arrow Button */}
      <button className="mt-6 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 flex items-center justify-center">
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Card;
