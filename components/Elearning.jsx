// components/Elearning.jsx
import React from "react";

const Elearning = () => {
  // Example YouTube video IDs
  const videoIds = [
    "dQw4w9WgXcQ", "V-_O7nl0Ii0", "3JZ_D3ELwOQ", "tVj0ZTS5KpQ",
    "e-ORhEE9VVg", "lDK9QqIzhwk", "hTWKbfoikeg", "kJQP7kiw5Fk",
    "pAgnJt7v7yU", "CevxZvSJLk8", "wZZ7oFKsKzY", "J---aiyznGQ",
    "oHg5SJYRHA0", "QH2-TUvqWvO", "WpmILPAcRQo", "QkTx2lcs2wo",
    "rUWxDLb6q2Q", "09J8fV0mMUE"
  ];

  return (
    <div className="text-center p-10">
      <h1 className="text-6xl font-extrabold text-black mb-8 mr-[134vh]">E-learning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoIds.map((id, index) => (
          <div key={index} className="video-item bg-white p-2 border border-gray-200 shadow-md rounded-lg">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Elearning;
