import React, { useState } from "react";
import { FaChartLine, FaShieldAlt, FaGlobe, FaMobileAlt, FaExternalLinkAlt, FaPlayCircle, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const BrokerCards = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const brokers = [
    {
      name: "Libertex",
      image: "https://sjc.microlink.io/6tp5zu7CTy5MjTYdlBQTh9IrbqQ7oiuVD-dIVosb8IkWAmgCFYy7qwPRpA6FjUvE3RvsKkdwdZy4owVWKSkSIA.jpeg",
      description: "Innovatsion broker, ham yangi, ham tajribali treyderlarga qulay platforma taqdim etadi.",
      features: [
        { icon: <FaChartLine />, text: "CFD va Forex savdosi" },
        { icon: <FaShieldAlt />, text: "Salbiy balans himoyasi" },
        { icon: <FaGlobe />, text: "Ko'p aktivli savdo" },
        { icon: <FaMobileAlt />, text: "Mukofotlangan mobil ilova" },
      ],
      bonus: "Libertex Brokerdan ro'yxatdan o'tib 30$ bonus oling!",
      registrationLink: "https://go.libertex-affiliates.com/visit/?bta=64574&nci=21880",
      videoLink: "/libertext.MOV",
    },
    {
      name: "Exness",
      image: "https://media.licdn.com/dms/image/v2/D5612AQGyqKN33EOreg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1731655358155?e=2147483647&v=beta&t=KelReU4YBM9qy7-6Ey0wHlVSyDl4hXdxSCC0JjAi4yI",
      description: "Innovatsion broker, ham yangi, ham tajribali treyderlarga qulay platforma taqdim etadi.",
      features: [
        { icon: <FaChartLine />, text: "CFD va Forex savdosi" },
        { icon: <FaShieldAlt />, text: "Salbiy balans himoyasi" },
        { icon: <FaGlobe />, text: "Ko'p aktivli savdo" },
        { icon: <FaMobileAlt />, text: "Mukofotlangan mobil ilova" },
      ],
      bonus: "Exness Brokerdan ro'yxatdan o'tib 30$ bonus oling!",
      registrationLink: "https://www.exness.com/",
      videoLink: "/IMG_0820.MOV",
    },
    {
      name: "A Markets",
      image: "https://www.amarkets.org/wp-content/uploads/2023/11/Online-broker-AMarkets-black.jpg",
      description: "Innovatsion broker, ham yangi, ham tajribali treyderlarga qulay platforma taqdim etadi.",
      features: [
        { icon: <FaChartLine />, text: "CFD va Forex savdosi" },
        { icon: <FaShieldAlt />, text: "Salbiy balans himoyasi" },
        { icon: <FaGlobe />, text: "Ko'p aktivli savdo" },
        { icon: <FaMobileAlt />, text: "Mukofotlangan mobil ilova" },
      ],
      bonus: "A Markets Brokerdan ro'yxatdan o'tib 30$ bonus oling!",
      registrationLink: "https://info0201.amarkets.marketing/",
      videoLink: "/amarket.mp4",
    },
  ];

  const closeVideo = () => {
    setSelectedVideo(null); // Close the modal
  };

  return (
    <div id="BrokerCards" className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-400 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tavsiya uchun brokerklar
      </motion.h1>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brokers.map((broker, index) => (
          <motion.div
            key={broker.name}
            className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-xl flex flex-col h-[450px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={broker.image}
              alt={`${broker.name} Image`}
              className="w-full h-40 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-blue-500 mb-2">{broker.name}</h2>
                <p className="text-gray-300 text-sm mb-3">{broker.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {broker.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-300 text-xs">
                      <span className="text-blue-500 text-lg">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button onClick={() => setSelectedVideo(broker.videoLink)} className="w-full bg-red-500 text-white font-bold rounded-md py-2 flex items-center justify-center hover:scale-105 transition">
                  Ro'yxatdan o'tish videosi <FaPlayCircle className="ml-2" />
                </button>
                <a
                  href={broker.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 bg-blue-500 text-white font-bold rounded-md py-2 flex items-center justify-center hover:scale-105 transition"
                >
                  Ro'yxatdan o'tish <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-3/4 max-w-2xl">
            <button
              className="absolute top-2  text-white text-2xl right-[-200px]"
              onClick={closeVideo} // Close video modal using the closeVideo function
            >
              <FaTimes />
            </button>
            <video src={selectedVideo} controls className="w-full rounded-lg h-[400px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrokerCards;
