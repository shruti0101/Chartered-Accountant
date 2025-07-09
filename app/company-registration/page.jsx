'use client';

import {
  FaCheckCircle,
  FaRegBuilding,
  FaSmile,
  FaLock,
  FaIdCard,
  FaMapMarkedAlt,
  FaFileContract,
  FaUniversity,
  FaUserShield,
  FaKey,
} from 'react-icons/fa';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import SectionTitle      from '@/components/headcomponent/Sectiontitle';
import FormSection       from '@/components/headcomponent/Formsection';
import TypesList         from '@/components/headcomponent/Typelist';
import BenefitsList      from '@/components/headcomponent/Benefits';
import ProcessSteps      from '@/components/headcomponent/Process';
import DocumentsRequired from '@/components/headcomponent/Documents';
import FAQSection        from '@/components/headcomponent/Faq';
import Cta               from '@/components/Cta/Cta';
import Setsapart         from '@/components/Setsapart/Setsapart';

/* ───────────────── client‑only counters to avoid hydration mismatch */
const StatsSection = dynamic(
  () => import('@/components/headcomponent/StatsSection'),
  { ssr: false }
);

/* ──────────────────────────────────────────────────────────────── */
/* page component                                                  */
/* ──────────────────────────────────────────────────────────────── */
export default function CompanyRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  /* ---------- static data ---------- */
  const types = [
    'Private Limited Company',
    'One Person Company (OPC)',
    'Limited Liability Partnership (LLP)',
    'Partnership Firm',
    'Sole Proprietorship Registration',
    'Nidhi Company Registration',
    'Section 8 Company (NGO)',
    'Producer Company',
  ];

  const head="Types Of Company Registration"
  const para="hgruy"

  const benefits = [
    { title: 'Legal Entity Recognition', description: 'Company registration gives your business a separate legal identity …' },
    { title: 'Limited Liability',        description: 'Shareholders’ personal assets are protected …' },
    { title: 'Access to Funding',        description: 'Registered companies can raise equity capital …' },
    { title: 'Credibility & Trust',      description: 'A registered business enhances your reputation …' },
    { title: 'Tax Advantages',           description: 'Registered companies can avail tax exemptions …' },
    { title: 'Perpetual Succession',     description: 'A company continues to exist even if ownership changes …' },
  ];

  const steps = [
    { icon: FaUserShield,   subtitle: 'Initial Consultation',        desc: 'We assess your structure, goals, compliance needs …' },
    { icon: FaFileContract, subtitle: 'Document Preparation',        desc: 'We collect and verify ID proofs …' },
    { icon: FaKey,          subtitle: 'Application Filing',          desc: 'We file the incorporation docs with MCA …' },
    { icon: FaUniversity,   subtitle: 'Certificate of Incorporation',desc: 'You receive the COI once approved …' },
    { icon: FaCheckCircle,  subtitle: 'Post‑Incorporation Support',  desc: 'Bank account, GST, MSME, etc.' },
    { icon: FaSmile,        subtitle: 'Compliance Advisory',         desc: 'Annual compliance, ROC filings …' },
  ];

  const documents = [
    { icon: FaIdCard,       title: 'Identity Proof',             desc: 'PAN card of all directors / partners.' },
    { icon: FaMapMarkedAlt, title: 'Address Proof',              desc: 'Aadhaar / passport / utility bill (≤ 2 months).' },
    { icon: FaFileContract, title: 'Business Address Proof',     desc: 'Electricity bill, rent agreement, property‑tax receipt.' },
    { icon: FaUniversity,   title: 'Photographs',                desc: 'Passport‑size photos of all directors / partners.' },
    { icon: FaUserShield,   title: 'Digital Signature (DSC)',    desc: 'For e‑form signing during incorporation.' },
    { icon: FaKey,          title: 'No‑Objection Certificate',   desc: 'From owner if using rented office space.' },
  ];

  const companyStats = [
    { icon: FaRegBuilding, number: '1,500+', label: 'Companies Registered' },
    { icon: FaSmile,       number: '3,000+', label: 'Entrepreneurs Empowered' },
    { icon: FaCheckCircle, number: '100%',   label: 'Govt. Approval Success' },
  ];

  const faqs = [
    { q: 'What types of companies can I register?', a: 'Private Ltd, OPC, LLP, Partnership, Section 8 …' },
    { q: 'Minimum requirement?',                    a: 'One director / shareholder, Indian address, ID proof.' },
    { q: 'How long does it take?',                  a: 'Typically 5–10 working days.' },
    { q: 'Is GST required after incorporation?',    a: 'Yes, if turnover exceeds the limit or for interstate trade.' },
    { q: 'Why choose Chintan Agrawal & Co.?',       a: 'Expert filing, advisory, full support.' },
  ];

  /* ---------- JSX ---------- */
  return (
    <>
      <section id="company-registration" className="py-12 ">
        {/* decorative gradients */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
          <div className="hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>

        <div className="container mx-auto p-4">
          {/* hero text */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4 max-w-6xl mx-auto">
              Company Registration Services for Every Business Type
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Register your company seamlessly with <strong>Chintan Agrawal & Co.</strong>—your trusted partner for legal, tax and compliance support.
            </p>
          </div>

          {/* stats – client‑only component */}
          <StatsSection stats={companyStats} />

          {/* form + entity types */}
          <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
            <FormSection />
            <TypesList types={types} head={head} para={para} />
          </div>

          {/* benefits */}
          <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 mt-3 px-4 rounded-xl">
            <SectionTitle>Benefits of Company Registration</SectionTitle>
            <BenefitsList benefits={benefits} />
          </div>

          {/* process */}
          <SectionTitle>Our Company Registration Process</SectionTitle>
          <ProcessSteps steps={steps} />

          {/* hero image */}
          <div className="overflow-hidden max-w-5xl mx-auto my-10">
            <img
              src="/navservices/company.png"
              alt="Company Registration"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* documents */}
          <SectionTitle>Documents Required for Company Registration</SectionTitle>
          <DocumentsRequired documents={documents} />

          {/* faq */}
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQSection faqs={faqs} open={open} toggle={toggle} />
        </div>
      </section>

      {/* call‑to‑action banner */}
      <Cta />
    </>
  );
}
