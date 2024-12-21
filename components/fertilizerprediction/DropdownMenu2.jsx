"use client"; // This ensures the component runs on the client side

import React, { useState } from 'react';

export const DropdownMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="bg-green-100 border border-green-600 text-black font-medium py-4 px-7 rounded-lg hover:bg-green-100 focus:outline-none w-[55vh] "
      >
        Soil Type
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white border border-black">
          <ul className="py-1">
            <li>
              <a href="#" className="block px-4 py-2 text-black hover:bg-green-100">
                Option 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-black hover:bg-green-100">
                Option 2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-black hover:bg-green-100">
                Option 3
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-black hover:bg-green-100">
                Option 4
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-black hover:bg-green-100">
                Option 5
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
