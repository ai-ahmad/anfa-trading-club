import React from "react"
import { FaInstagram, FaTelegram, FaYoutube, FaTiktok, FaChartLine } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://www.instagram.com/anfa.tc/", label: "Instagram" },
    { icon: <FaTelegram />, href: "https://t.me/anfatc", label: "Telegram" },
  
 
  ]

  const quickLinks = ["Home", "Courses", "About Us", "Contact"]

  return (
    <footer className="bg-[#111827] text-white  py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center mb-4">
              <FaChartLine className="text-white text-3xl mr-2" />
              <h3 className="text-2xl font-bold">TradingCourses</h3>
            </div>
            <p className="text-white">Learn to trade like a pro with our expert-led courses.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b border-white pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={link} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 border-b border-white pb-2">Contact Us</h4>

            <p className="text-white mb-4"><a href="tel:994959500">Phone: +998 99 495 95 00</a></p>
            <p className="text-white mb-4"><a href="tel:990027144">Phone: +998 99 002 71 44</a></p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-white text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {currentYear} TradingCourses. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

