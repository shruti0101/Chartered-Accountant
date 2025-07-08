import Facilites from "@/components/Facilities/Facilities";

const industries = [
  {
    title: "Real Estate",
    tag: "Industrial",
    img: "/industries/realestate.jpg",
  },
  {
    title: "Information Technology",
    tag: "Tech",
    img: "/industries/it.webp",
  },
  {
    title: "Media and Entertainment",
    tag: "Healthcare",
    img: "/industries/media.jpg",
  },

  {
    title: "Manufacturers",
    tag: "Retail",
    img: "/industries/Manufacturing.jpg",
  },

  {
    title: "Retail and Consumer Products",
    tag: "Property",
    img: "/industries/retail.jpg",
  },
  {
    title: "Importers / Exporters",
    tag: "Finance",
    img: "/industries/import.jpeg",
  },
  {
    title: "Brand Developers",
    tag: "Finance",
    img: "/industries/brand.png",
  },

  {
    title: "Architects",
    tag: "Finance",
    img: "/industries/architect.webp",
  },

  {
    title: "Ecommerce",
    tag: "Finance",
    img: "/industries/ecom.webp",
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-16 bg-[#E5EBFC]">
      <div className="container mx-auto px-4">
        <h1
          data-aos="fade-up"
          className="text-[#1C398E] text-3xl md:text-5xl font-bold text-center mb-9"
        >
          Industries We Serve
        </h1>
        <p
          data-aos="zoom-in"
          className="text-center max-w-4xl mx-auto text-gray-600 text-lg mb-12"
        >
          At Chintan Agrawal & Co., we understand that every industry comes with
          its own set of financial challenges, regulatory requirements, and
          compliance standards. Our team of experienced Chartered Accountants
          provides customized solutions to businesses across diverse sectors,
          ensuring financial clarity, tax efficiency, and sustainable growth.
        </p>

        {/* grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="6000"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-17"
        >
          {industries.map(({ title, tag, img ,key }) => (
            <div key={title + key} className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* image */}
              <img
          
                src={img}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Always-visible title */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-4 py-3">
                <h3 className="text-lg md:text-2xl font-semibold  ">{title}</h3>
              </div>

              {/* Hover overlay (optional detail/tag) */}
              <div
                className="absolute inset-0 bg-blue-900/80  flex flex-col items-center justify-center
     text-center text-white px-4 opacity-0 translate-y-4
     group-hover:opacity-100 group-hover:translate-y-0
     transition-all duration-500"
              >
                <p className="text-sm italic">{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Facilites></Facilites>
    </section>
  );
}
