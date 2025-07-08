import { CheckCircle2 } from "lucide-react";



export default function GSTBenefits({benefits}) {
  return (
    <section className="py-8 px-4 md:px-10 lg:px-20 ">
      
      <ul className="space-y-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="text-green-500  w-6 h-6 mt-1 flex-shrink-0" />
            <p className="text-gray-800 text-base md:text-xl  leading-relaxed">
              <span className="font-bold">{benefit.title}:</span>{" "}
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
