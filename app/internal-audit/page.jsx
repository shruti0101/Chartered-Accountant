"use client";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaShieldAlt, FaSearch, FaBug,
  FaFileContract, FaUniversity, FaUserShield, FaKey,
  FaBuilding, FaMapMarkedAlt ,FaSmile ,  FaStore, FaHandshake, FaClipboardList
} from "react-icons/fa";

import SectionTitle       from "@/components/headcomponent/Sectiontitle";
import FormSection        from "@/components/headcomponent/Formsection";
import BenefitsList       from "@/components/headcomponent/Benefits";
import ProcessSteps       from "@/components/headcomponent/Process";
import DocumentsRequired  from "@/components/headcomponent/Documents";
import FAQSection         from "@/components/headcomponent/Faq";
import Cta                from "@/components/Cta/Cta";
import Setsapart          from "@/components/Setsapart/Setsapart";
import Types              from "@/components/headcomponent/Types";

export default function InternalAudit() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  /* ───────────── Benefits of Internal Audit ───────────── */
  const benefits = [
    { title: "Stronger Internal Controls", description: "Identify control gaps, design remedial actions, and implement best‑practice frameworks that safeguard assets and data." },
    { title: "Risk Mitigation",            description: "Early detection of fraud, policy breaches, and process risks saves you costly penalties and reputational damage." },
    { title: "Operational Efficiency",     description: "Process mapping and bottleneck analysis lead to faster turnaround times and lower operating costs." },
    { title: "Regulatory Readiness",       description: "Continuous monitoring keeps you ready for external audits—SEBI, RBI, ISO, and industry‑specific regulators." },
    { title: "Data‑Driven Decisions",      description: "Audit analytics and KPI dashboards provide actionable insights for top management and the board." },
    { title: "Independent Assurance",      description: "A third‑party CA firm offers objective reporting free from internal pressures or conflicts." },
  ];

  /* ───────────── Internal Audit Methodology ───────────── */
  const steps = [
    { icon: FaClipboardList, subtitle: "Audit Universe & Planning", desc: "Define scope, risk universe, frequency, and resource allocation with senior management." },
    { icon: FaUserShield,    subtitle: "Risk & Control Mapping",   desc: "Identify inherent risks, map existing controls, and set testing strategies." },
    { icon: FaSearch,        subtitle: "Field Testing & Analytics",desc: "Perform walkthroughs, sample testing, data analytics, and root‑cause analysis." },
    { icon: FaBug,           subtitle: "Issue Discussion",         desc: "Discuss preliminary findings with process owners to confirm facts and impact." },
    { icon: FaFileContract,  subtitle: "Draft & Final Report",     desc: "Rate risks, recommend remediation, and present to audit committee/board." },
    { icon: FaShieldAlt,     subtitle: "Follow‑up & Monitoring",   desc: "Track implementation of agreed actions and verify closure in subsequent cycles." },
  ];

  /* ───────────── Documents / Data Required ───────────── */
  const documents = [
    { icon: FaFileContract, title: "Process SOPs & Policies", desc: "Latest approved standard‑operating procedures and manuals." },
    { icon: FaUniversity,   title: "Organisational Chart",    desc: "Department/functions hierarchy and key responsibilities." },
    { icon: FaKey,          title: "System Access Matrix",    desc: "User roles, privileges, and segregation‑of‑duties listing." },
    { icon: FaRegBuilding,  title: "Financial & Operational Data", desc: "Trial balance, ledgers, MIS reports, and KPI dashboards." },
    { icon: FaMapMarkedAlt, title: "Previous Audit Reports",  desc: "Internal, external, or regulatory audit findings for follow‑up." },
    { icon: FaShieldAlt,    title: "Compliance Filings",      desc: "GST, TDS, PF/ESIC, and industry‑specific licences/returns." },
  ];

  /* ───────────── Frequently Asked Questions ───────────── */
  const faqs = [
    {
      q: "How often should internal audit be conducted?",
      a: "Best‑practice recommends quarterly or half‑yearly cycles for high‑risk processes. The frequency depends on your industry, size, and risk appetite; we tailor a calendar to suit."
    },
    {
      q: "Will the audit disrupt daily operations?",
      a: "No. We use secure data portals and minimal in‑person walkthroughs. Fieldwork schedules are agreed in advance to avoid peak‑season workloads."
    },
    {
      q: "Do you use data analytics or only manual testing?",
      a: "Both. Our proprietary scripts analyse 100 % of transactions for red flags, while targeted sampling covers process walk‑throughs and control design."
    },
    {
      q: "Can internal audit replace statutory audit?",
      a: "Internal audit is a continuous assurance function and cannot legally replace statutory audit. However, an effective internal audit reduces statutory audit issues and timelines."
    },
    {
      q: "What deliverables do we receive?",
      a: "You get an executive summary, detailed issue log with risk ratings, root‑cause analysis, practical recommendations, and a follow‑up tracker for management action."
    },
  ];

  /* ───────────── Types / Coverage ───────────── */
  const heading = "Key Internal Audit Areas";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Finance & Accounting",     subtitle: "Revenue, payables, treasury, controls" },
    { icon: <FaBuilding     className="text-white text-3xl" />, title: "Procurement & Inventory", subtitle: "Purchase‑to‑pay, stock, logistics" },
    { icon: <FaStore        className="text-white text-3xl" />, title: "Sales & Receivables",     subtitle: "Quote‑to‑cash, credit, incentives" },
    { icon: <FaUniversity   className="text-white text-3xl" />, title: "HR & Payroll",            subtitle: "Recruit‑to‑retire, payroll compliance" },
    { icon: <FaSmile        className="text-white text-3xl" />, title: "IT General Controls",     subtitle: "Access, change management, backups" },
    { icon: <FaHandshake    className="text-white text-3xl" />, title: "Compliance & ESG",        subtitle: "Environmental, social & governance risk" },
  ];

  /* ───────────── Render ───────────── */
  return (
    <>
      {/* Hero */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[650px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Internal Audit & Risk Advisory
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Enhance governance, streamline processes, and mitigate risk with
                <strong> Chintan Agrawal & Co.</strong>—your partner for
                independent and value‑driven internal audits.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our CA‑led team combines deep domain knowledge, robust analytics,
                and industry best practices to deliver actionable insights.
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

      {/* Why Internal Audit */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Your Organisation Needs Internal Audit
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Internal audit is not just a compliance checkbox—it’s a strategic
              tool that enhances operational performance, reduces fraud, and
              drives a culture of continuous improvement.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Proactive Risk Management:</strong> Spot issues before they hurt your bottom line.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Process Optimisation:</strong> Identify inefficiencies and reduce cycle‑times.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Regulatory Assurance:</strong> Stay prepared for any external scrutiny.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/Internal-Auditing.jpg"
              alt="Internal audit illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Coverage / Types */}
      <Types filingTypes={filingTypes} heading={heading} />

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Key Benefits of Internal Audit</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
      <SectionTitle>Our Internal Audit Methodology</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Documents */}
      <SectionTitle>Documents & Information Required</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
