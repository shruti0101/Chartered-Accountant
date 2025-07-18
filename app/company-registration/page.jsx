



'use client';

import { useState } from 'react';
import Hero from "@/components/headcomponent/Hero/Hero";
import SectionTitle from "@/components/headcomponent/Sectiontitle";

import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
 import {
  FaCheckCircle,

  FaSmile,
  FaIdCard,
  FaMapMarkedAlt,  FaFileContract,
  FaUniversity,
  FaUserShield,
  FaKey,
} from "react-icons/fa";


export default function CompanyRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

const types = [
  { name: "Private Limited Company", href: "/private-limited-company" },
  { name: "One Person Company (OPC)", href: "/one-person-company" },
  { name: "Limited Liability Partnership (LLP)", href: "/limited-liability-partnership" },
  { name: "Partnership Firm", href: "/partnership-firm" },
  { name: "Sole Proprietorship ", href: "/sole-proprietorship" },
  { name: "Section 8 Company (NGO)", href: "/section-8-company" },
 
];
  
  const head = "Types Of Company Registration";
const para =
  "Explore the different types of company registrations available in India. Click on each to learn about legal requirements, tax benefits, ideal use cases, and step-by-step registration process.";



const benefits = [
  {
    title: "Legal Entity Recognition",
    description:
      "Company registration gives your business a separate legal identity, distinct from its owners. This means your company can own property, open bank accounts, enter into contracts, and be held legally responsible—independently of the shareholders.",
  },
  {
    title: "Limited Liability",
    description:
      "Shareholders’ personal assets are protected in case the company faces legal issues or financial losses. Your liability is limited only to the amount invested in the business, safeguarding your home, savings, and other personal assets.",
  },
  {
    title: "Access to Funding",
    description:
      "Registered companies are more eligible to raise equity capital from venture capitalists, angel investors, and financial institutions. It also improves your chances of securing business loans and grants from government schemes and banks.",
  },
  {
    title: "Credibility & Trust",
    description:
      "A registered business enhances your brand image and builds trust with customers, vendors, and potential investors. It demonstrates legitimacy and professionalism, making it easier to establish long-term business relationships.",
  },
  {
    title: "Tax Advantages",
    description:
      "Registered companies can benefit from various government schemes, tax deductions, and startup exemptions like under the Startup India program. Proper registration allows access to structured tax planning and better compliance.",
  },
  {
    title: "Perpetual Succession",
    description:
      "A company continues to exist even if the ownership, shareholders, or directors change. This ensures business continuity and long-term growth without being disrupted by personal circumstances of its members.",
  },
];


  const steps = [
    {
      icon: FaUserShield,
      subtitle: "Initial Consultation",
      desc: "We assess your structure, goals, compliance needs …",
    },
    {
      icon: FaFileContract,
      subtitle: "Document Preparation",
      desc: "We collect and verify ID proofs …",
    },
    {
      icon: FaKey,
      subtitle: "Application Filing",
      desc: "We file the incorporation docs with MCA …",
    },
    {
      icon: FaUniversity,
      subtitle: "Certificate of Incorporation",
      desc: "You receive the COI once approved …",
    },
    {
      icon: FaCheckCircle,
      subtitle: "Post‑Incorporation Support",
      desc: "Bank account, GST, MSME, etc.",
    },
    {
      icon: FaSmile,
      subtitle: "Compliance Advisory",
      desc: "Annual compliance, ROC filings …",
    },
  ];

   const documents = [
    {
      icon: FaIdCard,
      title: "Identity Proof",
      desc: "PAN card of all directors / partners.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Address Proof",
      desc: "Aadhaar / passport / utility bill (≤ 2 months).",
    },
    {
      icon: FaFileContract,
      title: "Business Address Proof",
      desc: "Electricity bill, rent agreement, property‑tax receipt.",
    },
    {
      icon: FaUniversity,
      title: "Photographs",
      desc: "Passport‑size photos of all directors / partners.",
    },
    {
      icon: FaUserShield,
      title: "Digital Signature (DSC)",
      desc: "For e‑form signing during incorporation.",
    },
    {
      icon: FaKey,
      title: "No‑Objection Certificate",
      desc: "From owner if using rented office space.",
    },
  ];

const title = "Company Registration Services for Every Business Type";

const description = "Register your company seamlessly with Chintan Agrawal & Co.—your trusted partner for legal, tax, and compliance support. Our team of experienced professionals ensures a hassle-free process from documentation to final approval. Whether you're a startup, LLP, or private limited company, we offer tailored guidance, complete transparency, and timely execution so you can focus on growing your business while we take care of the formalities.";

 const faqs = [
  {
    q: "What types of companies can I register?",
    a: "You can register various business structures in India such as Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), Partnership Firm, Sole Proprietorship, Section 8 Company (Non-Profit/NGO), Nidhi Company, and Producer Company. Each has its own legal, tax, and operational benefits depending on your goals.",
  },
  {
    q: "What is the minimum requirement to register a company?",
    a: "You need at least one director/shareholder, a registered office address in India, and valid identity/address proof (PAN, Aadhaar, passport, utility bill, etc.). For Private Limited or LLPs, two members are usually recommended for smoother functioning.",
  },
  {
    q: "How long does the registration process take?",
    a: "Typically, it takes 5–10 working days after submitting complete and accurate documentation. The duration may vary depending on government approval timelines, name availability, and compliance formalities.",
  },
  {
    q: "Is GST registration required after company incorporation?",
    a: "Yes, GST registration is mandatory if your business crosses the turnover threshold (₹40 lakh for goods, ₹20 lakh for services), or if you engage in interstate supply, sell online through eCommerce platforms, or fall under mandatory GST categories like exporters/importers.",
  },
  {
    q: "Why should I choose Chintan Agrawal & Co. for company registration?",
    a: "We offer expert legal filing, accurate documentation, personalized guidance, and end-to-end support — from name approval to PAN, TAN, GST, and post-registration compliance. With our transparent process, timely updates, and industry expertise, you can register your company stress-free.",
  },
];
  // Company Registration Services for Every Business Type

  
  return (
    <>
      {/* Hero Section */}
    <Hero title={title} description={description}></Hero>
    

      {/* Recognition Info */}
 <div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
  <div className="grid md:grid-cols-2 md:gap-10 items-center">
    <div>
      <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
       Private Limited, LLP & Startup Company Registration Services in India
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        Whether you're launching a <strong>startup</strong>, forming a <strong>private limited company</strong>, or establishing a <strong>LLP</strong>, our expert team ensures a smooth registration process with complete legal compliance. Recognized startups get access to <strong>tax benefits</strong>, <strong>funding</strong>, and simplified compliance norms.
      </p>
      <ul className="space-y-3 text-gray-700">
     
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Funding Access:</strong> Get listed and connect with SEBI-registered venture capitalists and angel investors across India.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Startup India Hub:</strong> Join a central platform to discover government schemes, networking opportunities, and mentorship support tailored to your business.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Dedicated Expert Assistance:</strong> Our team helps with name approval, DIN, PAN, TAN, MOA, AOA, and every legal document.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Fast Turnaround:</strong> Get your company registered within a few working days with full transparency.</span>
        </li>
      </ul>
    </div>
    <div>
      <img
        src="/navservices/company_reg.png"
        alt="company registration India"
        className="w-full mt-3 h-auto object-cover rounded-lg "
        loading="lazy"
      />
    </div>
  </div>
</div>



      {/* Types */}
<section className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

           {/* Right Side – Image */}
        <div className="w-full">
          <img
            src="/navservices/Types-of-business.png"
            alt="Types of Company Registration"
            className="w-full h-auto object-contain rounded-md"
            loading="lazy"
          />
        </div>
        {/* Left Side – Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
            {head}
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-5">
            {para}
          </p>

          <div className="space-y-5">
            {types.map((type, index) => (
              <Link
                key={index}
                href={type.href}
                className="group flex items-center justify-between text-[#1C398E] font-medium text-lg hover:underline transition-all duration-200"
              >
                <span>{type.name}</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  

      <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Company Registration in India </SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

      <SectionTitle>Process for Company Registration</SectionTitle>
      <ProcessSteps steps={steps} />

        <div>
      <img
        src="/navservices/company.png"
        alt="company registration India"
        className="mx-auto h-auto object-contain "
        loading="lazy"
      />
    </div>

      <SectionTitle>Documents Required for Company Registration</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
