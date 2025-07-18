'use client';

import { useState } from 'react';
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import ProcessSteps from "@/components/headcomponent/Process";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Hero from "@/components/headcomponent/Hero/Hero";

import {
  FaCheckCircle, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
} from "react-icons/fa";

export default function SoleProprietorshipRegistration() {
  // FAQ accordion control
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  // Tab control for benefits section
  const [activeTab, setActiveTab] = useState(0);

  /* ------------------------------ BENEFIT TABS ----------------------------- */
const tabs = [
  {
    title: "Complete Control",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Full Decision‑Making Power</h3>
        <p className="mb-4">
          A Sole Proprietorship gives you 100% ownership—so every strategic, financial,
          and operational decision is yours alone. No board meetings, no partner
          approvals.
        </p>
        <h3 className="text-lg font-semibold mb-2">Quick Adaptability</h3>
        <p className="mb-4">
          You can pivot business models, launch new products, or scale down instantly
          without lengthy legal processes, enabling faster response to market demands.
        </p>
        <h3 className="text-lg font-semibold mb-2">Complete Privacy</h3>
        <p>
          As the sole owner, you're not required to disclose financials publicly, allowing
          full confidentiality over earnings and business strategies.
        </p>
      </>
    ),
  },
  {
    title: "Low Compliance & Cost",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Minimal Formalities</h3>
        <p className="mb-4">
          No need for annual ROC filings or complex audits. Basic bookkeeping,
          income‑tax returns, and local licenses keep you compliant with the law.
        </p>
        <h3 className="text-lg font-semibold mb-2">Pocket‑Friendly Setup</h3>
        <p className="mb-4">
          Registration costs are limited to local Shop &amp; Establishment license or GST
          as required—making it the most economical structure for freelancers,
          traders, and small retailers.
        </p>
        <h3 className="text-lg font-semibold mb-2">No Annual Compliance Burden</h3>
        <p>
          Unlike companies or LLPs, there is no requirement to maintain minutes,
          statutory registers, or board resolutions.
        </p>
      </>
    ),
  },
  {
    title: "Simple Taxation",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Personal Income‑Tax Slab</h3>
        <p className="mb-4">
          Business profits are taxed as the proprietor’s personal income—no separate
          corporate tax, dividend distribution tax, or MAT.
        </p>
        <h3 className="text-lg font-semibold mb-2">Easy ITR Filing</h3>
        <p className="mb-4">
          File ITR‑3 or ITR‑4 (Presumptive) online, claim deductions, and carry
          forward losses without the complexity of company returns.
        </p>
        <h3 className="text-lg font-semibold mb-2">Lower Tax Liability for Small Income</h3>
        <p>
          Proprietors benefit from basic exemption limits and rebates under personal
          tax laws—ideal for early-stage or small-scale businesses.
        </p>
      </>
    ),
  },
  {
    title: "Banking & Registrations",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Dedicated Current Account</h3>
        <p className="mb-4">
          Open a current account in the business trade name using your PAN and local
          license—separating personal and business transactions for better
          bookkeeping.
        </p>
        <h3 className="text-lg font-semibold mb-2">Eligibility for MSME & GST</h3>
        <p className="mb-4">
          Register under Udyam (MSME) for government incentives and obtain GSTIN to
          seamlessly conduct interstate trade or claim input‑tax credit.
        </p>
        <h3 className="text-lg font-semibold mb-2">Access to Government Schemes</h3>
        <p>
          Registered proprietors can apply for Mudra loans, MSME subsidies, and other
          startup or business development schemes.
        </p>
      </>
    ),
  },
];


  /* ------------------------------- PROCESS STEPS --------------------------- */
  const steps = [
    {
      icon: FaUniversity,
      subtitle: "Choose Business / Trade Name",
      desc: "Select a unique trade name that reflects your goods or services (ensure it is not trademarked).",
    },
    {
      icon: FaFileContract,
      subtitle: "Obtain Local License",
      desc: "Apply for Shop & Establishment registration / Trade License from the Municipal authority or Panchayat as applicable.",
    },
    {
      icon: FaLaptopCode,
      subtitle: "Apply for GST (if required)",
      desc: "Mandatory if turnover exceeds the threshold or for e‑commerce / interstate sales.",
    },
    {
      icon: FaCertificate,
      subtitle: "MSME (Udyam) Registration",
      desc: "Get Udyam Certificate online for government benefits such as collateral‑free loans and subsidies.",
    },
    {
      icon: FaCheckCircle,
      subtitle: "Open Current Bank Account",
      desc: "Submit license, PAN, and identity proof to open a current account in the trade name.",
    },
    {
      icon: FaLock,
      subtitle: "Maintain Books & File ITR",
      desc: "Keep simple books of accounts and file your income‑tax return annually under the individual slabs.",
    },
  ];

  /* -------------------------------- HERO TEXT ----------------------------- */
  const title = "Sole Proprietorship Registration";
  const description =
    "Set up your Sole Proprietorship quickly with expert CA guidance. We handle licensing, GST, MSME, and bank account setup so you can focus on growing your business. Ideal for freelancers, consultants, shop‑owners, and small traders who need a legal identity with minimal compliance.";

  /* ---------------------------------- FAQS --------------------------------- */
  const faqs = [
    {
      q: "Is it compulsory to register a Sole Proprietorship?",
      a: "There is no central registration. However, local licenses (Shop & Establishment), GST, and MSME registration provide legal proof and are strongly recommended for opening a bank account and availing loans.",
    },
    {
      q: "Do I need a separate PAN for the business?",
      a: "No. The proprietor uses their personal PAN for all business and tax matters, keeping compliance simple.",
    },
    {
      q: "What taxes are applicable to a Sole Proprietorship?",
      a: "Profits are taxed as the proprietor’s personal income. You must also comply with GST if registered and deduct TDS where applicable.",
    },
    {
      q: "Can a Sole Proprietorship be converted to an LLP or Private Limited Company?",
      a: "Yes. You can convert by transferring assets and business to a newly incorporated entity subject to conditions under the Companies Act or LLP Act.",
    },
    {
      q: "How long does the registration process take?",
      a: "Local license and MSME registration can be completed within 1–3 working days if documents are in order. GST may take 3–7 days depending on verification.",
    },
  ];

  /* ------------------------------------------------------------------------ */
  return (
    <>
      {/* Hero Section */}
      <Hero title={title} description={description} />

      {/* Recognition / Why Section */}
      <div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Register a Sole Proprietorship?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              A <strong>Sole Proprietorship</strong> is the simplest form of business
              ownership in India. Registering (through local trade licenses,
              GST, and MSME) gives you legal recognition, helps open a bank
              account in your trade name, and boosts credibility with
              customers, suppliers, and lenders.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Ease of Formation:</strong> Minimal paperwork and no
                  statutory audits unless turnover exceeds limits.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Full Control:</strong> You are the sole decision‑maker
                  and beneficiary of all profits.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Low Compliance Cost:</strong> No ROC filings, limited
                  license renewals, and straightforward tax returns.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Tax Simplicity:</strong> Income is taxed under
                  individual slabs—no separate corporate tax or dividend tax.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>
                  <strong>Business Loans &amp; MSME Benefits:</strong> Registered
                  proprietors can access collateral‑free loans and government
                  schemes.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="/navservices/sole2.png"
              alt="Sole Proprietorship Registration"
              className="w-full mt-3 h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Advantages Tabs */}
      <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6 text-center">
            What Are the Advantages of a Sole Proprietorship?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Discover why millions of Indian entrepreneurs choose Sole
            Proprietorship for its flexibility, tax efficiency, and low
            compliance.
          </p>

          {/* Tab Header */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition  ${
                  activeTab === index
                    ? "bg-[#1C398E] text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="font-bold" style={{ fontSize: "0.99rem" }}>
                  {tab.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-green-100 p-6 rounded-md shadow-lg border border-gray-200 text-gray-800 leading-relaxed">
            {tabs[activeTab].content}
          </div>
        </div>

        
      </section>

      {/* Process Steps */}
      <SectionTitle>Process for Sole Proprietorship Registration</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Illustration / Documents Image */}
      <div className="p-3 md:p-5">
        <img
          className="max-w-5xl mx-auto h-auto object-contain"
          src="/navservices/sole-doc.webp"
          alt="Documents required for Sole Proprietorship"
        />
      </div>

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
