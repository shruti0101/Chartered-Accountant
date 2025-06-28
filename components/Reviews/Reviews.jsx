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
    name: "Aarav Mehta",
    designation: "Founder, Mehta Tech Solutions",
    review:
      "Partnering with Chintan Agrawal & Associates gave our startup a strong financial foundation. Their proactive approach to taxation and company compliance is invaluable.",
    image: "/clients/aarav.jpg",
  },

     {
    name: "Vikram Desai",
    designation: "Managing Partner, Desai Traders",
    review:
      "Whether it’s audits, income tax scrutiny, or day-to-day compliance, they’re always just a call away. Truly dependable and ethical professionals.",
    image: "/clients/vikram.jpg",
  },

    {
    name: "Tanvi Malhotra",
    designation: "Co-founder, Bliss Organics",
    review:
      "What stood out was their client-first attitude. Chintan and team handled all our ROC, ITR, and GST filings with precision and explained every detail patiently.",
    image: "/clients/tanvi.jpg",
  },

    {
    name: "Rohit Sinha",
    designation: "Director, Nexus Infrastructures",
    review:
      "Excellent experience! Their deep knowledge in company law and financial structuring helped us streamline our processes and avoid penalties.",
    image: "/clients/rohit.jpg",
  },

     {
    name: "Priya Sharma",
    designation: "CFO, GreenLeaf Enterprises",
    review:
      "From GST filings to audit support, Chintan’s team delivers everything on time with clear guidance. They feel more like an in-house finance team than an external firm.",
    image: "/clients/priya.jpg",
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
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Professionals,<br className="hidden sm:block" />
          Appreciated by Clients
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover how our Chartered Accountancy services have empowered
          clients with clarity, compliance, and confidence.
        </p>
      </div>

      {/* running slider */}
      <div className="w-full" data-aos="fade-up">
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
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {reviews.map(({ name, designation, review }, i) => (
            <SwiperSlide
              key={i}
              // Tailwind utility to set a fixed width so Swiper can
              // calculate positions when slidesPerView="auto"
              className="!w-[320px] md:!w-[360px]"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{designation}</p>
                  <p className="text-gray-700 italic mb-6">“{review}”</p>
                </div>
                <div className="flex justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
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
