'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Stats grid with card slide‑up + count‑up animation.
 *
 * Props:
 *   stats – array of { icon: Icon, number: '2,500+', label: 'Filings' }
 */
export default function StatsSection({ stats = [] }) {
  /* IntersectionObserver on the whole grid */
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
                 max-w-4xl mx-auto px-4 mb-16"
    >
      {stats.map(({ icon: Icon, number, label }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="bg-white border-t-4 border-[#00A63E] shadow-md
                     rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-center items-center mb-3">
            <Icon className="text-[#1C398E] w-10 h-10" />
          </div>
          {/* number */}
          <CountUpText value={number} run={inView} />
          <p className="text-gray-600 text-sm mt-1">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Count‑up helper ---------------- */
function CountUpText({ value = '0+', run }) {
  const [display, setDisplay] = useState('0+');

  useEffect(() => {
    if (!run) return;               // wait until grid is in view
    const target = parseInt(value.replace(/\D/g, ''), 10);
    let current = 0;
    const step = Math.ceil(target / 50);

    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setDisplay(value);
        clearInterval(id);
      } else {
        setDisplay(`${current.toLocaleString()}+`);
      }
    }, 20);

    return () => clearInterval(id);
  }, [run, value]);

  return (
    <span
      suppressHydrationWarning
      className="text-2xl md:text-3xl font-bold text-[#1C398E]"
    >
      {display}
    </span>
  );
}
