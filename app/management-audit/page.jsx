"use client";

import { useState } from "react";
import {
  FaCheckCircle,FaMapMarkedAlt , FaRegBuilding, FaChartPie, FaSearch, FaLightbulb,
  FaFileContract, FaUniversity, FaUserShield, FaKey,
  FaBuilding, FaStore, FaHandshake, FaClipboardList
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

export default function ManagementAudit() {
  const [open, setOpen] = useState(null);
  const toggle          = (idx) => setOpen(open === idx ? null : idx);

  /* ───────────── Benefits of Management Audit ───────────── */
  const benefits = [
    { title: "Strategic Alignment",        description: "Ensure every function and cost centre is aligned to corporate goals and shareholder value." },
    { title: "Operational Excellence",     description: "Uncover inefficiencies, bottlenecks, and redundant activities that inflate costs." },
    { title: "Data‑Driven Decisions",      description: "Benchmark KPIs against industry peers and deploy dashboards for real‑time performance monitoring." },
    { title: "Risk & Opportunity Mapping", description: "Highlight emerging risks and untapped opportunities in marketing, supply‑chain, HR and finance." },
    { title: "Cost Optimisation",          description: "Identify quick‑win savings in procurement, overheads, and working capital management." },
    { title: "Stakeholder Confidence",     description: "Transparent, independent review boosts confidence of lenders, investors, and the board." },
  ];

  /* ───────────── Management Audit Workflow ───────────── */
  const steps = [
    { icon: FaClipboardList, subtitle: "Scope & Objective Setting",  desc: "Align audit objectives with board expectations and business plan." },
    { icon: FaUserShield,    subtitle: "Data Gathering & Interviews",desc: "Collect KPIs, budgets, process maps, and conduct leadership interviews." },
    { icon: FaSearch,        subtitle: "Process Mapping & Gap Analysis", desc: "Compare current workflows to best practice and industry benchmarks." },
    { icon: FaChartPie,      subtitle: "KPI Benchmarking & Analytics", desc: "Analyse productivity, profit drivers, and cost ratios using advanced analytics." },
    { icon: FaLightbulb,     subtitle: "Recommendation & Action Plan",  desc: "Prioritised roadmap—quick wins, medium‑term projects, ROI analysis." },
    { icon: FaFileContract,  subtitle: "Implementation Review",        desc: "Track execution progress and measure post‑improvement performance." },
  ];

  /* ───────────── Documents / Data Needed ───────────── */
  const documents = [
    { icon: FaFileContract, title: "Business Plan & Budgets",     desc: "Latest annual plan, budget vs. actual statements, variance analysis." },
    { icon: FaUniversity,   title: "Process SOPs & Org Chart",    desc: "Department structures, roles, and detailed SOP documents." },
    { icon: FaKey,          title: "MIS & KPI Dashboards",        desc: "Monthly financials, operational KPIs, sales and production data." },
    { icon: FaRegBuilding,  title: "Cost & Profit Centre Reports",desc: "Segment‑wise P&L, cost allocation basis, and overhead schedules." },
    { icon: FaMapMarkedAlt, title: "Contracts & Policies",        desc: "Major vendor/customer contracts, HR and procurement policies." },
    { icon: FaSearch,       title: "Previous Improvement Projects",desc: "Reports from past lean, six‑sigma, or transformation initiatives." },
  ];

  /* ───────────── FAQs ───────────── */
  const faqs = [
    {
      q: "How is a management audit different from internal or statutory audit?",
      a: "While statutory audit focuses on compliance and internal audit on controls, a management audit evaluates efficiency, productivity, profitability, and strategic alignment. It is future‑oriented and improvement‑focused rather than purely compliance‑driven."
    },
    {
      q: "How often should we conduct a management audit?",
      a: "Many high‑growth companies opt for an annual management audit, while stable organisations may prefer a two‑ to three‑year cycle. Critical functions can be reviewed quarterly through mini‑audits."
    },
    {
      q: "Will it disrupt day‑to‑day operations?",
      a: "No. Our team schedules interviews in advance, leverages digital data collection, and works around peak business periods to minimise disruption."
    },
    {
      q: "Who needs to be involved from our side?",
      a: "CXOs and functional heads provide strategic insights, while process owners share ground‑level data. We also request limited IT support for data extracts."
    },
    {
      q: "What deliverables do we receive?",
      a: "You’ll receive a detailed management audit report, executive summary slides, KPI dashboards, root‑cause analysis, and a phased action plan ranked by ROI and ease of implementation."
    },
  ];

  /* ───────────── Coverage / Types ───────────── */
  const heading = "Popular Management Audit Modules";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Strategic Planning Audit",  subtitle: "Vision, mission, goal‑deployment review" },
    { icon: <FaBuilding     className="text-white text-3xl" />, title: "Operations Efficiency",    subtitle: "Lean process analysis, capacity utilisation" },
    { icon: <FaStore        className="text-white text-3xl" />, title: "Sales & Marketing Audit",  subtitle: "Market positioning, channel ROI, pricing" },
    { icon: <FaUniversity   className="text-white text-3xl" />, title: "HR & Talent Audit",        subtitle: "Workforce productivity, attrition, L&D ROI" },
    { icon: <FaHandshake    className="text-white text-3xl" />, title: "Supply‑Chain Audit",       subtitle: "Vendor management, logistics cost, OTIF" },
    { icon: <FaChartPie     className="text-white text-3xl" />, title: "Finance & Cost Audit",     subtitle: "Cost structures, working capital, EVA®" },
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
                Management Audit & Performance Improvement
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Drive profitability, sharpen strategy, and optimise resources with
                <strong> Chintan Agrawal & Co.</strong>—your partner for actionable management audits.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Our multi‑disciplinary CA & MBA team transforms raw data into insight‑driven
                recommendations that boost enterprise value.
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

      {/* Why Management Audit */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Commission a Management Audit?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              In volatile markets, yesterday’s best practice quickly becomes
              tomorrow’s bottleneck. A management audit provides an objective view of
              how effectively your resources convert strategy into results.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Unlock Hidden Profits:</strong> Detect margin leakages and cost overruns.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Boost Decision Speed:</strong> Clear dashboards shorten planning cycles.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Align People & Processes:</strong> Create a performance culture linked to KPIs.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/objectives.png"
              alt="Management audit presentation"
              className="w-full h-auto object-contain "
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Coverage / Modules */}
      <Types filingTypes={filingTypes} heading={heading} />

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of a Management Audit</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

        <div className="mx-auto max-w-3xl">
            
            <img
              src="/navservices/benefits-of-audit.jpg"
              alt="DIN Compliance illustration"
              className=" w-full h-auto object-fit-contain"
              loading="lazy"
            />
          </div>

        

      {/* Process */}
      <SectionTitle>Our Management Audit Framework</SectionTitle>
      <ProcessSteps steps={steps} />

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
