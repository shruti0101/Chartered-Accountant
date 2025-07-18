"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaIdCard,
  FaMapMarkedAlt,
  FaFileContract,
  FaUniversity,
  FaUserShield,
  FaKey,
  FaLaptopCode,
  FaCertificate,
  FaBuilding,
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import Hero from "@/components/headcomponent/Hero/Hero";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";


export default function LLPFormation() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    {
      title: "Limited Liability Protection",
      description: "Partners' personal assets are protected from business debts and liabilities.",
    },
    {
      title: "Separate Legal Entity",
      description: "An LLP has its own legal identity, separate from its partners.",
    },
    {
      title: "No Minimum Capital Requirement",
      description: "Start your LLP with any amount of capital—no fixed minimum required.",
    },
    {
      title: "Low Compliance Burden",
      description: "Compared to private limited companies, LLPs have fewer mandatory filings.",
    },
    {
      title: "Easy Transferability",
      description: "Ownership and profit sharing can be transferred easily with mutual agreement.",
    },
    {
      title: "Ideal for Professional Services",
      description: "Perfect for CA, CS, lawyers, architects, and other service professionals.",
    },
  ];

  const steps = [
    {
      icon: FaIdCard,
      subtitle: "Obtain DSC & DIN",
      desc: "Apply for Digital Signature and Director Identification Number for partners.",
    },
    {
      icon: FaFileContract,
      subtitle: "Name Reservation",
      desc: "Reserve your desired LLP name via the RUN-LLP form on MCA portal.",
    },
    {
      icon: FaLaptopCode,
      subtitle: "LLP Incorporation Filing",
      desc: "Submit the FiLLiP form with documents and partner details.",
    },
    {
      icon: FaCertificate,
      subtitle: "Receive Incorporation Certificate",
      desc: "Get your Certificate of Incorporation with LLPIN.",
    },
    {
      icon: FaBuilding,
      subtitle: "LLP Agreement Filing",
      desc: "Draft and file LLP Agreement within 30 days of incorporation.",
    },
    {
      icon: FaCheckCircle,
      subtitle: "Begin Business Operations",
      desc: "You’re now ready to open a bank account and start your LLP.",
    },
  ];

const documents = [
  { icon: FaIdCard, title: "PAN Card", desc: "Mandatory for all Indian partners." },
  { icon: FaMapMarkedAlt, title: "Address Proof", desc: "Aadhaar, passport, voter ID, or driving license." },
  { icon: FaUserShield, title: "Photograph", desc: "Recent passport-sized photos of all partners." },
  { icon: FaUniversity, title: "Registered Office Proof", desc: "Utility bill, rent agreement, or NOC from owner." },
  { icon: FaKey, title: "Digital Signature (DSC)", desc: "Mandatory for at least two designated partners." },
  { icon: FaFileContract, title: "Consent to Act as Partner", desc: "Signed consent form from all designated partners." },
];

const title=" Start Your Limited Liability Partnership (LLP) in India"
const description="LLP is a flexible business structure offering the benefits of a private company with the simplicity of a partnership. It protects your personal assets while providing operational freedom. Our experts handle everything from name reservation to MCA registration and post-incorporation compliance—fast, accurate, and affordable.";

  const faqs = [
    { q: "Who can register an LLP?", a: "Any two or more individuals or corporate entities can form an LLP in India." },
    { q: "What is the minimum capital required?", a: "There is no minimum capital requirement to start an LLP." },
    { q: "Is physical presence needed?", a: "No, the entire LLP registration process is online." },
    { q: "Is LLP suitable for small businesses?", a: "Yes, LLP is ideal for startups, consultants, and professionals seeking limited liability." },
    { q: "Do LLPs require annual filing?", a: "Yes, LLPs must file annual returns and statements of accounts every year with the MCA." },
  ];


           
  return (
    <>
      {/* Hero Section */}
    <Hero title={title} description={description} />

  

      {/* Why LLP Section */}
<section className="bg-white  md:py-12 px-4 md:px-10 lg:px-20">
  <div className="grid md:grid-cols-2 md:gap-10 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl mt-7 font-extrabold text-[#1C398E] mb-4">
        Why Choose LLP for Your Business?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        A Limited Liability Partnership (LLP) is one of the most preferred forms of business in India for startups,
        consultants, and professionals. It combines the advantages of a private limited company with the simplicity of a traditional partnership.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <strong>Low Compliance Requirements:</strong> LLPs face fewer regulatory burdens compared to companies.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <strong>Flexible Structure:</strong> Ideal for professionals and service-oriented businesses.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <strong>Limited Liability Protection:</strong> Partners are not personally liable for business debts.
          </span>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="/navservices/llp.webp"
        alt="LLP registration process in India"
        className="w-full h-auto object-contain rounded-md"
        loading="lazy"
      />
    </div>
  </div>
</section>


   

      {/* Process Section */}
      <SectionTitle>LLP Formation Process</SectionTitle>
      <ProcessSteps steps={steps} />



     <section className="bg-[#f9f9f9] text-gray-800 px-4 py-12">
  <div className="mx-auto max-w-6xl">
    {/* heading */}
    <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a3e72]">
      Key Advantages of Forming a Limited Liability Partnership (LLP) 
    </h2>
    <p className="text-center max-w-xl mx-auto text-lg font-semibold mt-4 ">
      LLPs combine the benefits of both partnership firms and private limited companies — making them ideal for professionals, startups, and service-based businesses.
    </p>

    {/* grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* left – checklist */}
      <ul className="space-y-4 text-base">
        {[
          "Limited Liability Protection ensures partners are not personally liable for business debts or legal claims beyond their capital contribution.",
          "No minimum capital requirement makes LLP formation accessible and budget-friendly for small businesses and service providers.",
          "Separate legal identity allows the LLP to own property, enter contracts, and operate independently from its partners.",
          "Easy compliance and fewer formalities compared to Private Limited Companies reduce the annual regulatory burden.",
          "Flexible internal structure enables partners to define their roles, profit-sharing ratio, and responsibilities in the LLP agreement.",
          "No restrictions on the number of partners (minimum 2), allowing scalability as your business grows.",
        ].map((item) => (
          <li key={item} className="flex items-start space-x-3">
            <span className="text-green-600 text-xl">✔️</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      {/* right – image */}
      <div className="">
        <img
          src="/navservices/llp2.webp"
          alt="LLP Registration Advantages"
          className="max-w-md h-auto object-contain "
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>



      {/* Documents Section */}
      <SectionTitle>Documents Required for LLP Formation</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}













