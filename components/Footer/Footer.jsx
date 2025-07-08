import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
            <li>Company Registration</li>
            <li>LLP Formation</li>
            <li>Startup India Support</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            ROC Compliances
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Annual Filings</li>
            <li>Director KYC</li>
            <li>DIN Compliance</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            GST Services
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>GST Registration</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
       <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
           Taxation Services
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Income Tax Filing</li>
            <li>Tax Planning</li>
            <li>TDS Compliance</li>
            <li>Transfer Pricing</li>
            <li>DTAA Advisory</li>
            <li>NRI Tax Filing</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Audit & Assurance
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Statutory Audit</li>
            <li>Internal Audit</li>
            <li>Management Audit</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          

             <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Bookkeeping & Accounting
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Tally & QuickBooks</li>
            <li>MIS Reports</li>
            <li>Payroll Services</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
            Useful Links
          </h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Industries</li>
            <li>Publication</li>
               <li>Knowledge Hub</li>
            <li>Contact Us</li>
         
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-blue-400 w-fit ">
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
              agrawalchintan27@gmail.com
              info@cachintanagrawal.com
            </p>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-white/10 pt-4 text-center text-sm px-4">
        <p>
          © 2025 <span className="font-semibold">Chintan Agrawal & CO</span>. All Rights Reserved.
        </p>
        <p>
          Developed & Managed by <span className="font-semibold">Promozione Branding Pvt Ltd.</span>
        </p>
        <p className="mt-2 text-xs">
          Chintan Agrawal & CO is a Chartered Accountancy firm offering professional consultancy and compliance
          services. We are an independent entity and are not affiliated with any government authority. Our services
          include business and startup registrations, GST filings, trademark registrations, and other statutory
          compliances. All services are provided for a professional fee.
        </p>
      </div>
    </footer>
  );
}
