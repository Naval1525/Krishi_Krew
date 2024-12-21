"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const schemesData = {
  hindi: [
    {
      title: "पीएम-किसान",
      description:
        "छोटे और सीमांत किसानों को प्रति वर्ष ₹6,000 प्रदान करता है। पंजीकरण और लाभों की ट्रैकिंग को एकीकृत करें, सुनिश्चित करें कि समय पर अपडेट और भुगतान हो रहे हैं।",
      link: "https://pmkisan.gov.in/",
      imageUrl: "/schemes/1.jpg",
      year: "2019",
    },
    {
      title: "पीएमएफबीवाई",
      description:
        "फसलों की विफलता के कारण वित्तीय नुकसान को कवर करने वाली फसल बीमा। बीमा दावा सहायता और कवरेज और भुगतान पर वास्तविक समय के अपडेट प्रदान करें।",
      link: "https://pmfby.gov.in/",
      imageUrl: "/schemes/2.jpg",
      year: "2016",
    },
    {
      title: "मृदा स्वास्थ्य कार्ड योजना",
      description:
        "पोषक तत्वों की स्थिति और खुराक सलाह के साथ मृदा स्वास्थ्य कार्ड प्रदान करता है। मृदा डेटा और सिफारिशों को एकीकृत करें, मृदा स्वास्थ्य कार्ड डेटा के आधार पर व्यक्तिगत सलाह प्रदान करें।",
      link: "https://soilhealth.dac.gov.in/",
      imageUrl: "/schemes/3.jpg",
      year: "2015",
    },
    {
      title: "पीएमकेएसवाई",
      description:
        "बेहतर सिंचाई के माध्यम से फार्म उत्पादकता में सुधार करता है। कुशल सिंचाई प्रथाओं और उपलब्ध सरकारी सब्सिडी पर जानकारी प्रदान करें।",
      link: "https://pmksy.gov.in/",
      imageUrl: "/schemes/4.jpg",
      year: "2015",
    },
    {
      title: "ईएनएएम",
      description:
        "कृषि वस्तुओं के लिए एक एकीकृत राष्ट्रीय बाजार बनाएँ। बेहतर बाजार मूल्य प्रदान करने और पूरे भारत में खरीदारों से जुड़ने के लिए eNAM से लिंक करें।",
      link: "https://enam.gov.in/",
      imageUrl: "/schemes/5.jpg",
      year: "2016",
    },
    {
      title: "किसान क्रेडिट कार्ड",
      description:
        "कृषि संबंधी जरूरतों के लिए समय पर क्रेडिट प्रदान करता है। KCC के लिए आवेदन करने में सहायता करें और क्रेडिट और पुनर्भुगतान की स्थिति को ट्रैक करें।",
      link: "https://www.kisancreditcard.org/",
      imageUrl: "/schemes/6.jpg",
      year: "1998",
    },
    {
      title: "पीकेवीवाई",
      description:
        "मृदा की उर्वरता बढ़ाने के लिए जैविक खेती को बढ़ावा देता है। जैविक खेती की प्रथाओं पर शिक्षा प्रदान करें और जैविक उत्पादों के लिए बाजारों से जोड़ें।",
      link: "https://pkvy.gov.in/",
      imageUrl: "/schemes/7.jpg",
      year: "2015",
    },
    {
      title: "आरकेवीवाई",
      description:
        "स्थानीय जरूरतों के आधार पर राज्यों को कृषि विकास के लिए फंडिंग करता है। राज्य-विशिष्ट पहलों के साथ सुविधाओं को संरेखित करें और व्यक्तिगत सलाह प्रदान करें।",
      link: "https://rkvy.nic.in/",
      imageUrl: "/schemes/8.jpg",
      year: "2007",
    },
    {
      title: "एनएफएसएम",
      description:
        "प्रेरणा के माध्यम से प्रमुख फसलों का उत्पादन बढ़ाना। सर्वोत्तम प्रथाओं पर मार्गदर्शन प्रदान करें और सरकारी समर्थन के विवरण को एकीकृत करें।",
      link: "https://nfsm.gov.in/",
      imageUrl: "/schemes/9.jpg",
      year: "2007",
    },
    {
      title: "एमआईएफ",
      description:
        "जल का संरक्षण और उत्पादकता को बढ़ावा देने के लिए सूक्ष्म-सिंचाई प्रथाओं का समर्थन करता है। सूक्ष्म-सिंचाई तकनीकों पर संसाधन प्रदान करें और फंड तक पहुंच में मदद करें।",
      link: "https://mif.gov.in/",
      imageUrl: "/schemes/10.jpg",
      year: "2014",
    },
    {
      title: "डीईडीएस",
      description:
        "छोटे पैमाने की इकाइयों के लिए वित्तीय सहायता के माध्यम से डेयरी उत्पादन को बढ़ावा देता है। डेयरी खेती की स्थापना पर मार्गदर्शन करें और योजना लाभों से कनेक्ट करें।",
      link: "https://dairyscheme.gov.in/",
      imageUrl: "/schemes/11.jpg",
      year: "2005",
    },
    {
      title: "एनएलएम",
      description:
        "पशुपालन क्षेत्र का विकास, उत्पादकता में वृद्धि और पशु स्वास्थ्य में सुधार। पशुपालन प्रबंधन, स्वास्थ्य और उत्पादकता बढ़ाने का समर्थन करने वाली सुविधाओं को शामिल करें।",
      link: "https://nlm.gov.in/",
      imageUrl: "/schemes/12.jpg",
      year: "2014",
    },
  ],
  english: [
    {
      title: "PM-Kisan",
      description:
        "Provides ₹6,000 per year to small and marginal farmers. Integrate registration and benefit tracking to ensure timely updates and payments.",
      link: "https://pmkisan.gov.in/",
      imageUrl: "/schemes/1.jpg",
      year: "2019",
    },
    {
      title: "PMFBY",
      description:
        "Crop insurance covering financial losses due to crop failure. Provide insurance claim assistance and real-time updates on coverage and payments.",
      link: "https://pmfby.gov.in/",
      imageUrl: "/schemes/2.jpg",
      year: "2016",
    },
    {
      title: "Soil Health Card Scheme",
      description:
        "Provides soil health cards with nutrient status and dosage recommendations. Integrate soil data and recommendations, and provide personalized advice based on soil health card data.",
      link: "https://soilhealth.dac.gov.in/",
      imageUrl: "/schemes/3.jpg",
      year: "2015",
    },
    {
      title: "PMKSY",
      description:
        "Improves farm productivity through better irrigation. Provide information on efficient irrigation practices and available government subsidies.",
      link: "https://pmksy.gov.in/",
      imageUrl: "/schemes/4.jpg",
      year: "2015",
    },
    {
      title: "eNAM",
      description:
        "Create an integrated national market for agricultural commodities. Link with eNAM to provide better market prices and connect with buyers across India.",
      link: "https://enam.gov.in/",
      imageUrl: "/schemes/5.jpg",
      year: "2016",
    },
    {
      title: "Kisan Credit Card",
      description:
        "Provides timely credit for agricultural needs. Assist in applying for KCC and track credit and repayment status.",
      link: "https://www.kisancreditcard.org/",
      imageUrl: "/schemes/6.jpg",
      year: "1998",
    },
    {
      title: "PKVY",
      description:
        "Promotes organic farming to improve soil fertility. Educate on organic farming practices and link to markets for organic products.",
      link: "https://pkvy.gov.in/",
      imageUrl: "/schemes/7.jpg",
      year: "2015",
    },
    {
      title: "RKVY",
      description:
        "Funds states for agricultural development based on local needs. Align facilities with state-specific initiatives and provide personalized advice.",
      link: "https://rkvy.nic.in/",
      imageUrl: "/schemes/8.jpg",
      year: "2007",
    },
    {
      title: "NFSM",
      description:
        "Enhances production of major crops through incentives. Provide guidance on best practices and integrate details of government support.",
      link: "https://nfsm.gov.in/",
      imageUrl: "/schemes/9.jpg",
      year: "2007",
    },
    {
      title: "MIF",
      description:
        "Supports micro-irrigation practices to enhance water conservation and productivity. Provide resources on micro-irrigation techniques and assist with access to funds.",
      link: "https://mif.gov.in/",
      imageUrl: "/schemes/10.jpg",
      year: "2014",
    },
    {
      title: "DEDS",
      description:
        "Promotes dairy production through financial assistance for small-scale units. Guide on establishing dairy farming and connect with scheme benefits.",
      link: "https://dairyscheme.gov.in/",
      imageUrl: "/schemes/11.jpg",
      year: "2005",
    },
    {
      title: "NLM",
      description:
        "Development of the livestock sector, increasing productivity, and improving animal health. Include facilities that support livestock management, health, and productivity enhancement.",
      link: "https://nlm.gov.in/",
      imageUrl: "/schemes/12.jpg",
      year: "2014",
    },
  ],
};

export function GovernmentSchemesHoverEffect() {
  const [language, setLanguage] = useState("hindi");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "hindi" ? "english" : "hindi"));
  };

  return (
    <div className="my-8">
      <div className="flex justify-center items-center">
        <motion.h1
          className="h-fit p-5 text-9xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-green-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {language === "hindi"
            ? "सरकारी कृषि योजनाएँ"
            : "Government Schemes"}
        </motion.h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            id="languageToggle"
            checked={language === "english"}
            onChange={toggleLanguage}
            className="sr-only"
          />
          <div
            className={`w-20 h-10 flex items-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${
              language === "english" ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={toggleLanguage}
          >
            <div
              className={`w-9 h-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                language === "english" ? "translate-x-10" : "translate-x-1"
              }`}
            />
          </div>
          <label
            htmlFor="languageToggle"
            className="ml-4 text-gray-700 font-semibold cursor-pointer flex items-center"
          >
            <span className={`text-sm ${language === "hindi" ? "text-gray-600" : "text-gray-400"}`}>
              हिंदी
            </span>
            <span className="mx-2 text-gray-500">/</span>
            <span className={`text-sm ${language === "english" ? "text-gray-600" : "text-gray-400"}`}>
              English
            </span>
          </label>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-2xl border border-gray-300 bg-white">
        <HoverEffect items={schemesData[language]} />
      </div>
    </div>
  );
}

export default GovernmentSchemesHoverEffect;
