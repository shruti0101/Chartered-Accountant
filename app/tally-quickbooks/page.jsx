"use client";

import { useState } from "react";
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";

import {
  FaCheckCircle, FaCloud, FaChartLine, FaSyncAlt, FaIdCard,
  FaMapMarkedAlt, FaFileContract, FaUniversity, FaUserShield,
  FaKey, FaLaptopCode, FaCertificate, FaUserTie, FaTools
} from "react-icons/fa";

export default function TallyQuickbooksServices() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const startupTypes = [
    { icon: <FaLaptopCode className="text-white text-3xl" />, title: "Tally ERP 9 / Prime", subtitle: "Offline Accounting Solution" },
    { icon: <FaCloud className="text-white text-3xl" />, title: "QuickBooks Online", subtitle: "Cloud-Based Accounting" },
    { icon: <FaSyncAlt className="text-white text-3xl" />, title: "Data Migration", subtitle: "Excel to Tally / QuickBooks" },
    { icon: <FaChartLine className="text-white text-3xl" />, title: "Custom Reports", subtitle: "MIS, Profit & Loss, GST Reports" },
    { icon: <FaUserTie className="text-white text-3xl" />, title: "Account Maintenance", subtitle: "Monthly or Quarterly Basis" },
    { icon: <FaTools className="text-white text-3xl" />, title: "Automation & Add-ons", subtitle: "Custom Scripts and Tools" },
  ];

  const benefits = [
    { title: "Accurate Books", description: "No more manual errors—ensure every transaction is accounted for with properly categorized entries and reconciled ledgers, providing a reliable foundation for decision-making and audits." },
    { title: "Tax-Ready Reports", description: "Generate GST returns, TDS summaries, and income tax data in one click. Stay prepared for tax seasons with real-time reports and automated compliance documentation." },
    { title: "Real-Time Tracking", description: "Access your financials anytime, anywhere with cloud-based systems. Get instant visibility into your cash flow, outstanding receivables, and upcoming liabilities." },
    { title: "Custom Dashboards", description: "MIS and performance reports tailored for your business goals—track KPIs, visualize trends, and gain actionable insights through intuitive dashboards and visual reports." },
    { title: "Compliance Made Easy", description: "Stay aligned with MCA, GST, and IT norms with expert oversight. We ensure your books are always audit-ready and up to date with the latest statutory requirements." },
    { title: "Cost-Effective", description: "Scalable plans based on business size with no hidden charges. Whether you're a startup or an established business, our flexible packages fit your budget and needs." },
  ];

  const steps = [
    { icon: FaUserShield, subtitle: "Initial Consultation", desc: "Understand your business structure and accounting needs." },
    { icon: FaLaptopCode, subtitle: "Software Setup", desc: "Install or onboard you to Tally/QuickBooks and configure settings." },
    { icon: FaFileContract, subtitle: "Data Entry / Migration", desc: "Upload your historical data from Excel or legacy tools." },
    { icon: FaCheckCircle, subtitle: "Ongoing Bookkeeping", desc: "We manage your daily entries, reconciliations, and reports." },
    { icon: FaCertificate, subtitle: "Review & Compliance", desc: "Regular audits, monthly review, and compliance checks." },
    { icon: FaChartLine, subtitle: "Performance Reports", desc: "We deliver balance sheet, P&L, cash flow, and tax summaries." },
  ];

  const documents = [
    { icon: FaIdCard, title: "Business PAN & GST", desc: "Basic registration details of your company or firm." },
    { icon: FaMapMarkedAlt, title: "Bank Statements", desc: "For reconciliation and matching transactions." },
    { icon: FaFileContract, title: "Purchase & Sales Invoices", desc: "For monthly entry and tax calculations." },
    { icon: FaUserShield, title: "Previous Year Books", desc: "Old Excel or software backup for migration." },
    { icon: FaUniversity, title: "Expense Bills", desc: "Utility, rent, and other cost records." },
    { icon: FaKey, title: "Access Credentials (if any)", desc: "To manage or supervise QuickBooks Online if used." },
  ];

  const faqs = [
    { q: "Which is better: Tally or QuickBooks?", a: "Tally is great for GST-compliant offline bookkeeping, while QuickBooks excels at cloud-based accounting, ideal for remote collaboration and real-time insights." },
    { q: "Do I need to buy the software?", a: "We offer both license advisory and fully managed accounting services where software ownership is not required. We can work on your subscription or provide access through our infrastructure." },
    { q: "Can I migrate from Excel?", a: "Yes, we ensure a smooth and secure migration from Excel or legacy systems into Tally or QuickBooks, preserving data accuracy and structure." },
    { q: "How often are books updated?", a: "We offer flexible options—daily, weekly, or monthly bookkeeping—tailored to your business volume and compliance needs." },
    { q: "Is data safe?", a: "Absolutely. We use encrypted file transfers, secure cloud backups, and strict access controls to ensure your financial data remains private and safe." },
    { q: "Can I access reports anytime?", a: "Yes. With cloud-based tools like QuickBooks, you can log in anytime to view live dashboards, download financial reports, and track real-time performance." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[660px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Tally & QuickBooks Accounting Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Streamline your business finances with expert accounting services in <strong>Tally ERP 9 / Prime</strong> and <strong>QuickBooks Online</strong>. At Chintan Agrawal & Co., we offer end-to-end bookkeeping, reconciliation, and reporting to help you make smarter decisions.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Whether you're a startup, small business, or growing enterprise, our cloud-enabled tools and Chartered Accountant expertise ensure your financials are always accurate, compliant, and audit-ready.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />

      {/* Platform Info */}
      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Use Tally & QuickBooks?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              These accounting platforms help businesses stay on top of their books with <strong>automation, real-time reports,</strong> and <strong>secure financial data</strong>. We help you get the most out of them.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /><span><strong>Tally ERP / Prime:</strong> Best for offline accounting, GST invoicing, and inventory management.</span></li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /><span><strong>QuickBooks Online:</strong> Ideal for online collaboration, cloud-based tracking, and instant financial reports.</span></li>
              <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /><span><strong>Data Migration:</strong> Smooth switch from Excel or legacy systems to modern accounting.</span></li>
            </ul>
          </div>
          <div>
            <img src="/navservices/telly.png" alt="Accounting Platforms" className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Types */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Types of Tally or QuickBooks Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {startupTypes.map((type, idx) => (
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
        <SectionTitle>Benefits of Tally & QuickBooks</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

      <SectionTitle>Process for Tally & QuickBooks</SectionTitle>
      <ProcessSteps steps={steps} />

      <SectionTitle>Documents Required for Tally & QuickBooks</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
