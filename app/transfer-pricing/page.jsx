"use client";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaGlobeAsia, FaBalanceScale,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaSmile ,
  FaBuilding, FaStore, FaHandshake
} from "react-icons/fa";

import SectionTitle       from "@/components/headcomponent/Sectiontitle";
import FormSection        from "@/components/headcomponent/Formsection";
import BenefitsList       from "@/components/headcomponent/Benefits";
import DocumentsRequired  from "@/components/headcomponent/Documents";
import FAQSection         from "@/components/headcomponent/Faq";
import Cta                from "@/components/Cta/Cta";
import Setsapart          from "@/components/Setsapart/Setsapart";
import Types              from "@/components/headcomponent/Types";

export default function TransferPricingServices() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    { title: "Risk Mitigation", description: "Avoid penalties by ensuring all international transactions meet arm’s length standards set by tax authorities." },
    { title: "Regulatory Compliance", description: "Stay aligned with Indian and global transfer pricing documentation requirements." },
    { title: "Strategic Tax Planning", description: "Align pricing models to your group’s tax efficiency goals while remaining compliant." },
    { title: "Dispute Readiness", description: "Well-structured documentation protects against tax scrutiny and audits." },
    { title: "Global Benchmarking", description: "Access reliable comparable data for defensible transfer pricing reports." },
    { title: "End-to-End Advisory", description: "From planning to documentation to representation—we cover every stage of the TP lifecycle." },
  ];

  const steps = [
    { icon: FaGlobeAsia, subtitle: "Transaction Mapping", desc: "Identify all international and specified domestic transactions within your group structure." },
    { icon: FaBalanceScale, subtitle: "Functional & Risk Analysis", desc: "Analyze functions, assets, and risks to determine appropriate pricing models." },
    { icon: FaLaptopCode, subtitle: "Benchmarking Study", desc: "Use global databases to find reliable third-party comparable transactions." },
    { icon: FaFileContract, subtitle: "Transfer Pricing Documentation", desc: "Prepare Form 3CEB and detailed reports in line with Indian Income Tax Rules." },
    { icon: FaUniversity, subtitle: "Policy Advisory & Planning", desc: "Restructure intercompany pricing models to align with commercial and tax goals." },
    { icon: FaUserShield, subtitle: "Audit & Assessment Support", desc: "Defend your TP policy before tax authorities with robust technical arguments." },
  ];

  const documents = [
    { icon: FaIdCard, title: "Group Entity List", desc: "Details of all associated enterprises involved in international/domestic transactions." },
    { icon: FaMapMarkedAlt, title: "Agreements & Invoices", desc: "Copies of intercompany contracts and corresponding transactional documents." },
    { icon: FaFileContract, title: "Pricing Methodology", desc: "Explanation of transfer pricing method adopted—CUP, TNMM, CPM, etc." },
    { icon: FaUniversity, title: "Financial Statements", desc: "Standalone and consolidated financials of the Indian and foreign entities." },
    { icon: FaUserShield, title: "Functional Analysis", desc: "Details of functions performed, assets used, and risks assumed by each entity." },
    { icon: FaKey, title: "Industry & Economic Data", desc: "Supporting market data, segmental margins, and macroeconomic indicators." },
  ];

  const faqs = [
    {
      q: "Who is required to comply with transfer pricing provisions?",
      a: "Any Indian business entering into international transactions or certain specified domestic transactions with related parties must comply with transfer pricing regulations."
    },
    {
      q: "What is Form 3CEB?",
      a: "Form 3CEB is a mandatory tax audit report that must be filed with the Income Tax Department, certified by a Chartered Accountant, for transactions with associated enterprises."
    },

    {
      q: "What methods are acceptable for transfer pricing in India?",
      a: "Common methods include Comparable Uncontrolled Price (CUP), Resale Price, Cost Plus, Transactional Net Margin Method (TNMM), and Profit Split."
    },
    {
      q: "Do I need benchmarking if I only have one foreign group entity?",
      a: "Yes, even a single international transaction with an associated enterprise requires benchmarking and proper documentation under Indian TP law."
    },
    {
      q: "Can you help during a transfer pricing audit?",
      a: "Absolutely. We prepare technical submissions, respond to tax notices, and represent you during assessments or appellate proceedings."
    },

  ];

  const heading = "Types of Transfer Pricing Support";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "TP Study & Documentation", subtitle: "Comprehensive analysis and Form 3CEB preparation" },
    { icon: <FaBuilding className="text-white text-3xl" />, title: "Benchmarking Report", subtitle: "Global comparables & economic analysis" },
    { icon: <FaStore className="text-white text-3xl" />, title: "TP Audit Defense", subtitle: "Submissions & representation during scrutiny" },
    { icon: <FaUniversity className="text-white text-3xl" />, title: "Policy Planning", subtitle: "Intercompany pricing structuring for future transactions" },
    { icon: <FaSmile className="text-white text-3xl" />, title: "Master File & CbCR", subtitle: "Support for large MNEs under BEPS requirements" },
    { icon: <FaHandshake className="text-white text-3xl" />, title: "Advance Pricing Agreements (APA)", subtitle: "Strategic assistance in applying for APAs with CBDT" },
  ];

  return (
    <>
      <section className="py-12">
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[675px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 md:py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Transfer Pricing Advisory & Documentation
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Ensure your international and domestic related-party transactions comply with Indian TP regulations. <strong>Chintan Agrawal & Co.</strong> delivers expert guidance, accurate documentation, and audit defense.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                From Form 3CEB to APA, we simplify complex pricing compliance so you focus on global growth.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />




      

      <div className=" w-full  px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl mt-8 md:text-5xl font-extrabold text-[#1C398E] mb-4 md:mb-10">
              Why Transfer Pricing Compliance Matters
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              In a globalised economy, intercompany transactions must reflect fair market value. Failure to comply with Indian TP laws can lead to heavy penalties and litigation.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Avoid Adjustments:</strong> Prevent tax additions due to underreported profits in India.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>International Credibility:</strong> Demonstrate compliance to investors, regulators, and partners.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Peace of Mind:</strong> Navigate assessments and audits with solid documentation and expert advice.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/transfer.webp"
              alt="Transfer pricing illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
              priority
            />
          </div>
        </div>
      </div>






      <Types filingTypes={filingTypes} heading={heading} />


   <section className="bg-[#f9f9f9] text-gray-800 px-4 py-8 md:py-12">
  <div className="mx-auto max-w-6xl">
    {/* heading */}
    <h2 className="text-center capitalize text-3xl sm:text-4xl font-bold text-[#1a3e72]">
      Process for Transfer Pricing
    </h2>
    <p className="text-center max-w-3xl mx-auto text-lg font-semibold mt-4 ">
      Our step-by-step methodology ensures your related-party transactions meet global transfer pricing standards and Indian tax compliance requirements.
    </p>

    {/* grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* left – checklist */}
      <ul className="space-y-4 text-base">
        {[
          "Identify all international and specified domestic transactions with related parties, including tangible goods, services, loans, IP, or cost-sharing arrangements.",
          "Conduct a detailed Functional, Asset, and Risk (FAR) analysis to understand the economic substance of each transaction and allocate risk properly.",
          "Determine the most appropriate transfer pricing method (CUP, TNMM, Cost Plus, etc.) as per Rule 10B of Indian Income Tax Rules.",
          "Perform benchmarking using global databases (like Prowess or Capitaline) to find comparable uncontrolled transactions for arm’s length validation.",
          "Prepare mandatory documentation including Transfer Pricing Study Report and Form 3CEB certified by a Chartered Accountant.",
          "Support during assessments, audits, and tax litigation, with strong documentation and technical defense for each transaction.",
        ].map((item) => (
          <li key={item} className="flex items-start space-x-3">
            <span className="text-orange-600 text-xl">✔️</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      {/* right – image */}
      <div className="">
        <img
          src="/navservices/Transfer-process.png"
          alt="Transfer pricing documentation process"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>


      <SectionTitle>Benefits of Transfer Pricing Compliance</SectionTitle>
      <BenefitsList benefits={benefits} />

      <SectionTitle>Information & Documents Required</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}