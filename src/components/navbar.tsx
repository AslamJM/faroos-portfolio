"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  variant?: "overlay" | "solid";
  className?: string;
}

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ variant = "solid", className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isOverlay = variant === "overlay";
  const shouldShowBackground = !isOverlay || isScrolled;

  return (
    <nav
      className={cn(
        "w-full z-50 transition-all duration-300",
        isOverlay ? "fixed top-0 left-0" : "relative",
        shouldShowBackground
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                shouldShowBackground
                  ? "bg-black text-white group-hover:bg-gray-800"
                  : "bg-white/20 text-white backdrop-blur-sm group-hover:bg-white/30"
              )}
            >
              <Home className="w-5 h-5" />
            </div>
            <span
              className={cn(
                "text-xl font-bold transition-colors",
                shouldShowBackground ? "text-gray-900" : "text-white"
              )}
            >
              FDS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:scale-105 transform duration-200",
                  shouldShowBackground
                    ? "text-gray-700 hover:text-black"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className={cn(
                "transition-all duration-200",
                shouldShowBackground
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={cn(
              "md:hidden",
              shouldShowBackground
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "py-4 space-y-4 border-t",
              shouldShowBackground
                ? "border-gray-200 bg-white/95"
                : "border-white/20 bg-black/20 backdrop-blur-md"
            )}
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "block px-4 py-2 text-base font-medium transition-colors",
                  shouldShowBackground
                    ? "text-gray-700 hover:text-black hover:bg-gray-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button
                className={cn(
                  "w-full",
                  shouldShowBackground
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-white/90"
                )}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
