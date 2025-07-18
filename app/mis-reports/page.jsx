'use client';

import { useState } from "react";
import {
  FaCheckCircle, FaChartPie, FaFileContract, FaClipboardList,
  FaMapMarkedAlt, FaUserTie, FaUniversity, FaLaptopCode, FaKey
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";

export default function MISReports() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    { title: "Data-Driven Decisions", description: "MIS reports empower business owners to make informed decisions backed by real-time data." },
    { title: "Improved Efficiency", description: "Streamlines operations by identifying bottlenecks and improving resource utilization." },
    { title: "Performance Monitoring", description: "Track key performance indicators (KPIs) and measure productivity across departments." },
    { title: "Strategic Planning", description: "Identify trends, set goals, and align strategies based on accurate financial and operational insights." },
    { title: "Compliance & Accuracy", description: "Ensure accurate financial reporting and internal controls to stay compliant with statutory requirements." },
    { title: "Customized Reporting", description: "Get tailored reports like P&L, sales summary, inventory, expense tracker, and cash flow statements." },
  ];

  const steps = [
    { icon: FaFileContract, subtitle: "Understand Business Needs", desc: "Identify which reports your management team needs to track and improve performance." },
    { icon: FaLaptopCode, subtitle: "Collect & Organize Data", desc: "We gather data from different departments including finance, HR, sales, and inventory." },
    { icon: FaChartPie, subtitle: "Generate MIS Reports", desc: "Create monthly, quarterly, or custom reports including financials, operations, and compliance." },
    { icon: FaClipboardList, subtitle: "Review & Interpret Reports", desc: "Our experts help decode insights and patterns to make the data actionable for your growth." },
    { icon: FaCheckCircle, subtitle: "Implement Data-Driven Changes", desc: "Use insights to optimize processes, reduce costs, and improve profitability." },
    { icon: FaUserTie, subtitle: "Ongoing Reporting Support", desc: "We offer regular updates and flexible MIS solutions as per your business needs." },
  ];

  const documents = [
    { icon: FaFileContract, title: "Business Financial Statements", desc: "Profit & Loss, Balance Sheet, Cash Flow Statements." },
    { icon: FaMapMarkedAlt, title: "Sales & Purchase Records", desc: "Invoices, purchase bills, and client/vendor ledgers." },
    { icon: FaUniversity, title: "Bank Statements", desc: "Statements of all business accounts for the period of reporting." },
    { icon: FaKey, title: "Inventory & Stock Records", desc: "Current stock levels, inventory movement, and valuations." },
    { icon: FaUserTie, title: "HR & Payroll Data", desc: "Employee salary sheets, attendance, and statutory compliance records." },
    { icon: FaLaptopCode, title: "Other Business Insights", desc: "Any custom internal data required for decision-making reports." },
  ];

  const faqs = [
    { q: "What is an MIS Report?", a: "A Management Information System (MIS) report is a tool that provides data insights to help management in decision-making and performance tracking." },
    { q: "Which businesses need MIS reports?", a: "Any business—whether small or large—benefits from MIS reports for tracking performance, operations, and compliance." },
    { q: "What types of MIS reports are available?", a: "Common types include financial statements, sales reports, inventory reports, employee performance reports, and custom dashboards." },
    { q: "Can reports be customized?", a: "Yes. We offer fully customizable MIS reports tailored to your business’s unique requirements and KPIs." },
    { q: "How frequently are MIS reports generated?", a: "Reports can be generated monthly, quarterly, or on-demand based on your preferences." },
  ];

  return (
    <>
      <section className="">
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[670px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                MIS Report Preparation for Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Stay ahead with data-driven management. Our MIS reporting service helps you analyze performance, monitor operations, and plan strategies with clarity.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                We specialize in customized MIS solutions tailored to your industry and reporting frequency, whether monthly, quarterly, or annual.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />

      <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Your Business Needs MIS Reporting
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              MIS reports convert raw data into actionable insights to help you manage risks, forecast growth, and maintain compliance.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Clarity & Control:</strong> Get a clear picture of financial health and operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Better Forecasting:</strong> Spot business trends and prepare for market changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Improved Strategy:</strong> Leverage reports to build stronger plans for growth and compliance.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/mis.png"
              alt="MIS reporting process"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SectionTitle>Benefits of MIS Reporting</SectionTitle>
      <BenefitsList benefits={benefits} />

      <SectionTitle>MIS Reporting Process</SectionTitle>
      <ProcessSteps steps={steps} />

      <SectionTitle>Documents Required for MIS Reports</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}