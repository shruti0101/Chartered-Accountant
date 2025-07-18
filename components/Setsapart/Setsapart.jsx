// components/common/WhyChooseUs.jsx
import { FaShieldAlt, FaUsers, FaMapMarkedAlt, FaUserPlus, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="text-[#1C398E] text-2xl" />,
    label: "What Sets Us Apart",
  },
  {
    icon: <FaUsers className="text-[#1C398E] md:text-2xl" />,
    label: <span><span className="text-orange-500 font-bold">500+</span> Professionals Network</span>,
  },
  {
    icon: <FaMapMarkedAlt className="text-[#1C398E] md:text-2xl" />,
    label: <span><span className="text-orange-500 font-bold">5000+</span> All India Clients</span>,
  },
  {
    icon: <FaUserPlus className="text-[#1C398E] md:text-2xl" />,
    label: <span><span className="text-orange-500 font-bold">2000+</span> Monthly Clients Onboarded</span>,
  },
  {
    icon: <FaStar className="text-[#1C398E] md:text-2xl" />,
    label: <span><span className="text-orange-500 font-bold">3500+</span> Trusted Ratings</span>,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="  px-4">
      <div data-aos="flip-up" className="max-w-7xl w-full mx-auto  rounded-full  flex flex-wrap justify-center items-center px-6  gap-4 md:gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-gray-100 hover:bg-[#eef3ff] transition px-4 py-3 rounded-full text-sm md:text-base"
          >
            {item.icon}
            <span className="text-gray-800 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
