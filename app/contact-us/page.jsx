import React from 'react'
import Form from '@/components/Form/Form'
const contact = () => {
  return (
    <div>

<section
  style={{ backgroundImage: "url(/contact/bg-contact.jpg.webp)" }}
  className="bg-center bg-cover bg-no-repeat bg-black/5 h-full py-17 "
>
  <div data-aos="fade-up" className="max-w-6xl mx-auto text-center text-white  p-10 rounded-3xl shadow-lg backdrop-blur-sm">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Get In Touch with <span className="text-[#00A63E]">Chintan Agrawal & Co.</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
      Have questions about company registration, GST, income tax, or audit services? Our team of experienced Chartered Accountants is here to provide you with personalized, trustworthy advice.
    </p>
    <p className="text-gray-300 mb-8">
      Let's simplify your compliance journey and help your business thrive. Reach out today for a free consultation.
    </p>

    <a
      href="https://wa.me/919818111206"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
    >
      💬 Chat with Us on WhatsApp
    </a>
  </div>
</section>





<Form></Form>

<section data-aos="zoom-up" className=" bg-[#DBF3F1]/50 py-15 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl  font-bold text-[#044681]">
      Premium Business Solutions by <span className="text-green-800">Chintan Agrawal & Co.</span>
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Navigate Registration, Taxation & Compliance effortlessly with our expert-led services tailored for businesses like yours.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-7 gap-7">
    {[
      {
        title: 'Business setup solution',
        img: '/contact/Business.jpg',
        desc: 'Start your business with the most trusted structure in India.',
      },
      {
        title: 'roc compliances',
        img: '/contact/roc.jpg',
        desc: 'Ensure food safety compliance with expert assistance.',
      },
      {
        title: 'Audit book keeping and accounting services',
        img: '/contact/accounting.jpg',
        desc: 'Flexible structures for startups & service professionals.',
      },
      {
        title: 'taxation related services',
        img: '/contact/Taxation.jpeg',
        desc: 'Protect your brand identity and gain legal ownership.',
      },
    ].map((service, index) => (
      <div
        key={index}
        className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl capitalize font-semibold text-[#044681] group-hover:text-green-700 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>




 {/* Google Map */}
<section className="pt-10 mb-10 md:mb-0 w-full">
  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.3531132063813!2d77.11159620901432!3d28.698967675526877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e4b1e8d73b%3A0xd27723de9714939f!2sVardhman%20Grand%20Plaza!5e1!3m2!1sen!2sin!4v1751714899347!5m2!1sen!2sin"
      title="Vardhman Grand Plaza Location"
      className="w-full h-[650px] border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>


    </div>
  )
}

export default contact