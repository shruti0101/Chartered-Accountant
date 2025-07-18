import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#0A2E5C] text-white pt-8 pb-5 px-4"
      style={{
        backgroundImage: "url('/footerbg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="">
          <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Business Setup
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/company-registration" className="hover:underline">Company Registration</Link>
            </li>
            <li>
              <Link href="/llp-formation" className="hover:underline">LLP Formation</Link>
            </li>
            <li>
              <Link href="/startup-india-support" className="hover:underline">Startup India Support</Link>
            </li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            ROC Compliances
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/annual-filings" className="hover:underline">Annual Filings</Link>
            </li>
            <li>
              <Link href="/director-kyc" className="hover:underline">Director KYC</Link>
            </li>
            <li>
              <Link href="/din-compliance" className="hover:underline">DIN Compliance</Link>
            </li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            GST Services
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/gst-registration" className="hover:underline">GST Registration</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Taxation Services
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/income-tax-filing" className="hover:underline">Income Tax Filing</Link>
            </li>
            <li>
              <Link href="/tax-planning" className="hover:underline">Tax Planning</Link>
            </li>
            <li>
              <Link href="/tds-compliance" className="hover:underline">TDS Compliance</Link>
            </li>
            <li>
              <Link href="/transfer-pricing" className="hover:underline">Transfer Pricing</Link>
            </li>
            <li>
              <Link href="/dtaa-advisory" className="hover:underline">DTAA Advisory</Link>
            </li>
            <li>
              <Link href="/nri-tax" className="hover:underline">NRI Tax Filing</Link>
            </li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Audit & Assurance
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/statutory-audit" className="hover:underline">Statutory Audit</Link>
            </li>
            <li>
              <Link href="/internal-audit" className="hover:underline">Internal Audit</Link>
            </li>
            <li>
              <Link href="/management-audit" className="hover:underline">Management Audit</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Bookkeeping & Accounting
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/tally-quickbooks" className="hover:underline">Tally & QuickBooks</Link>
            </li>
            <li>
              <Link href="/mis-reports" className="hover:underline">MIS Reports</Link>
            </li>
            <li>
              <Link href="/payroll-services" className="hover:underline">Payroll Services</Link>
            </li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Useful Links
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/industries" className="hover:underline">Industries</Link>
            </li>
            <li>
              <Link href="/publication" className="hover:underline">Publication</Link>
            </li>
            <li>
              <Link href="/knowledge" className="hover:underline">Knowledge Hub</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>

  {/* Column 4 - Contact */}

    <div>
         
          <h4 className=" text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
          Important Links
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>
              <Link href="https://www.gst.gov.in/" className="hover:underline">GST website</Link>
            </li>
            <li>
              <Link href="https://www.incometax.gov.in/" className="hover:underline">Income Tax website</Link>
            </li>
          
          </ul>


             <h4 className="text-xl mt-11 font-semibold mb-4 border-b border-blue-400 w-fit ">
            Contact Us
          </h4>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1  text-xl text-sky-400" />
              381, Vardhman Grand Plaza, Sector-3, Rohini, Delhi
            </p>
            <p className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-xl text-sky-400" />
              <span>
                +91 9818111206 <br /> +91 9971595525
              </span>
            </p>
            <p className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-3xl text-sky-400" />
              <span>
                <a href="mailto:agrawalchintan27@gmail.com" className="hover:underline">agrawalchintan27@gmail.com</a>
                <br />
                <a href="mailto:info@cachintanagrawal.com" className="hover:underline">info@cachintanagrawal.com</a>
              </span>
            </p>
          </div>
        </div>



        {/* Column 5 - Contact */}
        <div>
       
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl flex justify-between mt-10 border-t border-white/10 pt-4 text-sm px-4">
        <p>
          © 2025 <span className="font-semibold">Chintan Agrawal & CO</span>. All Rights Reserved.
        </p>
        <p>
          Developed & Managed by <a href="https://promozionebranding.com/" className="font-semibold underline">Promozione Branding Pvt Ltd.</a>
        </p>
       
      </div>
       <p className="mt-2 text-center mt-3 max-w-7xl text-sm mb-4">
          Chintan Agrawal & CO is a Chartered Accountancy firm offering professional consultancy and compliance
          services. We are an independent entity and are not affiliated with any government authority. Our services
          include business and startup registrations, GST filings, trademark registrations, and other statutory
          compliances. All services are provided for a professional fee.
        </p>
    </footer>
  )
}