import React from "react";
import { motion } from "framer-motion";
import { Globe, Crown, CheckCircle } from "lucide-react";

export default function CourseTypes() {
  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const courses = [
    {
      title: "Online Folks",
      type: "Online Course",
      price: "$359",
      originalPrice: "$400",
      icon: Globe,
      features: [
        "Malysian SNR va ANFA SNR ",
        "Avtoriskiy strategya stabil ishlashga",
        "Bozor psihologiyasi",
        "Live trade",
        "Money/Risk management",
        "Discord + Vip 2oy imkoniyati"
      ],
      buttonText: "Kursga Yozilish",
      buttonLink: "https://t.me/ANFAFX1",
    },
    {
      title: "VIP Kanal + Discord",
      type: "VIP Channel",
      price: "750,000",
      originalPrice: "1000,000",
      icon: Crown,
      features: [
        "Kuniga 5-10 ta signal beriladi 100%",
        "Garant 5.000pips - 10.000pips ",
        "Live trade",
        "Avtoriskiy strategya stabil ishlashga"
      ],
      buttonText: "VIP ga Qo'shilish",
      buttonLink: "https://t.me/ANFAFX1",
    },
    {
      title: "Individual",
      type: "Individual Course",
      price: "Kelushuv o'stida",
      icon: Crown,
      features: [
        "Malysian SNR va ANFA SNR ",
        "Avtoriskiy strategya stabil ishlashga",
        "Bozor psihologiyasi",
        "Money/Risk management",
        "Support 24/7",
        "Discord + Vip qoshilish imkoniyati",
        "Live trade",
      ],
      buttonText: "Kursga Yozilish",
      buttonLink: "https://t.me/ANFAFX1",
    },
  ];

  return (
  <div id="CourseTypes">
      <motion.section
      className="py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 w-full flex justify-center"
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600"
          variants={textVariants}
        >
          Bizning Kurslarimiz
        </motion.h2>
        <motion.p
          className="text-center text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 mb-10 max-w-2xl mx-auto"
          variants={textVariants}
        >
          Sizning ehtiyojlaringizga mos kurslarni tanlang!
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <course.icon className="h-5 w-5 text-blue-400" />
                  <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-2 py-1 rounded-full">
                    {course.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="line-through text-gray-500 text-sm">{course.originalPrice}</span>
                  <span className="text-2xl font-bold text-blue-400">{course.price}</span>
                </div>
              </div>

              <div className="p-5 flex-grow border-t border-gray-700">
                <ul className="space-y-2 text-sm">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border-t border-gray-700">
                <motion.a
                  href={course.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg text-center block"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {course.buttonText}
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  </div>
  );
}
