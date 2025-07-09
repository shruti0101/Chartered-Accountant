"use client";
import ProcessSteps from "@/components/headcomponent/Process"
import { useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaRegBuilding,
  FaChartPie,
  FaSearch,
  FaLightbulb,
  FaFileContract,
  FaUniversity,
  FaUserShield,
  FaKey,
  FaBuilding,
  FaStore,
  FaHandshake,
  FaClipboardList,
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";
import Types from "@/components/headcomponent/Types";

export default function DtaaAdvisory() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    {
      title: "Double Tax Relief",
      description:
        "Avoid paying taxes twice on the same income earned in India and a treaty partner country.",
    },
    {
      title: "Optimized Tax Liability",
      description:
        "Leverage treaty benefits to reduce tax outgo legally and boost post-tax income.",
    },
    {
      title: "NRI & Foreign Company Support",
      description:
        "Expert DTAA assistance for NRIs, expats, and overseas entities earning income in India.",
    },
    {
      title: "Avoid Legal Disputes",
      description:
        "Accurate treaty interpretation reduces risk of tax notices, litigation, and penalties.",
    },
    {
      title: "Smooth Repatriation",
      description:
        "Ensure compliant remittance of dividends, interest, royalties, and fees abroad.",
    },
    {
      title: "Expert Representation",
      description:
        "From Form 10F to TRC, we assist with all formalities and represent you before tax authorities.",
    },
  ];


  const steps = [
  {
    icon: FaClipboardList,
    subtitle: "Assess DTAA Applicability",
    desc: "Identify if your income is eligible for DTAA relief under the relevant treaty between India and your resident country.",
  },
  {
    icon: FaUserShield,
    subtitle: "Collect Mandatory Documents",
    desc: "Obtain Form 10F, valid Tax Residency Certificate (TRC), PAN, passport, and income proofs.",
  },
  {
    icon: FaSearch,
    subtitle: "Treaty Clause Evaluation",
    desc: "Review DTAA clauses like Article 12 (Royalties) or Article 11 (Interest) to determine applicable TDS rates and conditions.",
  },
  {
    icon: FaFileContract,
    subtitle: "Form 10F & TRC Filing",
    desc: "Prepare and submit Form 10F along with TRC to the deductor or tax authority for reduced TDS benefits.",
  },
  {
    icon: FaLightbulb,
    subtitle: "Income Tax Return Filing",
    desc: "Report foreign income, claim DTAA relief under Section 90/90A, and ensure correct disclosures in ITR.",
  },
  {
    icon: FaChartPie,
    subtitle: "Refund/Relief Monitoring",
    desc: "Track TDS refunds, resolve Form 26AS mismatches, and respond to any IT department queries or notices.",
  },
];


  const documents = [
    {
      icon: FaFileContract,
      title: "Form 10F",
      desc: "Self-declared form for claiming DTAA benefits if Tax Residency Certificate (TRC) lacks certain details.",
    },
    {
      icon: FaUniversity,
      title: "Tax Residency Certificate (TRC)",
      desc: "Issued by the foreign tax authority to confirm residency of the taxpayer.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "PAN & Passport",
      desc: "Indian PAN and a copy of passport are required for verification.",
    },
    {
      icon: FaBuilding,
      title: "Income Source Proof",
      desc: "Agreements, invoices, or payment proofs related to Indian-sourced income.",
    },
    {
      icon: FaRegBuilding,
      title: "Bank Details",
      desc: "Indian bank statements or payment channels for tracking tax credits and repatriation.",
    },
    {
      icon: FaLightbulb,
      title: "Previous Tax Filings",
      desc: "Copies of prior year ITRs and acknowledgment receipts, if applicable.",
    },
  ];

  const faqs = [
    {
      q: "What is DTAA?",
      a: "DTAA (Double Taxation Avoidance Agreement) is a treaty between India and other countries to ensure that income is not taxed twice.",
    },
    {
      q: "Who can claim DTAA benefits?",
      a: "NRIs, foreign companies, and expats earning income in India can claim DTAA benefits by submitting required documentation.",
    },
    {
      q: "What documents are mandatory to claim DTAA benefits?",
      a: "You need to submit Form 10F, a valid Tax Residency Certificate (TRC), and PAN details.",
    },
    {
      q: "Can DTAA reduce TDS on interest or dividends?",
      a: "Yes, applicable TDS can be reduced from 30% to lower rates as per treaty terms on interest, royalty, or dividends.",
    },
    {
      q: "Do you assist in TRC or Form 10F filing?",
      a: "Yes, we assist in preparing and filing Form 10F, coordinating with foreign authorities for TRC, and ensuring compliance.",
    },
  ];

  const heading = "DTAA Advisory Services";

  const filingTypes = [
    {
      icon: <FaBuilding className="text-white text-3xl" />,
      title: "NRI Income Advisory",
      subtitle: "DTAA-based tax computation for NRO interest, rent, or capital gains",
    },
    {
      icon: <FaStore className="text-white text-3xl" />,
      title: "Expat Tax Planning",
      subtitle: "End-to-end compliance for expatriates working in India",
    },
    {
      icon: <FaUniversity className="text-white text-3xl" />,
      title: "Foreign Company Income",
      subtitle: "DTAA guidance for royalty, technical fees, and business profits",
    },
    {
      icon: <FaHandshake className="text-white text-3xl" />,
      title: "Dividend/Interest Repatriation",
      subtitle: "Lower TDS certificates and Form 15CB support",
    },
    {
      icon: <FaKey className="text-white text-3xl" />,
      title: "Treaty Interpretation",
      subtitle: "Country-specific DTAA clause analysis and application",
    },
    {
      icon: <FaChartPie className="text-white text-3xl" />,
      title: "Form 10F/TRC Filings",
      subtitle: "Get all DTAA documentation prepared and submitted",
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
                DTAA Advisory & Tax Relief Assistance
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Avoid double taxation and reduce your Indian tax burden with our expert DTAA guidance. We help NRIs, expats, and foreign businesses claim legitimate treaty benefits.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                <strong>Chintan Agrawal & Co.</strong> ensures hassle-free compliance with Indian DTAA provisions—from documentation to representation.
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
              Why DTAA Compliance Matters
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              India has signed DTAA treaties with over 90 countries to prevent income from being taxed twice. Proper documentation and advisory ensures you benefit from these provisions legally.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Tax Savings:</strong> Reduce effective tax liability through lower treaty TDS rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Legal Support:</strong> Comply with Indian income tax rules and avoid mismatches during assessments.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Faster Refunds:</strong> Claim refunds or avoid excess deductions by submitting DTAA paperwork upfront.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/DTAA.jpg"
              alt="DTAA Advisory illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Types filingTypes={filingTypes} heading={heading} />


  {/* Process */}
      <SectionTitle>Our DTAA Advisory Process</SectionTitle>
      <ProcessSteps steps={steps} />

      <SectionTitle>Benefits of DTAA Advisory</SectionTitle>
      <BenefitsList benefits={benefits} />

      <SectionTitle>Documents Required for DTAA</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}