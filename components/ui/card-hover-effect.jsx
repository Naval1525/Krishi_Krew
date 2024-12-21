"use client";
import React from "react";
import { motion } from "framer-motion";

export function HoverEffect({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
        >
          <Card item={item} className="drop-shadow-lg"/>
        </motion.div>
      ))}
    </div>
  );
}

export function Card({ item }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Static label */}
      <div className="absolute top-0 left-0 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-br-lg">
        {item.title}
      </div>

      {/* Image with hover effect */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* Overlay for text only on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 ease-in-out"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-full">
        <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
        <h3 className="text-sm text-gray-300 mb-2">{item.year}</h3>
        <p className="text-sm text-white">
          {item.description}
        </p>
        <a
          href={item.link}
          className="mt-4 inline-block px-4 py-2 bg-green-500 text-white font-bold rounded transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-0"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
}
