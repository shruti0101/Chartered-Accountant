'use client'
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

export default function StatsSection({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 mb-16">
      {stats.map(({ icon: Icon, number, label }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-white border-t-4 border-[#00A63E] shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-center items-center mb-3">
            <Icon className="text-[#1C398E] w-10 h-10" />
          </div>
          <CountUpText value={number} />
          <p className="text-gray-600 text-sm mt-1">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Optional Count-up animation logic (basic)
function CountUpText({ value }) {
  const [display, setDisplay] = useState("0+");

  useEffect(() => {
    const num = parseInt(value.replace(/\D/g, ""));
    let count = 0;
    const step = Math.ceil(num / 50);
    const interval = setInterval(() => {
      count += step;
      if (count >= num) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(`${count}+`);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return <span className="text-2xl md:text-3xl font-bold text-[#1C398E]">{display}</span>;
}
