"use client";
import React from "react";
import { CardHoverGrid } from "@/components/CardHoverGrid"; // adjust path if needed

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center max-w-xl mx-auto">
        {/* Subheading with lines */}
        <div className="flex items-center justify-center mb-3" data-aos="fade-up">
          <div className="w-12 h-px bg-[#9C7A6B] mr-3"></div>
          <h4 className="text-[#9C7A6B] font-bold uppercase tracking-widest text-lg">
            What We Do
          </h4>
          <div className="w-12 h-px bg-[#9C7A6B] ml-3"></div>
        </div>

        {/* Main heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#2C2C2C] uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Services
        </h2>
      </div>

      {/* Card Hover Grid */}
      <CardHoverGrid />
    </section>
  );
};

export default Services;
