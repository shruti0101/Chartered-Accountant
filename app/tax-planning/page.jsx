"use client";

import { useState } from "react";
import {
  FaCheckCircle, FaFileContract, FaLock,
  FaIdCard, FaChartLine, FaUserShield, FaBriefcase, FaPiggyBank,
  FaUniversity, FaHandHoldingUsd, FaRegBuilding, FaBalanceScale,
  FaBook, FaUserTie
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";
import Types from "@/components/headcomponent/Types";

export default function TaxPlanningServices() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  /* ------------------------------------------------------------------ */
  /* BENEFITS                                                           */
  /* ------------------------------------------------------------------ */
const benefits = [
  {
    title: "Reduce Tax Liability",
    description: "Identify and leverage all applicable exemptions, deductions (like 80C, 80D, HRA), and rebates to legally reduce the amount of income tax you owe—whether you're a salaried individual, professional, or business owner."
  },
  {
    title: "Optimize Investments",
    description: "Align your tax-saving instruments—such as ELSS, PPF, NPS, health insurance, and home loan benefits—with your financial goals to maximize both tax efficiency and long-term wealth creation."
  },
  {
    title: "Avoid Last-Minute Panic",
    description: "By planning your taxes throughout the year, you eliminate the stress of rushed decisions, reduce errors in declarations, and avoid missed deductions or penalties at the end of the financial year."
  },
  {
    title: "Better Cash Flow",
    description: "Tax planning helps you forecast your obligations and time your investments wisely, ensuring smoother cash flow management and preventing year-end financial crunches or liquidity issues."
  },
  {
    title: "Compliance Confidence",
    description: "Our CA-led team ensures that your tax strategy is 100% aligned with current Indian tax laws, helping you stay audit-ready and legally compliant without worrying about notices or penalties."
  },
  {
    title: "Holistic Financial View",
    description: "Gain a comprehensive understanding of your financial standing—track income, deductions, investments, and liabilities in one place to make more informed tax-saving and budgeting decisions."
  }
];


  /* ------------------------------------------------------------------ */
  /* PROCESS STEPS                                                      */
  /* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* PROCESS STEPS                                                      */
/* ------------------------------------------------------------------ */
const steps = [
  { icon: FaUserShield,   subtitle: "Client Profiling",            desc: "Understand your income, business structure, and life goals." },
  { icon: FaFileContract, subtitle: "Review & Gap Analysis",       desc: "Evaluate current tax declarations, past filings, and plans." },
  { icon: FaChartLine,    subtitle: "Strategy Formulation",        desc: "Create a tax‑saving roadmap tailored to your profile." },
  { icon: FaCheckCircle,  subtitle: "Implementation Support",      desc: "Assist in executing investment & declaration plans." },
  { icon: FaLock,         subtitle: "Ongoing Monitoring",          desc: "Adjust strategies as income or laws evolve throughout the year." },
  { icon: FaBriefcase,    subtitle: " Post‑Assessment Support", desc: "File your ITR accurately and handle any follow‑up queries or notices from the tax department." },
];


  /* ------------------------------------------------------------------ */
  /* DOCUMENTS                                                          */
  /* ------------------------------------------------------------------ */
  const documents = [
    { icon: FaIdCard, title: "PAN & Aadhaar", desc: "Identity documents to link and verify your tax profile." },
    { icon: FaUniversity, title: "Income Proofs", desc: "Salary slips, business income, interest/dividend reports." },
    { icon: FaFileContract, title: "Investment Details", desc: "LIC, ELSS, PPF, NPS, and any 80C/80D savings." },
    { icon: FaPiggyBank, title: "Bank Statements", desc: "Last 6 months for cross-verification of income & savings." },
    { icon: FaHandHoldingUsd, title: "Home Loan/ Rent Info", desc: "Loan certificate or HRA rental receipts." },
    { icon: FaBalanceScale, title: "Previous ITRs", desc: "Last 2 years’ returns for assessment history." },
  ];

  /* ------------------------------------------------------------------ */
  /* FAQs                                                               */
  /* ------------------------------------------------------------------ */
  const faqs = [
    {
      q: "What is tax planning?",
      a: "Tax planning is the process of legally reducing your tax liability by analyzing your financial situation and using allowable exemptions, deductions, and benefits under tax laws."
    },
    {
      q: "Is tax planning legal?",
      a: "Yes. Strategic tax planning within the framework of the Income Tax Act is completely legal and encouraged. It differs from tax evasion, which is illegal."
    },
    {
      q: "Can tax planning help businesses too?",
      a: "Absolutely. From choosing the right business structure to optimizing expenses and claims, we help businesses minimize their effective tax rate."
    },
    {
      q: "When should I start tax planning?",
      a: "Ideally at the beginning of the financial year. Early planning allows better use of deductions and reduces year-end stress."
    },
    {
      q: "Do you provide investment advice too?",
      a: "Yes, our CA and financial consultants guide you on tax-saving instruments that also align with your wealth creation goals."
    },
  ];

  /* ------------------------------------------------------------------ */
  /* TYPES                                                              */
  /* ------------------------------------------------------------------ */
  const heading = "Types of Tax Planning We Offer";

  const filingTypes = [
    { icon: <FaUserTie className="text-white text-3xl" />, title: "Personal Tax Planning", subtitle: "Tailored strategies for salaried individuals & families." },
    { icon: <FaBriefcase className="text-white text-3xl" />, title: "Corporate Tax Planning", subtitle: "Restructure income, expenses & depreciation smartly." },
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Capital Gains Planning", subtitle: "Reduce taxes on property, shares & other assets." },
    { icon: <FaBook className="text-white text-3xl" />, title: "Presumptive Tax Planning", subtitle: "Save under 44AD/ADA for small businesses and freelancers." },
    { icon: <FaUniversity className="text-white text-3xl" />, title: "HNI & Trust Advisory", subtitle: "Advanced structuring for high-net-worth clients & institutions." },
    { icon: <FaHandHoldingUsd className="text-white text-3xl" />, title: "NRI Tax Planning", subtitle: "DTAA, residential status, global income compliance." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[675px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Strategic Tax Planning & Advisory Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Minimize tax liability, ensure full legal compliance, and unlock investment efficiency with
                <strong> Chintan Agrawal & Co.</strong>—your trusted advisor for proactive tax planning.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Whether you're an individual, business owner, or HNI—we help structure your finances to save tax lawfully while aligning with your long-term financial goals.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <Setsapart />

      {/* Why Plan With Us */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Choose Chintan Agrawal & Co.?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Tax planning is not just about saving money—it's about smart financial structuring that creates long-term value. Our CA-led team ensures every exemption, deduction, and rebate is optimally utilized.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong className="text-lg">Personalized Planning:</strong> Tailored tax strategies for individuals, families, and businesses.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong className="text-lg">100% Legal & Compliant:</strong> Every plan adheres strictly to the Income Tax Act, 1961.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong className="text-lg">Year-Round Support:</strong> Not just once-a-year advice—we guide you throughout the year.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/tax-planning.png"
              alt="Tax Planning Professionals"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Types of Tax Planning */}
      <Types filingTypes={filingTypes} heading={heading} />

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 mt-4 px-4 rounded-xl">
        <SectionTitle>Benefits of Strategic Tax Planning</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
      <SectionTitle>Our Tax Planning Process</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Required Documents */}
      <SectionTitle>What Documents Are Needed?</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
