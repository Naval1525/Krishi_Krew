import React from 'react'
import { motion } from "framer-motion";
const JoinCommunity = () => {
    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

return (
  <motion.div
    className="relative w-[65%] mx-auto z-0 mb-24 mt-16 rounded-3xl"
    variants={fadeInUp}
  >
    <motion.div
      className="relative w-full rounded-3xl h-72 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/community.png')",
        backgroundSize: "50%",
        filter: "brightness(1)",
      }}
      whileHover={{ scale: 1.0, filter: "brightness(0.95)" }} 
      transition={{ duration: 0.5 }} 
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <motion.h1
            className="text-5xl md:text-5xl text-white font-extrabold text-center px-4 relative z-10"
            variants={fadeInUp}
          >
            Join Our Community!
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

};

export default JoinCommunity
