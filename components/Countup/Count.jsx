"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import VanillaTilt from "vanilla-tilt";
import {
  FaUserTie,
  FaFileInvoice,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import statsImage from "@/public/who.jpg";

const stats = [
  {
    icon: <FaUserTie className="text-sky-500 text-4xl mb-2" />,
    label: "Trusted Clients",
    value: 760,
  },
  {
    icon: <FaFileInvoice className="text-sky-500 text-4xl mb-2" />,
    label: "Successful Filings",
    value: 355,
  },
  {
    icon: <FaCheckCircle className="text-sky-500 text-4xl mb-2" />,
    label: "Audits Completed",
    value: 617,
  },
  {
    icon: <FaBuilding className="text-sky-500 text-4xl mb-2" />,
    label: "Entities Registered",
    value: 722,
  },
];

const StatsSection = () => {
  const tiltRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="flex items-center justify-center mb-3">
        <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
        <h4 className="text-sky-600 font-bold uppercase tracking-widest text-lg">
          WHAT ARE WE DOING
        </h4>
        <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* Tilt Image */}
        <div data-aos="fade-right" ref={tiltRef} className="tilt overflow-hidden rounded-xl">
          <Image
            src={statsImage}
            alt="Team Collaboration"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Stats */}
        <div ref={ref} className="space-y-10" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
          <div className="grid grid-cols-2 gap-6 border-l-4 border-sky-500 pl-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                  {stat.icon}
                  <div className="text-3xl font-extrabold text-gray-800">
                    {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
                  </div>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
