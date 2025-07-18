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
 
} from "react-icons/fa";

export default function StartupRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const [activeTab, setActiveTab] = useState(0);

const tabs = [
  {
    title: "Limited Liability",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Protection from Business Liabilities</h3>
        <p className="mb-4">
          In an LLP, partners are not personally liable for the debts of the business. Their risk is limited to the capital they invest. This provides peace of mind and financial safety in case of losses or legal claims.
        </p>
        <h3 className="text-lg font-semibold mb-2">No Joint Liability</h3>
        <p className="mb-4">
          Unlike traditional partnerships, LLP partners are not held responsible for the misconduct or negligence of other partners. This protects each partner individually.
        </p>
        <h3 className="text-lg font-semibold mb-2">Ideal for Professionals</h3>
        <p>
          LLP is a preferred structure for CA firms, legal consultancies, and startups seeking limited liability without complex compliance.
        </p>
      </>
    ),
  },
  {
    title: "Separate Legal Entity",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Independent Legal Status</h3>
        <p className="mb-4">
          An LLP is recognized as a legal entity distinct from its partners. It can enter into contracts, hold assets, and sue or be sued in its own name.
        </p>
        <h3 className="text-lg font-semibold mb-2">Continuity of Operations</h3>
        <p className="mb-4">
          LLP continues to operate despite changes in partners. Its legal standing and contracts remain unaffected.
        </p>
        <h3 className="text-lg font-semibold mb-2">Corporate Recognition</h3>
        <p>
          Clients, banks, and vendors prefer working with LLPs due to their formal status and transparency in operations.
        </p>
      </>
    ),
  },
  {
    title: "Flexible Management",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">No Mandatory Board Meetings</h3>
        <p className="mb-4">
          LLPs are free from the burden of conducting board meetings or shareholder resolutions, making management more relaxed and partner-driven.
        </p>
        <h3 className="text-lg font-semibold mb-2">Defined Partner Roles</h3>
        <p className="mb-4">
          The LLP agreement can define partner responsibilities, profit sharing, and dispute resolution terms, ensuring clarity and autonomy.
        </p>
        <h3 className="text-lg font-semibold mb-2">No Restriction on Number of Partners</h3>
        <p>
          LLPs require only two partners but allow unlimited partners—offering operational flexibility as your team grows.
        </p>
      </>
    ),
  },
  {
    title: "Cost-Effective & Less Compliance",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Affordable Registration</h3>
        <p className="mb-4">
          LLP registration is budget-friendly compared to a private limited company, making it ideal for startups and service providers.
        </p>
        <h3 className="text-lg font-semibold mb-2">Fewer Annual Filings</h3>
        <p className="mb-4">
          LLPs have minimal regulatory filings compared to companies. This reduces your compliance cost and effort.
        </p>
        <h3 className="text-lg font-semibold mb-2">No Minimum Capital Requirement</h3>
        <p>
          There is no need to show or maintain minimum capital, offering flexibility in fund management from day one.
        </p>
      </>
    ),
  },
  {
    title: "Perpetual Succession",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Uninterrupted Business Existence</h3>
        <p className="mb-4">
          An LLP doesn’t dissolve on partner retirement or death. New partners can be added without disrupting operations.
        </p>
        <h3 className="text-lg font-semibold mb-2">Easier Transfer of Ownership</h3>
        <p className="mb-4">
          Partner rights can be reassigned or modified through a simple amendment in the LLP Agreement, making transitions hassle-free.
        </p>
        <h3 className="text-lg font-semibold mb-2">Long-Term Business Planning</h3>
        <p>
          LLP structure allows firms to grow sustainably with long-term vision, without being affected by personal changes in partners.
        </p>
      </>
    ),
  },
];



const benefits = [
  {
    title: "Limited Liability Protection",
    description:
      "In an LLP, each partner's liability is limited to the amount they invest. Personal assets are protected from business debts, lawsuits, or losses, making it a safer structure than a traditional partnership.",
  },
  {
    title: "Separate Legal Identity",
    description:
      "An LLP is a distinct legal entity under the LLP Act, 2008. It can enter into contracts, own assets, and operate bank accounts in its own name—separate from its partners.",
  },
  {
    title: "Reduced Compliance Burden",
    description:
      "LLPs have fewer annual filing and meeting requirements compared to Private Limited Companies. This makes it easier and more cost-effective to manage ongoing legal and regulatory tasks.",
  },
  {
    title: "Flexible Partnership Structure",
    description:
      "LLPs allow flexibility in defining partner roles, responsibilities, and profit-sharing ratios through a customized LLP agreement. There's no upper limit on the number of partners.",
  },
  {
    title: "No Minimum Capital Requirement",
    description:
      "There is no mandatory minimum capital to start an LLP. You can begin operations with any amount of capital, giving entrepreneurs financial flexibility.",
  },
  {
    title: "Credibility & Professional Recognition",
    description:
      "Registration under the Ministry of Corporate Affairs (MCA) lends credibility to the LLP, making it easier to build trust with clients, vendors, and financial institutions.",
  },
];


const steps = [
  {
    icon: FaUniversity,
    subtitle: "Choose LLP Name & Check Availability",
    desc: "Select a unique name for your LLP and check its availability with the Ministry of Corporate Affairs (MCA) through the RUN (Reserve Unique Name) service. Ensure it complies with LLP naming guidelines.",
  },
  {
    icon: FaFileContract,
    subtitle: "Obtain DSC & DIN for Partners",
    desc: "Apply for Digital Signature Certificates (DSC) for all designated partners and obtain Director Identification Numbers (DIN) if not already available. These are mandatory for online form submissions.",
  },
  {
    icon: FaLaptopCode,
    subtitle: "File FiLLiP Form for Incorporation",
    desc: "Fill and submit the Form FiLLiP (Form for Incorporation of Limited Liability Partnership) on the MCA portal. Attach required documents like ID/address proofs, photographs, and consent forms.",
  },
  {
    icon: FaCertificate,
    subtitle: "Obtain Certificate of Incorporation",
    desc: "Once the Registrar approves your application, the Certificate of Incorporation is issued with the LLP Identification Number (LLPIN), officially recognizing your LLP.",
  },
  {
    icon: FaCheckCircle,
    subtitle: "File LLP Agreement",
    desc: "Draft and file the LLP Agreement within 30 days of incorporation in Form 3. This agreement outlines the rights, duties, and profit-sharing ratios between partners.",
  },
  {
    icon: FaLock,
    subtitle: "Post-Incorporation Setup",
    desc: "Open a current bank account in the LLP’s name, apply for PAN and TAN (if not already included), and start your business operations legally.",
  },
];



const documents = [
  {
    icon: FaIdCard,
    title: "PAN & Aadhaar of Partners",
    desc: "Self-attested PAN and Aadhaar copies of all designated and general partners for identity and address verification.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Registered Office Address Proof",
    desc: "Latest utility bill (electricity, gas, or water) not older than 2 months, along with a No Objection Certificate (NOC) from the property owner.",
  },
  {
    icon: FaFileContract,
    title: "LLP Agreement Draft",
    desc: "A draft agreement outlining roles, responsibilities, profit-sharing ratio, and terms of partnership between partners.",
  },
  {
    icon: FaUserShield,
    title: "Photographs of Partners",
    desc: "Recent passport-size photographs of all partners in JPEG or PDF format for KYC verification.",
  },
  {
    icon: FaUniversity,
    title: "Digital Signature Certificates (DSC)",
    desc: "Each designated partner must obtain a DSC to digitally sign the incorporation forms and compliance filings.",
  },
  {
    icon: FaKey,
    title: "Consent & Designation Forms",
    desc: "Consent to act as designated partner (Form 9) and subscriber’s sheet signed by all partners with relevant details.",
  },
];



const title = "Limited Liability Partnership (LLP) Registration";

const description =
  "Planning to start a business with a partner while minimizing personal risk? Register your Limited Liability Partnership (LLP) and enjoy the flexibility of a partnership with the protection of limited liability. At Chintan Agrawal & Co., we offer a streamlined LLP registration process—fully online, legally compliant, and backed by CA-led expertise. Whether you're launching a professional firm or a small business, our team handles documentation, MCA filing, and post-registration compliance so you can focus on your growth. Get your LLP registered today with Chintan Agrawal & Co.";

const faqs = [
  {
    q: "Who can register a Limited Liability Partnership (LLP) in India?",
    a: "Any two or more individuals or entities (including foreign nationals or companies) can register an LLP in India, provided at least one partner is a resident Indian. LLPs are commonly used by professionals, startups, and service firms.",
  },
  {
    q: "What are the minimum requirements to start an LLP?",
    a: "To register an LLP, you need at least two designated partners (one must be an Indian resident), a registered office address, a unique LLP name, and valid identity/address proofs of all partners.",
  },
  {
    q: "What are the key benefits of LLP registration?",
    a: "LLPs offer limited liability protection, separate legal identity, flexible internal management, no minimum capital requirement, and fewer compliance burdens compared to private limited companies.",
  },
  {
    q: "Can foreign nationals or companies become partners in an LLP?",
    a: "Yes, foreign nationals or foreign companies can be partners in an LLP subject to FDI guidelines. However, at least one designated partner must be an Indian resident.",
  },
  {
    q: "Is audit mandatory for LLPs?",
    a: "No, audit is not mandatory for LLPs unless the annual turnover exceeds ₹40 lakhs or the capital contribution exceeds ₹25 lakhs. Below that, LLPs can operate without audit requirements.",
  },
  {
    q: "Can an LLP be converted to a private limited company?",
    a: "Yes, an LLP can be converted into a private limited company by following the process under Companies Act and after meeting necessary conditions like shareholder consent, MCA approval, and restructuring.",
  },
  {
    q: "How long does it take to register an LLP?",
    a: "The registration process generally takes 7–10 working days, provided all documents are accurate and there are no rejections from the Ministry of Corporate Affairs (MCA).",
  },
  {
    q: "What are the annual compliance requirements for LLPs?",
    a: "LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) every year. Income tax returns are also mandatory. Penalties apply for non-compliance.",
  },
];




  return (
    <>
      {/* Hero Section */}
     
    <Hero title={title} description={description}></Hero>
   

 {/* Registration Info */}
<div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
  <div className="grid md:grid-cols-2 md:gap-10 items-center">
    <div>
      <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
        Why Register a Limited Liability Partnership (LLP)?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        A <strong>Limited Liability Partnership (LLP)</strong> is a flexible and secure business structure that combines the advantages of a partnership with limited liability benefits. LLPs are ideal for startups, small businesses, and professionals seeking a low-compliance yet legally recognized business format.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Limited Liability Protection:</strong> Partners’ personal assets are safeguarded from business liabilities, ensuring financial security.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Separate Legal Entity:</strong> LLPs are distinct from their partners and can own assets, sue or be sued in their own name.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>No Minimum Capital Requirement:</strong> You can start an LLP with any amount of capital—making it ideal for small businesses and service providers.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Flexible Management:</strong> The internal structure and duties of partners are governed by the LLP Agreement, giving full freedom in operations.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Lower Compliance & Maintenance Cost:</strong> Compared to Private Limited Companies, LLPs have fewer annual filings and audit requirements.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Preferred by Professionals:</strong> Ideal for CA, CS, lawyers, architects, consultants, and service-based businesses.</span>
        </li>
      </ul>
    </div>

    <div>
      <img
        src="/navservices/llp1.jpg"
        alt="Limited Liability Partnership Registration"
        className="max-w-xl mt-3 h-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>

 


 
<section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6 text-center">
      What Are The Advantages Of Limited Liability Partnership (LLP) Registration?
    </h2>
    <p className="text-center text-gray-600 max-w-4xl mx-auto mb-10 text-base md:text-lg">
      LLP registration offers the perfect blend of flexibility and protection for professionals, consultants, and small businesses. It ensures limited liability, minimal compliance burden, and a separate legal identity—making it a smart alternative to traditional partnership or private limited companies.
    </p>

    {/* Tab Header */}
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition 
            ${
              activeTab === index
                ? "bg-[#1C398E] text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
        >
          <div className="font-bold" style={{ fontSize: '0.99rem' }}>{tab.title}</div>
        </button>
      ))}
    </div>

    {/* Active Tab Content */}
    <div className="bg-green-100 p-6 rounded-md shadow-lg border border-gray-200 text-gray-800 leading-relaxed">
      {tabs[activeTab].content}
    </div>
  </div>
</section>



      <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-12 px-4 rounded-xl">
        <SectionTitle>Benefits of Limited Liability Partnership (LLP)</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>


      <SectionTitle>Process for Limited Liability Partnership (LLP)</SectionTitle>
      <ProcessSteps steps={steps} />

       <div className=' p-3 md:p-10'>
        <SectionTitle>Characteristics of Limited Liability Partnership (LLP)</SectionTitle>
        <img  className="max-w-4xl mx-auto h-auto object-contain "src="/navservices/Characteristics-llp.png" alt="private company process" />
      </div>

      <SectionTitle >Documents Required for Limited Liability Partnership (LLP)</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
