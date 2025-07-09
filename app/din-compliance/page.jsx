'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import {
  FaCheckCircle, FaSmile, FaLock, FaIdCard, FaMapMarkedAlt,
  FaFileContract, FaUserShield, FaKey, FaLaptopCode, FaCertificate, FaBuilding
} from 'react-icons/fa';

import SectionTitle      from '@/components/headcomponent/Sectiontitle';
import FormSection       from '@/components/headcomponent/Formsection';
import TypesList         from '@/components/headcomponent/Typelist';
import BenefitsList      from '@/components/headcomponent/Benefits';
import ProcessSteps      from '@/components/headcomponent/Process';
import DocumentsRequired from '@/components/headcomponent/Documents';
import FAQSection        from '@/components/headcomponent/Faq';
import Cta               from '@/components/Cta/Cta';

/* 🚫  Skip SSR for the animated counters to avoid hydration mismatch */
const StatsSection = dynamic(
  () => import('@/components/headcomponent/StatsSection'),
  { ssr: false }
);

export default function DINCompliance() {
  /* ----------------------- local state ------------------------ */
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  /* ------------------------- content -------------------------- */
  const heading = 'Types of DIN Compliance';
  const para =
    'Depending on your status as a director and your previous filings, ' +
    'DIN compliance can fall under various categories. Below are the common ' +
    'types of DIR‑3 KYC services. Each type is crucial to ensure seamless ' +
    'legal and corporate operations.';

  const types = [
    'First‑time KYC Filing – For directors filing DIR‑3 KYC for the first time.',
    'Annual DIR‑3 KYC – Mandatory yearly filing for active DIN holders.',
    'Web‑based KYC – OTP‑based eKYC for those who filed last year.',
    'DSC Assistance – Support in getting or renewing Digital Signatures.',
  ];

  const benefits = [
    {
      title: 'Avoid DIN Deactivation',
      description:
        'Filing DIR‑3 KYC on time ensures your DIN remains active and functional.',
    },
    {
      title: 'Mandatory MCA Compliance',
      description:
        'Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2018 makes annual filing compulsory.',
    },
    {
      title: 'Avoid ₹5,000 Penalty',
      description:
        'Missing the 30 September deadline attracts an immediate ₹5,000 fee.',
    },
    {
      title: 'Maintain Director Validity',
      description:
        'An active DIN is required for signing ROC forms, incorporations, board resolutions, etc.',
    },
    {
      title: 'Hassle‑Free Process',
      description:
        'With a valid DSC, Aadhaar OTP and basic docs, filing takes under 30 minutes.',
    },
    {
      title: 'Professional Credibility',
      description:
        'Timely compliance boosts trust among stakeholders and regulators.',
    },
    {
      title: 'Avoid Business Disruption',
      description:
        'DIN deactivation can stall fund‑raising, director appointments and legal contracts.',
    },
    {
      title: 'Applicable to All DIN Holders',
      description:
        'Even dormant directors must file DIR‑3 KYC annually to keep the DIN active.',
    },
  ];

  const steps = [
    { icon: FaIdCard,       subtitle: 'Gather KYC Documents',  desc: 'PAN, Aadhaar, Passport (if any), Email, Mobile.' },
    { icon: FaLaptopCode,   subtitle: 'DSC Validation',        desc: 'Ensure your Digital Signature Certificate is valid.' },
    { icon: FaFileContract, subtitle: 'Form Preparation',      desc: 'Fill DIR‑3 KYC, OTP verify, digitally sign.' },
    { icon: FaCertificate,  subtitle: 'MCA Filing',            desc: 'Upload to MCA portal; obtain SRN & confirmation.' },
    { icon: FaCheckCircle,  subtitle: 'Receive Acknowledgment',desc: 'MCA sends a confirmation email on success.' },
    { icon: FaLock,         subtitle: 'Stay Compliant Yearly', desc: 'File before 30 September every year.' },
  ];

  const documents = [
    { icon: FaIdCard,       title: 'PAN Card',                 desc: 'Identity proof for Indian nationals.' },
    { icon: FaMapMarkedAlt, title: 'Aadhaar Card',             desc: 'Must be linked to your mobile for OTP.' },
    { icon: FaUserShield,   title: 'Passport (if any)',        desc: 'For DIN holders of foreign nationality.' },
    { icon: FaLaptopCode,   title: 'Email & Mobile',           desc: 'For MCA OTP validation.' },
    { icon: FaKey,          title: 'Digital Signature',        desc: 'To e‑sign the DIR‑3 KYC form.' },
    { icon: FaFileContract, title: 'Recent Photograph',        desc: 'Passport‑size photo for the form.' },
  ];

  const faqs = [
    {
      q: 'Who must file DIR‑3 KYC?',
      a: 'Every DIN holder as on 31 March must file, even if the DIN is unused.',
    },
    { q: 'Is DSC mandatory?',         a: 'Yes. The form must be DSC‑signed and certified by a CA/CS/CMA.' },
    { q: 'What if I miss the date?',  a: 'Your DIN gets deactivated and ₹5,000 is payable to reactivate.' },
    { q: 'Deadline each year?',       a: '30 September for all directors with an active DIN.' },
    { q: 'I’m not in any company?',   a: 'You still must file if your DIN is active.' },
  ];

  const stats = [
    { icon: FaBuilding,    number: '2,500+', label: 'KYC Filings Handled' },
    { icon: FaSmile,       number: '1,000+', label: 'DINs Reactivated'    },
    { icon: FaCheckCircle, number: '100%',   label: 'MCA Approval Rate'   },
  ];

  /* --------------------------- render -------------------------- */
  return (
    <>
      <section id="din-compliance" className="py-12 ">
        {/* decorative gradients */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
          <div className="hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>

        <div className="container mx-auto p-4">
          {/* hero */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4 max-w-5xl mx-auto">
              DIN Compliance (DIR‑3 KYC) Filing for Company Directors
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure your DIN stays active and dodge the ₹5,000 penalty. File your DIR‑3 KYC with&nbsp;
              <strong>Chintan Agrawal & Co.</strong>
            </p>
          </div>

          {/* stats – client‑only */}
          <StatsSection stats={stats} />

          {/* form + service types */}
          <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
            <FormSection />
            <TypesList types={types} head={heading} para={para} />
          </div>

          {/* benefits */}
          <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 mt-3 px-4 rounded-xl">
            <SectionTitle>Benefits of Filing DIR‑3 KYC</SectionTitle>
            <BenefitsList benefits={benefits} />
          </div>

          {/* why choose us */}
          <div className="my-10 mx-auto max-w-5xl">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              Why choose us for DIN Compliance
            </h3>
            <img
              src="/navservices/8.png"
              alt="DIN Compliance illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>

          {/* process, docs, faq */}
          <SectionTitle>DIR‑3 KYC Filing Process</SectionTitle>
          <ProcessSteps steps={steps} />

          <SectionTitle>Documents Required</SectionTitle>
          <DocumentsRequired documents={documents} />

          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQSection faqs={faqs} open={openIdx} toggle={toggle} />
        </div>
      </section>

      {/* global call‑to‑action banner */}
      <Cta />
    </>
  );
}
