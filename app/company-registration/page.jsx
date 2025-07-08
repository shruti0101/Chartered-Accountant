'use client';
import {  useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey
} from "react-icons/fa";



import { useState } from 'react';
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";

// Simple fallback for suspense
const Loading = () => <div className="text-center py-6 text-gray-500 animate-pulse">Loading...</div>;

export default function gstregistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const types = [
    "Private Limited Company", "One Person Company (OPC)", "Limited Liability Partnership (LLP)",
    "Partnership Firm", "Sole Proprietorship Registration", "Nidhi Company Registration",
    "Section 8 Company (NGO)", "Producer Company"
  ];

  const benefits = [
    {
      title: "Legal Entity Recognition",
      description: "Company registration gives your business a separate legal identity...",
    },
    {
      title: "Limited Liability",
      description: "The personal assets of the shareholders or partners are protected...",
    },
    {
      title: "Access to Funding",
      description: "Registered companies can raise equity capital from investors...",
    },
    {
      title: "Credibility & Trust",
      description: "A registered business enhances your reputation and credibility...",
    },
    {
      title: "Tax Advantages",
      description: "Registered companies can avail tax exemptions, deductions...",
    },
    {
      title: "Perpetual Succession",
      description: "A company continues to exist even if its ownership changes...",
    },
  ];

  const steps = [
    {
      icon: FaUserShield,
      subtitle: "Initial Consultation",
      desc: "We assess your business structure, goals, and compliance needs...",
    },
    {
      icon: FaFileContract,
      subtitle: "Document Preparation",
      desc: "Our team collects and verifies identity proofs...",
    },
    {
      icon: FaKey,
      subtitle: "Application Filing",
      desc: "We file the incorporation documents with MCA...",
    },
    {
      icon: FaUniversity,
      subtitle: "Certificate of Incorporation",
      desc: "Once approved, you’ll receive the Certificate of Incorporation...",
    },
    {
      icon: FaCheckCircle,
      subtitle: "Post-Incorporation Support",
      desc: "We assist in opening bank account, GST, MSME, etc.",
    },
    {
      icon: FaSmile,
      subtitle: "Compliance Advisory",
      desc: "Our support includes annual compliance, ROC filings...",
    },
  ];

  const documents = [
    {
      icon: FaIdCard,
      title: "Identity Proof",
      desc: "PAN card of all directors or partners.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Address Proof",
      desc: "Aadhaar/passport/utility bill (not older than 2 months).",
    },
    {
      icon: FaFileContract,
      title: "Business Address Proof",
      desc: "Electricity bill, rent agreement, or property tax receipt.",
    },
    {
      icon: FaUniversity,
      title: "Photographs",
      desc: "Passport-size photos of all directors/partners.",
    },
    {
      icon: FaUserShield,
      title: "Digital Signature Certificate (DSC)",
      desc: "For e-form signing during incorporation.",
    },
    {
      icon: FaKey,
      title: "No Objection Certificate (NOC)",
      desc: "From owner if using rented office space.",
    },
  ];

  const companyStats = [
    { icon: FaRegBuilding, number: "1,500+", label: "Companies Registered" },
    { icon: FaSmile, number: "3,000+", label: "Entrepreneurs Empowered" },
    { icon: FaCheckCircle, number: "100%", label: "Govt. Approval Success" },
  ];

  const faqs = [
    { q: "What types of companies can I register?", a: "Private Ltd, OPC, LLP, Partnership, Section 8..." },
    { q: "Minimum requirement to register?", a: "1 director/shareholder, Indian address, ID proof." },
    { q: "How long does it take?", a: "Typically 5–10 working days." },
    { q: "Is GST required after incorporation?", a: "Yes, if turnover exceeds limit or for interstate trade." },
    { q: "Why choose Chintan Agrawal & Co.?", a: "We offer expert filing, advisory, and full support." },
  ];

  return (
    <>
      <section id="company-registration" className="py-12 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
          <div className="hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>

        <div className="container mx-auto p-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4 max-w-6xl mx-auto">
              Company Registration Services for Every Business Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Register your company seamlessly with <strong>Chintan Agrawal & Co.</strong>—your trusted partner for legal, tax, and compliance support.
            </p>
          </div>

            <StatsSection stats={companyStats} />
         

          <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
           
              <FormSection />
     
          
              <TypesList types={types} />
      
          </div>

            <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 mt-3 px-4 rounded-xl">
              <SectionTitle>Benefits of Company Registration</SectionTitle>
              <BenefitsList benefits={benefits} />
            </div>

            <SectionTitle>Our Company Registration Process</SectionTitle>
            <ProcessSteps steps={steps} />
    

          <div className="overflow-hidden max-w-5xl mx-auto my-10">
            <img
              src="/navservices/company.png"
              alt="Company Registration"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

        
            <SectionTitle>Documents Required for Company Registration</SectionTitle>
            <DocumentsRequired documents={documents} />

            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQSection faqs={faqs} open={open} toggle={toggle} />
     
        </div>
      </section>

    
        <Cta />
   
    </>
  );
}
