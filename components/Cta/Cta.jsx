import { PointerHighlight } from "@/components/ui/Pointer-Highlight";


const CTASection = () => {
  return (
    <section
      className="w-full  py-5 bg-no-repeat bg-[#1e73be]"
      style={{
        backgroundImage: "url('/ctabg.webp')",
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10% center",
      }}
    >
      <div className="md:max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Text */}
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
            Start your journey with <br className="hidden md:block" />
            <PointerHighlight
              rectangleClassName="bg-[#DBEAFE]"
              pointerClassName= " text-[#00C950]"
            >
              <span className="relative z-10 text-black italic">Chintan Agrawal & Co.</span>
            </PointerHighlight>{" "}
            today
          </h2>
          <p className="mt-4 text-sm md:text-lg text-white/90 tracking-wide uppercase">
            If your business is in need of a trusted advisor, get in touch with us today.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mx-auto">
          <a
            href="#contact"
            className="bg-white text-black text-lg font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

