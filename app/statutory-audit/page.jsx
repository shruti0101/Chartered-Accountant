"use client";


import { useState } from "react";
import {
  FaCheckCircle,  FaCertificate, FaClipboardList, FaShieldAlt,
  FaFileInvoice, FaUniversity, FaUserShield, FaKey, FaSearchDollar,
  FaBuilding, FaStore, FaHandshake,FaRegBuilding ,FaSmile , FaRegChartBar,FaMapMarkedAlt 
} from "react-icons/fa";

import SectionTitle       from "@/components/headcomponent/Sectiontitle";
import FormSection        from "@/components/headcomponent/Formsection";
import BenefitsList       from "@/components/headcomponent/Benefits";

import DocumentsRequired  from "@/components/headcomponent/Documents";
import FAQSection         from "@/components/headcomponent/Faq";
import Cta                from "@/components/Cta/Cta";
import Setsapart          from "@/components/Setsapart/Setsapart";
import Types              from "@/components/headcomponent/Types";

export default function StatutoryAudit() {
  const [open, setOpen] = useState(null);
  const toggle          = (idx) => setOpen(open === idx ? null : idx);

  /* ───────────────────────────────── BENEFITS ───────────────────────── */
  const benefits = [
    { title: "Regulatory Compliance", description: "Audit in accordance with the Companies Act 2013, CARO 2020, and applicable Accounting Standards ensures you meet every statutory requirement." },
    { title: "Credibility of Financials", description: "An independent auditor’s opinion enhances stakeholder confidence—vital for investors, lenders, and potential acquirers." },
    { title: "Early Fraud Detection", description: "Robust testing of controls uncovers errors, mis‑statements, and potential fraud before they snowball into large losses." },
    { title: "Process Improvement", description: "Management letter highlights control weaknesses and provides actionable recommendations for stronger governance." },
    { title: "Access to Credit & Capital", description: "Banks and VCs rely on audited financials to sanction loans and equity funding at favourable terms." },
    { title: "Lower Tax & Penalty Risk", description: "A clean statutory audit reduces chances of adverse tax assessments, penalties and notices." },
  ];

  /* ────────────────────────────── WORKFLOW / STEPS ─────────────────── */
  const steps = [
    { icon: FaClipboardList, subtitle: "Engagement & Planning",      desc: "Understand business, define scope, materiality, timelines and audit strategy." },
    { icon: FaUserShield,    subtitle: "Risk Assessment",            desc: "Identify significant risk areas, related‑party transactions, and fraud risks." },
    { icon: FaKey,           subtitle: "Internal Control Evaluation",desc: "Walk‑through processes, test design & operating effectiveness of controls." },
    { icon: FaSearchDollar,  subtitle: "Substantive Testing",        desc: "Verify transactions, ledgers, bank confirms, inventory counts, and compliances." },
    { icon: FaUniversity,    subtitle: "Draft Financial Review",     desc: "Discuss audit findings, adjustments, and disclosure requirements with management." },
    { icon: FaCertificate,   subtitle: "Issue Audit Report",         desc: "Provide Independent Auditor’s Report, CARO report & management letter." },
  ];

  /* ─────────────────────────── DOCUMENTS / DATA NEEDED ─────────────── */
  const documents = [
    { icon: FaFileInvoice, title: "Trial Balance & Ledgers", desc: "Year‑end TB, general ledgers, sub‑ledgers, and schedules." },
    { icon: FaRegChartBar, title: "Bank Statements & Recos", desc: "All bank statements with month‑end reconciliations." },
    { icon: FaUniversity,  title: "Statutory Registers",     desc: "Shareholder, director, and charge registers as per Companies Act." },
    { icon: FaClipboardList, title: "Board & AGM Minutes",   desc: "Signed minutes for the audit period." },
    { icon: FaMapMarkedAlt, title: "Inventory Records",      desc: "Stock summary, valuation workings, and physical count sheets." },
    { icon: FaShieldAlt,    title: "Tax & Compliance Files", desc: "GST, TDS, PF/ESIC challans, and previous audit reports." },
  ];

  /* ───────────────────────────────── FAQ ───────────────────────────── */
  const faqs = [
    { q: "Who is mandatorily required to get a statutory audit?", a: "All companies incorporated under the Companies Act, LLPs exceeding ₹40 lakh turnover or ₹25 lakh capital, and societies/trusts as per state laws must have their accounts audited annually by a Chartered Accountant." },
    { q: "How long does a statutory audit usually take?", a: "For SMEs, field‑work typically spans 1‑3 weeks depending on record readiness. Complex multi‑location audits may take longer. We provide a detailed schedule after reviewing your preliminary data." },
    { q: "What is the difference between tax audit and statutory audit?", a: "Statutory audit examines the accuracy of financial statements under Company Law, while tax audit (u/s 44AB) focuses on compliance with the Income‑tax Act. Many entities require both; we can combine the procedures to save time." },
    { q: "Will audit disrupt our daily operations?", a: "We plan field‑work to minimise disruption—using secure portals for document uploads, virtual meetings, and off‑site testing wherever possible. Only critical queries require in‑person discussions." },
    { q: "What if the audit uncovers irregularities?", a: "We’ll immediately communicate issues to management, quantify impact, suggest corrective actions, and—if material—disclose them as per SA 450. Our goal is to help you remediate and strengthen controls." },
  ];

  /* ───────────────────────────── TYPES WE COVER ────────────────────── */
  const heading = "Statutory Audit Coverage";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Private / Public Limited Company", subtitle: "Audit under Companies Act 2013 & CARO 2020" },
    { icon: <FaBuilding     className="text-white text-3xl" />, title: "Limited Liability Partnership",     subtitle: "Audit per LLP Act when turnover >₹40 lakh" },
    { icon: <FaStore        className="text-white text-3xl" />, title: "Section 8 / NGO Audit",             subtitle: "Compliance with Societies & Trust Acts" },
    { icon: <FaUniversity   className="text-white text-3xl" />, title: "Branch / Subsidiary Audit",         subtitle: "Indian branches of foreign entities" },
    { icon: <FaSmile        className="text-white text-3xl" />, title: "Special‑Purpose Audit",            subtitle: "IFRS conversion, grant utilisation audits" },
    { icon: <FaHandshake    className="text-white text-3xl" />, title: "Internal Control Review",          subtitle: "SOX / IFC testing & remediation" },
  ];

  /* ──────────────────────────────── RENDER ─────────────────────────── */
  return (
    <>
      {/* Hero */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[675px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Statutory Audit & Assurance Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Ensure full compliance, build investor confidence, and strengthen internal controls with <strong>Chintan Agrawal & Co.</strong>—your trusted statutory auditors.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our meticulous audit methodology delivers clear, actionable insights while meeting every regulatory requirement.
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

      {/* Why statutory audit */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Your Business Needs a Robust Statutory Audit
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              A high‑quality statutory audit not only fulfils legal obligations but also uncovers process improvements, detects fraud early, and reassures shareholders that your financial statements present a true and fair view.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>True & Fair Financials:</strong> Independent assurance for lenders, investors, and regulators.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Early Issue Detection:</strong> Identify control gaps before they impact profitability or compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Seamless Fund‑raising:</strong> Audited accounts accelerate bank loans and equity investments.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/statutory-audit.png"
              alt="Statutory audit illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Audit coverage types */}
      <Types filingTypes={filingTypes} heading={heading} />




      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of a Statutory Audit</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
       <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6">
          Statutory Audit Process
        </h2>
        <p className="text-gray-600 md:text-lg mb-10 max-w-3xl mx-auto">
          The statutory audit process ensures compliance with regulatory standards and offers valuable insights into your financial practices. Here's a step-by-step breakdown of how it works:
        </p>

        <div className="flex justify-center mb-10">
          <img
            src="/statutory-process.png"
            alt="Statutory Audit Process"
            width={600}
            height={600}
            className="w-full max-w-xl object-contain"
          />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-700 text-base md:text-lg">
          <li><span className="font-semibold text-[#1C398E]">1. Appointment:</span> The auditor is formally appointed by the organization.</li>
          <li><span className="font-semibold text-[#1C398E]">2. Acceptance of Engagement:</span> The auditor reviews and accepts the terms of the audit engagement.</li>
          <li><span className="font-semibold text-[#1C398E]">3. Pre-Audit Meeting:</span> Initial discussion with management to understand the scope and expectations.</li>
          <li><span className="font-semibold text-[#1C398E]">4. Audit Planning:</span> Development of a detailed audit plan including risk assessment and timeline.</li>
          <li><span className="font-semibold text-[#1C398E]">5. Audit Execution:</span> Performing audit procedures such as testing and data verification.</li>
          <li><span className="font-semibold text-[#1C398E]">6. Audit Report:</span> Drafting and finalizing the audit report with findings and recommendations.</li>
          <li><span className="font-semibold text-[#1C398E]">7. Follow-up:</span> Reviewing implementation of audit recommendations and compliance improvements.</li>
        </ul>
      </div>
    </section>

      {/* Documents */}
      <SectionTitle>Documents & Data Required</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
