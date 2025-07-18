



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
    { title: "Mandatory Compliance", description: "Filing DIN KYC helps directors stay compliant with the Companies Act, 2013." },
    { title: "Avoid DIN Deactivation", description: "Non-filing leads to deactivation of the Director Identification Number (DIN)." },
    { title: "Prevents Penalties", description: "Avoids a late fee of ₹5,000 imposed by the Ministry of Corporate Affairs." },
    { title: "Quick Online Process", description: "Entire process is digital and takes just a few minutes with proper documents." },
    { title: "Maintains Director’s Status", description: "Necessary to maintain a valid and active status for board participation." },
    { title: "Single Filing for Multiple Companies", description: "One KYC filing is sufficient even if the director serves multiple companies." }
  ];

  const steps = [
    { icon: FaIdCard, subtitle: "Gather Basic KYC Documents", desc: "PAN, Aadhaar, Email, Mobile Number, Passport (if applicable)." },
    { icon: FaLaptopCode, subtitle: "Ensure Active DSC", desc: "Digital Signature Certificate is mandatory to sign and submit the form." },
    { icon: FaFileContract, subtitle: "Fill DIR-3 KYC Form", desc: "Provide personal details and verify through OTP received on mobile and email." },
    { icon: FaCertificate, subtitle: "Filing on MCA Portal", desc: "Upload the form to the Ministry of Corporate Affairs website." },
    { icon: FaCheckCircle, subtitle: "Acknowledgment", desc: "Get SRN and acknowledgment mail from MCA upon successful filing." },
    { icon: FaLock, subtitle: "Repeat Annually", desc: "File the KYC every year before 30th September to remain compliant." },
  ];

  const documents = [
    { icon: FaIdCard, title: "PAN Card", desc: "Mandatory identity proof for Indian nationals." },
    { icon: FaMapMarkedAlt, title: "Aadhaar Card", desc: "Used for address proof and OTP verification. Must be linked with mobile." },
    { icon: FaUserShield, title: "Passport (if applicable)", desc: "Compulsory for foreign directors." },
    { icon: FaLaptopCode, title: "Email & Mobile Number", desc: "Personal email ID and mobile number for OTP-based eKYC." },
    { icon: FaKey, title: "Digital Signature (DSC)", desc: "Active DSC required for digital submission of the form." },
    { icon: FaFileContract, title: "Recent Passport Photo", desc: "Passport-size photograph to be uploaded along with the form." },
  ];

  const faqs = [
    { q: "Who must file DIR-3 KYC?", a: "Any individual who has been allotted a DIN on or before 31st March of the financial year must file the form." },
    { q: "What if I don't file DIR-3 KYC?", a: "Your DIN will be deactivated, and a penalty of ₹5,000 will be applicable for reactivation." },
    { q: "Is the filing required every year?", a: "Yes, even if there is no change in details, it must be filed annually before the deadline." },
    { q: "Can I file KYC without a DSC?", a: "No, DSC is mandatory for filing DIR-3 KYC as per MCA norms." },
    { q: "How long does it take?", a: "Filing takes only a few hours if all documents and DSC are ready." },
  ];

  const filingTypes = [
    { icon: <FaIdCard className="text-white text-3xl" />, title: "New Director KYC", subtitle: "For individuals who received DIN for the first time." },
    { icon: <FaUserShield className="text-white text-3xl" />, title: "Annual KYC Filing", subtitle: "Annual compliance for all active DIN holders." },
    { icon: <FaKey className="text-white text-3xl" />, title: "KYC Web Form", subtitle: "Quick KYC filing through MCA web platform (for repeat filers)." },
    { icon: <FaLock className="text-white text-3xl" />, title: "DIN Reactivation", subtitle: "Reactivation of DINs deactivated due to non-filing." },
    { icon: <FaCertificate className="text-white text-3xl" />, title: "Digital Signature Setup", subtitle: "Get DSC assistance if yours has expired." },
    { icon: <FaBuilding className="text-white text-3xl" />, title: "Bulk KYC Filing", subtitle: "KYC filing for directors in multiple entities." },
  ];

  return (
    <>
      <section className="">
        <div className="absolute inset-0 -z-10 h-auto md:min-h-[670px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
                DIN KYC Filing (DIR-3 KYC) for Company Directors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mb-4">
                Every director with an active DIN must file DIR-3 KYC annually. We provide expert support to complete your filing swiftly and accurately.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Whether first-time or repeat compliance, our team ensures hassle-free DIN KYC with timely reminders and complete documentation assistance.
              </p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <FormSection />
            </div>
          </div>
        </div>
      </section>

      <Setsapart />

      <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
              Importance of Filing DIN KYC on Time
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Stay compliant with the law and maintain active DIN status to avoid penalties and disruptions in your company roles.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Required for All DIN Holders:</strong> Filing is mandatory even if not currently holding a board position.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Prevents Legal & Operational Issues:</strong> Active DIN is essential for other company filings and updates.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span><strong>Easy Annual Compliance:</strong> A simple step that protects your professional standing.</span>
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

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Filing Types for DIR-3 KYC
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

      <section className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Key Benefits of Filing DIN KYC</SectionTitle>
        <BenefitsList benefits={benefits} />
      </section>

      <SectionTitle>Step-by-Step DIN KYC Process</SectionTitle>
      <ProcessSteps steps={steps} />

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


      <SectionTitle>Required Documents for DIN KYC</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}