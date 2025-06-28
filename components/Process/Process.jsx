"use client";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaFileSignature, FaCheckDouble, FaHandshake } from "react-icons/fa";

const steps = [
  {
    icon: <FaRegLightbulb />,
    title: " Application Form Submission",
    description: "Kindly complete the application form sent to your email with accurate and up-to-date information. This enables our CA team to initiate the compliance or advisory process with precision and efficiency.",
  },
  {
    icon: <FaFileSignature />,
    title: "Government Fee Submission",
    description: "Proceed with the payment of applicable statutory fees directly through the designated government portal. Our team will provide step-by-step assistance to ensure a smooth and error-free transaction.",
  },
  {
    icon: <FaCheckDouble />,
    title: "Document Review & Processing",
    description: "Upon confirmation of payment, our experts will carefully review your submitted details and initiate the relevant filings, registrations, or documentation required for your service.",
  },
  {
    icon: <FaHandshake />,
    title: "Final Confirmation & Delivery",
    description: "You’ll receive a formal confirmation email along with all necessary documents and reports prepared by our CA professionals. Please retain this communication for your records and future reference.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative bg-sky-50 py-13  pb-17 overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full text-sky-100"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,149.3C840,128,960,96,1080,101.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          <div className="flex items-center justify-center mb-3">
          <div className="w-14 h-1 bg-sky-500 mr-3 rounded-full" />
          <h3 className="text-sky-600 font-bold uppercase tracking-widest text-lg">
        Our process
          </h3>
          <div className="w-14 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>


        </motion.h2>

        <h1 className="text-4xl font-bold mb-4">Understand Our Seamless Process</h1>
       
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
         Experience a smooth and transparent workflow with Chintan Agrawal & CO. — where expert Chartered Accountancy services meet efficiency, accuracy, and client-focused execution at every step.
        </p>

        <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-xl rounded-xl p-6 border-t-4 border-[#00C950] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-sky-500 text-4xl mb-4 flex items-center justify-center  ">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600  text-sm mb-3">{step.description}</p>
              <div className="border-b text-stone-200 transition-all  "></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

