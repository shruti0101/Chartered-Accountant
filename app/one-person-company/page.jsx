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
        <h3 className="text-lg font-semibold mb-2">Personal Asset Protection</h3>
        <p className="mb-4">
          In an OPC, the sole owner enjoys limited liability. This means your personal assets like savings, house, or car are protected and cannot be used to pay for the company's debts or losses. Your risk is only limited to your investment in the business.
        </p>
        <h3 className="text-lg font-semibold mb-2">Safe Solo Entrepreneurship</h3>
        <p className="mb-4">
          OPC offers the perfect mix of individual control and corporate safety. You can take business decisions freely, without worrying about endangering your personal wealth in case of legal or financial challenges.
        </p>
        <h3 className="text-lg font-semibold mb-2">Ideal for Freelancers & Consultants</h3>
        <p>
          OPC is best suited for professionals like consultants, digital creators, or solo service providers who want to operate under a formal structure while keeping their liabilities minimal.
        </p>
      </>
    ),
  },
  {
    title: "Separate Legal Entity",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Own Identity</h3>
        <p className="mb-4">
          An OPC has its own distinct legal identity, separate from the owner. It can own property, enter into contracts, and operate a bank account in its name—independent of the individual running it.
        </p>
        <h3 className="text-lg font-semibold mb-2">Contracts & Legal Standing</h3>
        <p className="mb-4">
          The company can be sued or can sue others in its own name. This ensures legal protection and smooth business operations without risking the promoter personally.
        </p>
        <h3 className="text-lg font-semibold mb-2">Brand Consistency</h3>
        <p>
          Even as the business grows or changes hands, the OPC retains its legal identity and brand name, supporting business continuity and recognition.
        </p>
      </>
    ),
  },
  {
    title: "Complete Ownership with Control",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">No Need for Partners</h3>
        <p className="mb-4">
          Unlike other business structures, OPC doesn’t require more than one director or shareholder. You get complete ownership and decision-making control without compromising on professionalism.
        </p>
        <h3 className="text-lg font-semibold mb-2">Faster Decisions</h3>
        <p className="mb-4">
          With no external interference, decision-making is quick, allowing you to respond rapidly to market demands and opportunities.
        </p>
        <h3 className="text-lg font-semibold mb-2">100% Shareholding</h3>
        <p>
          You hold the entire ownership of the company, making profit distribution, management, and financial planning fully transparent and owner-driven.
        </p>
      </>
    ),
  },
  {
    title: "Credibility & Professional Image",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Recognized by MCA</h3>
        <p className="mb-4">
          An OPC is registered with the Ministry of Corporate Affairs (MCA), adding credibility and legitimacy to your business in the eyes of banks, vendors, and clients.
        </p>
        <h3 className="text-lg font-semibold mb-2">Boosts Client Confidence</h3>
        <p className="mb-4">
          Operating under a registered company name builds trust, especially for solo entrepreneurs dealing with large clients or corporate contracts.
        </p>
        <h3 className="text-lg font-semibold mb-2">Banking & Loans Made Easier</h3>
        <p>
          OPCs are more likely to get business loans and open corporate accounts compared to sole proprietorships, due to their formal legal status.
        </p>
      </>
    ),
  },
  {
    title: "Perpetual Existence",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Survives Ownership Changes</h3>
        <p className="mb-4">
          An OPC continues to exist even if the owner resigns, passes away, or becomes incapacitated. A nominee director takes over, ensuring uninterrupted business continuity.
        </p>
        <h3 className="text-lg font-semibold mb-2">Long-Term Vision</h3>
        <p className="mb-4">
          Unlike sole proprietorships, OPCs are not tied to the life of the owner. This makes them ideal for entrepreneurs with a long-term growth outlook.
        </p>
        <h3 className="text-lg font-semibold mb-2">Easy Transferability</h3>
        <p>
          Ownership of the OPC can be transferred by changing the nominee, ensuring smooth transition without shutting down the company.
        </p>
      </>
    ),
  },
];




const benefits = [
  {
    title: "Limited Liability Protection",
    description:
      "The sole owner of an OPC enjoys limited liability, meaning their personal assets are not at risk for business debts or liabilities. This protects individual wealth while operating under a formal structure.",
  },
  {
    title: "Separate Legal Identity",
    description:
      "An OPC is recognized as a separate legal entity under the Companies Act, 2013. It can own property, open bank accounts, and enter into contracts in its own name, independent of the owner.",
  },
  {
    title: "Credibility & Professional Image",
    description:
      "Being registered with the Ministry of Corporate Affairs (MCA) adds credibility and legal recognition to your business, which improves trust among clients, vendors, and financial institutions.",
  },
  {
    title: "Full Control with Ownership",
    description:
      "OPC offers the benefits of a corporate structure without needing a co-founder. The single owner holds complete control over decisions while enjoying legal and financial advantages.",
  },
  {
    title: "Perpetual Succession with Nominee",
    description:
      "Even though an OPC is owned by one person, it continues to exist beyond the owner's lifetime. A nominee director ensures business continuity in the event of the owner's death or incapacity.",
  },
  {
    title: "Easy Compliance and Management",
    description:
      "OPCs are required to meet fewer compliance requirements compared to Private Limited Companies, making it easier for solo entrepreneurs to manage their business efficiently.",
  },
];


const steps = [
  {
    icon: FaUniversity,
    subtitle: "Choose a Unique Company Name",
    desc: "Select an exclusive name for your One Person Company. Check its availability with the Ministry of Corporate Affairs (MCA) to ensure it adheres to legal naming conventions.",
  },
  {
    icon: FaFileContract,
    subtitle: "Obtain DSC & DIN",
    desc: "Apply for a Digital Signature Certificate (DSC) for the sole director and obtain a Director Identification Number (DIN) to digitally sign and authorize legal documents.",
  },
  {
    icon: FaLaptopCode,
    subtitle: "Prepare Incorporation Documents",
    desc: "Draft the Memorandum of Association (MOA), Articles of Association (AOA), declaration by the subscriber, and nominee consent form for incorporation.",
  },
  {
    icon: FaCertificate,
    subtitle: "File SPICe+ Form with MCA",
    desc: "Submit the SPICe+ form online, which includes incorporation, PAN, TAN, GST, EPFO, and ESIC registration. Attach all required documents and declarations.",
  },
  {
    icon: FaCheckCircle,
    subtitle: "Receive Certificate of Incorporation",
    desc: "Once verified and approved by the MCA, you will receive the Certificate of Incorporation (COI), along with your Company Identification Number (CIN), PAN, and TAN.",
  },
  {
    icon: FaLock,
    subtitle: "Post-Incorporation Compliance",
    desc: "Complete formalities such as opening a company bank account, issuing share certificates, appointing an auditor, and complying with other initial statutory requirements.",
  },
];



const documents = [
  {
    icon: FaIdCard,
    title: "PAN & Aadhaar of Sole Director",
    desc: "PAN and Aadhaar cards of the sole director are mandatory for verifying identity and address.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Registered Office Address Proof",
    desc: "Provide a recent utility bill (electricity/water/gas) not older than 2 months, along with a No Objection Certificate (NOC) from the property owner.",
  },
  {
    icon: FaFileContract,
    title: "Memorandum & Articles of Association",
    desc: "MOA defines the business objectives and AOA contains internal rules and management structure of the OPC.",
  },
  {
    icon: FaUserShield,
    title: "Photograph of Director and Nominee",
    desc: "Recent passport-size photographs of the sole director and the nominee in JPEG or PDF format.",
  },
  {
    icon: FaUniversity,
    title: "Digital Signature Certificate (DSC)",
    desc: "DSC is essential for digitally signing incorporation forms and other official documents online.",
  },
  {
    icon: FaKey,
    title: "Consent of Nominee & Identity Proof",
    desc: "The nominee must provide written consent (Form INC-3) along with their PAN, Aadhaar, or passport copy.",
  },
];



  const title="One Person Company (OPC) Registration";
  const description="Starting your business alone? Register a One Person Company (OPC) and enjoy the benefits of limited liability and a separate legal identity — without the need for multiple founders. At Chintan Agrawal & Co., we make OPC registration effortless with expert guidance, online documentation, and end-to-end support. Whether you're a freelancer, consultant, or solo entrepreneur, our CA-led team ensures smooth incorporation, MCA compliance, and a hassle-free experience from start to finish. Launch your OPC confidently with Chintan Agrawal & Co. today.";

const faqs = [
  {
    q: "Who can register a One Person Company (OPC) in India?",
    a: "Only a natural person who is an Indian citizen and resident in India is eligible to incorporate an OPC. Foreign nationals, LLPs, companies, and minors are not allowed to form an OPC.",
  },
  {
    q: "What are the minimum requirements to register an OPC?",
    a: "You need one director and one nominee (also an Indian resident), a unique company name, a registered office address in India, and valid documents like PAN, Aadhaar, and proof of address.",
  },
  {
    q: "Can I convert my existing sole proprietorship to an OPC?",
    a: "Yes, you can convert a sole proprietorship to an OPC by incorporating it under the Companies Act and transferring assets and liabilities. This gives your business a legal identity and limited liability protection.",
  },
  {
    q: "What is the role of a nominee in an OPC?",
    a: "The nominee is a mandatory requirement in OPC. If the sole member dies or becomes incapacitated, the nominee will take over the company’s affairs to ensure continuity.",
  },
  {
    q: "Can an OPC raise funding or attract investors?",
    a: "OPCs cannot issue equity shares to the public or list on stock exchanges. However, private funding through convertible debt or partnership with other companies is possible depending on your business model.",
  },
  {
    q: "Is there any restriction on who can be a nominee?",
    a: "Yes. The nominee must be a natural person, an Indian citizen, and a resident of India. A person can only be a nominee in one OPC at a time.",
  },
  {
    q: "How long does it take to register an OPC?",
    a: "The registration usually takes 5–8 working days if all required documents are submitted correctly and there are no objections or delays from MCA.",
  },
  {
    q: "What are the annual compliances for an OPC?",
    a: "OPCs must file annual returns (Form AOC-4 and MGT-7), conduct at least one board meeting every six months, and maintain proper books of accounts. Audit is mandatory even for OPCs.",
  },
 
];




  return (
    <>
      {/* Hero Section */}
     
    <Hero title={title} description={description}></Hero>
   

 {/* OPC Registration Info */}
<div className="bg-white w-full py-10 px-4 md:px-10 lg:px-20">
  <div className="grid md:grid-cols-2 md:gap-10 items-center">
    <div>
      <h2 className="text-3xl mt-7 md:text-4xl font-extrabold text-[#1C398E] mb-4">
        Why Register a One Person Company (OPC)?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        A <strong>One Person Company (OPC)</strong> is the ideal structure for solo entrepreneurs looking for legal protection and credibility. It provides the benefits of a Private Limited Company—<strong>limited liability</strong>, <strong>separate legal entity</strong>, and <strong>structured operations</strong>—with the ease of single ownership.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Single Owner Control:</strong> Enjoy full control of the business while gaining corporate status and recognition.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Limited Liability Protection:</strong> Personal assets remain protected against business losses or debts.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Separate Legal Entity:</strong> OPC has its own legal identity, allowing it to enter into contracts, own assets, or sue and be sued independently.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Easy Funding & Bank Loans:</strong> Being a registered company improves credibility with lenders and investors.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Less Compliance Burden:</strong> Compared to Pvt Ltd, OPCs enjoy relaxed regulatory and compliance requirements.</span>
        </li>
      </ul>
    </div>

    <div>
      <img
        src="/navservices/one-person.png"
        alt="One Person Company Registration"
        className="w-full mt-3 h-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>

 


 

<section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6 text-center">
      What Are The Advantages Of One Person Company (OPC) Registration?
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
      One Person Company (OPC) is a perfect choice for solo founders looking for a corporate structure with limited liability, legal identity, and tax benefits. It combines the simplicity of a proprietorship with the credibility of a private limited company.
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
        <SectionTitle>Benefits of One Person Company Registration</SectionTitle>
        <BenefitsList benefits={benefits} />
      </div>

     

      <SectionTitle>Process for One Person Company Registration</SectionTitle>
      <ProcessSteps steps={steps} />

       <div className=' p-3 md:p-10'>
        <img  className=" mx-auto h-auto object-contain "src="/navservices/one-company-process.png" alt="private company process" />
      </div>

      <SectionTitle >Documents Required for One Person Company Registration</SectionTitle>
      <DocumentsRequired documents={documents} />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
