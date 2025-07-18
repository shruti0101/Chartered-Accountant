"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaRegBuilding,
  FaChartPie,
  FaLightbulb,
  FaFileContract,
  FaUniversity,
  
  FaKey,
  FaBuilding,
  FaStore,
  FaHandshake,
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";
import Types from "@/components/headcomponent/Types";

export default function NriTaxFilingPage() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    { title: "Expert NRI Tax Compliance", description: "End-to-end tax filing for rental income, NRO deposits, capital gains, and Indian business interests." },
    { title: "DTAA Advantage", description: "Lower TDS and relief from double taxation through proper treaty application and documentation." },
    { title: "Global Income Assistance", description: "Guidance on disclosing foreign income/assets as per Indian laws (Schedule FA / Schedule TR)." },
    { title: "Faster Refunds", description: "Track refunds, minimize mismatches, and respond to IT notices efficiently." },
    { title: "Digital & Remote Filing", description: "No physical presence needed—file from anywhere in the world via email and secure portals." },
    { title: "Trusted Representation", description: "We liaise with the IT department for scrutiny, refund delays, and compliance notices." },
  ];

  const documents = [
    { icon: FaFileContract, title: "Form 16A or Interest Certificates", desc: "For NRO fixed deposits, savings accounts, etc." },
    { icon: FaUniversity, title: "Property Rent Agreements", desc: "Rental income proof for Indian properties." },
    { icon: FaMapMarkedAlt, title: "Passport & Visa Pages", desc: "Proof of foreign stay to determine residential status." },
    { icon: FaKey, title: "PAN & Aadhaar", desc: "Mandatory for filing ITR. Aadhaar not required for non-residents." },
    { icon: FaLightbulb, title: "DTAA Proof (TRC/Form 10F)", desc: "If seeking DTAA relief, submit documents from the foreign country." },
    { icon: FaRegBuilding, title: "Bank Statements", desc: "NRO/NRE account statements for income and TDS tracking." },
  ];

  const faqs = [
    {
      q: "Do NRIs need to file ITR in India?",
      a: "NRIs must file if their Indian income exceeds ₹2.5 lakh, or if TDS is deducted and refund is to be claimed.",
    },
    {
      q: "Is global income taxable in India for NRIs?",
      a: "No. Only Indian-sourced income is taxable for NRIs. But foreign assets must be disclosed in certain cases.",
    },
    {
      q: "Can NRIs claim DTAA relief?",
      a: "Yes. NRIs can claim reduced TDS under DTAA by submitting Form 10F, TRC, and PAN.",
    },
    {
      q: "Can you file without Aadhaar?",
      a: "Yes. Aadhaar is not mandatory for non-residents, but PAN is required.",
    },
    {
      q: "What if I miss the deadline?",
      a: "You can file a belated return with penalties. However, DTAA relief may not be allowed in some cases if delayed.",
    },
  ];

  const heading = "NRI Income Tax Filing Services";

  const filingTypes = [
    {
      icon:  <FaBuilding className="text-3xl text-white" />,
      title: "NRO Income Filing",
      subtitle: "ITR filing for interest, rent, capital gains earned in India.",
    },
    {
      icon: <FaStore className="text-white text-3xl"/>,
      title: "DTAA-Based Filings",
      subtitle: "Tax treaty benefit application and reduced TDS.",
    },
    {
      icon: <FaUniversity className="text-white text-3xl"/>,
      title: "Repatriation Support",
      subtitle: "Help with documentation for fund repatriation abroad.",
    },
    {
      icon: <FaHandshake className="text-white text-3xl"/>,
      title: "Capital Gains Reporting",
      subtitle: "Property, shares or MF sale disclosure with indexation.",
    },
    {
      icon: <FaKey className="text-white text-3xl"/>,
      title: "Schedule FA/TR Assistance",
      subtitle: "Support with global asset and tax disclosures.",
    },
    {
      icon: <FaChartPie className="text-white text-3xl"/>,
      title: "Refund Claim Services",
      subtitle: "Claim excess TDS paid on Indian income.",
    },
  ];

  return (
    <>
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[650px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                NRI Income Tax Filing – Simple, Compliant & Remote
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                From NRO interest to property sale – get your Indian tax returns filed smoothly while abroad. <strong>Chintan Agrawal & Co.</strong> ensures complete NRI tax filing support with DTAA guidance.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Hassle-free documentation, Form 26AS reconciliation, and refund tracking handled by qualified Chartered Accountants.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />

      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why NRIs Must File Indian ITR
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              If you earn any income in India — interest, rent, capital gains, or business — filing ITR is mandatory once you cross the exemption limit. It also helps claim refunds and maintain compliance.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Refund Claims:</strong> Get back excess TDS deducted on Indian earnings.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Compliance:</strong> Avoid notices, penalties and stay compliant with DTAA rules.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Investment Proof:</strong> Maintain valid ITR for future property sales, loans, or visa needs.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/itr.webp"
              alt="NRI Tax Filing Illustration"
              className="w-full h-auto object-contain rounded-sm shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Types filingTypes={filingTypes} heading={heading} />
      
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Why Choose Us for NRI ITR Filing</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      

      <SectionTitle>Documents Required</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
