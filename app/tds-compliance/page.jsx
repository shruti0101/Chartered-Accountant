"use client";

import { useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaLock,
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate,
  FaBuilding, FaStore, FaHandshake, FaBriefcase,FaSmile 
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

export default function TDSComplianceServices() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    { title: "Accurate TDS Calculation", description: "Ensure correct tax deduction at source across salary, vendor, rent, and contract payments." },
    { title: "On-Time Deposits", description: "Avoid penalties and interest by timely depositing TDS with the government as per due dates." },
    { title: "Quarterly Return Filing", description: "File Form 24Q, 26Q, 27Q with complete accuracy and reconciliation with books." },
    { title: "Form 16 & 16A Generation", description: "Automate generation and employee/vendor distribution of Form 16/16A certificates." },
    { title: "TRACES Reconciliation", description: "Match challans, validate PANs, and prevent mismatches through TRACES portal integration." },
    { title: "Expert Assessment Handling", description: "Get assistance with TDS scrutiny, notices, defaults, and CPC intimation clarifications." },
  ];

  const steps = [
    { icon: FaUserShield, subtitle: "TDS Applicability Review", desc: "Identify payments liable for TDS across salaries, vendors, rents, and other heads." },
    { icon: FaFileContract, subtitle: "Accurate Calculation", desc: "Apply correct section rates based on nature of payment and deductor/resident status." },
    { icon: FaLaptopCode, subtitle: "Timely Deposits", desc: "Deposit TDS on or before the 7th of each month and generate challans (Form 281)." },
    { icon: FaCertificate, subtitle: "Quarterly Returns", desc: "Prepare and file 24Q/26Q/27Q returns with PAN validation and challan mapping." },
    { icon: FaLock, subtitle: "Form 16/16A Issuance", desc: "Generate and issue TDS certificates to employees and vendors via TRACES portal." },
    { icon: FaBriefcase, subtitle: "Default Management", desc: "Rectify defaults, respond to CPC notices, and update compliance records." },
  ];

  const documents = [
    { icon: FaIdCard, title: "PAN of Deductees", desc: "Mandatory for filing returns and generating Form 16/16A." },
    { icon: FaMapMarkedAlt, title: "Payment Breakups", desc: "Details of salary, contractor, professional, rent payments subject to TDS." },
    { icon: FaFileContract, title: "Challan Copies", desc: "Proof of tax deposited with the government under correct heads." },
    { icon: FaUniversity, title: "Previous Returns", desc: "Past filed returns and default notices (if any) for review and continuity." },
    { icon: FaUserShield, title: "TAN Registration", desc: "Tax Deduction Account Number (TAN) is mandatory for TDS compliance." },
    { icon: FaKey, title: "Login Credentials", desc: "TRACES and Income Tax Portal credentials for submission and reconciliation." },
  ];

  const faqs = [
    { q: "Who is required to deduct TDS?", a: "Any individual or business making specified payments (salary, rent, contract, etc.) above the threshold limit must deduct TDS as per the Income Tax Act." },
    { q: "What happens if TDS is not deducted or deposited?", a: "Failure to deduct or deposit TDS attracts interest, penalties, disallowance of expenses, and prosecution under Income Tax law." },
    { q: "Can you help with TDS returns for vendors and contractors?", a: "Yes. We file Form 26Q for contractor/vendor payments and ensure all sections (like 194C, 194J) are correctly applied and reported." },
    { q: "Do you offer Form 16 generation for employees?", a: "Absolutely. We prepare Part A & B of Form 16 and provide digital copies after reconciliation with TRACES." },
    { q: "How do you ensure accuracy in TDS filing?", a: "We use automated validations, PAN checks, challan linking, and TRACES reconciliation to minimize defaults and errors." },
  ];

  const heading = "Types of TDS Compliance Services";

  const filingTypes = [
    { icon: <FaRegBuilding className="text-white text-3xl" />, title: "Salary TDS - Form 24Q", subtitle: "Calculation, deposit & return filing for employees" },
    { icon: <FaBuilding className="text-white text-3xl" />, title: "Vendor TDS - Form 26Q", subtitle: "TDS on contractor, rent, commission & professional fees" },
    { icon: <FaUniversity className="text-white text-3xl" />, title: "NRI TDS - Form 27Q", subtitle: "Compliance for payments to non-residents" },
    { icon: <FaSmile className="text-white text-3xl" />, title: "TRACES Services", subtitle: "Form 16/16A download, challan linking, default rectification" },
    { icon: <FaHandshake className="text-white text-3xl" />, title: "CPC/Assessment Support", subtitle: "Handle TDS notices, replies & assessments" },
    { icon: <FaStore className="text-white text-3xl" />, title: "Consulting & Advisory", subtitle: "Periodic audits, compliance health-checks, TAN assistance" },
  ];

  return (
    <>
      <section>
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[675px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                TDS Compliance & Return Filing Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Ensure error-free TDS deductions, timely deposits, and flawless return filing with <strong>Chintan Agrawal & Co.</strong>—your expert compliance partner.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Whether salary or vendor TDS, our CA-led team ensures full legal compliance while preventing interest, notices, or mismatches.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />

      <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why Outsource TDS to Us?
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              TDS non-compliance results in disallowance of expenses, heavy interest, and CPC notices.
              Our expert team ensures end-to-end accuracy—from deduction to certificate issuance—so you stay legally compliant without internal stress.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Zero Default Guarantee:</strong> Avoid Section 201 disallowance with precise, on-time filings.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>TRACES Expertise:</strong> From PAN validation to Form 16 generation—we manage it all.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Multi-Industry Experience:</strong> From startups to manufacturers, we know your sector’s needs.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/tds.webp"
              alt="TDS compliance illustration"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Types filingTypes={filingTypes} heading={heading} />

      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of TDS Compliance with Experts</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      <SectionTitle>Our TDS Compliance Workflow</SectionTitle>
      <ProcessSteps steps={steps} />

      <SectionTitle>Documents We Need</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
