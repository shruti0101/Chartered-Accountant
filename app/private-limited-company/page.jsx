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
        <h3 className="text-lg font-semibold mb-2">Protection of Personal Assets</h3>
        <p className="mb-4">
          One of the most significant benefits of registering a Private Limited Company is limited liability. In case the company faces financial distress or lawsuits, the personal assets of the shareholders—such as homes, bank accounts, or vehicles—remain protected. The risk is limited only to the capital invested in the business.
        </p>
        <h3 className="text-lg font-semibold mb-2">Encourages Risk-Taking</h3>
        <p className="mb-4">
          Limited liability allows entrepreneurs to take business risks without the fear of losing personal wealth. This protection fosters innovation and strategic expansion, knowing that personal finances are legally separated from business liabilities.
        </p>
        <h3 className="text-lg font-semibold mb-2">Investor Confidence</h3>
        <p>
          Investors are more willing to contribute capital to a Private Limited Company because their exposure is capped at their investment amount. This makes it a more secure and attractive option for equity partnerships.
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
          A Private Limited Company is considered a legal person under the Companies Act, 2013. This means it can buy or sell property, open bank accounts, hire employees, and enter into contracts—all in its own name. It is distinct from its directors and shareholders.
        </p>
        <h3 className="text-lg font-semibold mb-2">Continuity & Recognition</h3>
        <p className="mb-4">
          Since the company is recognized separately from its owners, it enjoys consistent branding, recognition, and legal standing. Even if directors or members change, the company retains its identity.
        </p>
        <h3 className="text-lg font-semibold mb-2">Legal Accountability</h3>
        <p>
          The company itself is accountable for any debts, obligations, or legal proceedings. This separation safeguards directors/shareholders from being personally sued for the company's operations.
        </p>
      </>
    ),
  },
  {
    title: "Opportunities for Raising Capital",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Access to Equity & Debt Funding</h3>
        <p className="mb-4">
          A Private Limited Company can raise funds by issuing equity shares to investors or securing loans from banks and NBFCs. It’s the preferred legal structure for VCs and angel investors due to compliance, transparency, and scalability.
        </p>
        <h3 className="text-lg font-semibold mb-2">Scalability for Growth</h3>
        <p className="mb-4">
          With structured shareholding and governance, the company can easily bring in new shareholders or expand its capital base as it grows. This flexibility supports long-term expansion plans.
        </p>
        <h3 className="text-lg font-semibold mb-2">Government Grants & Startup Schemes</h3>
        <p>
          Registered companies are eligible for Startup India benefits, MSME schemes, and government tenders—giving them access to grants, tax holidays, and easier capital infusion.
        </p>
      </>
    ),
  },
  {
    title: "Credibility & Trustworthiness",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Verified by MCA</h3>
        <p className="mb-4">
          A Private Limited Company is registered under the Ministry of Corporate Affairs (MCA), India. This government recognition builds immediate trust with vendors, clients, banks, and investors, showing that your business meets legal and financial compliance standards.
        </p>
        <h3 className="text-lg font-semibold mb-2">Improved Brand Perception</h3>
        <p className="mb-4">
          Customers are more inclined to engage with a registered business, as it reflects professionalism, stability, and accountability. It gives your business a strong corporate identity.
        </p>
        <h3 className="text-lg font-semibold mb-2">Easy Vendor & B2B Relationships</h3>
        <p>
          Many large companies and government departments prefer working with registered Private Limited Companies as it assures them of legal standing, due diligence, and regulatory compliance.
        </p>
      </>
    ),
  },
  {
    title: "Perpetual Succession",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Business Continuity</h3>
        <p className="mb-4">
          The company continues to exist despite changes in ownership, resignation, death, or insolvency of directors or shareholders. This ensures smooth operations even in unforeseen situations.
        </p>
        <h3 className="text-lg font-semibold mb-2">Long-Term Stability</h3>
        <p className="mb-4">
          As a separate legal entity, a Private Limited Company provides assurance to investors and clients that the business will operate beyond individual involvement, making it a sustainable structure.
        </p>
        <h3 className="text-lg font-semibold mb-2">Succession Planning Made Easy</h3>
        <p>
          Shares can be transferred or inherited without disturbing the core structure of the company, making succession planning simpler and future-proof.
        </p>
      </>
    ),
  },
];




const benefits = [
  {
    title: "Limited Liability Protection",
    description:
      "Shareholders are only liable for the amount they invest. Their personal assets are protected from company debts or legal claims, ensuring financial security for business owners.",
  },
  {
    title: "Separate Legal Identity",
    description:
      "A Private Limited Company is treated as a distinct legal entity under the Companies Act. It can own property, enter contracts, sue or be sued—independent of its directors or shareholders.",
  },
  {
    title: "Enhanced Credibility & Trust",
    description:
      "Private Limited Companies are registered under the Ministry of Corporate Affairs (MCA), which boosts their credibility with customers, vendors, lenders, and investors.",
  },
  {
    title: "Ease of Raising Capital",
    description:
      "Private Limited Companies can attract equity funding from venture capitalists, angel investors, or banks, making it easier to scale and grow the business.",
  },
  {
    title: "Perpetual Succession",
    description:
      "The company continues to exist despite any change in shareholders or directors. This continuity ensures long-term stability and easier business transition planning.",
  },
  {
    title: "Transferability of Shares",
    description:
      "Ownership can be transferred easily by selling shares, making it a flexible structure for future exits, investor onboarding, or expansion.",
  },
  
];


  const steps = [
  {
    icon: FaUniversity,
    subtitle: "Choose Company Name",
    desc: "Select a unique name for your Private Limited Company and check availability with the MCA. Ensure it meets naming guidelines.",
  },
  {
    icon: FaFileContract,
    subtitle: "Obtain DSC & DIN",
    desc: "Apply for Digital Signature Certificates (DSC) for directors and obtain Director Identification Numbers (DIN) through the MCA portal.",
  },
  {
    icon: FaLaptopCode,
    subtitle: "Draft Incorporation Documents",
    desc: "Prepare and draft MOA (Memorandum of Association), AOA (Articles of Association), and other required incorporation documents.",
  },
  {
    icon: FaCertificate,
    subtitle: "File Incorporation Form (SPICe+)",
    desc: "Submit SPICe+ form along with required documents to MCA for registration. Includes PAN, TAN, EPFO, ESIC, and GST application.",
  },
  {
    icon: FaCheckCircle,
    subtitle: "Get Certificate of Incorporation",
    desc: "Once approved by MCA, receive your Certificate of Incorporation along with Company PAN and TAN.",
  },
  {
    icon: FaLock,
    subtitle: "Post-Incorporation Compliance",
    desc: "Open a bank account, issue share certificates, appoint auditor, and complete other legal formalities within 30 days.",
  },
];


const documents = [
  {
    icon: FaIdCard,
    title: "Director's PAN & Aadhaar",
    desc: "PAN and Aadhaar cards of all directors for identity and address verification.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Registered Office Address Proof",
    desc: "Utility bill (electricity/water) and NOC from property owner, not older than 2 months.",
  },
  {
    icon: FaFileContract,
    title: "MOA & AOA Drafts",
    desc: "Memorandum and Articles of Association outlining business scope and internal rules.",
  },
  {
    icon: FaUserShield,
    title: "Passport-size Photographs",
    desc: "Recent passport-size photos of all directors, typically in JPEG or PDF format.",
  },
  {
    icon: FaUniversity,
    title: "Digital Signature Certificate (DSC)",
    desc: "DSC is mandatory for all proposed directors to digitally sign incorporation documents.",
  },
  {
    icon: FaKey,
    title: "Director Identification Number (DIN)",
    desc: "DIN is issued or linked during incorporation through the SPICe+ form filing.",
  },
];


  const title="Private Limited Company Registration";
  const description="Planning to register your Private Limited Company? You're in trusted hands. At Chintan Agrawal & Co., we streamline the entire Pvt. Ltd. company registration process with expert guidance and complete online support. No paperwork hassles, no delays — just accurate filing and smooth execution handled by our experienced professionals.We take care of the registration, so you can focus on growing your business.Start your Private Limited Company journey with confidence — partner with Chintan Agrawal & Co. today.";

const faqs = [
  {
    q: "Who can register a Private Limited Company in India?",
    a: "Any two or more individuals or entities (including NRIs or foreign nationals) can register a Private Limited Company in India, provided at least one director is an Indian resident. The company must also have a registered office address in India.",
  },
  {
    q: "What are the minimum requirements to start a Private Limited Company?",
    a: "The basic requirements include: minimum 2 directors, 2 shareholders (can be the same people), a unique company name, a registered office address in India, and valid KYC documents (PAN, Aadhaar, etc.) of directors and shareholders.",
  },
  {
    q: "How long does it take to register a Private Limited Company?",
    a: "It typically takes 7–10 working days to register a Private Limited Company, provided all documents are accurate and available. The timeline depends on name approval and MCA processing time.",
  },
  {
    q: "What documents are required for company registration?",
    a: "You’ll need the PAN and Aadhaar of all directors, passport-size photographs, proof of the registered office address (such as an electricity bill), and a No Objection Certificate (NOC) from the property owner. Additional documents like MOA and AOA will be drafted during the process.",
  },
  {
    q: "Is physical presence required during the registration process?",
    a: "No, the entire process of company registration is online. All documents are submitted digitally, and directors can sign using a Digital Signature Certificate (DSC).",
  },
  {
    q: "What are the benefits of registering a Private Limited Company?",
    a: "Key benefits include limited liability protection, a separate legal identity, eligibility for funding, enhanced credibility, perpetual succession, and ease of transfer of ownership.",
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
      <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
        Why Register a Private Limited Company?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        A Private Limited Company is the most popular and trusted business structure in India. It offers <strong>limited liability</strong>, <strong>legal recognition</strong>, and improved <strong>funding opportunities</strong>—making it ideal for startups, SMEs, and growing enterprises.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Separate Legal Identity:</strong> Distinct from its shareholders and directors, offering credibility and protection.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Limited Liability:</strong> Personal assets of owners are not at risk for business debts or losses.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Easy Fundraising:</strong> Preferred structure by investors and venture capitalists for equity funding.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Perpetual Existence:</strong> The company continues even if ownership or management changes.</span>
        </li>
      </ul>
    </div>

    <div>
      <img
        src="/navservices/private-company.png"
        alt="Private Limited Company Registration"
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
            Private Limited Company Registration Certificate
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            This is a sample of the official registration certificate issued by the Ministry of Corporate Affairs (MCA) upon successful incorporation of a Private Limited Company. It includes your Company Identification Number (CIN), date of incorporation, and is digitally signed by the Registrar of Companies.
            <br /><br />
            This certificate serves as legal proof of your company’s existence and is essential for opening bank accounts, applying for licenses, and starting formal business operations.
          </p>
        </div>

        {/* Right Certificate Image */}
        <div className="relative">
          <div className="rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden max-w-md mx-auto">
            <img
              src="/navservices/private-company-cert.png" // ✅ Replace with your actual certificate path
              alt="Private Limited Company Registration Certificate"
              className="w-full h-auto object-contain rounded-md"
              loading="lazy"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="/navservices/private-company-cert.png" // ✅ Optional full-size view
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
 

 <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6 text-center">
          What Are The Advantages Of A Private Limited Company Registration?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Registering as a Private Limited Company offers several key benefits that make it a popular choice for entrepreneurs and business owners in India.
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
              <div className="font-bold " style={{fontSize: '0.99rem'}}>{tab.title}</div>
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
        <SectionTitle>Benefits of Startup India Registration</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

     

      <SectionTitle>Process for Private Limited Company Registration</SectionTitle>
      <ProcessSteps steps={steps} />

       <div className=' p-3 md:p-5'>
        <img  className="max-w-5xl mx-auto h-auto object-contain "src="/navservices/private-company-process.png" alt="private company process" />
      </div>

      <SectionTitle >Documents Required for Private Limited Company Registration</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
