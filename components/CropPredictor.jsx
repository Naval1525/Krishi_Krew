"use client"
import React, { useState } from 'react';
import JoinCommunity from './JoinCommunity';

const CropPredictor = () => {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [predictedCrop, setPredictedCrop] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://crop-recommendation-vvcj.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          N: parseFloat(N),
          P: parseFloat(P),
          K: parseFloat(K),
          temperature: parseFloat(temperature),
          humidity: parseFloat(humidity),
          ph: parseFloat(ph),
          rainfall: parseFloat(rainfall),
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
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Crop Predictor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black">Nitrogen (N)</label>
          <input
            type="number"
            value={N}
            onChange={(e) => setN(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Phosphorus (P)</label>
          <input
            type="number"
            value={P}
            onChange={(e) => setP(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Potassium (K)</label>
          <input
            type="number"
            value={K}
            onChange={(e) => setK(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black ">Temperature</label>
          <input
            type="number"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Humidity</label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">pH</label>
          <input
            type="number"
            step="0.1"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Rainfall</label>
          <input
            type="number"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            className="mt-1 p-2 border border-black rounded w-full text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded mt-4"
        >
          Predict
        </button>
      </form>
      {predictedCrop && (
        <div className="mt-4 p-2 border border-black rounded text-center">
          <h2 className="text-lg font-bold">Predicted Crop:</h2>
          <p className="text-xl text-black">{predictedCrop}</p>
        </div>
      )}
      {error && (
        <div className="mt-4 p-2 border border-red-500 text-red-500 rounded">
          {error}
        </div>
      )}
    <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default CropPredictor;
