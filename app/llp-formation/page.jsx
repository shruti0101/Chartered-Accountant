'use client';
import { lazy, Suspense, useState } from "react";
import {
  FaCheckCircle, FaRegBuilding, FaSmile, 
  FaIdCard, FaMapMarkedAlt, FaFileContract,
  FaUniversity, FaUserShield, FaKey
} from "react-icons/fa";

// Lazy-loaded components
const SectionTitle = lazy(() => import("@/components/headcomponent/Sectiontitle"));
const StatsSection = lazy(() => import("@/components/headcomponent/StatsSection"));
const FormSection = lazy(() => import("@/components/headcomponent/Formsection"));
const TypesList = lazy(() => import("@/components/headcomponent/Typelist"));
const BenefitsList = lazy(() => import("@/components/headcomponent/Benefits"));
const ProcessSteps = lazy(() => import("@/components/headcomponent/Process"));
const DocumentsRequired = lazy(() => import("@/components/headcomponent/Documents"));
const FAQSection = lazy(() => import("@/components/headcomponent/Faq"));
const Cta = lazy(() => import("@/components/Cta/Cta"));

// Fallback UI
const Loading = () => (
  <div className="text-center text-gray-500 py-6 animate-pulse">Loading...</div>
);

export default function LLPRegistration() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const types = [
    "LLP for Services Business", "LLP for Traders", "LLP for Consultants",
    "LLP with Foreign Partners", "Professional LLPs (CA/CS/Advocates)"
  ];

  const benefits = [
    { title: "Separate Legal Identity", description: "An LLP has its own legal identity, separate from its partners. It can own assets, sue, and be sued in its own name." },
    { title: "Limited Liability", description: "Partners are not personally liable for the debts of the LLP, except to the extent of their agreed contribution." },
    { title: "No Minimum Capital Requirement", description: "You can register an LLP without any minimum capital contribution, making it cost-effective for startups." },
    { title: "Tax Efficiency", description: "LLPs are not subject to Dividend Distribution Tax and enjoy several other tax advantages under the Income Tax Act." },
    { title: "Flexible Management", description: "LLPs operate based on their agreement, offering flexibility in internal structure and operations." },
    { title: "Easy Compliance", description: "LLPs have fewer compliance requirements than companies, with no mandatory audits for turnover below ₹40 lakhs." },
  ];

  const steps = [
    { icon: FaUserShield, subtitle: "Partner Consultation", desc: "We understand your business model and guide you on LLP suitability, structure, and legal obligations." },
    { icon: FaFileContract, subtitle: "Document Collection", desc: "We collect PAN, Aadhaar, address proofs, and photos of partners, along with rental agreement or utility bill for office." },
    { icon: FaKey, subtitle: "DSC & DIN Application", desc: "We help obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for all designated partners." },
    { icon: FaUniversity, subtitle: "Name Reservation", desc: "We reserve your LLP name on the MCA portal and ensure it complies with naming guidelines." },
    { icon: FaCheckCircle, subtitle: "Filing Incorporation", desc: "We prepare and file the FiLLiP and LLP Agreement with the Registrar of Companies (RoC)." },
    { icon: FaSmile, subtitle: "LLPIN & Certificate", desc: "Once approved, you'll receive the LLP Identification Number (LLPIN) and incorporation certificate." },
  ];

  const documents = [
    { icon: FaIdCard, title: "ID Proof", desc: "PAN card of all designated partners is mandatory." },
    { icon: FaMapMarkedAlt, title: "Address Proof", desc: "Aadhaar card, voter ID, or utility bill of partners." },
    { icon: FaFileContract, title: "Registered Office Proof", desc: "Rent agreement and utility bill or NOC from owner." },
    { icon: FaUniversity, title: "Photographs", desc: "Recent passport-size photographs of partners." },
    { icon: FaUserShield, title: "Digital Signature Certificate", desc: "DSC for all designated partners to file forms online." },
    { icon: FaKey, title: "LLP Agreement", desc: "Draft agreement detailing mutual rights and duties." },
  ];

  const faqs = [
    { q: "What is an LLP?", a: "A Limited Liability Partnership (LLP) is a hybrid legal structure combining the flexibility of a partnership and limited liability of a company." },
    { q: "How many partners are required to form an LLP?", a: "At least two designated partners are required to form an LLP." },
    { q: "Is LLP registration mandatory for doing business?", a: "While it's not mandatory, registering as an LLP offers legal protection and credibility." },
    { q: "Do LLPs need to be audited?", a: "Only LLPs with a turnover exceeding ₹40 lakhs or capital contribution above ₹25 lakhs are required to audit their accounts." },
    { q: "Can foreign nationals be partners in LLPs?", a: "Yes, NRIs and foreign nationals can become partners, subject to conditions and approvals under FEMA." },
  ];

  const llpStats = [
    { icon: FaRegBuilding, number: "500+", label: "LLP Registrations Completed" },
    { icon: FaSmile, number: "1,200+", label: "Entrepreneurs Empowered" },
    { icon: FaCheckCircle, number: "100%", label: "Approval Success Rate" },
  ];

  return (
    <>
      <section id="llp-registration" className="py-12 ">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/90 via-sky-100/60 to-teal-50" />
        <div className="absolute inset-0 -z-20 rotate-30 origin-top-left">
          <div className="hidden md:block h-[120%] w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/70" />
        </div>
        <div className="container mx-auto p-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl leading-snug md:text-5xl max-w-5xl mx-auto font-extrabold text-[#1C398E] mb-4">
              Limited Liability Partnership (LLP) Registration in India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simplify your LLP registration with <strong>Chintan Agrawal & Co.</strong> We handle everything—filing, approvals, and compliance—so you can focus on growth.
            </p>
          </div>

          <Suspense fallback={<Loading />}>
            <StatsSection stats={llpStats} />
          </Suspense>

          <div className="grid lg:grid-cols-2 gap-10 md:mb-20">
            <Suspense fallback={<Loading />}>
              <FormSection />
            </Suspense>
            <Suspense fallback={<Loading />}>
              <TypesList types={types} />
            </Suspense>
          </div>

          {/* Info Section */}
          <div className="bg-white w-full py-12 px-4 md:px-10 lg:px-20 mb-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C398E] mb-4">
                  What is a Limited Liability Partnership (LLP)?
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-4">
                  An <strong>LLP</strong> combines the advantages of a traditional partnership with limited liability. It’s a separate legal entity, flexible, and cost-effective for small and medium businesses.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-[#1C398E] mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" />Separate Legal Entity</li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" />Limited Liability Protection</li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" />No Minimum Capital Requirement</li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" />Flexible Operations & Agreements</li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" />Simple Annual Compliance</li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src="/navservices/llp.webp"
                  alt="LLP Registration"
                  className="rounded-xl w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <Suspense fallback={<Loading />}>
            <div className="bg-gradient-to-br from-[#eef3fb] to-[#fdfdff] md:py-10 mt-3 px-4 rounded-xl">
              <SectionTitle>Benefits of LLP Registration</SectionTitle>
              <BenefitsList benefits={benefits} />
            </div>

            <SectionTitle>Our LLP Registration Process</SectionTitle>
            <ProcessSteps steps={steps} />

            <SectionTitle>Documents Required for LLP Registration</SectionTitle>
            <DocumentsRequired documents={documents} />

            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQSection faqs={faqs} open={open} toggle={toggle} />

            <Cta />
          </Suspense>
        </div>
      </section>
    </>
  );
}
