"use client"
import React from "react";
import { motion } from "framer-motion";
import JoinCommunity from "@/components/JoinCommunity";


const Elearning = () => {
  const videos = [
    {
      id: "k6zS02I8kWQ",
      title: "The Organic Math That's Changing Farming",
      org: "AgriTalk By Abhinav Roy",
      image: `https://img.youtube.com/vi/k6zS02I8kWQ/0.jpg`,
    },
    {
      id: "WhOrIUlrnPo",
      title: "What is Organic Farming?",
      org: "FuseSchool - Global Education",
      image: `https://img.youtube.com/vi/WhOrIUlrnPo/0.jpg`,
    },
    {
      id: "_ck7WF8HMtc",
      title: "नेपियर घास से शुरू करें 'गोली' बनाने का Business",
      org: "Mati India",
      image: `https://img.youtube.com/vi/_ck7WF8HMtc/0.jpg`,
    },
    {
      id: "1wf34X8L4P4",
      title: "22 एकड़ Ginger Farming मैं बंपर कमाई",
      org: "Indian Farmer",
      image: `https://img.youtube.com/vi/1wf34X8L4P4/0.jpg`,
    },
    {
      id: "TusQz6JIoMI",
      title: "Smart Kheti: जरुरी है जैविक खेती",
      org: "Sansad TV",
      image: `https://img.youtube.com/vi/TusQz6JIoMI/0.jpg`,
    },
    {
      id: "quMNdpNatuM",
      title: "Profitable Capsicum farming in Poly house India",
      org: "Organic Acre",
      image: `https://img.youtube.com/vi/quMNdpNatuM/0.jpg`,
    },
    {
      id: "6O7E5g3q_y8",
      title:
        "How to grow Coriander without soil | Coriander Dhaniya in hydroponic system",
      org: "Bonsai Tricks and a Lot More",
      image: `https://img.youtube.com/vi/6O7E5g3q_y8/0.jpg`,
    },
    {
      id: "yr3kk13zMoY",
      title:
        "ऐसी खेती कर हर महीने कमा सकते हैं 2 लाख रुपये। 4 साल में करोड़पति ।Hydroponic farming। ",
      org: "The Lallantop",
      image: `https://img.youtube.com/vi/yr3kk13zMoY/0.jpg`,
    },
    {
      id: "-tCikTELJPM",
      title:
        "Agri Startup:जानिए कैसे राजस्थान के एक युवा ने 3 साल में खेती से बना दी1200 करोड़ की कंपनी|",
      org: "Kisan Tak",
      image: `https://img.youtube.com/vi/-tCikTELJPM/0.jpg`,
    },
    {
      id: "r_CWfywjfZs",
      title:
        "Jaivik Kheti क्या है? क्यों है जरूरी? कैसे करें? | Organic Farm शुरू कर रहे किसानों के लिए प्रेरणा",
      org: "Farming Tech",
      image: `https://img.youtube.com/vi/r_CWfywjfZs/0.jpg`,
    },
    {
      id: "Y5GdPRs2DoE",
      title:
        "घर बैठे केसर उगाकर अच्छा प्रॉफिट कमाती डॉक्टर साहिबा | How to grow saffron at home | Kesar Farming",
      org: "Indian Farm Rover",
      image: `https://img.youtube.com/vi/Y5GdPRs2DoE/0.jpg`,
    },
    {
      id: "NbavN0ZnQmo",
      title:
        "2 Acres to 1.5 Lakh/month: Transforming Small Farms into Profit Machines |",
      org: "Agri Talk",
      image: `https://img.youtube.com/vi/NbavN0ZnQmo/0.jpg`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-center p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-black mb-12 tracking-tight"
      >
        Global Farming & Sustainable Agriculture E-learning
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="video-item bg-white p-6 border-2 border-green-200 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2"
          >
            <div>
              <div className="relative mb-6 overflow-hidden rounded-lg group">
                <img
                  src={video.image}
                  alt={`${video.title} concept`}
                  className="w-full h-48 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white bg-opacity-80 p-4 rounded-full"
                  >
                    <svg
                      className="w-12 h-12 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                  </motion.div>
                </a>
              </div>
              <h2 className="text-xl font-bold text-green-800 mb-3">
                {video.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 font-medium">{video.org}</p>
          </motion.div>
        ))}
      </motion.div>
      <JoinCommunity />
    </div>
  );
};

export default Elearning;