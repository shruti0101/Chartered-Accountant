import { FaArrowRight } from "react-icons/fa";

export default function TypesList({ types = [] }) {
  return (
    <div className="relative w-full px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-[#1C398E] text-center md:text-start">
        Types of GST Registration
      </h3>
       <p className="text-center md:text-start text-gray-700 max-w-3xl mx-auto mb-2 text-md md:text-lg">
    The type of GST registration your business requires depends on your turnover,
    nature of supply, and geographical operation. Below are the major categories
    that define how businesses and individuals are registered under GST in India:
  </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {types.map((type, index) => (
          <div
            key={index}
            className="group flex items-start gap-3 cursor-pointer transition duration-200"
          >
            <FaArrowRight className="text-[#00BF4C] mt-1 transition group-hover:text-[#1C398E]" />
            <p className="text-gray-700 text-base md:text-xl group-hover:text-[#1C398E] transition">
              {type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
