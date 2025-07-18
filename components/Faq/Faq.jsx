'use client'



import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // yarn add lucide-react OR swap for any icon lib

const faqs = [
  {
    q: "What services does a Chartered Accountant provide?",
    a: "We offer a wide range of professional services including audit & assurance, income tax return filing, GST compliance, financial advisory, bookkeeping, payroll processing, and business incorporation. We also provide consultancy on international taxation, transfer pricing, and corporate governance."
  },
  {
    q: "Do I really need to file an income-tax return if my employer already deducted TDS?",
    a: "Yes. Filing your tax return ensures that you declare all sources of income, claim eligible deductions, and maintain a financial record. Even if TDS is deducted, you may be eligible for a refund or need to report capital gains, interest income, or other taxable earnings."
  },
  {
    q: "How can a CA help optimise my tax liability?",
    a: "A Chartered Accountant can legally help you minimize your tax burden through investment planning, evaluating exemptions and deductions under the Income Tax Act, and restructuring salary or business income. CAs also ensure you remain compliant to avoid interest, penalties or scrutiny notices."
  },
  {
    q: "What is GST audit and who needs it?",
    a: "GST audit is a process to ensure accuracy in the records, returns, and statements submitted under GST law. Businesses with annual turnover above the prescribed threshold (currently ₹5 crore) are required to get their accounts audited by a Chartered Accountant and file GSTR-9C along with reconciliation statements."
  },
  {
    q: "Do you assist with company incorporation and ROC compliances?",
    a: "Yes. We provide end-to-end support for registering your company, and handling post-incorporation compliances like various ROC forms, including annual filings with registrar of companies."
  },
  {
    q: "What is the difference between tax audit and statutory audit?",
    a: "Tax audit is mandated under section 44AB of the Income Tax Act and ensures accurate reporting of taxable income. Statutory audit, under the Companies Act, checks the fairness of financial statements for shareholders. While both are audits, their scope, applicability and objectives differ significantly."
  },
  {
    q: "How soon can I expect my income-tax refund?",
    a: "Income-tax refunds are generally processed within 7 to 45 days after successful filing and e-verification of your return. However, delays may occur due to mismatches in TDS, discrepancies in bank details, or selected cases for detailed scrutiny. We help track and expedite refund processing."
  },
  {
    q: "Can you represent me before tax authorities?",
    a: "Yes, we are authorized to appear before tax officers, GST officials, and regulatory bodies. We assist in replying to notices, attending assessment hearings, and filing appeals before CIT(A), ITAT and other authorities, ensuring professional representation and resolution of disputes."
  }
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative isolate py-10 md:py-20 lg:py-20 overflow-hidden"
    >
      {/* diagonal pastel layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100/70 via-sky-100/60 to-teal-50" />
      <div className="absolute inset-0 -z-20 rotate-45 origin-top-left">
        <div className="h-full w-[140%] bg-gradient-to-tr from-violet-200/40 to-fuchsia-100/30" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-[#0b0d30] mb-12">
          Frequently Asked Questions
        </h2>

        <ul className="space-y-6 ">
          {faqs.map(({ q, a }, idx) => (
            <li
              key={q}
              className="border-b border-indigo-200/60 pb-6 last:border-none"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-start text-left group"
              >
                <span
                  className={`text-md md:text-xl font-medium transition-colors ${
                    open === idx
                      ? "text-[#004AAD]"
                      : "text-[#0b0d30] group-hover:text-[#004AAD]"
                  }`}
                >
                  {q}
                </span>
                {open === idx ? (
                  <Minus className=" text-sm shrink-0 text-[#004AAD]" />
                ) : (
                  <Plus className=" text-sm  shrink-0 text-[#004AAD]" />
                )}
              </button>

              {/* answer */}
              {open === idx && (
                <p className="mt-4 text-md md:text-xl text-gray-700 leading-relaxed">{a}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
