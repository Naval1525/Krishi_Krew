"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import JoinCommunity from "../JoinCommunity";
import { motion } from "framer-motion";
import ShinyButton from "../magicui/shiny-button";

export const Crop = () => {
  const [formData, setFormData] = useState({
    N: 0,
    P: 0,
    K: 0,
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });
  const [predictedCrop, setPredictedCrop] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://crop-recommendation-vvcj.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          N: parseFloat(formData.N),
          P: parseFloat(formData.P),
          K: parseFloat(formData.K),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          ph: parseFloat(formData.ph),
          rainfall: parseFloat(formData.rainfall),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPredictedCrop(data.predicted_crop);
      setError('');
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
      setPredictedCrop('');
    }
  };

  return (
    <motion.div
      className="bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="container mx-auto px-4 mt-20 md:mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 px-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-8xl font-extrabold text-black">
              Know your
              <br /> Crop
            </h1>
            <p className="mt-8 md:mt-14 text-gray-500">
              Predict the best crop for your land based on soil composition and
              environmental factors.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="./crop.svg"
              alt="Sample Image"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 mt-20 md:mt-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-50 shadow-lg rounded-3xl p-8">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-black">
            Crop Prediction
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["N", "P", "K"].map((element) => (
                <motion.div
                  key={element}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label htmlFor={element} className="text-sm text-black">
                    {element} (g/kg)
                  </label>
                  <input
                    id={element}
                    name={element}
                    type="range"
                    min="0"
                    max="100"
                    value={formData[element]}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600/50"
                  />
                  <div className="flex items-center">
                    <span className="ml-2 text-sm text-gray-600">
                      {formData[element]}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">0-100</div>
                </motion.div>
              ))}

              <Input
                name="temperature"
                size="lg"
                type="number"
                label="Temperature"
                value={formData.temperature}
                onChange={handleChange}
                required
              />
              <Input
                name="humidity"
                size="lg"
                type="number"
                label="Humidity"
                value={formData.humidity}
                onChange={handleChange}
                required
              />
              <Input
                name="ph"
                size="lg"
                type="number"
                label="pH"
                value={formData.ph}
                onChange={handleChange}
                required
              />
              <Input
                name="rainfall"
                size="lg"
                type="number"
                label="Rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center">
              <ShinyButton
                type="submit"
                text="Predict my Crop"
                className="border-4 border-green-600/50 font-semibold py-2 px-4 text-green-600 "
              />
            </div>
          </form>
        </div>
      </motion.div>

      {predictedCrop && (
        <motion.div
          className="container mx-auto px-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-green-100 rounded-3xl p-6 text-center">
            <h3 className="text-3xl font-bold mb-2 text-black">
              Predicted Crop:
            </h3>
            <p className="text-3xl text-green-700">{predictedCrop}</p>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="container mx-auto px-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-red-100 text-red-700 p-4 rounded-xl text-center">
            {error}
          </div>
        </motion.div>
      )}

      <JoinCommunity />
    </motion.div>
  );
};
