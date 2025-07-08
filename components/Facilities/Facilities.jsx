"use client"

import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaRegFileAlt,
  FaUserTie,
  FaComments,
} from "react-icons/fa";

// animation variants
const entry = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const pulse = {
  animate: {
    scale: [1, 1.15, 1],
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
  },
};

const CAHighlights = () => {
  const items = [
    {
      icon: FaBalanceScale,
      title: "Tax & Compliance",
      text: "Stay compliant with accurate tax filing and advisory support.",
    },
    {
      icon: FaRegFileAlt,
      title: "Financial Reporting",
      text: "Transparent and reliable reports for stakeholders and audits.",
    },
    {
      icon: FaUserTie,
      title: "Expert Consultation",
      text: "Personalized advice from seasoned chartered accountants.",
    },
    {
      icon: FaComments,
      title: "Free Initial Meeting",
      text: "Start with a no‑obligation call to explore solutions.",
    },
  ];

  return (
    <section style={{backgroundImage:"url(/facility.jpg)"}}  className="text-white py-18 px-4 md:px-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={entry}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`text-center ${
              i !== items.length - 1 ? "border-r border-white/25" : ""
            } px-4`}
          >
            {/* icon box */}
            <motion.div variants={pulse} animate="animate" className="flex justify-center mb-4">
              <Icon className="text-3xl  border-2 border-white p-2 rounded w-15 h-15" />
            </motion.div>

            {/* content */}
            <h3 className="font-bold text-sm mb-2">{title}</h3>
            <p className="text-sm text-white/90">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CAHighlights;
