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
    image: "/hero4.jpg",
    heading: "Reliable Accounting, Tax Planning & Financial Advisory",
    lines: [
      "Chartered Accountants You Can Trust for Clarity & Compliance",
      "Let’s Build Your Financial Confidence",
    ],
    cta: { label: "Contact With Us", href: "/contact" },
  },
  {
    image: "/home3.jpg",
    heading: "Register Your Corporate Taxes with Confidence",
    lines: ["Trusted by Businesses Across India"],
    cta: { label: "Request Consultation", href: "/contact" },
  },
];

// Animation variants
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
    text: "Trusted",
    className: "text-white typed mr-1 font-bold",
  },
  {
    text: "Financial",
    className: "text-white typed mr-1 font-bold",
  },
  {
    text: "Expertise",
    className: "text-yellow-400 typed font-bold",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (


<>


<section className="relative hero w-full h-[110vh] overflow-hidden pb-[20px]">

      {/* Arrows only on sm+ screens */}
      <div
        ref={prevRef}
        className="hidden sm:flex group absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#DAA520] transition"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:text-black transition" />
      </div>
      <div
        ref={nextRef}
        className="hidden sm:flex group absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#DAA520] transition"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition" />
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
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
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center relative flex items-center justify-center px-4 sm:px-8"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 z-0" />

              {activeSlide === idx && (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="relative z-10 text-white text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl space-y-5"
                >
                  {/* Golden Lines */}
                  <motion.div
                    variants={item}
                    className="flex flex-col items-center gap-1 mx-auto"
                  >
                    <div className="w-16 h-1 bg-[#DAA520]" />
                    <div className="w-10 h-1 bg-[#DAA520]" />
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    variants={item}
                    className="text-xl sm:text-3xl md:text-5xl font-bold mt-2"
                  >
                    {idx === 0 ? (
                      <div className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        <TypewriterEffectSmooth
                          words={typewriterWords}
                          className="!text-white !leading-snug"
                          cursorClassName="!text-[#DAA520] !text-4xl sm:!text-5xl"
                        />
                      </div>
                    ) : (
                      slide.heading
                    )}
                  </motion.h1>

                  {/* Paragraphs */}
                  {slide.lines.map((text, i) => (
                    <motion.p
                      key={i}
                      variants={item}
                      className="text-sm sm:text-base md:text-lg"
                    >
                      {text}
                    </motion.p>
                  ))}

                  {/* Button */}
                  <motion.div variants={item}>
                    <Link href={slide.cta.href}>
                      <button className="mt-2 sm:mt-4 bg-[#996515] hover:bg-[#8D6E63] transition-colors px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold shadow-md text-sm sm:text-base">
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




{/* Overlapping Card Section */}
<div className="container">

<div className="md:absolute  md:bottom-[-240px]   mx-auto z-20 w-full max-w-screen-xl   px-10 md:px-30" data-aos="flip-up">
  <div className="grid md:grid-cols-3  card-hero ">
    {/* Accuracy */}
    <div className="bg-[#2f2f2f] text-white group hover:bg-[#9C7A6B] transition-all duration-300   p-6 shadow-md flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <FaChartLine className="text-[#B0856C] group-hover:text-white text-2xl" />
        <h3 className="text-xl font-bold">ADVISORY EXCELLENCE</h3>
      </div>
      <div className="border-l-2 border-[#B0856C] group-hover:border-white transition-all duration-300 pl-4 text-sm">
        <p>
          We provide strategic financial guidance tailored to your business or
          personal needs — from tax structuring to investment planning and
          compliance management.
        </p>
      </div>
    </div>

    {/* Integrity */}
  <div className="bg-[#2F2F2F] group hover:bg-[#9C7A6B] transition-all duration-300 text-white p-6 shadow-md flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <FaCalculator className="text-[#B0856C] group-hover:text-white transition-all duration-300 text-3xl" />
          <h3 className="text-xl font-bold">ACCURACY</h3>
        </div>
        <div className="border-l-2 border-[#B0856C] group-hover:border-white transition-all duration-300 pl-4 text-sm">
          <p>
            We ensure your financial data is meticulously reviewed and reported,
            adhering to all regulatory standards. Accuracy is the cornerstone of
            our practice.
          </p>
        </div>
      </div>

    {/* Advisory Excellence */}
  <div className="bg-[#2F2F2F] group hover:bg-[#9C7A6B] transition-all duration-300 text-white p-6  shadow-md flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <FaHandshake className="text-[#B0856C] group-hover:text-white transition-all duration-300 text-3xl" />
          <h3 className="text-xl font-bold">INTEGRITY</h3>
        </div>
        <div className="border-l-2 border-[#B0856C] group-hover:border-white transition-all duration-300 pl-4 text-sm">
          <p>
            We uphold the highest standards of professionalism and ethical
            conduct in every client interaction, building trust that lasts.
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
   