import { FaAngleDown } from "react-icons/fa";

export default function FAQSection({ faqs, open, toggle }) {
  return (
    <div className="max-w-4xl  mx-auto text-md md:text-xl">
      {faqs.map((faq, idx) => (
        <div className="border-b last:border-none" key={idx}>
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
          >
            {faq.q}
            <FaAngleDown
              className={`transition transform ${open === idx ? "rotate-180" : "rotate-0"}`}
            />
          </button>
          {open === idx && (
            <p className="pb-4 text-gray-600 leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
