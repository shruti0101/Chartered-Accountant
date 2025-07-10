export default function DocumentsRequired({ documents }) {
  return (
    <div className="grid sm:grid-cols-2 mt-9 md:mt-17 gap-10 mb-6 md:mb-23 max-w-5xl mx-auto">
      {documents.map(({ icon: Icon, title, desc }, idx) => (
        <div
          key={idx}
          className="flex items-start gap-5 border-l-4 border-[#00A63E] pl-4 py-2 group hover:bg-[#f1f8ff] transition-colors duration-300 rounded-md"
        >
          <Icon className="text-[#1C398E] group-hover:text-[#00A63E] w-8 h-8  md:w-11 md:h-11 animate-bounce transition-colors duration-300" />
          <div>
            <h4 className="font-semibold text-xl text-gray-800 group-hover:text-[#1C398E] transition-colors duration-300">
              {title}
            </h4>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
