// components/ServiceWithFormSection.jsx
import Formsection from "@/components/headcomponent/Formsection";
export default function ServiceWithFormSection({ title, description }) {
  return (
    <section>
      <div className="absolute inset-0 -z-10 h-auto md:min-h-[660px] bg-gradient-to-br from-blue-100 via-green-100 to-white" />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C398E] mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mb-4">{description}</p>
          </div>

          {/* Right Form or Custom Element */}
          <div className="flex-1 w-full max-w-xl">
         <Formsection></Formsection>
          </div>
        </div>
      </div>
    </section>
  );
}
