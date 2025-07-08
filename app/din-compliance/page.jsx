'use client';
import {  useState } from "react";
import {
  FaCheckCircle, FaSmile, FaLock, FaIdCard, FaMapMarkedAlt,
  FaFileContract, FaUniversity, FaUserShield, FaKey, FaLaptopCode, FaCertificate, FaBuilding
} from "react-icons/fa";


import { useState } from 'react';
import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import TypesList from "@/components/headcomponent/Typelist";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";



export default function DINCompliance() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const heading = "Types of DIN Compliance";

const para =
  "Depending on your status as a director and your previous filings, DIN compliance can fall under various categories. Below are the common types of DIR-3 KYC services. Each type is crucial to ensure seamless legal and corporate operations.";

// Enhanced types list
const types = [
  "First-time KYC Filing – For directors filing DIR-3 KYC for the first time.",
  "Annual DIR-3 KYC – Mandatory yearly filing for active DIN holders.",
  "Web-based KYC – OTP-based eKYC for those who filed last year.",
  "DSC Assistance – Support in getting or renewing Digital Signatures.",

];


const benefits = [
  {
    title: "Avoid DIN Deactivation",
    description:
      "Filing DIR-3 KYC on time ensures your Director Identification Number (DIN) remains active and functional. An inactive DIN can halt your ability to act as a director in any company.",
  },
  {
    title: "Mandatory MCA Compliance",
    description:
      "As per Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2018, it is compulsory for all DIN holders to file their KYC annually with the Ministry of Corporate Affairs (MCA).",
  },
  {
    title: "Avoid ₹5,000 Penalty",
    description:
      "Failure to file before the 30th September deadline leads to DIN deactivation and an immediate penalty of ₹5,000 to reactivate, as prescribed by MCA regulations.",
  },
  {
    title: "Maintain Director Validity",
    description:
      "An active DIN is required for signing ROC forms, incorporation papers, resolutions, and participating legally in board meetings or official filings.",
  },
  {
    title: "Hassle-Free Process",
    description:
      "With a valid DSC, Aadhaar-linked mobile number, and basic documents, DIR-3 KYC filing is quick, online, and can be completed in under 30 minutes.",
  },
  {
    title: "Professional Credibility",
    description:
      "Timely compliance boosts your trustworthiness among stakeholders, regulatory authorities, and clients — showcasing your commitment to corporate governance.",
  },
  {
    title: "Avoid Business Disruption",
    description:
      "DIN deactivation can stall crucial activities such as fund raising, director appointments, annual return filing, and legal contract execution.",
  },
  {
    title: "Applicable to All DIN Holders",
    description:
      "Even directors who are not currently associated with any company are required to file DIR-3 KYC annually to maintain their DIN status.",
  },
];


  const steps = [
    { icon: FaIdCard, subtitle: "Gather KYC Documents", desc: "PAN, Aadhaar, Passport (if applicable), Email, Mobile Number." },
    { icon: FaLaptopCode, subtitle: "DSC Validation", desc: "Ensure valid Digital Signature Certificate (DSC) is active." },
    { icon: FaFileContract, subtitle: "Form Preparation", desc: "Form DIR-3 KYC is filled, OTP verified, and digitally signed." },
    { icon: FaCertificate, subtitle: "MCA Filing", desc: "Submit the form on the MCA portal and obtain SRN and confirmation." },
    { icon: FaCheckCircle, subtitle: "Receive Acknowledgment", desc: "Get confirmation email from MCA once successfully processed." },
    { icon: FaLock, subtitle: "Stay Compliant Every Year", desc: "Complete KYC before 30th September annually." },
  ];

  const documents = [
    { icon: FaIdCard, title: "PAN Card", desc: "Mandatory identity proof for Indian nationals." },
    { icon: FaMapMarkedAlt, title: "Aadhaar Card", desc: "Used for OTP verification; should be linked to mobile number." },
    { icon: FaUserShield, title: "Passport (if applicable)", desc: "Required for foreign nationals holding DIN." },
    { icon: FaLaptopCode, title: "Email ID & Mobile Number", desc: "Used for OTP validation on the MCA portal." },
    { icon: FaKey, title: "Digital Signature Certificate", desc: "Used to digitally sign the DIR-3 KYC form." },
    { icon: FaFileContract, title: "Recent Photograph", desc: "Passport-size photo required in the form." },
  ];

  const faqs = [
    {
      q: "Who must file DIR-3 KYC?",
      a: "Every person who holds a DIN as of 31st March of the financial year must file DIR-3 KYC, even if the DIN is not currently in use.",
    },
    {
      q: "Is DSC mandatory for KYC?",
      a: "Yes, a valid Digital Signature Certificate is required for filing DIR-3 KYC. The form must be certified by a CA/CS/CMA.",
    },
    {
      q: "What if I miss the due date?",
      a: "DIN will be marked as 'Deactivated' and a penalty of ₹5,000 must be paid to reactivate it.",
    },
    {
      q: "When is the last date to file DIR-3 KYC?",
      a: "The deadline is 30th September of each year for all eligible directors.",
    },
    {
      q: "Can I file without being associated with a company?",
      a: "Yes, even if you’re not associated with any company, DIR-3 KYC filing is mandatory if DIN is active.",
    },
  ];

  const stats = [
    { icon: FaBuilding, number: "2,500+", label: "KYC Filings Handled" },
    { icon: FaSmile, number: "1,000+", label: "DINs Reactivated" },
    { icon: FaCheckCircle, number: "100%", label: "MCA Approval Rate" },
  ];

  return (
    <>
      <section id="din-compliance" className="py-12 ">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
          <div className="hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>
        <div className="container mx-auto p-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4 max-w-5xl mx-auto">
              DIN Compliance (DIR-3 KYC) Filing for Company Directors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensure your DIN remains active and avoid ₹5,000 penalty. File your DIR-3 KYC with <strong>Chintan Agrawal & Co.</strong>—your compliance experts.
            </p>
          </div>

         
            <StatsSection stats={stats} />
        

          <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
           
              <FormSection />
          
              <TypesList types={types} head={heading} para={para} />
           
          </div>

     
            <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 mt-3 px-4 rounded-xl">
              <SectionTitle>Benefits of Filing DIR-3 KYC</SectionTitle>
              <BenefitsList benefits={benefits} />
            </div>


<div>
  <h3 className="text-2xl md:text-4xl pt-2 capitalize font-bold text-center text-blue-900">why choose us for DIN Compliance</h3>
            <img
              src="/navservices/din.png"
              alt="DIN Compliance"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
            <SectionTitle>DIR-3 KYC Filing Process</SectionTitle>
            <ProcessSteps steps={steps} />

        

            <SectionTitle>Documents Required</SectionTitle>
            <DocumentsRequired documents={documents} />

            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQSection faqs={faqs} open={open} toggle={toggle} />
         
        </div>
      </section>

     
        <Cta />
     
    </>
  );
}
