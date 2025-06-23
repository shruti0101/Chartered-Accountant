"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaBalanceScale, FaFileInvoiceDollar, FaBuilding, FaFileAlt, FaGlobe, FaRegChartBar, FaBriefcase, FaUsers } from "react-icons/fa";

export function CardHoverGrid() {
  const items = [
   {
  title: "Audit and Assurance Services",
  description: "We help you start your business with legal clarity.",
  icon: <FaBalanceScale className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
},
    {
      title: "Bookkeeping and Accounting Services",
      description: "Professional accounting and ledger management.",
      icon: <FaFileInvoiceDollar className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Business Setup Solutions",
      description: "Ensure compliance and timely tax filing.",
      icon: <FaBuilding className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "GST Related Services",
      description: "Thorough audits to help you stay in control.",
      icon: <FaFileAlt className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Taxation Related Services",
      description: "Smooth GST filing and returns handled for you.",
      icon: <FaRegChartBar className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "ROC Compliance",
      description: "Navigate global tax systems with ease.",
      icon: <FaBriefcase className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "International Taxation",
      description: "Navigate global tax systems with ease.",
      icon: <FaGlobe className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Corporate Consulting",
      description: "Expert advice for sustainable business growth.",
      icon: <FaUsers className="text-3xl text-[#9C7A6B] group-hover:text-white transition-colors duration-300" />
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-6" data-aos="fade-up" data-aos-delay="200">
      <HoverEffect items={items} />
    </div>
  );
}
