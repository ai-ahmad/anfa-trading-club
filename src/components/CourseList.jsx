import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Crown, CheckCircle } from "lucide-react";

export default function CourseTypes() { 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({ name: "", surname: "", phone: "" });
  const [isFormValid, setIsFormValid] = useState(false);


  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", surname: "", phone: "" });
    setIsFormValid(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    setIsFormValid(Object.values(newFormData).every((field) => field.trim() !== ""));
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    const message = `📌 Yangi kursga yozilish:\n\n📚 Kurs: ${selectedCourse?.title}\n👤 Ism: ${formData.name}\n👤 Familiya: ${formData.surname}\n📞 Telefon: ${formData.phone}`;
    
    const telegramBotToken = "7806504026:AAF5umPSMZU80OjnHRNI6OCoCUgQYzb4cAw";
    const chatId = "-1002452064331";
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    fetch(url).then(() => closeModal());
  };

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
      title: "Online Wolf",
      type: "Online Course",
      price: "$359",
      originalPrice: "$400",
      icon: Globe,
      features: [
        "Malysian SNR va ANFA SNR ",
        "Shaxsiy strategiya stabil daromad uchun",
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
        "Shaxsiy strategiya stabil daromad uchun"
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
        "Shaxsiy strategiya stabil daromad uchun",
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

        <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                <button
                onClick={() => openModal(course)}
                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg text-center block"
              >
                {course.buttonText}
              </button>
              </div>
            </div>
          ))}
    {isModalOpen && (
        <div className="fixed z-[9999] inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#141B2A] p-6 rounded-lg w-full max-w-md relative">
            <button onClick={closeModal} className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-800">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">{selectedCourse?.title}</h2>
            <input type="text" name="name" placeholder="Ism" className="w-full text-black outline-none p-2 border mb-2 rounded" onChange={handleChange} />
            <input type="text" name="surname" placeholder="Familiya" className="w-full text-black outline-none p-2 border mb-2 rounded" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Telefon" defaultValue={"+998"} className="w-full outline-none text-black p-2 border mb-4 rounded" onChange={handleChange} />
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full p-2 rounded text-white ${isFormValid ? "bg-blue-500 hover:bg-[#10244A]" : "bg-gray-400"}`}
            >
              Tasdiqlash
            </button>
          </div>
        </div>
      )}
        </div>
      </div>
    </motion.section>
  </div>
  );
}
