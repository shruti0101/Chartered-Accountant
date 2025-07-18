"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "../Herosection/Hero.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/hero4.jpg",
    heading: "Register Your Corporate Taxes with Confidence",
    lines: ["Trusted by Businesses Across India"],
    description:
      "From GST registration to corporate filings, we simplify tax processes so you can focus on scaling your business.",
    cta: { label: "Request Consultation", href: "/contact-us" },
  },
  {
    image: "/home1.jpg",
    lines: [
      "Empowering You with Smart Accounting, Tax Solutions & Financial Clarity",
      " Tax Filing |  Audit & Assurance |  Business Advisory |  GST Compliance",
    ],
    description:
      "We provide a comprehensive range of financial and tax services tailored for individuals, businesses, and corporations.",
    cta: { label: "Book a Consultation", href: "/contact-us" },
  },
  {
    image: "/home3.jpg",
    heading: "Reliable Accounting, Tax Planning & Financial Advisory",
    lines: ["Chartered Accountants You Can Trust for Clarity & Compliance"],
    description:
      "Our expert team ensures timely compliance, strategic tax planning, and proactive advisory for sustainable business growth.",
    cta: { label: "Contact With Us", href: "/contact-us" },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typewriterWords = [
  { text: "Trusted ", className: "text-white typed mr-1 font-bold" },
  { text: "Financial ", className: "text-white typed mr-1 font-bold" },
  { text: "Expertise", className: "text-[#2563EB] typed font-bold" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="relative hero w-full h-[110vh] overflow-hidden">
        {/* Arrows */}
        <div
          ref={prevRef}
          className="hidden md:flex group absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#013B7A] transition"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-black transition" />
        </div>
        <div
          ref={nextRef}
          className="hidden md:flex group absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-[#013B7A] transition"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition" />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
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
                    {/* Blue Bars */}
                    <motion.div
                      variants={item}
                      className="flex flex-col z-100 items-center gap-1 mx-auto"
                    >
                      <div className="w-16 h-1 bg-[#2563EB]" />
                      <div className="w-10 h-1 bg-[#2563EB]" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                      variants={item}
                      className="text-xl sm:text-3xl md:text-5xl font-bold leading-normal"
                    >
                      {idx === 1 ? (
                        <div className="inline-block z-100 text-[1.9rem] sm:text-5xl md:text-5xl font-bold max-w-[320px] sm:max-w-none mx-auto leading-snug">
                          <div className="hidden md:inline-block">
                            <TypewriterEffectSmooth
                              words={typewriterWords}
                              className="z-100"
                              cursorClassName="inline-block"
                            />
                          </div>
                          <div className="md:hidden text-white text-[1.7rem] font-bold">
                            Trusted Financial Expertise
                          </div>
                        </div>
                      ) : (
                        slide.heading
                      )}
                    </motion.h1>

                    {/* Lines */}
                    {slide.lines.map((line, i) => (
                      <motion.p
                        key={i}
                        variants={item}
                        className="text-md hidden md:block sm:text-base font-normal md:text-lg"
                      >
                        {line}
                      </motion.p>
                    ))}

                    {/* Description */}
                    {slide.description && (
                      <motion.p
                        variants={item}
                        className="text-sm sm:text-base md:text-lg font-normal text-muted px-2 sm:px-4 md:px-6 max-w-3xl mx-auto"
                      >
                        {slide.description}
                      </motion.p>
                    )}

                    {/* CTA */}
                    <motion.div variants={item}>
                      <Link href={slide.cta.href}>
                        <button className="mt-2 sm:mt-4 bg-[#004AAD] hover:bg-[#013B7A] transition-colors px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold shadow-md text-sm sm:text-base">
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
    </>
  );
}
