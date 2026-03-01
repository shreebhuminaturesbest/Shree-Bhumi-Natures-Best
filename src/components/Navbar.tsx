
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SOURCING AGENT", href: "#why-us" },
    { name: "PRODUCTS", href: "#products" },
    { name: "GALLERY", href: "#gallery" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#222] text-white py-2 hidden md:block border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-secondary" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-secondary" />
              <span>info@sbnbglobal.com</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Facebook className="w-3.5 h-3.5 hover:text-secondary cursor-pointer" />
            <Twitter className="w-3.5 h-3.5 hover:text-secondary cursor-pointer" />
            <Instagram className="w-3.5 h-3.5 hover:text-secondary cursor-pointer" />
            <Linkedin className="w-3.5 h-3.5 hover:text-secondary cursor-pointer" />
            <Youtube className="w-3.5 h-3.5 hover:text-secondary cursor-pointer" />
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed top-0 md:top-[33px] left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-[#1a2a3a]/95 shadow-lg py-2 md:top-0" : "bg-black/30 backdrop-blur-sm py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter text-white flex items-center">
              <span className="text-secondary">SBNB</span>
              <span className="ml-1 opacity-80">GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-white hover:text-secondary transition-colors nav-link-underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#1a2a3a] flex flex-col transition-transform duration-500 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="text-2xl font-bold text-white">
            <span className="text-secondary">SBNB</span> GLOBAL
          </div>
          <button
            className="text-white p-2"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white/80 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
