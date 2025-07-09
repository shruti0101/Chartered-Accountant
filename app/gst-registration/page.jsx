'use client';

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import StatsSection from "@/components/headcomponent/StatsSection";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";

export default function GstRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const types = [
    "Regular GST Registration", "Composition Scheme Registration", "Casual Taxable Person",
    "Non‑Resident Taxable Person", "Input Service Distributor (ISD)",
    "TDS & TCS Registrations", "UN / Embassy & Notified Bodies", "E‑Commerce Operator Registration"
  ];

const head="Types Of GST Registration"

  const para="jhfyubg"

  const benefits = [
    {
      title: "Legal Compliance",
      description: "Registering under GST ensures compliance with tax laws, avoiding penalties and legal issues.",
    },
    {
      title: "Input Tax Credit",
      description: "Claim input tax credit on GST paid for business use, reducing overall tax liability.",
    },
    {
      title: "Interstate Sales",
      description: "Enables businesses to operate and sell across state borders without restrictions.",
    },
    {
      title: "Market Competitiveness",
      description: "Builds credibility with customers and vendors by being a compliant entity.",
    },
    {
      title: "Access to Government Contracts",
      description: "Many government tenders require GST registration, unlocking new opportunities.",
    },
    {
      title: "Smooth Business Operations",
      description: "Simplifies tax returns, invoicing, and ongoing GST compliance.",
    },
  ];

  const steps = [
    {
      icon: FaUserShield,
      subtitle: "Free Consultation",
      desc: "Our experts guide you on business structure, turnover, and applicable GST rules.",
    },
    {
      icon: FaFileContract,
      subtitle: "Document Collection",
      desc: "We assist with accurate document preparation to avoid GST application rejections.",
    },
    {
      icon: FaKey,
      subtitle: "Application Filing",
      desc: "GST application filed with correct codes and categories on the official GST portal.",
    },
    {
      icon: FaUniversity,
      subtitle: "Verification & Approval",
      desc: "We track ARN, respond to officer queries, and fast-track the approval process.",
    },
    {
      icon: FaCheckCircle,
      subtitle: "GSTIN Allotment",
      desc: "Once approved, you get your GSTIN and access to returns and compliance services.",
    },
    {
      icon: FaSmile,
      subtitle: "Post-Registration Support",
      desc: "We offer help with invoice setup, return filing, and ongoing compliance.",
    },
  ];

  const documents = [
    {
      icon: FaIdCard,
      title: "Identity Proof",
      desc: "PAN, Aadhaar, Passport, Voter ID, or Driving Licence of the applicant/partners.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Address Proof",
      desc: "Utility bill, rent agreement, or ownership document of business premises.",
    },
    {
      icon: FaFileContract,
      title: "Business Registration Proof",
      desc: "COI, Partnership Deed, LLP Agreement, or MOA/AOA.",
    },
    {
      icon: FaUniversity,
      title: "Bank Account Details",
      desc: "Cancelled cheque, passbook, or latest bank statement.",
    },
    {
      icon: FaUserShield,
      title: "Authorized Signatory Documents",
      desc: "Authorization letter plus ID/address proof of the signatory.",
    },
    {
      icon: FaKey,
      title: "Digital Signature (DSC)",
      desc: "Mandatory Class‑3 DSC for companies and LLPs.",
    },
  ];

  const faqs = [
    {
      q: "What is GST registration?",
      a: "It’s the process of enrolling a business under the GST Act to get a unique GSTIN.",
    },
    {
      q: "Who must register for GST?",
      a: "Entities exceeding turnover threshold or those involved in interstate/e-commerce supply.",
    },
    {
      q: "What benefits do I get once registered?",
      a: "Legal compliance, ITC, interstate trade rights, and eligibility for tenders.",
    },
    {
      q: "What documents are required?",
      a: "ID/address proof, registration proof, bank details, and DSC for companies/LLPs.",
    },
    {
      q: "How long does approval take?",
      a: "Typically 3–7 working days if documents are complete and accurate.",
    },
    {
      q: "Can Chintan Agrawal & Co. handle the entire process?",
      a: "Yes, we manage the full application, follow-up, and post-registration support.",
    },
  ];

  const gstStats = [
    { icon: FaRegBuilding, number: "1,000+", label: "GST Registrations Completed" },
    { icon: FaSmile, number: "2,500+", label: "Businesses Simplified" },
    { icon: FaCheckCircle, number: "100%", label: "On-Time Filing Assurance" },
  ];

  return (
    <>
      {/* Hero + Stats Section */}
      <section id="gst-services" className="py-12 md:py-25 ">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left hidden md:block">
          <div className="h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>

        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
              Simplified GST Registration with Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At <strong>Chintan Agrawal & Co.</strong>, we simplify GST compliance so you can focus on business growth.
            </p>
          </div>

          <StatsSection stats={gstStats} />

          <div className="grid lg:grid-cols-2 gap-10  mt-12">
            <FormSection />
            <TypesList types={types} para={para}  head={head}/>
          </div>
        </div>
      </section>

      {/* What is GST Section */}
      <section className="bg-white w-full py-12 px-4 md:px-10 lg:px-20 mb-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              What is GST Registration?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              <strong>GST Registration</strong> is the process of enrolling your business under the unified GST regime. It’s <strong>mandatory</strong> for businesses crossing threshold turnover or involved in interstate/e-commerce trade.
            </p>

            <h3 className="text-2xl font-bold text-[#1C398E] mb-4">Key Highlights</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Legal Authorization:</strong> Issue GST invoices and collect tax lawfully.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Input Tax Credit:</strong> Save tax by claiming input on purchases.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Nationwide Compliance:</strong> Operate across India without restrictions.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Builds Trust:</strong> Boost credibility with clients and authorities.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Simplifies Tax Filing:</strong> Single portal for all indirect tax returns.</span>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="/navservices/gst.png"
              alt="GST registration process"
              className="rounded-xl w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Registering under GST</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
      <SectionTitle>Our GST Registration Process</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Documents */}
      <SectionTitle>Documents Required for GST Registration</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQ */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
