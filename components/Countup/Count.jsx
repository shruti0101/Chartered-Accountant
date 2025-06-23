"use client";

import {
  FaUserTie,
  FaFileInvoice,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% is visible
  });

  return (
    <section
      ref={ref}
      className="relative bg-fixed bg-center  bg-cover bg-no-repeat py-18 md:py-20"
      style={{
        backgroundImage: "url('/counterbg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8  text-center">
        {/* Trusted Clients */}

        <div className="md:border-l-4 border-[#9C7A6B] pl-4 mb-4"data-aos="fade-down"
            data-aos-duration="1000">
          <div
            className="space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaUserTie className="text-4xl text-[#B0856C] mx-auto" />
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={760} duration={2} /> : 0}+
            </h3>
            <p className="font-semibold uppercase">Trusted Clients</p>
          </div>
        </div>

        {/* Successful Filings */}

        <div className="md:border-l-4 border-[#9C7A6B] pl-4 mb-4"data-aos="fade-down"
            data-aos-duration="1000">
          <div
            className="space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaFileInvoice className="text-4xl text-[#B0856C] mx-auto" />
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={355} duration={2} /> : 0}+
            </h3>
            <p className="font-semibold uppercase">Successful Filings</p>
          </div>
        </div>

        <div className="md:border-l-4 border-[#9C7A6B] pl-4 mb-4"data-aos="fade-down"
            data-aos-duration="1000">
          {/* Audits Completed */}
          <div
            className="space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaCheckCircle className="text-4xl text-[#B0856C] mx-auto" />
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={617} duration={2} /> : 0}+
            </h3>
            <p className="font-semibold uppercase">Audits Completed</p>
          </div>
        </div>

        <div className="md:border-l-4 border-[#9C7A6B] pl-4 mb-4"  data-aos="fade-down"
            data-aos-duration="1000">
          {/* Entities Registered */}
          <div
            className="space-y-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <FaBuilding className="text-4xl text-[#B0856C] mx-auto" />
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp end={722} duration={2} /> : 0}+
            </h3>
            <p className="font-semibold uppercase">Entities Registered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
