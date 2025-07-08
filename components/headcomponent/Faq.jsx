import { FaAngleDown } from "react-icons/fa";

export default function FAQSection({ faqs, open, toggle }) {
  return (
    <div className="bg-slate-100 mt-5 p-10 px-4 md:px-8 rounded-xl shadow-sm">
      <div className="max-w-4xl mx-auto text-md md:text-xl">
        {faqs.map((faq, idx) => (
          <div className="border-b border-gray-300 last:border-none" key={idx}>
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center py-6 text-left font-medium text-gray-800"
            >
              {faq.q}
              <FaAngleDown
                className={`transition transform duration-300 ${
                  open === idx ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {open === idx && (
              <p className="pb-4 text-gray-700 leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
