"use client";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
  FaBuilding, FaStore, FaHandshake
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

export default function PayrollServices() {
  const [open, setOpen]   = useState(null);
  const toggle            = (idx) => setOpen(open === idx ? null : idx);

  /* ------------------------------------------------------------------ */
  /* BENEFITS                                                           */
  /* ------------------------------------------------------------------ */
  const benefits = [
    { title: "100 % Statutory Compliance",  description: "We calculate and deposit PF, ESIC, PT and TDS on or before statutory due dates, so you never pay penalties." },
    { title: "Accurate & Timely Payslips",  description: "Automated salary computations ensure each employee receives an error‑free payslip on the promised day." },
    { title: "Employee Satisfaction",       description: "Transparent salary break‑ups and on‑time reimbursements boost morale and reduce queries to HR." },
    { title: "Secure Data Handling",        description: "All payroll data is encrypted at rest; role‑based access prevents unauthorised visibility of salaries." },
    { title: "Actionable MIS & Analytics",  description: "Custom payroll dashboards—cost centre, overtime, attrition—help you make faster workforce decisions." },
    { title: "Focus on Core Business",      description: "Outsource routine payroll tasks and free your HR & finance teams for strategic initiatives." },
  ];

  /* ------------------------------------------------------------------ */
  /* PROCESS / WORKFLOW                                                 */
  /* ------------------------------------------------------------------ */
  const steps = [
    { icon: FaUserShield,   subtitle: "Employee Master Setup",      desc: "Collect joiner data, salary structures, bank & tax details in a secure portal." },
    { icon: FaFileContract, subtitle: "Monthly Input Validation",   desc: "Import attendance, leaves, expense claims; validate with HR for cut‑off." },
    { icon: FaLaptopCode,   subtitle: "Payroll Calculation",        desc: "Run gross‑to‑net engine—earnings, deductions, PF, ESIC, PT, income‑tax TDS." },
    { icon: FaCheckCircle,  subtitle: "Payslip & Bank Sheet",       desc: "Generate PDF payslips, bank transfer sheet, accounting JV & management reports." },
    { icon: FaCertificate,  subtitle: "Statutory Filings",          desc: "e‑Challan & returns for PF, ESIC; PT, Form 24Q TDS deposit, Form 16 issuance." },
    { icon: FaLock,         subtitle: "Year‑End Compliance",        desc: "Reconcile payroll ledgers, file annual returns & retain records for audit." },
  ];

  /* ------------------------------------------------------------------ */
  /* DOCUMENTS / DATA WE NEED                                           */
  /* ------------------------------------------------------------------ */
  const documents = [
    { icon: FaIdCard,       title: "Employee KYC",          desc: "PAN, Aadhaar, UAN, ESIC number for every employee." },
    { icon: FaMapMarkedAlt, title: "Bank Details",          desc: "Account number & IFSC for salary transfers." },
    { icon: FaFileContract, title: "Salary Structures",     desc: "CTC break‑up, allowances, reimbursement policy." },
    { icon: FaUniversity,   title: "Attendance & Leave",    desc: "Monthly CSV or API feed from your HRMS/biometric system." },
    { icon: FaUserShield,   title: "Tax Declarations",      desc: "Investment proofs, HRA rent slips, LTA, etc." },
    { icon: FaKey,          title: "Company Statutory IDs", desc: "PF, ESIC, PT registration numbers & TAN." },
  ];

  /* ------------------------------------------------------------------ */
  /* FAQ                                                                */
  /* ------------------------------------------------------------------ */
const faqs = [
  {
    q: "Which companies should outsource payroll?",
    a: "Startups, small businesses, and large enterprises can all benefit from outsourcing payroll. If your internal team lacks time, expertise, or resources to manage statutory compliance, tax deductions, and accurate salary calculations—outsourcing ensures peace of mind, legal compliance, and timely disbursement without needing to hire in-house payroll specialists."
  },
  {
    q: "Do you handle TDS return & Form 16?",
    a: "Yes. We manage the entire TDS lifecycle—from accurate monthly tax calculations and timely deposit of TDS (Form 24Q), to reconciliation with TRACES, generation of Part A & B of Form 16, and distribution to all employees in compliance with Income Tax Act provisions."
  },
  {
    q: "Can you integrate with our attendance tool?",
    a: "Absolutely. We offer flexible integration options through API or CSV uploads for popular HRMS and biometric systems. Alternatively, we provide secure pre-formatted Excel templates that your team can fill, which we import into our payroll system. This ensures minimal manual work and maximum accuracy."
  },
  {
    q: "Is employee data secure?",
    a: "Yes. We follow ISO 27001 standards and all employee data is encrypted using AES-256 bit encryption. Access is strictly role-based with multi-level authentication, and we sign NDAs with every client. Our servers are hosted in secure environments with regular audits to protect sensitive payroll information."
  },
  {
    q: "How quickly can we go live?",
    a: "Depending on your organization’s size and data readiness, implementation typically takes 2–3 payroll cycles. For teams with less than 100 employees and clean data, we can onboard and begin live processing in under 2 weeks. We assign a dedicated transition team to ensure a seamless and swift migration."
  },
];


  /* ------------------------------------------------------------------ */
  /* TYPES OF PAYROLL SERVICES                                          */
  /* ------------------------------------------------------------------ */
  const heading = "Types of Payroll Services";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Monthly Payroll Processing",  subtitle: "End‑to‑end gross‑to‑net calculation & payslips" },
    { icon: <FaBuilding     className="text-white text-3xl" />, title: "Statutory Compliance",       subtitle: "PF, ESIC, PT, LWF challans & returns" },
    { icon: <FaStore        className="text-white text-3xl" />, title: "TDS & Form 16",              subtitle: "Form 24Q filing, employee tax help‑desk" },
    { icon: <FaUniversity   className="text-white text-3xl" />, title: "Full & Final Settlement",    subtitle: "Accurate FnF for exiting employees" },
    { icon: <FaSmile        className="text-white text-3xl" />, title: "Payroll MIS & Analytics",    subtitle: "Cost centre, overtime & variance reports" },
    { icon: <FaHandshake    className="text-white text-3xl" />, title: "HR Self‑Service Portal",     subtitle: "Payslip download, tax planner, proof upload" },
  ];

  /* ------------------------------------------------------------------ */
  /* RENDER                                                             */
  /* ------------------------------------------------------------------ */
  return (
    <>
      {/* Hero / Intro */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[675px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Payroll Services & Compliance Management
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                From payslip generation to PF/ESIC/TDS filings, <strong>Chintan Agrawal & Co.</strong>
                offers a one‑stop payroll bureau that keeps your employees happy and your business compliant.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Outsource routine payroll and reclaim your time for strategic HR initiatives.
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

      {/* Why outsource payroll */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Outsource Payroll to Us?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Payroll mistakes cause employee frustration and statutory penalties.
              Our CA‑led team combines robust technology with deep compliance expertise
              so you never miss a deadline or pay more tax than required.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Zero Penalty Track‑Record:</strong> 7 years without a single late‑filing notice.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Dedicated Help‑Desk:</strong> Employee queries resolved within 4 business hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Scalable for Growth:</strong> Handles 5 to 5,000 headcount with the same accuracy.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/payroll.jpg"
              alt="Payroll processing desk illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Types of payroll services */}
      <Types filingTypes={filingTypes} heading={heading} />

      {/* Benefits */}
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Outsourcing Payroll</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
      <SectionTitle>Our Payroll Processing Workflow</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Documents */}
      <SectionTitle>Data & Documents We Need</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
