export default function FormSection() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 md:p-15 w-full">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-500 text-center mx-auto">Get Your Quote & Free Consultation</h3>
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Name" type="text" placeholder="Your Name" />
          <Input label="Phone" type="tel" placeholder="+91 81234 56789" />
        </div>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Message" type="text" placeholder="Your message" />
        <button
          type="submit"
          className="w-full bg-[#1C398E] md:mt-5 hover:bg-[#152b6a] text-white font-semibold py-2 md:py-3 rounded-lg transition"
        >
          Get Detailed Quotation
        </button>
      </form>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-[#1C398E] focus:border-[#1C398E]"
    />
  </div>
);
