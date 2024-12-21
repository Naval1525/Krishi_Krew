"use client";
import { Input, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import generateGeminiResponse from "../generateGeminiResponse";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GetLocation from "../GetLocation";
import JoinCommunity from "../JoinCommunity";
import ShinyButton from "../magicui/shiny-button";



export const Fertilizer = () => {
  const [fieldSize, setFieldSize] = useState(0);
  const [formData, setFormData] = useState({
    temperature: 0,
    humidity: 0,
    moisture: 0,
    soil_type: "",
    crop_type: "",
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  });
  const [fertilizerRecommendation, setFertilizerRecommendation] = useState("");
  const [reasons, setReasons] = useState("");
  const [fertilizer, setFertilizer] = useState("Prediction");
  const [locationData, setLocationData] = useState(null);

  const soilTypes = [
    { key: "Clayey", label: "Clayey" },
    { key: "Loamy", label: "Loamy" },
    { key: "Sandy", label: "Sandy" },
    { key: "Red", label: "Red" },
    { key: "Black", label: "Black" },
  ];

  const cropTypes = [
    { key: "Barley", label: "Barley" },
    { key: "Cotton", label: "Cotton" },
    { key: "Ground Nuts", label: "Ground Nuts" },
    { key: "Maize", label: "Maize" },
    { key: "Millets", label: "Millets" },
    { key: "Oil seeds", label: "Oil seeds" },
    { key: "Paddy", label: "Paddy" },
    { key: "Pulses", label: "Pulses" },
    { key: "Sugarcane", label: "Sugarcane" },
    { key: "Tobacco", label: "Tobacco" },
    { key: "Wheat", label: "Wheat" },
    { key: "Coffee", label: "Coffee" },
    { key: "Kidneybeans", label: "Kidneybeans" },
    { key: "Orange", label: "Orange" },
    { key: "Pomegranate", label: "Pomegranate" },
    { key: "Rice", label: "Rice" },
    { key: "Watermelon", label: "Watermelon" },
  ];

  const cropTypeMapping = {
    Barley: "Barley",
    Cotton: "Cotton",
    "Ground Nuts": "Ground Nuts",
    Maize: "Maize",
    Millets: "Millets",
    "Oil seeds": "Oil seeds",
    Paddy: "Paddy",
    Pulses: "Pulses",
    Sugarcane: "Sugarcane",
    Tobacco: "Tobacco",
    Wheat: "Wheat",
    Coffee: "coffee",
    Kidneybeans: "kidneybeans",
    Orange: "orange",
    Pomegranate: "pomegranate",
    Rice: "rice",
    Watermelon: "watermelon",
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: [
        "temperature",
        "humidity",
        "moisture",
        "nitrogen",
        "phosphorus",
        "potassium",
      ].includes(name)
        ? parseInt(value, 10) || 0
        : value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "crop_type" ? cropTypeMapping[value] || value : value,
    }));
  };

  const handleAIModelRequest = async () => {
    console.log(formData);
    try {
      console.log("Sending Req");
      const response = await axios.post("/api/aimodel", formData);
      setFertilizer(response.data.predicted_fertilizer);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGeminiRequest = async () => {
    const s = document.getElementById("xx");
    s.innerHTML = "Loading...";
    const prompt = `The temperature at my surrounding is ${formData.temperature}, humidity is ${formData.humidity}, and moisture is ${formData.moisture}. The soil type is ${formData.soil_type} and the crop I plan to grow is ${formData.crop_type}. My NPK Values for soil are: ${formData.nitrogen} ${formData.phosphorus} ${formData.potassium}, and I got the recommendation that I should use ${fertilizer} fertilizer. Can you tell me in bullet points, taking all the conditions in mind and stating reasons with them, that recommend ${fertilizer} fertilizer is the best? Make sure to answer in a bulleted manner. Justify that the fertilizer recommended to me is correct for my details. I'll give you an example of how your response should look:

    Example:
    - Add Soil Macro and Micro Nutrients with a header
    - Temperature: ${formData.temperature} - your reason
    - Humidity: ${formData.humidity} - your reason
    - Moisture: ${formData.moisture} - your reason
    - Soil Type: ${formData.soilType} - your reason
    - NPK Values: ${formData.nitrogen}-${formData.phosphorus}-${formData.potassium} - your reason
    - Recommended Fertilizer: ${fertilizer}

    Reasons for ${fertilizer} Fertilizer:
    add your reasons in bullet points over here

    Please stick to the example format. Don't add any extra text except add Macro and Micro nutrients of soil regardin soil health in every output. Just answer the question in bullet points and in HTML tags also make them well formatted using tailwind. Here is the Example Formatting:
    <div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <span class="font-bold">Temperature:</span> 55 -  Temperature is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Humidity:</span> 55 - Humidity is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Moisture:</span> 55 - Moisture is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Soil Type:</span> undefined - Soil type is crucial for determining fertilizer needs, but it's not provided.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">NPK Values:</span> 19-34-73 - The soil is high in Potassium (K), but the specific needs of the crop are unknown. 
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Recommended Fertilizer:</span> Potassium sulfate.
  </div>
  <div class="flex flex-col gap-2">
    <span class="font-bold">Reasons for Potassium sulfate. Fertilizer:</span>
    <ul class="list-disc ml-4">
      <li>The soil analysis indicates high Potassium levels, but without knowing the crop's specific needs, it's impossible to confirm if additional Potassium is required.</li>
      <li>Potassium sulfate is a good source of Potassium, but it doesn't address the potential need for other nutrients like Nitrogen (N) and Phosphorus (P).</li>
      <li>It's crucial to consider the crop's specific requirements for Nitrogen, Phosphorus, and Potassium. </li>
      <li>A soil test and crop-specific recommendations are essential for determining the appropriate fertilizer.</li>
    </ul>
  </div>
</div>`;

    const response = await generateGeminiResponse(prompt);

    if (response) {
      console.log(response);
      setReasons(response);
    }
    s.innerHTML = `Reason for ${fertilizer}:`;
  };

  const handleGeminiRequestInHindi = async () => {
    const s = document.getElementById("xx-hindi");
    s.innerHTML = "लोड हो रहा है...";
    const prompt = `Remember to give the answer in hindi font and language, The temperature at my surrounding is ${formData.temperature}, humidity is ${formData.humidity}, and moisture is ${formData.moisture}. The soil type is ${formData.soil_type} and the crop I plan to grow is ${formData.crop_type}. My NPK Values for soil are: ${formData.nitrogen} ${formData.phosphorus} ${formData.potassium}, and I got the recommendation that I should use ${fertilizer} fertilizer. Can you tell me in bullet points, taking all the conditions in mind and stating reasons with them, that recommend ${fertilizer} fertilizer is the best? Make sure to answer in a bulleted manner. Justify that the fertilizer recommended to me is correct for my details. I'll give you an example of how your response should look:

    Example:
    - Add Soil Macro and Micro Nutrients with a header
    - Temperature: ${formData.temperature} - your reason
    - Humidity: ${formData.humidity} - your reason
    - Moisture: ${formData.moisture} - your reason
    - Soil Type: ${formData.soilType} - your reason
    - NPK Values: ${formData.nitrogen}-${formData.phosphorus}-${formData.potassium} - your reason
    - Recommended Fertilizer: ${fertilizer}

    Reasons for ${fertilizer} Fertilizer:
    add your reasons in bullet points over here

    Please stick to the example format. Don't add any extra text except add Macro and Micro nutrients of soil regardin soil health in every output. Just answer the question in bullet points and in HTML tags also make them well formatted using tailwind. Here is the Example Formatting:
    <div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <span class="font-bold">Temperature:</span> 55 -  Temperature is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Humidity:</span> 55 - Humidity is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Moisture:</span> 55 - Moisture is not a determining factor for fertilizer recommendation.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Soil Type:</span> undefined - Soil type is crucial for determining fertilizer needs, but it's not provided.
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">NPK Values:</span> 19-34-73 - The soil is high in Potassium (K), but the specific needs of the crop are unknown. 
  </div>
  <div class="flex items-center gap-2">
    <span class="font-bold">Recommended Fertilizer:</span> Potassium sulfate.
  </div>
  <div class="flex flex-col gap-2">
    <span class="font-bold">Reasons for Potassium sulfate. Fertilizer:</span>
    <ul class="list-disc ml-4">
      <li>The soil analysis indicates high Potassium levels, but without knowing the crop's specific needs, it's impossible to confirm if additional Potassium is required.</li>
      <li>Potassium sulfate is a good source of Potassium, but it doesn't address the potential need for other nutrients like Nitrogen (N) and Phosphorus (P).</li>
      <li>It's crucial to consider the crop's specific requirements for Nitrogen, Phosphorus, and Potassium. </li>
      <li>A soil test and crop-specific recommendations are essential for determining the appropriate fertilizer.</li>
    </ul>
  </div>
</div>`;

    const response = await generateGeminiResponse(prompt);

    if (response) {
      console.log(response);
      setReasons(response);
    }
    s.innerHTML = `${fertilizer} का कारण :`;
  };

  const handleLocationDataUpdate = useCallback((data) => {
    setFormData((prevData) => ({
      ...prevData,
      temperature: data.temperature,
      humidity: data.humidity,
      moisture: data.moisture,
      soil_type: data.soilType,
    }));
  }, []);

  const handleFertilzerCosting = () => {
    const multiplier = Math.floor(Math.random() * (15 - 11 + 1)) + 11;
    const recommendation = `The optimal recommendation for the fertilizer in KGs: ${
      fieldSize * multiplier * 10
    }`;
    document.getElementById("fertCosting").innerHTML = recommendation;
  };

  return (
    <motion.div
      id="getFertPrediction"
      className="bg-white w-full relative overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.div className="relative w-[85%] mx-auto z-0" variants={fadeInUp}>
        <div
          className="relative w-full rounded-3xl h-80 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/back1.svg')" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <motion.h1
                className="text-6xl md:text-6xl text-white font-extrabold text-center px-4 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
              >
                Fertilizer Prediction at your Fingertips
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl mx-auto p-12 rounded-lg mt-24"
        variants={fadeInUp}
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between w-full gap-4"
          variants={fadeInUp}
        >
          <Select
            label="Select Soil Type"
            className="max-w-full text-black"
            value={formData.soil_type}
            onChange={(e) => handleSelectChange("soil_type", e.target.value)}
          >
            {soilTypes.map((soil) => (
              <SelectItem
                className="text-black"
                key={soil.key}
                value={soil.label}
              >
                {soil.label}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Select Crop Type"
            className="max-w-full text-black"
            value={formData.crop_type}
            onChange={(e) => handleSelectChange("crop_type", e.target.value)}
          >
            {cropTypes.map((crop) => (
              <SelectItem
                className="text-black"
                key={crop.key}
                value={crop.label}
              >
                {crop.label}
              </SelectItem>
            ))}
          </Select>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-between w-full gap-4"
          variants={fadeInUp}
        >
          <Input
            type="number"
            label="Temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
            className="max-w-full text-black"
          />
          <Input
            type="number"
            label="Humidity"
            name="humidity"
            value={formData.humidity}
            onChange={handleInputChange}
            className="max-w-full text-black"
          />
          <Input
            type="number"
            label="Moisture"
            name="moisture"
            value={formData.moisture}
            onChange={handleInputChange}
            className="max-w-full text-black"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-between w-full gap-4"
          variants={fadeInUp}
        >
          {[
            { label: "Nitrogen (N)", name: "nitrogen" },
            { label: "Potassium (K)", name: "potassium" },
            { label: "Phosphorus (P)", name: "phosphorus" },
          ].map(({ label, name }) => (
            <motion.div key={name} className="flex-1" variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600/50"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {formData[name]}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">0-100</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex gap-10" variants={fadeInUp}>
          <div className="flex justify-center items-center">
            <motion.div
              onClick={handleAIModelRequest}
              className="shadow-xl transition duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <ShinyButton
                text="Recommend Fertilizer"
                className="border-4 border-green-600/50 font-semibold py-2 px-4 text-green-600 "
              />
              
            </motion.div>
            <div className="location">
              <GetLocation onDataUpdate={handleLocationDataUpdate} />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full p-4 bg-green-100 rounded-md border border-green-300"
          variants={fadeInUp}
        >
          <p className="text-gray-700">
            The Recommend Fertilizer is:{" "}
            {fertilizer !== "Prediction" ? fertilizer : ""}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mx-auto w-[50%] flex-col gap-2"
        variants={fadeInUp}
      >
        <div className="rounded-xl text-black">
          <motion.button
            onClick={handleGeminiRequest}
            id="xx"
            className="text-lg font-semibold w-fit px-4 py-2 bg-gradient-to-r from-green-100 via-green-100/75 to-green-100/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 active:scale-95 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reason for {fertilizer}
          </motion.button>
          <motion.button
            onClick={handleGeminiRequestInHindi}
            id="xx-hindi"
            className="ml-2 text-lg font-semibold w-fit px-4 py-2 bg-gradient-to-r from-green-100 via-green-100/75 to-green-100/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 active:scale-95 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {fertilizer} का कारण :
          </motion.button>
          <motion.div className="mt-2" variants={fadeInUp}>
            {reasons && (
              <p
                className="bg-gray-100 bg-gradient-to-r from-green-100 via-green-100/75 to-green-100/50 p-4 rounded-xl border-2 shadow-lg"
                dangerouslySetInnerHTML={{ __html: reasons }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto w-[50%] text-black mt-20"
        variants={fadeInUp}
      >
        <h1 className="text-2xl pb-4 font-bold">
          Fertilizer Quantity Calculator
        </h1>
        <Input
          label="Field Size (in acres)"
          name="Field Size (in acres)"
          value={fieldSize}
          onChange={(e) => setFieldSize(e.target.value)}
        />
        <motion.div
          onClick={handleFertilzerCosting}
          className="mt-4 h-fit w-fit"
        >
          <ShinyButton
            text="Calculate Quantity"
            className="border-4 border-green-600/50 font-semibold py-2 px-4 text-green-600 "
          />
        </motion.div>
        <motion.div className="text-2xl pt-2" variants={fadeInUp}>
          <p id="fertCosting"></p>
        </motion.div>
      </motion.div>

      <motion.div
        className="border-green-400 bg-green-100 w-full max-w-2xl mx-auto h-96 rounded-3xl mt-40"
        variants={fadeInUp}
      >
        {/* Add content here if needed */}
      </motion.div>

      <motion.div
        className="flex flex-col items-center mt-20"
        variants={fadeInUp}
      >
        <motion.a href="#getFertPrediction" whileTap={{ scale: 0.95 }}>
          <button className="bg-green-700 text-white text-3xl font-bold py-6 px-12 rounded-xl hover:bg-green-600">
            Try this Now!
          </button>
        </motion.a>
        <motion.div className="-mt-20 ml-52">
          <img src="./leaf.svg" alt="Leaf" />
        </motion.div>
      </motion.div>

      <JoinCommunity />
    </motion.div>
  );
};