"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cards from "./generalComponents/Cards";
import { MoreFromUs } from "./MoreFromUs";
import OurServices from "./ourServices/OurServices";
import Footer from "@/components/generalComponents/Footer";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import JoinCommunity from "./JoinCommunity";
import { MarqueeDemo } from "./MarqueeDemo";

const Landing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const AnimatedSection = ({ children, delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="pt-40 w-full text-black">
      {/* Hero Section */}
      <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1
          className="flex justify-center items-center text-5xl md:text-7xl text-center font-extrabold"
          variants={fadeInUp}
        >
          Fertilization Prediction <br /> that works
        </motion.h1>
        <motion.p
          className="mb-10 mt-28 w-full md:w-[30%] mx-auto justify-center items-center text-lg md:text-xl text-center font-normal"
          variants={fadeInUp}
        >
          <span className="text-green-600">Smart Farming,</span> Smarter Yields:
          Precision Fertilizer Predictions for Every Acre.
        </motion.p>
        <motion.div className="pb-20 w-fit mx-auto" variants={fadeInUp}>
          <Link href="/fertilizerPrediction">
            <motion.button
              className="justify-center items-center bg-green-700 text-white text-xl font-medium py-2 px-5 rounded-lg hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started!
            </motion.button>
          </Link>
        </motion.div>

        {/* Images positioned relative to the content */}
        <motion.img
          src="/l1.jpg"
          alt="Multiple Cows"
          className="w-40 border-5 border-gray-300 z-0 object-cover h-40 absolute -top-24 right-32 rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.img
          src="/l2.jpg"
          alt="Farmer Aunty"
          className="w-64 border-5 border-gray-300 object-cover h-80 absolute -top-20 -left-20 rounded-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.img
          src="/l3.jpeg"
          alt=""
          className="w-52 border-5 border-gray-300 object-cover object-left h-52 absolute bottom-20 left-72 transform -translate-x-1/2 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.img
          src="/l4.jpg"
          alt="Farmer Standing"
          className="w-64 object-right border-5 border-gray-300 object-cover z-1 h-72 absolute top-1 -right-14 rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.img
          src="/l4.jpg"
          alt="Farmer Standing"
          className="w-40 object-right border-5 border-gray-300 object-cover h-40 absolute top-52 right-80 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>

      {/* What we Doin'  */}
      <div className="pt-32 pb-32 bg-[#e8f1ee] mx-auto flex flex-col justify-center items-center text-xl text-center">
        <AnimatedSection>
          <motion.span className="text-green-700">What We Do</motion.span>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <motion.span className="mb-20 font-bold text-4xl">
            Currently we are
          </motion.span>
        </AnimatedSection>
        <div className="pt-10">
          <AnimatedSection delay={0.4}>
            <Cards />
          </AnimatedSection>
        </div>
      </div>

      {/* Tractor Image Section */}
      <AnimatedSection>
        <motion.div className="w-full bg-[#e8f1ee] h-[75vh] justify-start items-center inline-flex overflow-hidden">
          <motion.img
            className="w-full h-full object-cover object-top"
            src="/tractor.jpg"
            alt="Tractor"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
          />
        </motion.div>
      </AnimatedSection>

      {/* OurServices Section */}
      <AnimatedSection>
        <motion.div className="-mt-4 mb-8 p-20">
          <MarqueeDemo />
        </motion.div>
      </AnimatedSection>
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Landing;
