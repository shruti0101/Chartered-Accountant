'use client';

import { useState } from 'react';
import SectionTitle from "@/components/headcomponent/Sectiontitle";


import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Hero from "@/components/headcomponent/Hero/Hero";

import {
  FaCheckCircle, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
  FaExpand, FaBuilding, FaStore, FaHandshake, FaMoneyBillWave, FaChild
} from "react-icons/fa";

export default function StartupRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const startupTypes = [
    { icon: <FaExpand className="text-white text-3xl" />, title: "Scalable", subtitle: "Startups" },
    { icon: <FaBuilding className="text-white text-3xl" />, title: "Large Company", subtitle: "Startups" },
    { icon: <FaStore className="text-white text-3xl" />, title: "Small Business", subtitle: "Startups" },
    { icon: <FaHandshake className="text-white text-3xl" />, title: "Social", subtitle: "Startups" },
    { icon: <FaChild className="text-white text-3xl" />, title: "Lifestyle", subtitle: "Startups" },
    { icon: <FaMoneyBillWave className="text-white text-3xl" />, title: "Buyable", subtitle: "Startups" },
  ];

  const benefits = [
    { title: "Tax Exemption", description: "Eligible startups can claim a 3-year income tax holiday under Section 80-IAC of the Income Tax Act." },
    { title: "Self-Certification Under Labour Laws", description: "Startups can self-certify compliance under 9 labour and environmental laws." },
    { title: "Easier Public Procurement", description: "No requirement of prior experience or turnover for participating in government tenders." },
    { title: "IPR Support & Fast-Tracking", description: "Get up to 80% rebate on patent filing fees and enjoy fast-tracked IP registration." },
    { title: "Funding Opportunities", description: "Access to ₹10,000 Cr Fund of Funds through SEBI-registered Venture Capital firms." },
    { title: "Easy Exit Option", description: "Startups can wind up their business within 90 days under the Insolvency and Bankruptcy Code." },
  ];

  const steps = [
    { icon: FaUniversity, subtitle: "Business Incorporation", desc: "Register your business with MCA or relevant authority." },
    { icon: FaLaptopCode, subtitle: "Create Startup India Profile", desc: "Sign up at startupindia.gov.in and fill in your business profile." },
    { icon: FaFileContract, subtitle: "Apply for DPIIT Recognition", desc: "Submit documents including incorporation certificate and pitch deck." },
    { icon: FaCertificate, subtitle: "Receive Startup Certificate", desc: "Get your DPIIT Recognition Certificate via email." },
    { icon: FaCheckCircle, subtitle: "Avail Government Benefits", desc: "Apply for tax benefits, funding, and tender participation." },
    { icon: FaLock, subtitle: "Stay Compliant & Grow", desc: "Ensure timely filings, maintain DPIIT status, and grow your startup." },
  ];

  const documents = [
    { icon: FaIdCard, title: "Incorporation Certificate", desc: "Issued by MCA for your entity (Pvt Ltd, LLP, or Partnership)." },
    { icon: FaMapMarkedAlt, title: "PAN of the Entity", desc: "Valid PAN card in business name." },
    { icon: FaFileContract, title: "Business Description or Pitch Deck", desc: "Brief on your business model and innovation." },
    { icon: FaUserShield, title: "Director/Partner Details", desc: "KYC details of directors or partners." },
    { icon: FaUniversity, title: "Website or Product Demo", desc: "Optional validation of your startup’s presence." },
    { icon: FaKey, title: "Funding Proof (if applicable)", desc: "Details of investment from SEBI-recognized sources." },
  ];

  const title="Register Your Startup Under Startup India";
  const description="Get your business officially recognized under the Startup India Scheme with Chintan Agrawal & Co. From documentation to DPIIT certification, we manage everything for you. The Government of India has launched the Startup India initiative to empower budding entrepreneurs with regulatory relaxations, tax exemptions, and access to funding and mentorship..";

 const faqs = [
  {
    q: "Who can register under Startup India?",
    a: "Entities registered as a Private Limited Company, Limited Liability Partnership (LLP), or Partnership Firm in India are eligible. To qualify, the entity must be less than 10 years old and have an annual turnover of less than ₹100 crore in any previous financial year. Additionally, the business should be working toward innovation, development, or improvement of products or services, or have a scalable business model with high potential for employment or wealth creation.",
  },
  {
    q: "Is there any registration fee?",
    a: "No, there is absolutely no government fee for applying for Startup India recognition or DPIIT (Department for Promotion of Industry and Internal Trade) certification. However, professional assistance for document preparation and submission might involve a service fee depending on your consultant or CA firm.",
  },
  {
    q: "Is Startup India recognition mandatory?",
    a: "Startup India recognition is not mandatory for operating a business in India. However, obtaining DPIIT recognition is highly recommended because it offers numerous benefits including tax exemption under Section 80 IAC, access to government tenders, fast-track patent filing, easier funding access, and various state-level startup schemes.",
  },
  {
    q: "How long does approval take?",
    a: "Once all required documents are submitted correctly and the application is complete, DPIIT recognition approval typically takes 2 to 7 working days. In some cases, if additional clarification or documentation is needed, it might take slightly longer.",
  },
  {
    q: "Can foreign-owned startups apply?",
    a: "Yes, foreign-owned startups are eligible for Startup India recognition provided the business is registered in India as a Private Limited Company, LLP, or Partnership. The entity must also meet the turnover and age criteria. However, eligibility for certain benefits such as tax exemptions may depend on shareholding structure and other regulatory requirements.",
  },
];




  return (
    <>
      {/* Hero Section */}
     
    <Hero title={title} description={description}></Hero>
   

      {/* Recognition Info */}
      <div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl mt-7  md:text-4xl font-extrabold text-[#1C398E] mb-4">
              What is Startup India Recognition?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Recognized startups get access to <strong>tax benefits</strong>, <strong>funding</strong>, and simplified compliance norms.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>DPIIT Recognition:</strong> Certifies your business under Govt norms.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Funding Access:</strong> Connect with SEBI-registered investors.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Startup India Hub:</strong> Central platform for mentorship and schemes.</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="/navservices/startupp.jpg" alt="Startup India" className="w-full mt-3 h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Types */}
      <section className="md:py-12  py-5 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Types of Startups
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

      <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Startup India Registration</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

      <SectionTitle>Process for Startup Registration</SectionTitle>
      <ProcessSteps steps={steps} />

      <SectionTitle>Documents Required for Startup Registration</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
