"use client";

import Image from "next/image";
import lawyersImage from "@/public/whoweare.jpg";
import rocket from "@/public/rocket-image.png";
import circle from "@/public/circle.png";
const Whoweare = () => {
  return (
    <section className="bg-white pt-15 md:pt-43 pb-13">
      
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-10 gap-10">


 {/* Right Image */}
        <div
          className="md:w-1/2 flex justify-center relative"
          data-aos="fade-down"
        >
          <Image
            src={lawyersImage}
            alt="Who We Are"
            className="w-full h-auto max-w-md md:max-w-lg rounded-sm "
            priority
          />

          <Image
            src={circle}
            alt="Who We Are"
            className="hidden md:block  absolute round-circle right-0 -top-8 filter hue-rotate-[40deg] saturate-[700%]  "
            style={{ width: "180px" }}
            priority
          />

          <Image
            src={rocket}
            alt="Who We Are"
            className="absolute hidden md:block right-13 top-6 "
            style={{ width: "60px" }}
            priority
          />
        </div>



        {/* Left Content */}


        <div className="md:w-1/2" data-aos="fade-up">
          <div className="border-l-4 border-sky-500 pl-4 mb-4">
            <p className="text-sm text-sky-500 font-bold uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome to Our Chartered Accountancy Firm
            </h2>
          </div>

          <blockquote className="italic text-sky-600 text-lg mb-6">
            “To Earn Trust in Finance, We Must First Make Financial Practices
            Trustworthy — Years of Chartered Expertise You Can Count On.”
          </blockquote>

          <p className="text-gray-600 mb-4 text-sm md:text-base">
            We are a team of experienced <strong>Chartered Accountants</strong>{" "}
            committed to helping individuals, startups, and businesses navigate
            India’s financial and legal systems with ease.{" "}
            <strong>
              Our mission is to simplify the complexities of finance, tax, and
              law so that you can focus on growing your business with
              confidence.
            </strong>{" "}
          </p>

          <div className="mb-6">
            <p className="text-black font-semibold text-lg">
              Our Core Services Include:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
              <li>
                Business Entity Registration (Private Ltd., LLP, MSMEs, NGOs)
              </li>
              <li>GST Advisory and Filing</li>
              <li>Intellectual Property Protection</li>
              <li>Accounting, Auditing & Compliance Solutions</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start mt-6">
            <button className="group relative inline-flex items-center overflow-hidden cursor-pointer rounded-full bg-sky-500 px-4 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-sky-600 hover:scale-105">
              <span className="mr-1 mx-auto">Know More</span>
              <svg
                className="w-5 h-5 mx-auto transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Whoweare;
