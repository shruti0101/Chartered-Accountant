"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import "../Navbar/Navbar.css";
import { useEffect } from "react";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const servicesLinks = [
  {
    label: "Business Setup Solution",
    href: "/businesssetupsolution",
    sub: ["Company Registration", "LLP Formation", "Startup India Support"],
  },
  {
    label: "Book Keeping & Accounting",
    href: "/services/branding",
    sub: ["Tally & QuickBooks", "MIS Reports", "Payroll Services"],
  },

  {
    label: "Taxation Related Services",
    href: "/services/smo",
    sub: ["Income Tax Filing", "Tax Planning", "TDS Compliance"],
  },
  {
    label: "ROC Compliances",
    href: "/services/email",
    sub: ["Annual Filings", "Director KYC", "DIN Compliance"],
  },
  {
    label: "Audit & Assurance",
    href: "/services/web-dev",
    sub: ["Statutory Audit", "Internal Audit", "Management Audit"],
  },
  {
    label: "International Taxation",
    href: "/services/web-d",
    sub: ["Transfer Pricing", "DTAA Advisory", "NRI Tax Filing"],
  },
  {
    label: "GST Related Services",
    href: "/services/ppc",
    sub: ["GST Registration"],
  },
];

const Navbar = ({ className = "" }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);


  useEffect(() => {
  setServicesOpen(false); // Close dropdown on route change
}, [pathname]);

  return (
    <nav className="py-3 bg-background/70 border-b-white sticky top-0 backdrop-blur z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 group py-3 ${className}`}
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 48 48"
              className="h-full w-full text-[#004AAD]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <circle cx="24" cy="24" r="18" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="absolute h-4 w-4 text-green-600"
              fill="currentColor"
            >
              <path d="M12 6l6 9H6l6-9z" />
            </svg>
          </span>
          <span className="leading-none">
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-[#004AAD]">
              Chintan Agrawal{" "}
              <span className="relative">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute -bottom-1 left-0 w-3 h-3 text-green-600"
                  fill="currentColor"
                >
                  <path d="M12 2l4 7H8l4-7z" />
                </svg>
              </span>
              <span className="text-green-600">& Co </span>
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-600">
              Chartered Accountants
            </p>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-5 items-center text-base font-medium text-lg font-bold relative">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group inline-block px-2 py-1 transition-all duration-300 ${
                isActive(link.href) ? "text-[#013B7A]" : ""
              }`}
            >
              <span className="group-hover:text-[#013B7A]">{link.label}</span>
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#013B7A] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center  cursor-pointer px-2">
              <span
                className={`transition-colors duration-300 ${
                  pathname.startsWith("/services") || servicesOpen
                    ? "text-[#013B7A]"
                    : "group-hover:text-[#013B7A]"
                }`}
              >
                Services
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180 text-[#013B7A]" : ""
                }`}
              />
            </div>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[850px] bg-white border border-[#2AB55E] rounded-md shadow-xl z-50 p-6 grid grid-cols-3 gap-6 max-h-[90vh] overflow-y-auto">

                {servicesLinks.map((item) => (
                  <div
                    key={item.href}
                    className="group/item p-3 cursor-pointer rounded-md hover:bg-green-100/50"
                  >
                    <Link
                      href={item.href}
                      className="block text-[15px] font-semibold text-gray-800 group-hover/item:text-[#004AAD]"
                    >
                      {item.label}
                    </Link>
                    {item.sub && (
                      <ul className="pl-3 mt-2 text-sm text-gray-600 space-y-1">
                        {item.sub.map((subItem, i) => (
                          <li
                            key={i}
                            className="relative pl-4 flex items-center text-gray-600
                 transition-all duration-200 hover:text-[#004AAD] group"
                          >
                            {/* arrow */}
                            <span
                              className="absolute left-0 opacity-0 translate-x-0
                   transition-all duration-200 group-hover:opacity-100
                   group-hover:-translate-x-1"
                            >
                              ➜
                            </span>

                            {/* text shifts right a bit on hover */}
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              {subItem}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Remaining Links */}
          {[
            { label: "Publication", href: "/publication" },
            { label: "Industries", href: "/industries" },
            { label: "Knowledge Hub", href: "/knowledge" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group inline-block px-2 py-1 transition-all duration-300 ${
                isActive(link.href) ? "text-[#013B7A]" : ""
              }`}
            >
              <span className="group-hover:text-[#013B7A]">{link.label}</span>
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#013B7A] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <div className="flex justify-center md:justify-start">
            <button className="btn capitalize">contact us</button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-7 h-7 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    className={`flex items-center gap-2 group py-3 ${className}`}
                  >
                    <span className="relative inline-flex h-10 w-10 items-center justify-center">
                      <svg
                        viewBox="0 0 48 48"
                        className="h-full w-full text-[#004AAD]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <circle cx="24" cy="24" r="18" />
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        className="absolute h-4 w-4 text-green-600"
                        fill="currentColor"
                      >
                        <path d="M12 6l6 9H6l6-9z" />
                      </svg>
                    </span>
                    <span className="leading-none">
                      <h1 className="text-lg font-bold text-[#004AAD]">
                        Chintan Agrawal
                        <span className="text-green-600"> & Co</span>
                      </h1>
                      <p className="text-[10px] uppercase tracking-wider text-gray-600">
                        Chartered Accountants
                      </p>
                    </span>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 pt-5 text-base">
                    <Link
                      href="/"
                      className={isActive("/") ? "text-[#013B7A]" : ""}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={isActive("/about") ? "text-[#013B7A]" : ""}
                    >
                      About Us
                    </Link>
                    <MobileDropdown title="Services" links={servicesLinks} />
                    <Link
                      href="/publication"
                      className={
                        isActive("/publication") ? "text-[#013B7A]" : ""
                      }
                    >
                      Publication
                    </Link>
                    <Link
                      href="/industries"
                      className={
                        isActive("/industries") ? "text-[#013B7A]" : ""
                      }
                    >
                      Industries
                    </Link>
                    <Link
                      href="/knowledge"
                      className={isActive("/knowledge") ? "text-[#013B7A]" : ""}
                    >
                      Knowledge Hub
                    </Link>
                    <Button className="bg-[#004AAD] hover:bg-[#013B7A] mt-4 w-full text-white">
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
