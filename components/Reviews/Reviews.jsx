'use client'

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Aarav Mehta",
    designation: "Founder, Mehta Tech Solutions",
    review:
      "Chintan Agrawal & Associates has transformed the way we handle taxation and compliance. Their professionalism and clarity are unmatched.",
    image: "/clients/aarav.jpg",
  },
  {
    name: "Priya Sharma",
    designation: "CFO, GreenLeaf Enterprises",
    review:
      "We’ve worked with many CA firms, but the attention to detail and genuine support from Chintan Agrawal & Associates truly stand out.",
    image: "/clients/priya.jpg",
  },
  {
    name: "Rahul Verma",
    designation: "Director, Verma & Co. Traders",
    review:
      "Their timely advice and expert handling of our GST and ROC filings have been a game changer for our operations.",
    image: "/clients/rahul.jpg",
  },

   {
    name: "Rahul Verma",
    designation: "Director, Verma & Co. Traders",
    review:
      "Their timely advice and expert handling of our GST and ROC filings have been a game changer for our operations.",
    image: "/clients/rahul.jpg",
  },


   {
    name: "Rahul Verma",
    designation: "Director, Verma & Co. Traders",
    review:
      "Their timely advice and expert handling of our GST and ROC filings have been a game changer for our operations.",
    image: "/clients/rahul.jpg",
  },

   {
    name: "Rahul Verma",
    designation: "Director, Verma & Co. Traders",
    review:
      "Their timely advice and expert handling of our GST and ROC filings have been a game changer for our operations.",
    image: "/clients/rahul.jpg",
  },
];

export default function ClientReviews() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br  from-white to-blue-50 py-10 px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
          <h4 className="text-sky-600 font-bold uppercase tracking-widest text-lg">
        client reviews
          </h4>
          <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
       
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Professionals,<br className="hidden sm:block" /> Appreciated by Clients
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover how our Chartered Accountancy services have empowered clients with clarity,
          compliance, and confidence.
        </p>
      </div>

      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          loop={true}
        //   pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 border border-gray-100 text-center max-w-xl mx-auto">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-sky-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.designation}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">“{review.review}”</p>
                <div className="flex justify-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
