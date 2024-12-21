'use client';
import React from "react";
import AnimatedTooltip from "./circleframe";
import { useRouter } from "next/navigation";
function Footer() {
  const router = useRouter();
  const people = [
    {
      id: 3,
      name: "Adarsh",
      designation: "Krew Member",
      image: "/ady.jpeg",
    },
    {
      id: 2,
      name: "Devanshi Jaiswal",
      designation: "Krew Member",
      image: "/devanshi.jpeg",
    },
    {
      id: 4,
      name: "Sanya Wadhwan",
      designation: "Krew Member",
      image: "/sanya.jpeg",
    },
    {
      id: 100,
      name: "Samaksh Tyagi",
      designation: "Krew Member",
      image: "/samaksh.jpeg",
    },
    {
      id: 5,
      name: "Naval Bihani",
      designation: "Krew Member",
      image: "/naval.png",
    },
    {
      id: 6,
      name: "Divyansh Vishwakarma",
      designation: "Krew Member",
      image: "/divyansh.jpeg",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-100 to-green-200 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 cursor-default mb-4">
              <span className="text-black">Our</span>&nbsp;Krew
            </h1>
            <p className="font-semibold text-gray-700 mb-2 text-center md:text-left">
              Providing reliable services since 2024
            </p>
            <div className="flex space-x-4 mt-4">
              {["Twitter", "YouTube", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    {platform === "Twitter" && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    )}
                    {platform === "YouTube" && (
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    )}
                    {platform === "Facebook" && (
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
              Meet Our Team
            </h2>
            <div className="flex justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Quick Links
            </h2>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                onClick={() => router.push("/")}
                
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                onClick={() => router.push("/")}
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                onClick={() => router.push("/fertilizerPrediction")}
              >
                Fertilizer Prediction
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                onClick={() => router.push("/cropPrediction")}
              >
                Crop Predcition
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors duration-300"
                onClick={() => router.push("/contactus")}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
