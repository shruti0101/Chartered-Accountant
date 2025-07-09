"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section  className="py-16 ">




      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left Info */}
        <div >
          <h2 className="text-4xl font-bold text-[#00205B] mb-4">
            Let's Start <br /> Something Great!
          </h2>
          <p className="text-gray-600 mb-10 max-w-md">
            From company incorporations and GST compliance to strategic tax
            planning, our Chartered Accountants deliver clear advice and
            dependable, on-time filings—so you can focus on growing your
            business with confidence.
          </p>

          {/* Info Items */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold">LOCATION</p>
                <p className="text-gray-800 font-medium">
                  381, Vardhman Grand Plaza, Sector-3, Rohini, Delhi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold">EMAIL</p>
                <p className="text-gray-800 font-medium">
                  agarwalchintan27@gmail.com
                </p>
                <p className="text-gray-800 font-medium">
                  info@cachintanagrawal.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-semibold">CALL US</p>
                <p className="text-gray-800 font-medium">
                  +91 9818111206, +91 9971595525
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-4">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://facebook.com",
                bg: "bg-blue-600",
              },
              {
                icon: <FaInstagram />,
                link: "https://instagram.com",
                bg: "bg-gradient-to-tr from-pink-500 to-yellow-500",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://linkedin.com",
                bg: "bg-[#0A66C2]",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/919818111206",
                bg: "bg-green-500",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white ${item.bg} p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300 ease-in-out`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <form 
          action="https://formsubmit.co/agarwalchintan27@gmail.com"
          method="POST"
          className="bg-blue-600 p-8 rounded-lg space-y-4"
        >
          <h3 className="text-white text-2xl font-bold mb-4">
            Request For Proposal
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded bg-blue-100 text-gray-700 placeholder-gray-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className="w-full px-4 py-3 rounded bg-blue-100 text-gray-700 placeholder-gray-500 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded bg-blue-100 text-gray-700 placeholder-gray-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message Here"
            rows="4"
            required
            className="w-full px-4 py-3 rounded bg-blue-100 text-gray-700 placeholder-gray-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-3 rounded hover:bg-gray-100 transition"
          >
            Submit
          </button>

          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
}
