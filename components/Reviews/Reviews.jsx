'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import { AuroraBackground } from '../ui/aurora-background';

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
    name: "Shubham Bansal",
    designation: "Co-Founder WIthinker Partner Shree Balajee Enterprise",
    review:
      "From GST filings to audit support, Chintan’s team delivers everything on time with clear guidance. They feel more like an in-house finance team than an external firm.",
   
  },
];

export default function ClientReviews() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <AuroraBackground className="px-4">
      {/* section heading */}
      <div className="flex items-center justify-center mb-3">
        <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
        <h4 className="text-sky-600 font-bold uppercase tracking-widest text-lg">
          client reviews
        </h4>
        <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
      </div>

      {/* intro */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Professionals,<br className="hidden sm:block" />
          Appreciated by Clients
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover how our Chartered Accountancy services have empowered
          clients with clarity, compliance, and confidence.
        </p>
      </div>

      {/* running slider */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          freeMode={true}
          freeModeMomentum={false}
          speed={6000}                  // 6 s for a full wrapper lap
          autoplay={{
            delay: 0,                   // no “pause” between slides
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
          }}
        >
          {reviews.map(({ name, designation, review }, i) => (
            <SwiperSlide
              key={i}
          
              className="!w-[330px] md:!w-[410px]"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center h-full flex flex-col justify-between min-h-[320px]">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                  <p className="text-sm  text-gray-500 mb-4">{designation}</p>
                  <p  className="text-gray-800 text-sm  italic mb-6">“{review}”</p>

                     <div className="flex justify-center gap-1 text-yellow-400 ">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
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
