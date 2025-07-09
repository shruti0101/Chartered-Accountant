import React from 'react'

const Types = ({filingTypes , heading}) => {
  return (
    <div>

        
              {/* Filing Types */}
              <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
                   {heading}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filingTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center bg-[#E9FBFC] rounded-lg p-4 shadow hover:scale-105 transition-transform"
                      >
                        <div className="bg-[#1C398E] rounded-full p-3 mb-4">{type.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{type.title}</h3>
                        <p className="text-gray-600">{type.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Types