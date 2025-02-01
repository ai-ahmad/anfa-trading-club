"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Users, TrendingUp, CheckCircle, User } from 'lucide-react';

const TradingCourseBanner: React.FC = () => {
  const InfoCard: React.FC<{ title: string; children: React.ReactNode; delay: number; icon: React.ReactNode }> = ({
    title,
    children,
    delay,
    icon,
  }) => {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white  bg-opacity-10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h2>
        <div className="text-gray-100 text-sm md:text-base">{children}</div>
      </motion.div>
    );
  };

  const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <li className="flex items-start mb-2">
        <CheckCircle className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" />
        <span>{children}</span>
      </li>
    );
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.bankrate.com/2023/01/09131814/GettyImages-1370827731.jpeg?auto=webp&optimize=high&crop=16:9"
          alt="Trading background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-gray-900/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4 flex items-center justify-center">
            <TrendingUp className="mr-4" />
            <span>Professional Trading Kursimiz</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto flex items-center justify-center">
            <span>Online va offline formatda professional treydingni o'rganing va moliyaviy erkinlikka erishing.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <InfoCard  title="Kurs haqida" delay={0.2} icon={<Book className="w-6 h-6" />}>
            <ul className="space-y-2">
              <ListItem>Professional treydingni o'rganing</ListItem>
              <ListItem>Tajribali mentorlardan bilim oling</ListItem>
              <ListItem>Online va offline formatda o'qing</ListItem>
              <ListItem>Amaliy tajribaga ega bo'ling</ListItem>
            </ul>
          </InfoCard>
          <InfoCard title="Mentorlar" delay={0.4} icon={<Users className="w-6 h-6" />}>
            <ul className="space-y-2">
              <li className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <User className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Davron Ummataliyev</span>
              </li>
              <li className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <User className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Gulomxojayev Kamron</span>
              </li>
              <li className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                <User className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-red">Alisher Mikhliev</span>
              </li>

            </ul>
          </InfoCard>
          <InfoCard title="Strategiyalar" delay={0.6} icon={<TrendingUp className="w-6 h-6" />}>
            <p className="text-base md:text-lg flex items-center">
              <span>Professional Snr & ICT metodologiyalari asosida savdo qilishni o'rganing.</span>
            </p>
          </InfoCard>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center"
        >
       <a href="https://t.me/ANFAFX1" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg flex items-center">
    <Book className="mr-2" />
    <span>Kursga yozilish</span>
</a>

        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default TradingCourseBanner;
