

import React, { useState } from 'react';

const NPKSliders = () => {
  const [values, setValues] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
  });

  const handleChange = (nutrient, value) => {
    setValues(prev => ({ ...prev, [nutrient]: parseInt(value) }));
  };

  const Slider = ({ nutrient, value }) => (
    <div className="flex-1 px-2">
      <label htmlFor={nutrient} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
        {nutrient}: {value}
      </label>
      <input
        type="range"
        id={nutrient}
        name={nutrient}
        min="0"
        max="100"
        value={value}
        onChange={(e) => handleChange(nutrient, e.target.value)}
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
      />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">NPK Sliders</h2>
      <div className="flex space-x-4">
        <Slider nutrient="nitrogen" value={values.nitrogen} />
        <Slider nutrient="phosphorus" value={values.phosphorus} />
        <Slider nutrient="potassium" value={values.potassium} />
      </div>
    </div>
  );
};

export default NPKSliders;