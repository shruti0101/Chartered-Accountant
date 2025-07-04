import { FaCheckCircle } from "react-icons/fa";

export default function BenefitsList({ benefits = [] }) {
  return (
    <div className="grid mt-7 grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 ">
      {benefits.map((text, i) => (
        <div
          key={i}
          className="flex items-start gap-3   bg-white shadow rounded-lg p-3"
        >
          <FaCheckCircle className="hidden md:block w-7 h-7 gap-5 text-green-600 mt-1" />
          <p className="text-gray-700">{text}</p>
        </div>
      ))}
    </div>
  );
}
