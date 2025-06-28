"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { useState, useRef } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "../Herosection/Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCalculator, FaHandshake, FaChartLine } from "react-icons/fa";

// Slide data
const slides = [
  {
    image: "/home1.jpg",
    lines: [
      "Empowering You with Smart Accounting, Tax Solutions & Financial Clarity",
      " Tax Filing |  Audit & Assurance |  Business Advisory |  GST Compliance",
    ],
    cta: { label: "Book a Consultation", href: "/contact" },
  },
  {
    image: "/home3.jpg",
    heading: "Reliable Accounting, Tax Planning & Financial Advisory",
    lines: [
      "Chartered Accountants You Can Trust for Clarity & Compliance",
      "Let’s Build Your Financial Confidence",
    ],
    cta: { label: "Contact With Us", href: "/contact" },
  },
  {
    image: "/hero4.jpg",
    heading: "Register Your Corporate Taxes with Confidence",
    lines: ["Trusted by Businesses Across India"],
    cta: { label: "Request Consultation", href: "/contact" },
  },
];


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typewriterWords = [
  {
    text: "Company ",
    className: "text-white  typed mr-1 font-bold",
  },
  {
    text: "Registration ",
    className: "text-white  typed mr-1 font-bold",
  },
  {
    text: "Consultant", 
    className: "text-[#2563EB] typed font-bold", 
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative hero w-full h-[100vh]  overflow-hidden pb-[20px]">
        {/* Arrows */}
        <div
          ref={prevRef}
          className="hidden sm:flex group absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#013B7A] transition"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-black transition" />
        </div>
        <div
          ref={nextRef}
          className="hidden sm:flex group absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#013B7A] transition"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition" />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, EffectFade,  Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full h-[40vh] md:h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full h-full bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 z-0" />
                {activeSlide === idx && (
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative text-white text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl space-y-5"
                  >
                    {/* Blue Lines */}
                    <motion.div
                      variants={item}
                      className="flex flex-col z-100 items-center gap-1 mx-auto"
                    >
                      <div className="w-16 h-1 bg-[#2563EB] z-100" />
                      <div className="w-10 h-1 bg-[#2563EB] z-100" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                      variants={item}
                      className="text-xl z-100 sm:text-3xl md:text-5xl font-bold leading-normal "
                    >
                      {idx === 0 ? (
                        <div className="inline-block z-100 text-[1.6rem] sm:text-4xl md:text-5xl font-bold max-w-[280px] sm:max-w-none mx-auto leading-snug">
                          <TypewriterEffectSmooth
                            words={typewriterWords}
                            className="z-100"
                            cursorClassName="z-100"
                          />
                        </div>
                      ) : (
                        slide.heading
                      )}
                    </motion.h1>

                    {/* Text Lines */}
                    {slide.lines.map((text, i) => (
                      <motion.p
                        key={i}
                        variants={item}
                        className="text-lg hidden md:block sm:text-base font-semibold md:text-lg z-100"
                      >
                        {text}
                      </motion.p>
                    ))}

                    {/* CTA Button */}
                    <motion.div variants={item}>
                      <Link href={slide.cta.href}>
                        <button className="mt-2 z-100 sm:mt-4 bg-[#004AAD] z-100 hover:bg-[#013B7A] transition-colors px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold shadow-md text-sm sm:text-base">
                          {slide.cta.label}
                        </button>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Blue-Themed Cards Section */}
      <div className="">
        <div className="md:absolute z-10  md:bottom-[-200px] mx-auto w-full  px-10 md:px-30" data-aos="flip-up">
          <div className="grid md:grid-cols-3 card-hero">
            {/* Advisory Excellence */}
            <div className="bg-[#1E3A8A] text-white group hover:bg-[#2563EB] transition-all duration-300 p-6 shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaChartLine className="text-[#3B82F6] group-hover:text-white text-2xl" />
                <h3 className="text-xl font-bold">ADVISORY EXCELLENCE</h3>
              </div>
              <div className="border-l-2 border-[#3B82F6] group-hover:border-white transition-all duration-300 pl-4 text-sm">
                <p>
                  We provide strategic financial guidance tailored to your business or personal needs — from tax structuring to investment planning and compliance management.
                </p>
              </div>
            </div>

            {/* Accuracy */}
            <div className="bg-[#1E3A8A] group hover:bg-[#2563EB] transition-all duration-300 text-white p-6 shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaCalculator className="text-[#3B82F6] group-hover:text-white transition-all duration-300 text-3xl" />
                <h3 className="text-xl font-bold">ACCURACY</h3>
              </div>
              <div className="border-l-2 border-[#3B82F6] group-hover:border-white transition-all duration-300 pl-4 text-sm">
                <p>
                  We ensure your financial data is meticulously reviewed and reported, adhering to all regulatory standards. Accuracy is the cornerstone of our practice.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="bg-[#1E3A8A] group hover:bg-[#2563EB] transition-all duration-300 text-white p-6 shadow-md flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FaHandshake className="text-[#3B82F6] group-hover:text-white transition-all duration-300 text-3xl" />
                <h3 className="text-xl font-bold">INTEGRITY</h3>
              </div>
              <div className="border-l-2 border-[#3B82F6] group-hover:border-white transition-all duration-300 pl-4 text-sm">
                <p>
                  We uphold the highest standards of professionalism and ethical conduct in every client interaction, building trust that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
