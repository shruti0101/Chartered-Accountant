"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import "../Navbar/Navbar.css";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../../public/logo.png";

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

const Navbar = ({ className = "" }) => {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className=" py-3 bg-background/70 border-b-white   sticky top-0 backdrop-blur z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
    

<Link
      href="/"
      aria-label="Chintan Agrawal & Co • Chartered Accountants"
      className={`flex items-center gap-2 group py-3 ${className}`}
    >
      {/* 1. Symbol Icon */}
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        {/* Blue circular stroke */}
        <svg
          viewBox="0 0 48 48"
          className="h-full w-full text-[#004AAD] group-hover:scale-105 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <circle cx="24" cy="24" r="18" />
        </svg>

        {/* Green chevron inside */}
        <svg
          viewBox="0 0 24 24"
          className="absolute h-4 w-4 text-green-600"
          fill="currentColor"
        >
          <path d="M12 6l6 9H6l6-9z" />
        </svg>
      </span>

      {/* 2. Brand Text */}
      <span className="leading-none">
        <h1
          className="text-lg md:text-xl font-bold tracking-tight
                     text-[#004AAD] group-hover:text-[#013B7A] transition-colors"
        >
          Chintan  Agrawal{" "}
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
          {navLinks.map((link) => {
            if (link.label === "Publication") {
              return (
                <div key="pub-service" className="flex items-center space-x-6">
                  {/* Publication */}
                  <Link
                    href={link.href}
                    className={`relative group inline-block px-2 py-1 transition-all duration-300 ${
                      isActive(link.href) ? "text-[#013B7A]" : ""
                    }`}
                  >
                    <span className="group-hover:text-[#013B7A] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#013B7A] transition-all duration-300 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>

                  {/* Services Dropdown */}
                  <div className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer px-2">
                      <span
                        className={`transition-colors duration-300 ${
                          pathname.startsWith("/services")
                            ? "text-[#013B7A]"
                            : "group-hover:text-[#013B7A]"
                        }`}
                      >
                        Services
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          pathname.startsWith("/services")
                            ? "rotate-180 text-[#013B7A]"
                            : "group-hover:text-[#013B7A]"
                        }`}
                      />
                      <span
                        className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#013B7A] transition-all duration-300 ${
                          pathname.startsWith("/services")
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </div>

                    <div className="absolute left-0 mt-1 w-80 bg-white border rounded-md shadow-xl z-50 p-4 grid grid-cols-2 gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      {servicesLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm px-3 py-2 rounded hover:bg-blue-50 transition-colors"
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
                  isActive(link.href) ? "text-[#013B7A]" : ""
                }`}
              >
                <span className="group-hover:text-[#013B7A] transition-colors duration-300">
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#013B7A] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

          {/* Blue CTA Button */}
          <div className="flex justify-center md:justify-start">
            <button className="group relative inline-flex items-center overflow-hidden cursor-pointer rounded bg-[#004AAD] px-4 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#013B7A] hover:scale-105">
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
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle 
                
                
                
                >

                  <Link
      href="/"
      aria-label="Chintan Agrawal & Co • Chartered Accountants"
      className={`flex items-center gap-2 group py-3 ${className}`}
    >
      {/* 1. Symbol Icon */}
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        {/* Blue circular stroke */}
        <svg
          viewBox="0 0 48 48"
          className="h-full w-full text-[#004AAD] group-hover:scale-105 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <circle cx="24" cy="24" r="18" />
        </svg>

        {/* Green chevron inside */}
        <svg
          viewBox="0 0 24 24"
          className="absolute h-4 w-4 text-green-600"
          fill="currentColor"
        >
          <path d="M12 6l6 9H6l6-9z" />
        </svg>
      </span>

      {/* 2. Brand Text */}
      <span className="leading-none">
        <h1
          className="text-lg md:text-xl font-bold tracking-tight
                     text-[#004AAD] group-hover:text-[#013B7A] transition-colors"
        >
          Chintan  Agrawal{" "}
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
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 pt-5 text-base">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={isActive(link.href) ? "text-[#013B7A]" : ""}
                      >
                        {link.label}
                      </Link>
                    ))}

                    {/* Mobile-friendly Services Dropdown */}
                    <MobileDropdown title="Services" links={servicesLinks} />

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

// Mobile dropdown component
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
