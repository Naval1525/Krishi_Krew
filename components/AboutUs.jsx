
"use client"

import React from "react";
import AnimatedTooltip from "@/components/generalComponents/circleframe";
import { motion } from "framer-motion";

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

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-7xl font-bold flex items-center">
          <span
            className="mr-2 px-4 py-2 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/welcome.png')" }}
          >
            Welcome to
          </span>
          &nbsp;
          <span className="text-black">Krishi</span>&nbsp;
          <span className="text-green-500">Krew</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <motion.div 
          className="flex-1 flex flex-col justify-between  rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-yellow-100 p-6 rounded-lg mb-6 flex-grow shadow-md">
            <p className="text-lg text-black">
              At <span className="font-bold">Krishi <span>Krew</span></span>, we are passionate about
              empowering farmers with the tools and knowledge they need to succeed. Our
              platform offers a comprehensive suite of features designed to optimize your farming
              practices and connect you with a thriving community.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg mb-6 flex-grow shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-black">OUR AIM</h2>
            <p className="text-lg text-black">
              At <span className="font-bold">Krishi <span>Krew</span></span>, we believe in the power
              of collaboration and continuous learning. Our mission is to support you
              in every step of your farming journey, making it more efficient, sustainable,
              and profitable.
            </p>
          </div>

          <div className="bg-black p-6 rounded-lg flex-grow shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Our Team
            </h2>
            <div className="flex justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-green-100 p-6 rounded-lg h-full mb-8 shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-black">WHAT WE PROVIDE ?</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-semibold text-black">Fertilizer Predictor</h3>
                <p className="text-black">
                  We provide personalized fertilizer recommendations, ensuring you apply the right nutrients in the right quantities for your crops.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">Crop Selection Guidance</h3>
                <p className="text-black">
                  Based on your specific conditions, we suggest the best crops to grow, helping you maximize your yield and sustainability.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">Community & Live Engagement</h3>
                <p className="text-black">
                  Join our vibrant community where you can participate in live streams, watch educational videos, and connect with fellow farmers and experts.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">Weather Predictions</h3>
                <p className="text-black">
                  Stay ahead of the weather with our accurate and timely forecasts, tailored to your location and farming needs.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold text-black">E-Learning Platform</h3>
                <p className="text-black">
                  Access a wealth of knowledge through our e-learning platform, where you can learn about the latest farming techniques, technologies, and trends.
                </p>
              </li>
            </ul>
            <p className="mt-4 text-lg font-bold text-green-700">
              And many other features...
            </p>
          </div>
        </motion.div>
      </div>

     
    </div>
  );
};

export default AboutUs;
