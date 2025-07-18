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
    title: "Simple & Affordable Setup",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">No Complex Formalities</h3>
        <p className="mb-4">
          Partnership firms are governed by the Indian Partnership Act, 1932, and the registration process involves minimal documentation and fewer legal formalities compared to private limited companies or LLPs.
        </p>
        <h3 className="text-lg font-semibold mb-2">Low Startup Cost</h3>
        <p className="mb-4">
          Registration and operational expenses are significantly lower, making it ideal for small business owners, traders, freelancers, and service providers looking to formalize their business quickly.
        </p>
        <h3 className="text-lg font-semibold mb-2">Quick Turnaround Time</h3>
        <p>
          The entire registration process, including deed drafting and submission to the Registrar of Firms, can be completed in just a few working days.
        </p>
      </>
    ),
  },
  {
    title: "Shared Responsibility",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Division of Duties</h3>
        <p className="mb-4">
          In a partnership firm, responsibilities and roles are divided based on mutual agreement. This leads to better operational efficiency and balanced workload distribution.
        </p>
        <h3 className="text-lg font-semibold mb-2">Mutual Decision-Making</h3>
        <p className="mb-4">
          Partners jointly make strategic business decisions, reducing the risk of individual errors and encouraging collaboration in management.
        </p>
        <h3 className="text-lg font-semibold mb-2">Risk & Reward Sharing</h3>
        <p>
          Profits and losses are shared as per the partnership agreement, ensuring fairness and equal motivation among all partners.
        </p>
      </>
    ),
  },
  {
    title: "Tax Benefits",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">Separate Legal Tax Status</h3>
        <p className="mb-4">
          A partnership firm is considered a separate taxable entity under Indian tax law. This allows for streamlined tax planning and distinct accounting from individual partners.
        </p>
        <h3 className="text-lg font-semibold mb-2">Salary & Interest Deductibility</h3>
        <p className="mb-4">
          The firm can pay salary and interest to partners as per the deed, and these payments are deductible as business expenses—helping reduce overall taxable income.
        </p>
        <h3 className="text-lg font-semibold mb-2">No Dividend Distribution Tax (DDT)</h3>
        <p>
          Unlike companies, partnership firms are not subject to DDT when profits are shared among partners, resulting in more efficient tax flow.
        </p>
      </>
    ),
  },
  {
    title: "Banking & Legal Identity",
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">PAN, TAN & Bank Account</h3>
        <p className="mb-4">
          Once registered, the firm can obtain a PAN, TAN, and open a current bank account under its name, enabling formal business transactions and financial credibility.
        </p>
        <h3 className="text-lg font-semibold mb-2">Eligibility for Licenses</h3>
        <p className="mb-4">
          A registered partnership is eligible for GST registration, MSME registration, and other regulatory licenses that unregistered firms may not qualify for.
        </p>
        <h3 className="text-lg font-semibold mb-2">Recognized for Contracts & Tenders</h3>
        <p>
          Only registered partnership firms can enter into contracts, file legal cases, and participate in government or corporate tenders—enhancing business legitimacy.
        </p>
      </>
    ),
  },
];







const steps = [
  {
    icon: FaUniversity,
    subtitle: "Choose Firm Name",
    desc: "Select a unique name for the firm and check its availability to avoid conflict with existing businesses.",
  },
  {
    icon: FaFileContract,
    subtitle: "Draft Partnership Deed",
    desc: "Create a detailed deed outlining partner names, roles, capital, profit-sharing ratio, and operational terms.",
  },
  {
    icon: FaLaptopCode,
    subtitle: "Notarize the Deed",
    desc: "Get the partnership deed notarized on stamp paper as per the state stamp duty laws.",
  },
  {
    icon: FaCertificate,
    subtitle: "Register with Registrar of Firms (optional)",
    desc: "Apply for firm registration in your jurisdiction (though not mandatory, it gives legal recognition).",
  },
  {
    icon: FaCheckCircle,
    subtitle: "Apply for PAN & TAN",
    desc: "Obtain PAN for the firm and apply for TAN if you plan to deduct TDS.",
  },
  {
    icon: FaLock,
    subtitle: "Open Bank Account",
    desc: "Use the registered deed and PAN to open a current account in the firm's name for business transactions.",
  },
];






  const title = "Partnership Firm Registration";
const description =
  "Planning to start a business with partners? Register your partnership firm with ease and legal clarity. At Chintan Agrawal & Co., we offer expert support, quick documentation, and end-to-end assistance in forming a partnership firm. Whether you're starting a small business or formalizing an existing one, our CA-led team ensures smooth registration, PAN/TAN application, and a compliant partnership deed—giving your business a legal identity and operational transparency.";


const faqs = [
  {
    q: "Is it mandatory to register a partnership firm?",
    a: "No, registration is not mandatory under the Indian Partnership Act, 1932. However, a registered firm enjoys greater legal benefits and can sue or be sued in its own name.",
  },
  {
    q: "How many partners are required to start a partnership firm?",
    a: "A minimum of 2 partners is required, and the maximum is 20 (10 for banking businesses).",
  },
  {
    q: "Can a partnership firm be converted to LLP or Private Limited?",
    a: "Yes, registered partnership firms can be converted into LLPs or Private Limited Companies through a legal conversion process.",
  },
  {
    q: "How long does it take to register a partnership firm?",
    a: "The process usually takes 3–5 working days if all documents are in place and the deed is notarized correctly.",
  },
  {
    q: "Can a partnership firm have PAN and open a bank account?",
    a: "Yes, after creating and notarizing the deed, you can apply for a PAN in the firm’s name and open a current account.",
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
        Why Register a Partnership Firm?
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        A <strong>Partnership Firm</strong> is a popular and straightforward business structure for two or more individuals to run a business jointly. Registering a partnership firm offers legal recognition, enhanced credibility, and helps in smoother operations and dispute resolution.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Ease of Formation:</strong> Simple and cost-effective setup process with minimal regulatory formalities.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Shared Responsibilities:</strong> Workload, decisions, and capital are shared among partners, making it more efficient.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Legal Recognition:</strong> A registered firm can file suits, open a current bank account, and access government registrations easily.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Greater Credibility:</strong> A registered firm builds trust with clients, suppliers, and financial institutions.</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span><strong>Tax Benefits:</strong> Income is taxed at a lower rate compared to individual taxation in certain cases.</span>
        </li>
      </ul>
    </div>

    <div>
      <img
        src="/navservices/feature-psf.png"
        alt="Partnership Firm Registration"
        className="w-full mt-3 h-auto object-contain"
        loading="lazy"
      />
    </div>
  </div>
</div>



 

 
 

 <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-6 text-center">
          What Are The Advantages Of A Partnership Firm?
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Registering as a Partnership Firm offers several key benefits that make it a popular choice for entrepreneurs and business owners in India.
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


      

     

      <SectionTitle>Process for Partnership Firm Registration</SectionTitle>
      <ProcessSteps steps={steps} />

       <div className=' p-3 md:p-5'>
        <img  className="max-w-5xl mx-auto h-auto object-contain "src="/navservices/Documents-Required-psf.webp" alt="partnership firm process" />
      </div>

     
     

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQSection faqs={faqs} open={open} toggle={toggle} />

      <Cta />
    </>
  );
}
