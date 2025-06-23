"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import "../Navbar/Navbar.css"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../../public/logo.png"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Publication", href: "/publication" },
  { label: "Industries", href: "/industries" },
  { label: "Knowledge Hub", href: "/knowledge" },
];

const servicesLinks = [
  { label: "Business Setup Solution", href: "/services/seo" },
  { label: "Book Keeping & Accounting", href: "/services/branding" },
  { label: "GST Related Services", href: "/services/ppc" },
  { label: "Taxation Related Services", href: "/services/smo" },
  { label: "ROC Compliances", href: "/services/email" },
  { label: "Audit & Assurance", href: "/services/web-dev" },
  { label: "International Taxation", href: "/services/web-d" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className=" bg-background/50 sticky top-0 backdrop-blur  z-50 shadow-sm"  >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={110} height={110} priority />
        </Link>

        {/* Desktop Nav */}
        <div  className= "hidden  md:flex space-x-6 items-center text-base font-medium font-bold relative">
          {navLinks.map((link) => {
            if (link.label === "Publication") {
              return (
                <div key="pub-service" className="flex items-center space-x-6">
                  {/* Publication */}
                  <Link
                    href={link.href}
                    className={`relative group inline-block px-2 py-1 transition-all duration-300 ${
                      isActive(link.href) ? "text-[#996515]" : ""
                    }`}
                  >
                    <span className="group-hover:text-[#996515] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#996515] transition-all duration-300 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                  {/* Services Dropdown */}
                  <div className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer px-2 ">
                      <span
                        className={`transition-colors duration-300 ${
                          pathname.startsWith("/services")
                            ? "text-[#996515]"
                            : "group-hover:text-[#996515]"
                        }`}
                      >
                        Services
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          pathname.startsWith("/services")
                            ? "rotate-180 text-[#996515]"
                            : "group-hover:text-[#996515]"
                        }`}
                      />
                      <span
                        className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#996515] transition-all duration-300 ${
                          pathname.startsWith("/services")
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </div>

                    <div className="absolute left-0 mt-1 w-80 bg-white border rounded-md shadow-xl z-50 p-4 grid grid-cols-2 gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-200">
                      {servicesLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm px-3 py-2 rounded hover:bg-gray-100 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group inline-block px-2 py-1 transition-all duration-300 ${
                  isActive(link.href) ? "text-[#996515]" : ""
                }`}
              >
                <span className="group-hover:text-[#996515] transition-colors duration-300">
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#996515] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}


       <div className="flex justify-center md:justify-start ">
  <button className="group relative inline-flex items-center overflow-hidden cursor-pointer rounded bg-[#9C7A6B] px-4 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#7d5f51] hover:scale-105">
    <span className="mr-2">Contact Us</span>
    <svg
      className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1"
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

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center">Navigation</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 pt-5 text-base">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={isActive(link.href) ? "text-[#996515]" : ""}
                      >
                        {link.label}
                      </Link>
                    ))}

                    {/* Mobile-friendly Services Dropdown */}
                    <MobileDropdown title="Services" links={servicesLinks} />

                    <Button variant="outline" className="mt-4 w-full">
                      Contact Us
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

// Component for mobile dropdown toggle
const MobileDropdown = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold flex justify-between items-center"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="mt-2 space-y-2 pl-4">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="block text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
