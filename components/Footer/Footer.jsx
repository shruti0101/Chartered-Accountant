import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-[#0A2E5C] h-auto  text-white  pt-16 pb-6 px-4"
      style={{ backgroundImage: "url('/footerbg.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <div className="max-w-7xl mx-auto py-7 cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Useful Links */}
        <div className="">
          <h4 className="text-2xl font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-lg">
            <li>› Home</li>
            <li>› About Us</li>
            <li>› Contact Us</li>
            <li>› Blog</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-lg">
            <li>› Auditing and Assurance</li>
            <li>› Tax Advisory</li>
            <li>› Business Accounting</li>
            <li>› Finance</li>
            <li>› Valuation Services</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Important Link</h4>
          <ul className="space-y-2 text-lg">
            <li>› Income Tax Dept.</li>
            <li>› Central Board of Excise & Customs</li>
            <li>› Ministry of Corporate Affairs</li>
            <li>› Employees Provident Fund</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact Us</h4>
          <div className="space-y-4 text-lg">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1   text-3xl text-sky-400" />
381, Vardhman Grand Plaza, Sector-3, Rohini, Delhi            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-sky-400" />
      +91 9818111206 <br />
       +91 9971595525
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-sky-400" />
          agrawalchintan27@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-4 text-md text-center gap-2 mb-4">
        <p>© 2025 <span className="font-semibold text-center ">Chintan Agrawal & CO</span>. All Rights Reserved.</p>
    
         <p className="text-center">Developed & Manage by <span className="font-semibold">Promozione Branding Pvt Ltd.</span> </p> 

      </div>
      <p className="font-normal text-center text-sm">Chintan Agrawal & CO is a Chartered Accountancy firm offering professional consultancy and compliance services. We are an independent entity and are not affiliated with any government authority. Our services include business and startup registrations, GST filings, trademark registrations, and other statutory compliances. All services are provided for a professional fee</p>
    </footer>
  );
}
