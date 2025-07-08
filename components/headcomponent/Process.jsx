export default function ProcessSteps({ steps }) {
  return (
    <div className="w-full pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {steps.map(({ icon: Icon, subtitle, desc }, idx) => {
          const isLast = idx === steps.length - 1;
          const isOdd = steps.length % 2 !== 0;
          const shouldCenter = isLast && isOdd;

          return (
            <div
              key={idx}
              className={`flex-1 min-w-[300px] mb-7 md:mb-10 text-center ${
                shouldCenter ? "md:col-span-2 md:flex md:justify-center" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex flex-col items-center max-w-md ">
                <div className="flex hover:text-green-700 items-center justify-center w-17 h-17  mx-auto mb-4 bg-green-100 text-[#1C398E] rounded-full text-4xl">
                  <Icon />
                </div>
                <h4 className="text-lg md:text-2xl font-semibold text-[#1C398E] ">
                  {subtitle}
                </h4>
                <p className=" text-sm text-gray-600 mt-1 px-2">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
