import { FaRegBuilding, FaSmile, FaLock } from "react-icons/fa";

const stats = [
  { icon: FaRegBuilding, number: "500+", label: "GST Notices Resolved" },
  { icon: FaSmile, number: "2,000+", label: "Satisfied Clients" },
  { icon: FaLock, number: "100%", label: "Data Security Guaranteed" },
];

export default function StatsSection() {
  return (
    <div className="grid card-grid grid-cols-3 md:max-w-3xl mx-auto gap-4 mb-11 md:mb-22">
      {stats.map(({ icon: Icon, number, label }, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-white shadow rounded-xl py-6 px-4"
        >
          <Icon className="text-[#1C398E]  w-8 h-8  mb-2" />
          <span className="text-xl md:text-2xl font-bold">{number}</span>
          <p className="text-gray-600 text-xs md:text-sm text-center">{label}</p>
        </div>
      ))}
    </div>
  );
}
