"use client";
import { FaCalculator, FaHandshake, FaChartLine } from "react-icons/fa";
import {
  CheckCircleIcon,
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
  StarIcon,
  HandThumbUpIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Cta from "@/components/Cta/Cta";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";


import {
  FaBuilding,
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaGlobeEurope,
  FaBookOpen,
  FaPercentage,
  FaShieldAlt,
} from "react-icons/fa";


const services = [
  {
    title: "Business Setup Solutions",
    icon: FaBuilding,
    blurb:
      "End-to-end support for structuring, registering, and launching your business smoothly.",
  },
  {
    title: "GST Related Services",
    icon: FaFileInvoiceDollar,
    blurb:
      "Complete GST registration, filing, reconciliation, and compliance management.",
  },
  {
    title: "ROC Compliances",
    icon: FaBalanceScale,
    blurb:
      "On-time ROC filings and MCA compliance to keep your business legally sound.",
  },
  {
    title: "International Taxation",
    icon: FaGlobeEurope,
    blurb:
      "Global tax planning and DTAA benefits to support international expansion.",
  },
  {
    title: "Book keeping & Accounting",
    icon: FaBookOpen,
    blurb:
      "Clean, timely book keeping and accounting for compliance and growth planning.",
  },
  {
    title: "Taxation Related Services",
    icon: FaPercentage,
    blurb:
      "Smart tax strategies and complete compliance to maximize your tax benefits.",
  },
 {
  title: "Audit & Assurance",
  icon: FaShieldAlt,
  blurb:
    "Reliable audits, internal controls, and assurance services to strengthen transparency, meet statutory requirements, and build stakeholder confidence.",
}

];


export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="relative   bg-gradient-to-br from-blue-50/70 via-white to-white overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute -z-10 inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none select-none">
          <div className="absolute -top-20 -left-16 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-full blur-[140px]" />
        </div>

        {/*────────── HEADING BLOCK WITH BG IMAGE ──────────*/}
        <div
          className="relative  overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/process.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/10" />

          {/* White card */}
          <div
            data-aos="fade-right"
            className="relative max-w-3xl rounded-sm   bg-white shadow-xl   py-5 sm:px-12 sm:py-14 lg:px-16 lg:py-5   md:ml-16 mt-16 mb-12 text-left z-10 border-l-8 border-[#00C950]"
          >
            <h2 className="text-2xl px-4 md:px-0 sm:text-4xl font-extrabold text-gray-800 leading-snug mb-0 md:mb-2">
              Empowering Global <br /> Financial Confidence
            </h2>
            <p className="md:text-lg text-sm p-4 md:p-0 text-gray-600 leading-relaxed">
              At <strong>Chintan Agrawal & Co.,</strong> we go beyond
              traditional accounting — empowering businesses with strategic
              insights, regulatory clarity, and long-term financial vision.{" "}
              <br /> <strong>Founded by CA Chintan Agrawal,</strong> Our
              multidisciplinary team partners with startups, SMEs, and
              enterprises across industries like real estate, manufacturing,
              retail, e‑commerce, and services. From entity formation to global
              tax strategy, we’re committed to building lasting success through
              proactive, tech-enabled, and client-centric solutions.
            </p>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 data-aos="fade-right" className="text-2xl font-bold text-blue-800 mb-4">
                Our Mission
              </h3>
              <p data-aos="fade-right"
               
                className="text-gray-700 leading-relaxed"
              >
                To empower businesses and individuals with expert financial guidance that goes beyond numbers. We strive to ensure compliance, drive profitability, and promote sustainable growth through ethical practices and a client‑first approach. By combining deep industry knowledge with innovative thinking, we deliver actionable insights that help our clients make confident financial decisions — today and into the future.
              </p>

              <h3 data-aos="fade-right" className="text-2xl font-bold text-blue-800 mt-10 mb-4">
                Our Vision
              </h3>
              <p data-aos="fade-right"
              
                className="text-gray-700 leading-relaxed"
              >
                To be India’s most trusted, insightful, and tech‑enabled accounting partner — not just for compliance, but as a strategic ally in every stage of business growth. We envision a future where financial clarity fuels ambition, where every client — from emerging startups to established enterprises — has access to the tools, expertise, and foresight they need to thrive in a rapidly changing economy.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div
              data-aos="fade-up"
              className="relative bg-white/90 backdrop-blur-lg ring-1 ring-gray-200 rounded-3xl p-10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                <StarIcon className="w-6 h-6 text-[#00C950]" /> What Sets Us
                Apart
              </h3>
              <ul className="space-y-4">
                {[
                  "Full‑Spectrum Expertise: GST, ROC, International Taxation — all in‑house",
                  "Transparent Processes: jargon‑free communication & predictable outcomes",
                  "Result‑Driven Mindset: every recommendation anchored in ROI & risk reduction",
                  "Rock‑Solid Ethics: confidentiality and integrity at the core of our culture",
                  "Cloud‑Powered Delivery: real‑time dashboards & paperless workflows",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-1 mr-3 shrink-0" />
                    <span className="text-gray-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* ✅ Centered Section Heading */}
  <div className="text-center max-w-3xl mx-auto mt-20" data-aos="fade-down">
   <div className="flex items-center justify-center mb-3">
          <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
          <h4 className="text-sky-600 font-bold uppercase tracking-widest text-lg">
       Our Company
          </h4>
          <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>
    
    <p className="text-gray-700 text-lg leading-relaxed">
    
      Our mission is to empower businesses and individuals with clarity,
      compliance, and confidence.
    </p>
  </div>

  {/* ✅ Section Content: WHY CHOOSE US */}
  <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div data-aos="fade-right">
      <p className="text-gray-700 text-lg leading-relaxed mb-3">
        At Chintan Agrawal & Co., we are a team of highly skilled and dedicated
        Chartered Accountants committed to providing exceptional financial
        solutions to individuals and businesses. With years of experience in the
        industry, we’ve earned a reputation for delivering reliable and
        trustworthy services 
      </p>

      <h3 className="text-2xl font-bold text-green-700 mb-4">
        WHY CHOOSE US 
      </h3>
    

      <ul className="space-y-4 text-gray-700">
        <li>
          <span className="font-semibold text-blue-900">
            Professional Excellence:
          </span>{" "}
          Our team consists of qualified Chartered Accountants with deep
          knowledge of accounting principles and a focus on delivering
          high-quality service.
        </li>
        <li>
          <span className="font-semibold text-blue-900">
            Personalized Approach:
          </span>{" "}
          We take the time to understand our clients’ specific needs and tailor
          services accordingly.
        </li>
        <li>
          <span className="font-semibold text-blue-900">
            Proactive Communication:
          </span>{" "}
          Open and transparent communication to ensure timely financial advice
          and client confidence.
        </li>
        <li>
          <span className="font-semibold text-blue-900">
            Client Satisfaction:
          </span>{" "}
          We aim to build long-term relationships based on trust, satisfaction,
          and exceptional service.
        </li>
      </ul>
    </div>

    {/* Image Side */}
    <div data-aos="fade-left" className="relative w-full max-w-md mx-auto lg:mx-0">
      <img
        src="/about.png"
        alt="Chintan Agrawal CA"
        width={600}
        height={600}
        className="rounded-xl object-cover"
      />
    </div>
  </div>
</div>



   <div className="mb-10 mt-14">
        <h2 className="font-bold text-4xl text-center text-blue-900 mb-5">Our Values</h2>
        <div className=" mx-auto max-w-5xl " data-aos="flip-up">
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

    {/* core services */}
<div className="mt-12 md:mt-18 mb-10">
  <h2
    data-aos="zoom-up"
    className="text-3xl md:text-5xl font-bold text-blue-800 text-center mb-4"
  >
    Our Core Services
  </h2>

  {/* ✅ Added description lines here */}
  <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-10">
    We offer a wide range of services tailored to your business needs. <br />
    Our team ensures excellence, compliance, and client satisfaction at every step.
  </p>

  <div className="flex flex-col-reverse lg:flex-row items-start gap-7">
    {/* Cards Section */}
    <div className="grid card-grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl flex-1">
      {services.map(({ title, icon: Icon, blurb }, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          key={idx}
          className="group relative p-4 transition bg-white rounded-xl "
        >
          <div className="flex items-start gap-3 mb-3">
            <Icon className="w-8 h-8 text-green-700 bg-[#DBFCE7] p-1 rounded-sm" />
            <h4 className="text-lg font-semibold text-blue-900">{title}</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{blurb}</p>
        </motion.div>
      ))}
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-[40%] flex justify-center items-center">
      <img
        src="/blind1.png"
        alt="Service Illustration"
        className="max-w-full h-auto object-contain mt-10"
      />
    </div>
  </div>
</div>





        </div>
      </section>
      <Cta></Cta>
    
    </>
  );
}
