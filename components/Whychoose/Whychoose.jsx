"use client";
import React from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaUserTie,
  FaFileAlt,
} from "react-icons/fa";
import Image from "next/image";
import statueImage from "@/public/whychoose.png";
import whychoosebg from "@/public/whychoosebg.jpg";

const features = [
  {
    title: "Affordable Services",
    text: "We offer cost-effective CA solutions without compromising quality.",
    icon: FaFileAlt,
  },
  {
    title: "Compliance Ensured",
    text: "Stay worry-free with our complete compliance and legal accuracy.",
    icon: FaBalanceScale,
  },
  {
    title: "Simplified Process",
    text: "We streamline your accounting and tax processes for maximum efficiency.",
    icon: FaGavel,
  },
  {
    title: "On-Time Delivery",
    text: "Be assured of timely filings, reports, and expert service every time.",
    icon: FaUserTie,
  },
  {
    title: "Instant Response",
    text: "Quick support and proactive guidance—anytime you need it.",
    icon: FaFileAlt,
  },
  {
    title: "Industry Experts",
    text: "Our experienced team brings deep knowledge of multiple sectors.",
    icon: FaBalanceScale,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-20 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${whychoosebg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Title */}
      <div className="relative z-10 text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Our all-in-one platform and dedicated team of experts will guide you every step of the way, ensuring your business starts right and takes off in record time.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 max-w-7xl mx-auto px-4 gap-6 items-center">
        {/* Left 3 Cards */}
        <div className="flex flex-col gap-6 col-span-2">
          {features.slice(0, 3).map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>

        {/* Center Statue */}
        <div className="hidden md:flex justify-center col-span-1">
          <Image
            src={statueImage}
            alt="Statue"
            className="h-[440px] w-auto object-contain z-20"
          />
        </div>

        {/* Right 3 Cards */}
        <div className="flex flex-col gap-6 col-span-2">
          {features.slice(3).map((item, idx) => (
            <FeatureCard key={idx + 3} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, text, icon: Icon }) => (
  <div className="relative flex items-center gap-6 border border-white/30 bg-white/5 backdrop-blur-sm p-6 group hover:shadow-lg transition duration-300 h-full">
    {/* Vertical Line Behind Icon */}
    <div className="relative flex items-center justify-center h-full">
      <div className="absolute h-full w-[2px] bg-[#F9B87F] left-1/2 -translate-x-1/2 z-0" />
      <div className="relative z-10 bg-[#F9B87F] p-4 rounded-sm text-black transition-all duration-300 group-hover:bg-[#AB7949] group-hover:text-white">
        <Icon size={28} />
      </div>
    </div>

    {/* Text Content */}
    <div>
      <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-[#F9B87F]">
        {title}
      </h3>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  </div>
);

export default WhyChooseUs;
