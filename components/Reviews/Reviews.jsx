"use client";
import { FreeMode } from "swiper/modules";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import { AuroraBackground } from "../ui/aurora-background";

const reviews = [
  {
    name: "Prop. Mohit Goyal",
    designation: "Shree International",
    review:
      "Impressive attention to detail, our books have never been cleaner.They caught errors our previous accountant missed.Everything from GST filings to finalization of accounts was handled meticulously.",
  },

  {
    name: "Shubham Bansal",
    designation: " Founder Buntech",
    review:
      "They treat clients like partners, not just accounts.Personalized service feels like they genuinely care about our success. We've been with them for over 5 years trust and consistency.",
  },

  {
    name: "Gautam Jain",
    designation: "Founder I-Printers",
    review:
      "We’ve been working with Chintan Agrawal & Co. for over three years and couldn’t be happier. Their team is professional, responsive, and deeply knowledgeable. They’ve helped us navigate complex tax regulations and provided valuable business advisory services. Highly recommend them .",
  },

  {
    name: "Nitin Jain",
    designation: "Co-Founder Playmate India",
    review:
      "Whether it’s audits, income tax scrutiny, or day-to-day compliance, they’re always just a call away. Truly dependable and ethical professionals.",
  },

  {
    name: "Abhishek Jain",
    designation: "Director Mobius Design Lab Pvt.Ltd",
    review:
      "What stood out was their client-first attitude. Chintan and team handled all our ROC, ITR, and GST filings with precision and explained every detail patiently.",
  },

  {
    name: "Vipin Goyal",
    designation: " Founder Brauch Enterprises     ",
    review:
      "Always delivers reports and filings ahead of deadline. Available during crunch times, even on short notice.They helped us avoid late fees by being proactive with our filings.",
  },

  {
    name: "Gaurav Bansal",
    designation: "Co-Founder WIthinker Partner Shree Balajee Enterprise",
    review:
      "From GST filings to audit support, Chintan’s team delivers everything on time with clear guidance. They feel more like an in-house finance team than an external firm.",
  },

  {
    name: "Naresh Dhamija",
    designation: "DVD Engineering",
    review: "Compliance tasks used to be a nightmare—now they’re effortless .",
  },

   {
    name: "Amit Jain",
    designation: "Neelgiri Hydraulics",
    review: "They spotted recoverable input tax amount that we missed—tax savings we didn’t expect .",
  },

   {
    name: "Kapil Chauhan",
    designation: "Kalingam Technologies private limited",
    review: "As first-time founders, we really appreciated how smooth the incorporation process was. The team guided us at every step .",
  },

   {
    name: "Akshay Aggarwal",
    designation: "Fiscap India Private Limited",
    review: "Excellent support with annual ROC filings. Everything was submitted on time and accurately.",
  },

   {
    name: "Abhishek Jain",
    designation: "Drawzzy India Private Limited",
    review: "The strike-off process for our private limited company was handled smoothly and efficiently by the team",
  },

     {
    name: "Shubham Bansal",
    designation: "Buntech LLC",
    review: "The team made our USA company formation process seamless from start to finish",
  },
];

export default function ClientReviews() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <AuroraBackground className="px-4">
      {/* section heading */}

      {/* intro */}
      <div className="max-w-2xl md:max-w-6xl  mx-auto text-center mb-12">
        <h2 className="text-xl z-1000 md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Professionals,
          <br className="hidden sm:block" />
          Appreciated by Clients
        </h2>
        <p className="text-gray-600 text-sm md:text-lg max-w-xl mx-auto z-1000">
          Discover how our Chartered Accountancy services have empowered clients
          with clarity, compliance, and confidence.
        </p>
      </div>

      {/* running slider */}
      <div className="w-full">
         <Swiper
  modules={[Autoplay, FreeMode]}
  slidesPerView="auto"
  spaceBetween={30}
  loop={true}
  freeMode={{
    enabled: true,
    momentum: false,
  }}
  speed={6000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
>

        {reviews.map(({ name, designation, review }, i) => (
  <SwiperSlide key={i} className="!w-[330px] md:!w-[410px]">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full flex flex-col justify-between text-center min-h-[320px]">
      
      {/* Review Text */}
      <p className="text-gray-700 text-sm md:text-md italic mb-6 leading-relaxed">
        “{review}”
      </p>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-4 text-yellow-400">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} />
        ))}
      </div>

      {/* Name & Designation */}
      <div className="mt-auto">
        <h4 className="text-base md:text-xl mb-4 font-semibold text-gray-800">{name}</h4>
        <p className="text-xs md:text-[18px] text-gray-500">{designation}</p>
      </div>

    </div>
  </SwiperSlide>
))}

        
        </Swiper>
      </div>

      {/* linear timing‑function for smooth marquee feel */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </AuroraBackground>
  );
}
