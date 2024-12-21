// components/generalComponents/Cards.jsx
"use client"; // Ensure this is a client-side component

import React from 'react';
import { useRouter } from "next/navigation";
 // For Pages Router

// For App Router, use:
// import { useRouter } from 'next/navigation';

import Card from './Card'; // Adjust path as necessary

const Cards = () => {
  const router = useRouter(); // Initialize router

  const cardData = [
    {
      logo: "/10492684.png", // Ensure the path is correct
      heading: "Fertilizer Prediction",
      description:
        "Our Fertilizer Prediction tool uses machine learning to recommend the best fertilizer based on conditions like temperature, humidity, and soil type. This helps farmers maximize crop yields and promote sustainable farming.",
      path: "/fertilizerPrediction"
    },
    {
      logo: "/3658881.png", // Ensure the path is correct
      heading: "Crop Prediction",
      description:
        "Our Crop Prediction tool leverages machine learning to forecast the most suitable crops based on soil type, climate conditions, and other key factors. This enables farmers to make informed decisions, enhancing productivity and supporting sustainable farming.",
      path: "/cropPrediction"
    },
    {
      logo: "/1374369.png", // Ensure the path is correct
      heading: "Weather Prediction",
      description:
        "Our Weather Prediction tool utilizes live location data and advanced APIs to provide accurate, real-time weather forecasts. This helps farmers plan their activities efficiently, ensuring better crop management and promoting sustainable farming practices.",
      path: "" // Updated path for variety
    },
  ];

  const handleCardClick = (path) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex justify-center items-center space-x-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          heading={card.heading}
          description={card.description}
          onClick={() => handleCardClick(card.path)} // Pass the click handler
        />
      ))}
    </div>
  );
};

export default Cards;
