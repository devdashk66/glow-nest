"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navLinks, cartCount }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden overflow-y-auto"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-primary">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary py-3 px-2 rounded-md text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary py-3 px-2 rounded-md text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="ml-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/login"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary py-3 px-2 rounded-md text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} className="mr-2" />
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
