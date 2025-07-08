'use client'
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import StatsSection from "@/components/headcomponent/StatsSection";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey
} from "react-icons/fa";


export default function gstregistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);
const types = [
  "Profit & Loss Analysis",
  "Cash Flow & Fund Flow Statements",
  "Department-wise Performance Reports",
  "Sales & Collection Dashboards",
  "Budget vs Actual Comparison",


  "Custom Management Dashboards"
];

const head="Types of MIS Report"

const para="Our MIS reporting solutions cover every critical aspect of your business—from financial health to operational performance. Whether you need standard reports like Profit & Loss or advanced dashboards for inventory and budgeting, we tailor each report to your unique requirements."

const benefits = [
  {
    title: "Better Business Control",
    description: "Gain clear visibility into business performance across departments, regions, or teams.",
  },
  {
    title: "Real-Time Decision Making",
    description: "Empower leadership with real-time financial insights to support quick, informed actions.",
  },
  {
    title: "Profitability Analysis",
    description: "Track margins by product, customer, or business unit to focus on what's most profitable.",
  },
  {
    title: "Cash Flow Planning",
    description: "Monitor inflows and outflows with precision—avoid cash shortages and optimize usage.",
  },
  {
    title: "Goal-Oriented Monitoring",
    description: "Compare actual outcomes with budgets or projections to assess performance gaps.",
  },
  {
    title: "Investor & Lender Confidence",
    description: "Professionally prepared reports increase transparency and build trust with stakeholders.",
  },
  {
    title: "Custom Dashboards",
    description: "Get interactive dashboards tailored to your KPIs—sales, expenses, collections, and more.",
  },
  {
    title: "Regulatory Readiness",
    description: "Be ready with management-backed reports during audits, due diligence, or funding rounds.",
  }
];

const steps = [

    {
  icon: FaLock,
  subtitle: "Ongoing Support & Strategic Insights",
  desc: "We don’t stop at reporting. Our team offers regular reviews, helps you interpret the numbers, and provides strategic inputs to improve business performance and profitability.",
}
,
  {
    icon: FaUserShield,
    subtitle: "Understanding Your Requirements",
    desc: "We start with a detailed consultation to identify the key metrics, departments, and goals relevant to your business reporting needs.",
  },
  {
    icon: FaFileContract,
    subtitle: "Data Gathering & Validation",
    desc: "We extract data from accounting software, billing systems, or ERPs and ensure it is accurate, complete, and organized.",
  },
  {
    icon: FaKey,
    subtitle: "Report Structuring",
    desc: "We design report templates aligned with your business goals—whether monthly, quarterly, or real-time MIS dashboards.",
  },
  {
    icon: FaUniversity,
    subtitle: "Report Generation & Delivery",
    desc: "MIS reports are generated with deep analysis and commentary, delivered securely in your preferred format—PDF, Excel, or online dashboard.",
  },
  {
    icon: FaCheckCircle,
    subtitle: "Periodic Review & Optimization",
    desc: "We continuously review the reporting format and improve it as your business evolves, ensuring you always get relevant insights.",
  },
];





const faqs = [
  {
    q: "What are MIS Reports?",
    a: "MIS Reports (Management Information System Reports) are strategic reports that summarize your business's financial and operational performance in a structured, decision-friendly format.",
  },
  {
    q: "How often will I get MIS reports?",
    a: "We offer flexible schedules—monthly, quarterly, or even real-time dashboards based on your business needs.",
  },
  {
    q: "Can reports be customized for my business?",
    a: "Absolutely. Every report we create is tailored to your KPIs, departments, and goals—no generic templates.",
  },
  {
    q: "Do I need to change my accounting software?",
    a: "No. We work with the tools you already use—Tally, QuickBooks, Zoho Books, SAP, or Excel—and integrate seamlessly.",
  },
  {
    q: "Are these reports audit-ready?",
    a: "Yes. Our MIS reports can support audit processes, lender presentations, and investor due diligence confidently.",
  },
];


const gstStats = [
  {
    icon: FaRegBuilding,
    number: "500+",
    label: "MIS Dashboards Delivered",
  },
  {
    icon: FaSmile,
    number: "1,200+",
    label: "Business Owners Empowered",
  },
  {
    icon: FaCheckCircle,
    number: "99.9%",
    label: "On-Time Report Accuracy",
  },
];



  return (

    <>
    
    <section id="gst-services" className="py-12 md:py-18  ">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
      <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
        <div className=" hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
      </div>
      <div className="container mx-auto ">
        <div className="text-center mb-14">
         <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold text-[#1C398E] mb-4">
  Business Insights That Drive Growth
</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto">
  At <strong>Chintan Agrawal & Co.</strong>, we transform your accounting data into strategic reports that empower better decision-making. Our customized MIS reports reveal trends, risks, and opportunities—helping you run your business smarter.
</p>

        </div>

        <StatsSection stats ={gstStats}/>






        <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
          <FormSection />
          <TypesList types={types} head={head} para={para}/>
        </div>



<div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20  mb-14">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* LEFT TEXT SIDE */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
        What are MIS Reports?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        <strong>Management Information System (MIS) Reports</strong> are curated financial and operational summaries that help business leaders make informed decisions. These reports offer clarity on profit trends, cost leakages, collections, budgets, and more—turning raw data into actionable insights.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-[#1C398E] mb-4">Key Highlights</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span><strong>Performance Visibility:</strong> View real-time financial and operational health across departments.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span><strong>Better Cash Control:</strong> Analyze inflow and outflow trends for accurate cash flow forecasting.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span><strong>Decision Support:</strong> Drive smarter budgeting, cost reduction, and expansion plans.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span><strong>Stakeholder Confidence:</strong> Present professional reports to banks, investors, and auditors.</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-green-600 mt-1" />
            <span><strong>Fully Customizable:</strong> Tailored layouts for departments, projects, locations, or investor use cases.</span>
          </li>
        </ul>
      </div>
    </div>

    {/* RIGHT IMAGE SIDE */}
    <div>
      <img
        src="/navservices/mis.png"
        alt="MIS Reports"
        className="rounded-sm w-full h-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>





        <div className="bg-gradient-to-br from-[#eef3fb]  to-[#fdfdff] md:py-12 mt-3 px-4   rounded-xl">
          <SectionTitle>Benefits of MIS Reports</SectionTitle>
          <BenefitsList benefits={benefits} />
        </div>

        <SectionTitle className="">Our MIS Reports Process</SectionTitle>
        <ProcessSteps steps={steps} />

     
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQSection faqs={faqs} open={open} toggle={toggle} />
      </div>
    </section>

    <Cta></Cta>
    </>
  );
}