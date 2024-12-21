"use client";
import ShineBorder from "@/components/magicui/shine-border";
import { useState, useEffect } from "react";
import axios from "axios";

const GetLocation = ({ onDataUpdate }) => {
  const [locationData, setLocationData] = useState(null);
  const [allData, setAllData] = useState(null);

  const getLocationHandler = () => {
    const success = async (position) => {
      const { latitude, longitude } = position.coords;
      setLocationData({ latitude, longitude });
    };
    const error = () => {
      alert("Unable to get your location!");
    };
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const getSoilType = async (lon, lat) => {
    try {
      const response = await fetch(
        `/api/proxy?url=${encodeURIComponent(
          `https://api-test.openepi.io/soil/type?lon=${lon}&lat=${lat}`
        )}`
      );
      const json = await response.json();
      return json.properties.most_probable_soil_type;
    } catch (error) {
      console.log("Error fetching soil type:", error);
      return "";
    }
  };

  const getWeatherData = async (lat, lon) => {
    try {
      const weatherKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
      );
      const { main } = res.data;
      return {
        temperature: main.temp.toFixed(2),
        humidity: main.humidity,
      };
    } catch (err) {
      console.log("Error fetching weather data:", err);
      return { temperature: "", humidity: "" };
    }
  };

  const calculateSoilMoisture = (temp, humidity) => {
    const moistureIndex = (humidity / 100) * 0.7 - (temp / 40) * 0.3;
    return (Math.max(0, Math.min(1, moistureIndex)) * 100).toFixed(2);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      if (locationData) {
        const { latitude, longitude } = locationData;
        const soilType = await getSoilType(longitude, latitude);
        const weatherData = await getWeatherData(latitude, longitude);
        const soilMoisture = calculateSoilMoisture(
          parseFloat(weatherData.temperature),
          parseFloat(weatherData.humidity)
        );

        const newData = {
          soilType,
          temperature: weatherData.temperature,
          humidity: weatherData.humidity,
          moisture: soilMoisture,
        };

        setAllData(newData);
        onDataUpdate(newData);
      }
    };

    fetchAllData();
  }, [locationData, onDataUpdate]);

  return (
    <div className="flex justify-center items-center m-4">
      <div
        onClick={getLocationHandler}
        ><ShineBorder
        className=" cursor-pointer relative font-semibold flex w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
          AutoFill Information
      </ShineBorder>
      </div>
      
    </div>
  );
};

export default GetLocation;