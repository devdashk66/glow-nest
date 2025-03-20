"use client";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import ToggleTheme from "./ToggleTheme";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        setIsVisible(false); // Hide when near top
      } else {
        setIsVisible(currentScrollY < lastScrollY); // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 shadow-lg rounded-full px-6 py-3 flex items-center space-x-6 backdrop-blur-md border dark:border-gray-800 z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-gray-700 dark:text-gray-200 transition hover:text-primary ${
                pathname === link.href ? "text-primary" : ""
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"></span>
              )}
            </Link>
          ))}

          {/* Right Side Icons */}
          <ToggleTheme />
          <CartIcon cartCount={5} />
          <Link
            href="/login"
            className="text-gray-700 dark:text-gray-200 hover:text-primary transition"
          >
            <User size={20} />
          </Link>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
