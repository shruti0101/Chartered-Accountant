"use client";

import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  FileCheck,
  ThumbsUp,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";


const features = [
  {
    title: "Trust & Compliance",
    description:
      "We ensure 100% legal accuracy, transparency, and adherence to all government norms. From income tax to GST and ROC filings, every process is handled with integrity and accountability to keep your business fully compliant.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Delivery",
    description:
      "Filing deadlines and reports delivered ahead of time — always. Our proactive reminder systems and streamlined workflows ensure you never miss important financial deadlines or face unnecessary penalties.",
    icon: Clock,
  },
  {
    title: "Verified Expertise",
    description:
      "Our Chartered Accountants bring decades of trusted experience. Backed by deep domain knowledge, we offer tailored solutions for startups, MSMEs, and enterprises across multiple sectors, ensuring optimal financial planning.",
    icon: CheckCircle2,
  },
  {
    title: "End-to-End Support",
    description:
      "From GST to ROC, we handle every compliance need seamlessly. Whether it's registration, return filing, tax audits, or MCA compliance, our experts manage it all — so you can focus on growing your business.",
    icon: FileCheck,
  },
  {
    title: "Client Satisfaction",
    description:
      "Over 95% client retention through our client-first approach. We prioritize open communication, personalized service, and quick turnaround times to build lasting relationships with individuals and businesses alike.",
    icon: ThumbsUp,
  },
  {
    title: "Dedicated Advisors",
    description:
      "Your personal CA advisor is just a call away for real-time guidance. Get one-on-one expert consultation for financial decisions, investments, or complex tax planning whenever you need it.",
    icon: UserCheck,
  },
];


const WhyChooseUs = () => {
  return (
    <section className=" mb-8 relative py-17 bg-gradient-to-br from-blue-50 via-white to-blue-100">




      {/* Section Heading */}
      <div className="text-center mb-14 px-4">
        <div className="flex items-center justify-center mb-3">
          <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
          <h4 className="text-sky-600 font-bold uppercase tracking-[0.15em] text-sm sm:text-base">
            Why Choose Us
          </h4>
          <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Trusted CA Services, Simplified
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Our team of Chartered Accountants simplifies your financial journey with expert guidance, legal compliance, and timely delivery.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-start max-w-7xl mx-auto px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-6 bg-white/60 backdrop-blur-sm border border-blue-200 shadow-lg rounded-2xl group transition-all duration-300 hover:shadow-xl"
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-green-100 text-sky-600 mb-4 transition-transform duration-300 group-hover:rotate-6 mx-auto md:mx-0">
              <item.icon size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-sky-600">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
