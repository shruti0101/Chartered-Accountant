/* GSTServices.jsx */
"use client";
import { useState } from "react";
import {
  FaCheckCircle,
  FaRegBuilding,
  FaSmile,
  FaLock,
  FaAngleDown,
} from "react-icons/fa";

import {
  FaIdCard,
  FaMapMarkedAlt,
  FaFileContract,
  FaUniversity,
  FaUserShield,
  FaKey,
} from "react-icons/fa";

export default function GSTServices() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <section id="gst-services" className=" py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
            Simplified GST Registration with Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <strong>Chintan Agrawal & Co.</strong>, we simplify GST compliance
            so you can focus on business growth. From initial registration to
            complex follow-ups, we take care of everything—accurately and on time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <Stat icon={FaRegBuilding} number="500+" label="GST Notices Resolved" />
          <Stat icon={FaSmile} number="2,000+" label="Satisfied Clients" />
          <Stat icon={FaLock} number="100%" label="Data Security Guaranteed" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-20 pt-15">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Get Your All‑Inclusive Quote & Free Consultation
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Name" type="text" placeholder="Your Name" />
                <Input label="Phone" type="tel" placeholder="+91 81234 56789" />
              </div>
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Message" type="text" placeholder="Tell us your query" />
              <button
                type="button"
                className="w-full bg-[#1C398E] hover:bg-[#152b6a] text-white font-semibold py-3 rounded-lg transition"
              >
                Get Detailed Quotation
              </button>
            </form>
          </div>

          <div className="relative">
            <img src="/dot.webp" alt="" className="absolute hidden md:block -right-12 -top-14" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#1C398E]  text-center md:text-start">
              Types of GST Registration
            </h3>
            <ul className="list-disc text-xl list-inside space-y-2 text-gray-700 leading-relaxed">
              {["Regular GST Registration", "Composition Scheme Registration", "Casual Taxable Person", "Non‑Resident Taxable Person", "Input Service Distributor (ISD)", "TDS & TCS Registrations", "UN / Embassy & Notified Bodies", "E‑Commerce Operator Registration"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] py-12 px-4 rounded-xl">
          <SectionTitle>Benefits of Registering under GST</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {["Full legal compliance—avoid penalties & late fees.", "Claim Input‑Tax Credit and reduce tax outflow.", "Free interstate trading—grow beyond state borders.", "Boost credibility with customers & suppliers.", "Access lucrative government tenders/contracts.", "Automated invoicing & streamlined tax filing.", "Mandatory for most e‑commerce platform sellers.", "Quick refunds for exporters—improve cash flow.", "Unlock financial transparency—enhance confidence.", "Better financial record keeping and auditing.", "Eligibility for input credit on capital goods & services.", "Improves supplier and vendor relationships.",].map((text) => (
              <Benefit key={text} text={text} />
            ))}
          </div>
        </section>

        <SectionTitle>Documents Required for GST Registration</SectionTitle>
        <div className="grid sm:grid-cols-2 mt-20 gap-10 mb-20 max-w-5xl mx-auto">
          {[
            { icon: FaIdCard, title: "Identity Proof", desc: "PAN, Aadhaar, Passport, Voter ID, or Driving Licence of applicant / partners." },
            { icon: FaMapMarkedAlt, title: "Address Proof", desc: "Utility bill, rent agreement, or ownership proof for business premises." },
            { icon: FaFileContract, title: "Business Registration Proof", desc: "COI, Partnership Deed, LLP Agreement, MOA / AOA, etc." },
            { icon: FaUniversity, title: "Bank Account Details", desc: "Cancelled cheque, passbook, or latest bank statement." },
            { icon: FaUserShield, title: "Authorized Signatory Docs", desc: "Authorization letter plus ID & address proof of the signatory." },
            { icon: FaKey, title: "Digital Signature (DSC)", desc: "Mandatory Class‑3 DSC token for companies and LLPs." },
          ].map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 border-l-4 border-[#00A63E] pl-4 py-2 group"
            >
              <Icon className="text-[#1C398E] w-9 h-9 gap-4 flex-shrink-0 animate-bounce" />
              <div>
                <h4 className="font-semibold text-xl text-gray-800">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>


        <SectionTitle>Frequently Asked Questions</SectionTitle>
         <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/70 via-sky-100/60 to-teal-50" />

         
      <div className="absolute inset-0 -z-20 rotate-45 origin-top-left">
        <div className="h-full w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
      </div>
        <div className="max-w-4xl   mx-auto text-xl">
          {faqData.map((faq, idx) => (
            <FAQ 
              key={idx}
              idx={idx}
              open={open}
              toggle={toggle}
              question={faq.q}
              answer={faq.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const Stat = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center bg-white shadow rounded-xl py-6 px-4">
    <Icon className="text-[#1C398E] w-10 h-10 mb-2" />
    <span className="text-2xl font-bold">{number}</span>
    <p className="text-gray-600 text-sm text-center">{label}</p>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#1C398E] focus:border-[#1C398E] outline-none"
    />
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-4xl font-semibold text-[#1C398E] text-center mb-8">
    {children}
  </h3>
);

const Benefit = ({ text }) => (
  <div className="flex items-start gap-3 bg-white shadow rounded-lg p-4">
    <FaCheckCircle className="text-green-600 mt-1" />
    <p className="text-gray-700">{text}</p>
  </div>
);

const FAQ = ({ idx, open, toggle, question, answer }) => (
  <div className="border-b last:border-none">
    <button
      onClick={() => toggle(idx)}
      className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
    >
      {question}
      <FaAngleDown
        className={`transform transition ${open === idx ? "rotate-180" : "rotate-0"}`}
      />
    </button>
    {open === idx && <p className="pb-4 text-gray-600 leading-relaxed">{answer}</p>}
  </div>
);

const faqData = [
  { q: "What is GST registration?", a: "It is the process of enrolling a business under the Goods & Services Tax Act, after which the business receives a unique GSTIN." },
  { q: "Who must register for GST?", a: "Any entity whose turnover exceeds the prescribed threshold, or anyone engaged in interstate supply, e‑commerce, or specific notified activities." },
  { q: "What benefits do I get once registered?", a: "You gain legal compliance, input‑tax credit, smoother interstate trade, improved credibility, and eligibility for certain government projects." },
  { q: "What documents are required?", a: "Identity & address proofs, business registration proof, bank details, and an authorised signatory’s digital signature." },
  { q: "How long does approval take?", a: "With complete documentation, GSTIN is usually allotted within 3–7 working days." },
  { q: "Can Chintan Agrawal & Co. handle the entire process?", a: "Absolutely. From application to follow‑up and notice resolution, we manage it end‑to‑end." },
];
