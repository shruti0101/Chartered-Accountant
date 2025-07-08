'use client';

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";
import { useState } from "react";

import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
   FaBuilding, FaStore, FaHandshake
} from "react-icons/fa";

export default function AnnualFiling() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

const benefits = [
  {
    title: "Legal Compliance",
    description: "Ensures your company adheres to ROC, MCA, and Income Tax regulations, maintaining its legal standing."
  },
  {
    title: "Avoid Penalties",
    description: "Prevents late fees, director disqualification, interest, and possible company strike-off by regulatory bodies."
  },
  {
    title: "Better Creditworthiness",
    description: "Improves credibility and transparency—key for securing loans, funding, or working with corporate clients."
  },
  {
    title: "Increased Trust",
    description: "Timely annual filings build confidence among vendors, clients, employees, and investors."
  },
  {
    title: "Government Recognition",
    description: "Keeps your company listed as 'Active' on MCA portal and safeguards your brand's legal identity."
  },
  {
    title: "Audit-Ready Financials",
    description: "Ensures your financial statements are up-to-date, well-documented, and audit-ready at all times."
  },
  {
    title: "Ease of Expansion",
    description: "Clean compliance records simplify opening branches, adding directors, or raising capital."
  },
 
]


  const steps = [
    { icon: FaUniversity, subtitle: "Collect Financial Data", desc: "Gather balance sheet, P&L, and bank statements." },
    { icon: FaFileContract, subtitle: "Prepare Financial Statements", desc: "Draft financials and supporting documents as per Indian Accounting Standards." },
    { icon: FaCertificate, subtitle: "Conduct Board Meetings", desc: "Get approval for financial statements and audit reports from the board." },
    { icon: FaLaptopCode, subtitle: "File with MCA & ROC", desc: "Submit Form AOC-4 and MGT-7 before the due dates." },
    { icon: FaCheckCircle, subtitle: "File Income Tax Return", desc: "E-file company’s ITR along with audit report if applicable." },
    { icon: FaLock, subtitle: "Stay Compliant", desc: "Ensure timely compliance every financial year." },
  ];

  const documents = [
    { icon: FaIdCard, title: "Incorporation Certificate", desc: "Mandatory proof of company registration from MCA." },
    { icon: FaFileContract, title: "Financial Statements", desc: "Profit & Loss account, Balance Sheet, and Notes to Accounts." },
    { icon: FaUniversity, title: "Audit Report", desc: "CA-certified audit report (if applicable)." },
    { icon: FaMapMarkedAlt, title: "PAN & TAN", desc: "Company's PAN & TAN for IT return filing." },
    { icon: FaUserShield, title: "Director Details", desc: "DIN, PAN, Aadhaar & Digital Signature of Directors." },
    { icon: FaKey, title: "Board Resolutions", desc: "Approval for final accounts and return filing." }
  ];

  const faqs = [
    { q: "Who is required to do annual filing?", a: "All Private Limited Companies, LLPs, and OPCs registered in India must file annual returns with the MCA." },
    { q: "What are the penalties for late filing?", a: "Late filing attracts ₹100/day per form without any upper limit, and possible disqualification of directors." },
    { q: "Is audit mandatory for all companies?", a: "Yes, except for small companies or LLPs below turnover thresholds. Statutory audit is mandatory in most cases." },
    { q: "Which forms need to be filed?", a: "Primarily AOC-4 (financials) and MGT-7 (annual return) along with ITR-6." },
    { q: "Can you file ROC returns without audit?", a: "No. Audit report is essential for AOC-4 filing unless exempted for specific entities." }
  ];


 const filingTypes = [
  { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Private Limited Company", subtitle: "Form AOC-4, MGT-7, ITR-6 Filing" },
  { icon: <FaBuilding className="text-white text-3xl" />, title: "Limited Liability Partnership (LLP)", subtitle: "Form 8, Form 11, ITR-5 Filing" },
  { icon: <FaStore className="text-white text-3xl" />, title: "One Person Company (OPC)", subtitle: "Similar to Pvt Ltd, with fewer compliance steps" },
  { icon: <FaUniversity className="text-white text-3xl" />, title: "Section 8 Company", subtitle: "Mandatory filings with specific exemptions" },
  { icon: <FaSmile className="text-white text-3xl" />, title: "Small Company", subtitle: "Simplified filing with reduced penalties" },
  { icon: <FaHandshake className="text-white text-3xl" />, title: "Dormant Company", subtitle: "Annual compliance to retain dormant status" },
];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[575px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Annual Filing for Companies in India
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Every company registered under the Companies Act must file its financial statements and annual return each year. At Chintan Agrawal & Co., we ensure your filings are accurate, timely, and 100% compliant with MCA, ROC, and Income Tax norms.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Avoid penalties, disqualification, and legal hurdles by partnering with our expert CA team for seamless annual compliance.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <Setsapart />

      {/* Info Section */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Annual Filing is Crucial for Your Company
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Annual filing is a legal obligation for all registered entities in India. It reflects your company’s financial health and ensures transparency. Non-compliance may result in heavy penalties, director disqualification, and possible company strike-off by ROC.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>ROC Compliance:</strong> Avoid notices and stay in good standing with MCA.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Legal Safeguard:</strong> Ensure your directors and company are legally secure.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Better Funding Opportunities:</strong> Investors prefer companies with clear filings.</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="/navservices/Annual-Filing.jpg" alt="Annual Filing India" className="w-full h-auto object-contain rounded-md" loading="lazy" />
          </div>
        </div>
      </div>

         <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Types of Startups
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filingTypes.map((type, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#E9FBFC] rounded-lg p-4 shadow hover:scale-105 transition-transform">
                <div className="bg-[#1C398E] rounded-full p-3 mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                <p className="text-gray-600">{type.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Annual Filing</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

      {/* Process */}
      <SectionTitle>Process for Annual Filing</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Documents */}
      <SectionTitle>Documents Required for Annual Filing</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
