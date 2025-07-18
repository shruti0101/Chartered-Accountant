"use client";

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

export default function ManagementAudit() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  /* ───────────── Benefits of Management Audit ───────────── */
  const benefits = [
    {
      title: "Avoid Penalties & Notices",
      description:
        "Ensure timely and accurate return filing to avoid late fees, interest, and legal notices from the Income Tax Department.",
    },
    {
      title: "Maximize Refunds",
      description:
        "Claim all eligible deductions, exemptions, and tax credits to maximize your income tax refund.",
    },
    {
      title: "Financial Proof for Loans",
      description:
        "ITR is essential for visa applications, loan approvals, and as income proof for financial transactions.",
    },
    {
      title: "Carry Forward Losses",
      description:
        "Only filed returns allow you to carry forward capital losses to offset future gains.",
    },
    {
      title: "Stay Compliant",
      description:
        "Stay updated with latest sections like 80C, 10(14), 44ADA, and avoid scrutiny or audits.",
    },
    {
      title: "Peace of Mind",
      description:
        "Expert CA review ensures correct filing, error-free data, and worry-free assessments.",
    },
  ];

  /* ───────────── Documents / Data Needed ───────────── */
  const documents = [
    {
      icon: FaFileContract,
      title: "Form 16",
      desc: "Issued by employer for salary income, TDS, allowances, etc.",
    },
    {
      icon: FaUniversity,
      title: "Bank Statements",
      desc: "Annual statement for interest income and transaction proofs.",
    },
    {
      icon: FaMapMarkedAlt,
      title: "PAN & Aadhaar",
      desc: "Mandatory personal identity documents for verification.",
    },
    {
      icon: FaBuilding,
      title: "Investment Proofs",
      desc: "For deductions under 80C, 80D, NPS, home loan interest, etc.",
    },
    {
      icon: FaRegBuilding,
      title: "Rental Income & Property Tax",
      desc: "Rental agreements, municipal receipts, and interest on housing loan.",
    },
    {
      icon: FaLightbulb,
      title: "Capital Gains Details",
      desc: "Sale of property, shares, mutual funds with cost and sale value.",
    },
  ];

  /* ───────────── FAQs ───────────── */
  const faqs = [
    {
      q: "Who is required to file an income tax return?",
      a: "Any individual with income above the basic exemption limit (₹2.5L/₹3L/₹5L based on age) must file an ITR. Even those with lower income should file if TDS is deducted or for loans/visa.",
    },
    {
      q: "What if I miss the due date?",
      a: "You can still file a belated return with late fees under Section 234F. However, you may lose refund eligibility and carry forward of losses.",
    },
    {
      q: "Which ITR form should I use?",
      a: "ITR‑1 is for salaried individuals; ITR‑2 for those with capital gains or multiple properties; ITR‑3 for business/profession; and ITR‑4 for presumptive income (44ADA/44AE).",
    },
    {
      q: "Can I revise my filed return?",
      a: "Yes, a return can be revised within the prescribed time limit (usually 9 months from the end of the assessment year) to correct errors.",
    },
    {
      q: "Do you help with refund follow‑up or tax notices?",
      a: "Absolutely. We track refund status, respond to Section 143(1) mismatches, and draft replies to income tax notices or scrutiny letters.",
    },
  ];

  const heading = "Types of Income Tax Filing";

  const filingTypes = [
    {
      icon: <FaBuilding className="text-white text-3xl" />,
      title: "Salaried Individuals",
      subtitle: "Form 16 based filing with deductions and exemptions",
    },
    {
      icon: <FaStore className="text-white text-3xl" />,
      title: "Business & Freelancers",
      subtitle: "Presumptive income under 44ADA/44AE, GST reconciliation",
    },
    {
      icon: <FaUniversity className="text-white text-3xl" />,
      title: "Capital Gains Filers",
      subtitle: "Real estate, equity, mutual funds with indexation benefits",
    },
    {
      icon: <FaHandshake className="text-white text-3xl" />,
      title: "NRI Tax Filings",
      subtitle: "DTAA, exempt income, India-sourced income, TDS refunds",
    },
    {
      icon: <FaKey className="text-white text-3xl" />,
      title: "Senior Citizens",
      subtitle: "Pension, interest income, Form 15H/15G compliance",
    },
    {
      icon: <FaChartPie className="text-white text-3xl" />,
      title: "HUF & Trusts",
      subtitle: "Family partition, trust compliance and audit filings",
    },
  ];

  /* ───────────── Render ───────────── */
  return (
    <>
      {/* Hero */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[650px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Income Tax Return Filing Made Simple & Reliable
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Ensure compliance, claim refunds, and strengthen your financial
                records with expert-guided ITR filing by{" "}
                <strong>Chintan Agrawal & Co.</strong> — your trusted Chartered
                Accountant partner.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Whether you’re a salaried professional, business owner, NRI, or
                freelancer — our experienced team ensures accurate, timely, and
                stress-free return filing that aligns with your financial goals.
              </p>
            </div>

            {/* Right Form */}
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <Setsapart />

      {/* Why Management Audit */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              What is Income Tax Return (ITR) and Why is it Important?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              An Income Tax Return (ITR) is a formal declaration submitted to
              the Income Tax Department of India, reporting your income,
              deductions, taxes paid, and any refund claimed for a specific
              financial year. It is a legal obligation for eligible individuals
              and entities, and also a smart financial move for long-term
              benefits.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Ensure Legal Compliance:</strong> Filing ITR keeps you
                  compliant with Indian tax laws and avoids penalties.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Claim Tax Refunds:</strong> If excess TDS or advance
                  tax was paid, filing ITR is essential to get refunds.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Build Financial Credibility:</strong> ITR documents
                  are vital for visa applications, loans, and tenders.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Carry Forward Losses:</strong> Filing ITR enables you
                  to carry forward capital or business losses to future years.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Proof of Income:</strong> Serves as official income
                  proof for self-employed professionals and freelancers.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/navservices/itr.webp"
              alt="Income Tax Return Filing"
              className="w-full h-auto object-contain rounded-sm shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#f9f9f9] text-gray-800 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* heading */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a3e72]">
            Eligibility Criteria For Income Tax Returns&nbsp;(ITR) Filing
          </h2>
          <p className="text-center text-lg font-semibold mt-4 mb-10">
            Individuals or companies that fall under the following criteria
            should file IT returns in India:
          </p>

          {/* grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* left – checklist */}
            <ul className="space-y-4 text-base">
              {[
                "Salaried professionals whose gross annual income surpasses the prescribed exemption limit—prior to claiming deductions under Section 80C and Section 80U—are required to file Income Tax Returns (ITR).",

                "Private Limited Companies and Limited Liability Partnerships (LLPs) must file ITRs mandatorily, irrespective of whether they incur a profit or a loss during the financial year.",

                "Individual directors or partners holding positions in private limited companies or limited liability partnerships should file income tax returns onlinePrivate Limited Companies and Limited Liability Partnerships (LLPs) must file ITRs mandatorily.",

                "Individuals serving as directors or partners in private companies or LLPs are obligated to file their income tax returns through the online portal.",

                "Individuals receiving income from multiple investment sources, such as mutual funds, equity shares, fixed deposits, interest income, or bonds, should file their ITRs to ensure accurate financial disclosures.",

                "Non-Resident Indians (NRIs) earning income in India are required to file income tax returns in accordance with their residential status and source of income under Indian tax laws.",
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-orange-600 text-xl ">✔️</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>

            {/* right – image */}
            <div className=" rounded-2xl shadow-lg">
              <img
                src="/navservices/itr2.jpg"
                alt="Income Tax Return Status on laptop"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage / Modules */}
      <Types filingTypes={filingTypes} heading={heading} />

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits Of Income Tax Filing</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}

      <div className="mx-auto max-w-7xl ">
        <h3 className="text-2xl md:text-4xl capitalize font-bold text-center text-blue-900 mb-10 mt-10">
          Process of income tax filing
        </h3>
        <img
          src="/navservices/taxprocess.png"
          alt="DIN Compliance illustration"
          className=" w-full h-auto object-contain rounded-md"
          loading="lazy"
        />
      </div>

      {/* Documents */}
      <SectionTitle>Data & Information We Need</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
