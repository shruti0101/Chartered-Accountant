'use client';

import { useState } from 'react';
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import ProcessSteps from "@/components/headcomponent/Process";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Hero from "@/components/headcomponent/Hero/Hero";
import DocumentsRequired from "@/components/headcomponent/Documents";
import {
  FaCheckCircle, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
} from "react-icons/fa";

export default function Section8CompanyRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);
 


const documents = [
  {
    icon: FaIdCard,
    title: "PAN & Aadhaar of Directors",
    desc: "Mandatory KYC documents for all directors and promoters of the NGO.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Registered Office Address Proof",
    desc: "Utility bill (not older than 2 months) and NOC from owner or rent agreement.",
  },
  {
    icon: FaFileContract,
    title: "Company Objectives & Work Plan",
    desc: "Detailed description of charitable objectives and how the NGO plans to achieve them.",
  },
  {
    icon: FaUserShield,
    title: "Photographs of Directors",
    desc: "Passport-size color photographs of all proposed directors.",
  },
  {
    icon: FaUniversity,
    title: "Digital Signature Certificate (DSC)",
    desc: "DSC of at least one director is required to sign incorporation documents online.",
  },
  {
    icon: FaKey,
    title: "Declaration & Consent Forms",
    desc: "Form DIR-2, INC-9, and declarations from directors regarding non-profit intent and compliance.",
  },
];


  const steps = [
    {
      icon: FaUniversity,
      subtitle: "Digital Signature (DSC)",
      desc: "Obtain DSCs for all directors to sign electronic forms for incorporation.",
    },
    {
      icon: FaFileContract,
      subtitle: "Director Identification Number (DIN)",
      desc: "Apply for DIN for all proposed directors through the SPICe+ form.",
    },
    {
      icon: FaLaptopCode,
      subtitle: "Name Reservation",
      desc: "Submit name reservation using the 'RUN' facility or SPICe+ Part A on the MCA portal.",
    },
    {
      icon: FaCertificate,
      subtitle: "Draft MOA & AOA",
      desc: "Prepare Memorandum and Articles of Association defining the non-profit objectives and company rules.",
    },
    {
      icon: FaCheckCircle,
      subtitle: "Incorporation Filing",
      desc: "Submit SPICe+ form with required attachments including MOA, AOA, and declarations for approval.",
    },
    {
      icon: FaLock,
      subtitle: "Get Incorporation Certificate",
      desc: "Once approved, receive your Certificate of Incorporation and begin operations legally.",
    },
  ];

  const title = "Section 8 Company (NGO) Registration";
  const description =
    "Register your NGO as a Section 8 Company to promote charitable objectives with legal status, tax exemptions, and improved donor trust. We provide end-to-end support for DSC, DIN, MOA drafting, and MCA filing.";

  const faqs = [
    {
      q: "What is a Section 8 Company?",
      a: "It is a non-profit company registered under the Companies Act, 2013 for charitable or social purposes. Unlike regular companies, it cannot distribute profits as dividends.",
    },
    {
      q: "What are the key benefits of registering as a Section 8 Company?",
      a: "Benefits include legal recognition, credibility with donors, income tax exemption under 12A and 80G, and access to CSR funds and government schemes.",
    },
    {
      q: "Can foreign donations be received by a Section 8 Company?",
      a: "Yes, after obtaining FCRA registration, Section 8 companies are eligible to receive foreign contributions.",
    },
    {
      q: "Is there any capital requirement?",
      a: "No, Section 8 companies do not require minimum paid-up capital to get registered.",
    },
    {
      q: "How long does it take to register?",
      a: "Typically, the registration process takes 10–15 working days, depending on document readiness and MCA approvals.",
    },
  ];

  return (
    <>
      <Hero title={title} description={description} />
      <div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Register a Section 8 Company?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              A <strong>Section 8 Company</strong> offers a formal legal structure to non-profit organizations aiming to serve society. It boosts credibility, provides tax benefits, and enables access to grants, donations, and CSR funds.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Non-Profit Status:</strong> Perfect for NGOs and social ventures with philanthropic goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Tax Exemption:</strong> Eligible for 80G and 12A benefits under Income Tax Act.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Corporate Structure:</strong> Operates with legal standing like a company but without profit motive.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Grants & Donations:</strong> Builds donor trust and opens doors for CSR and government funding.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Separate Legal Entity:</strong> Can own assets and enter contracts in its own name.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/section-8-2.webp"
              alt="Section-8 Company NGO"
              className="w-full mt-3 h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

<section className="relative bg-white py-14 px-4 md:px-12 lg:px-24 overflow-hidden">
  {/* Subtle background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-green-50 to-white" />

  <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
    {/* Left Text Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
        Section 8 Company Registration Certificate (NGO)
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        This is a sample of the <strong>Certificate of Incorporation</strong> issued by the Ministry of Corporate Affairs (MCA) upon successful registration of a Section 8 Company under the Companies Act, 2013.
        <br /><br />
        It contains important details such as the <strong>Company Identification Number (CIN)</strong>, date of incorporation, and the official seal of the Registrar of Companies. This certificate acts as legal proof of your NGO’s existence and enables you to apply for <strong>80G, 12A, and FCRA registration</strong>.
        <br /><br />
        It is essential for opening a bank account in the organization’s name, receiving donations, and availing government schemes and CSR funds.
      </p>
    </div>

    {/* Right Certificate Image */}
    <div className="relative">
      <div className="rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden max-w-md mx-auto">
        <img
          src="/navservices/section-8-cert.png" // ✅ Make sure this path is correct
          alt="Section 8 Company Registration Certificate"
          className="w-full h-auto object-contain rounded-md"
          loading="lazy"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          href="/navservices/section-8-cert.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-[#1C398E] hover:bg-[#0f265e] text-white text-sm font-semibold px-5 py-2 rounded-md transition"
        >
          View Full‑Size Certificate
        </a>
      </div>
    </div>
  </div>
</section>


    <section className="bg-[#f9f9f9] text-gray-800 px-4 py-12">
  <div className="mx-auto max-w-6xl">
    {/* heading */}
    <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a3e72]">
      Key Benefits of Registering a Section 8 Company (NGO)
    </h2>
    <p className="text-center max-w-xl mx-auto text-lg font-semibold mt-4 ">
      Section 8 Companies offer the perfect legal framework for non-profit organizations focused on education, healthcare, social impact, arts, and more.
    </p>

    {/* grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
      {/* left – checklist */}
      <ul className="space-y-4 text-base">
        {[
          "Enjoy full legal recognition as a not-for-profit company with limited liability protection.",
          "Eligible for tax exemptions under Sections 12A and 80G of the Income Tax Act.",
          "Build public trust and credibility while raising funds through donations or CSR support.",
          "No minimum capital requirement makes it accessible for grassroots initiatives and startups.",
          "Perpetual succession ensures continuity despite changes in board or management.",
          "Eligible to apply for FCRA license to receive foreign contributions legally.",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <span className="text-green-600 text-xl">✔️</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      {/* right – image */}
      <div className="">
        <img
          src="/navservices/section-8-1.png"
          alt="Section 8 NGO Benefits"
          className="max-w-md h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>



      <SectionTitle>Process for Section 8 Company Registration</SectionTitle>
      <ProcessSteps steps={steps} />
      <div className="p-3 md:p-5">
        <img
          className="max-w-5xl mx-auto h-auto object-contain"
          src="/navservices/section8-process.png"
          alt="Documents required for Section 8 Company"
        />
      </div>

   {/* Documents */}
      <SectionTitle>Documents & Data Required</SectionTitle>
      <DocumentsRequired documents={documents} />


      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />
      <Cta />
    </>
  );
}
