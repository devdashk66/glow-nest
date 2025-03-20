"use client";
import { motion } from "framer-motion";
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`w-full top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Glow Nest</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <DesktopNavigation navLinks={navLinks} />

          {/* Theme Toggle and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <ToggleTheme />
            <CartIcon cartCount={cartCount} />
            <User />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ToggleTheme />
            <CartIcon cartCount={cartCount} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
        cartCount={cartCount}
      />
    </header>
  );
};

export default Header;
