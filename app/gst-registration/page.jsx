'use client'
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import StatsSection from "@/components/headcomponent/StatsSection";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey
} from "react-icons/fa";


export default function gstregistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const types = [
    "Regular GST Registration", "Composition Scheme Registration", "Casual Taxable Person",
    "Non‑Resident Taxable Person", "Input Service Distributor (ISD)",
    "TDS & TCS Registrations", "UN / Embassy & Notified Bodies", "E‑Commerce Operator Registration"
  ];

const benefits = [
  {
    title: "Legal Compliance",
    description:
      "Registering under GST ensures compliance with tax laws, avoiding penalties and legal issues.",
  },
  {
    title: "Input Tax Credit",
    description:
      "Registered businesses can claim input tax credit on GST paid for goods and services used in their business, reducing overall tax liability.",
  },
  {
    title: "Interstate Sales",
    description:
      "GST registration enables businesses to sell goods and services across state borders without restrictions, fostering interstate trade.",
  },
  {
    title: "Market Competitiveness",
    description:
      "Registered businesses gain credibility and trust among customers and suppliers, enhancing their market competitiveness.",
  },
  {
    title: "Access to Government Contracts",
    description:
      "Many government contracts and tenders require GST registration, opening up opportunities for registered businesses.",
  },
  {
    title: "Smooth Business Operations",
    description:
      "GST registration streamlines tax processes, simplifies invoicing, and facilitates easier compliance with tax regulations.",
  },
];

const steps = [
  {
    icon: FaUserShield,
    subtitle: "Free Consultation",
    desc: "Our Chartered Accountants conduct a personalized consultation to understand your business type, turnover, and tax obligations, ensuring GST registration is the right step for your operations.",
  },
  {
    icon: FaFileContract,
    subtitle: "Document Collection",
    desc: "We assist in gathering the required KYC, business, and address proof documents. Our team ensures all paperwork is accurate and compliant with the latest GST norms to avoid delays.",
  },
  {
    icon: FaKey,
    subtitle: "Application Filing",
    desc: "Once documents are verified, we prepare and file your GST application on the official GST portal, assigning appropriate HSN/SAC codes and tax categories based on your business.",
  },
  {
    icon: FaUniversity,
    subtitle: "Verification & Approval",
    desc: "We track your Application Reference Number (ARN) regularly, address any queries raised by GST officers, and expedite approvals through proactive follow-ups and clarifications.",
  },
  {
    icon: FaCheckCircle,
    subtitle: "GSTIN Allotment",
    desc: "Upon successful processing, you receive your 15-digit GST Identification Number (GSTIN) and login credentials. We also provide guidance on post-registration compliance like invoice formats and returns.",
  },
  {
    icon: FaSmile, // You can change this icon to anything relevant
    subtitle: "Post-Registration Support",
    desc: "Our support doesn’t stop at registration. We assist with invoice setup, return filing, compliance reminders, and help you integrate GST practices smoothly into your business workflow.",
  },
];



  const documents = [
    {
      icon: FaIdCard,
      title: "Identity Proof",
      desc: "PAN, Aadhaar, Passport, Voter ID, or Driving Licence of applicant / partners.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Address Proof",
      desc: "Utility bill, rent agreement, or ownership proof for business premises.",
    },
    {
      icon: FaFileContract,
      title: "Business Registration Proof",
      desc: "COI, Partnership Deed, LLP Agreement, MOA / AOA, etc.",
    },
    {
      icon: FaUniversity,
      title: "Bank Account Details",
      desc: "Cancelled cheque, passbook, or latest bank statement.",
    },
    {
      icon: FaUserShield,
      title: "Authorized Signatory Docs",
      desc: "Authorization letter plus ID & address proof of the signatory.",
    },
    {
      icon: FaKey,
      title: "Digital Signature (DSC)",
      desc: "Mandatory Class‑3 DSC token for companies and LLPs.",
    },
  ];

  const faqs = [
    {
      q: "What is GST registration?",
      a: "It is the process of enrolling a business under the Goods & Services Tax Act, after which the business receives a unique GSTIN.",
    },
    {
      q: "Who must register for GST?",
      a: "Any entity whose turnover exceeds the prescribed threshold, or anyone engaged in interstate supply, e‑commerce, or specific notified activities.",
    },
    {
      q: "What benefits do I get once registered?",
      a: "You gain legal compliance, input‑tax credit, smoother interstate trade, improved credibility, and eligibility for certain government projects.",
    },
    {
      q: "What documents are required?",
      a: "Identity & address proofs, business registration proof, bank details, and an authorised signatory’s digital signature.",
    },
    {
      q: "How long does approval take?",
      a: "With complete documentation, GSTIN is usually allotted within 3–7 working days.",
    },
    {
      q: "Can Chintan Agrawal & Co. handle the entire process?",
      a: "Absolutely. From application to follow‑up and notice resolution, we manage it end‑to‑end.",
    },
  ];

  const gstStats = [
  { icon: FaRegBuilding, number: "1,000+", label: "GST Registrations Completed" },
  { icon: FaSmile, number: "2,500+", label: "Businesses Simplified" },
  { icon: FaCheckCircle, number: "100%", label: "On-Time Filing Assurance" },
];


  return (

    <>
    
    <section id="gst-services" className="py-12 md:py-18  ">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
      <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
        <div className=" hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
      </div>
      <div className="container mx-auto ">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold text-[#1C398E] mb-4">
            Simplified GST Registration with Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <strong>Chintan Agrawal & Co.</strong>, we simplify GST compliance so you can focus on business growth.
          </p>
        </div>

        <StatsSection stats ={gstStats}/>






        <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
          <FormSection />
          <TypesList types={types} />
        </div>



<div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20  mb-14">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* LEFT TEXT SIDE */}
    <div>
     <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
  What is GST Registration?
</h2>
<p className="text-gray-700 text-base md:text-lg mb-4">
  <strong>GST Registration</strong> is the process of enrolling your business under the Goods and Services Tax (GST) regime, a unified indirect tax system introduced by the Government of India. It is <strong>mandatory</strong> for businesses whose turnover exceeds the specified threshold or those engaged in interstate supply, e-commerce, or specific notified categories.
</p>

<div>
  <h3 className="text-2xl font-bold text-[#1C398E] mb-4">Key Highlights</h3>
  <ul className="space-y-3 text-gray-700">
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-600 mt-1" />
      <span><strong>Legal Authorization:</strong> Allows businesses to collect GST and issue tax invoices legally.</span>
    </li>
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-600 mt-1" />
      <span><strong>Input Tax Credit (ITC):</strong> Claim credit on GST paid for purchases and reduce tax liability.</span>
    </li>
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-600 mt-1" />
      <span><strong>Nationwide Compliance:</strong> Mandatory for interstate trade, e-commerce operators, and exporters.</span>
    </li>
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-600 mt-1" />
      <span><strong>Enhances Credibility:</strong> Builds trust among clients, vendors, and government bodies.</span>
    </li>
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-600 mt-1" />
      <span><strong>Seamless Tax Structure:</strong> Consolidates various indirect taxes under a single regime.</span>
    </li>
  </ul>

      </div>
    </div>

    {/* RIGHT IMAGE SIDE */}
    <div>
      <img
        src="/navservices/gst.png"
        alt="Gst"
        className="rounded-xl w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>




        <div className="bg-gradient-to-br from-[#eef3fb]  to-[#fdfdff] md:py-12 mt-3 px-4   rounded-xl">
          <SectionTitle>Benefits of Registering under GST</SectionTitle>
          <BenefitsList benefits={benefits} />
        </div>

        <SectionTitle className="">Our GST Registration Process</SectionTitle>
        <ProcessSteps steps={steps} />

        <SectionTitle>Documents Required for GST Registration</SectionTitle>
        <DocumentsRequired documents={documents} />

        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQSection faqs={faqs} open={open} toggle={toggle} />
      </div>
    </section>

    <Cta></Cta>
    </>
  );
}