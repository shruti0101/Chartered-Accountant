'use client';

import { useState } from "react";
import {
  FaCheckCircle, FaLock, FaIdCard, FaMapMarkedAlt,
  FaFileContract, FaUniversity, FaUserShield, FaKey,
  FaLaptopCode, FaCertificate, FaBuilding
} from "react-icons/fa";

import SectionTitle from "@/components/headcomponent/Sectiontitle";
import FormSection from "@/components/headcomponent/Formsection";
import BenefitsList from "@/components/headcomponent/Benefits";
import ProcessSteps from "@/components/headcomponent/Process";
import DocumentsRequired from "@/components/headcomponent/Documents";
import FAQSection from "@/components/headcomponent/Faq";
import Cta from "@/components/Cta/Cta";
import Setsapart from "@/components/Setsapart/Setsapart";

export default function DirectorKYC() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const benefits = [
    { title: "Avoid DIN Deactivation", description: "File DIR-3 KYC before the deadline to keep your Director Identification Number active." },
    { title: "Legal Compliance", description: "Mandatory under Companies Act, 2013 for every DIN holder." },
    { title: "No Penalty on Time", description: "Avoid ₹5,000 MCA late filing fee by filing before due date." },
    { title: "Smooth Corporate Operations", description: "DIN deactivation can delay other filings like ROC, incorporation, etc." },
    { title: "One-Time Easy Process", description: "Simple online process requiring basic documents and DSC." },
    { title: "Maintain Professional Credibility", description: "Stay compliant to maintain your position in other companies too." }
  ];

  const steps = [
    { icon: FaIdCard, subtitle: "Collect KYC Documents", desc: "PAN, Aadhaar, Passport (if applicable), Email, Mobile Number." },
    { icon: FaLaptopCode, subtitle: "Digital Signature Setup", desc: "Ensure active DSC for signing the DIR-3 KYC form." },
    { icon: FaFileContract, subtitle: "Prepare & Validate Form", desc: "Fill the DIR-3 KYC with accurate details and OTP verification." },
    { icon: FaCertificate, subtitle: "MCA Portal Filing", desc: "Upload form with DSC on MCA portal and obtain SRN/Acknowledgment." },
    { icon: FaCheckCircle, subtitle: "Receive Confirmation", desc: "Receive MCA confirmation mail with successful filing status." },
    { icon: FaLock, subtitle: "Stay Compliant Yearly", desc: "Ensure annual eKYC is completed before every 30th September." },
  
  ];

  const documents = [
    { icon: FaIdCard, title: "PAN Card", desc: "Mandatory for Indian directors." },
    { icon: FaMapMarkedAlt, title: "Aadhaar Card", desc: "Used for OTP validation; ensure it's linked to your mobile number." },
    { icon: FaUserShield, title: "Passport (If Applicable)", desc: "Compulsory for foreign nationals." },
    { icon: FaLaptopCode, title: "Email ID & Mobile No", desc: "Personal contact details for OTP-based verification." },
    { icon: FaKey, title: "Digital Signature (DSC)", desc: "Director’s DSC is mandatory for submission of the KYC form." },
    { icon: FaFileContract, title: "Latest Photograph", desc: "Passport-size photo required in form upload." },
  ];

  const faqs = [
    { q: "Who needs to file DIR-3 KYC?", a: "Every individual with a DIN on or before March 31 must file DIR-3 KYC—even if not associated with any company." },
    { q: "What happens if I miss the deadline?", a: "Your DIN gets deactivated and a ₹5,000 penalty applies to reactivate it." },
    { q: "Is DSC mandatory for KYC?", a: "Yes. The form must be digitally signed by the director and verified by a practicing CA, CS, or CMA." },
    { q: "When is the due date?", a: "30th September of each financial year." },
    { q: "Is KYC needed if DIN is not in use?", a: "Yes. Unless the DIN has been surrendered or canceled, filing is mandatory." }
  ];

  const filingTypes = [
    { icon: <FaIdCard className="text-white text-3xl" />, title: "First-time KYC", subtitle: "For Directors filing DIR-3 KYC for the first time." },
    { icon: <FaUserShield className="text-white text-3xl" />, title: "Annual DIR-3 KYC", subtitle: "Yearly compliance for all active DIN holders." },
    { icon: <FaKey className="text-white text-3xl" />, title: "KYC via Web", subtitle: "For directors who’ve filed eKYC in previous years." },
    { icon: <FaLock className="text-white text-3xl" />, title: "DIN Reactivation", subtitle: "Reactivation of deactivated DIN via DIR-3 KYC." },
    { icon: <FaCertificate className="text-white text-3xl" />, title: "DSC Assistance", subtitle: "Digital Signature support for filing and verification." },
    { icon: <FaBuilding className="text-white text-3xl" />, title: "Bulk KYC for Companies", subtitle: "KYC for all directors in Pvt Ltd, LLPs, or OPCs." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[670px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                Director KYC Filing (DIR-3 KYC) for Companies & LLPs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                As per MCA guidelines, every director holding a DIN must file their KYC annually using DIR-3 KYC. We ensure timely, error-free filing.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Whether it’s your first KYC or regular filing, our team handles form prep, verification, and DSC-based filing.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <Setsapart />

      {/* Why KYC Section */}
      <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Why DIR-3 KYC is Mandatory for Every Director
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              DIR-3 KYC verifies directors’ identity and contact details, ensuring compliance with the Companies Act and preventing DIN deactivation.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Mandatory for Active DIN Holders:</strong> Annual KYC is required.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Avoid Deactivation & Penalties:</strong> ₹5,000 fine if missed.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Maintain Legal Status:</strong> Required to hold board roles.</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/navservices/kyc.jpg"
              alt="DIR-3 KYC process for directors"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KYC Types */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Types of Director KYC
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filingTypes.map((type, idx) => (
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
      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Director KYC</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      {/* Process */}
      <SectionTitle>Process for Director KYC</SectionTitle>
      <ProcessSteps steps={steps} />

      {/* Documents */}
      <SectionTitle>Documents Required for Director KYC</SectionTitle>
      <DocumentsRequired documents={documents} />

      {/* FAQs */}
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      {/* CTA */}
      <Cta />
    </>
  );
}
