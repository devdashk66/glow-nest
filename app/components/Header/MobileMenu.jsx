"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import User from "./User";

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
            className="fixed top-0 right-0 h-full w-80 backdrop-blur-sm backdrop-saturate-100 shadow-lg z-50 md:hidden overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Brand */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Glow Nest
                </h2>
                <p className="text-white/70">
                  The best skincare products for you
                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 flex-grow mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/90 hover:text-white py-3 px-4 border-l-2 border-transparent hover:border-white/50 transition-all duration-200 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* User Actions */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-white hover:bg-white/15 transition-all cursor-pointer">
                  <CartIcon />
                  <Link href="/cart" className="mt-2 text-sm">
                    Cart
                  </Link>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-white hover:bg-white/15 transition-all cursor-pointer">
                  <User />
                  <Link href="/login" className="mt-2 text-sm">
                    Account
                  </Link>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-white/70 text-sm mb-4 text-center">
                  Connect with us
                </h3>
                <div className="flex justify-center space-x-6">
                  <Link href="https://facebook.com" target="_blank">
                    <Facebook
                      className="text-white/80 hover:text-white transition-colors"
                      size={24}
                    />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <Instagram
                      className="text-white/80 hover:text-white transition-colors"
                      size={24}
                    />
                  </Link>
                  {/* <Link href="https://www.tiktok.com" target="_blank">
                    <Tiktok
                      className="text-white/80 hover:text-white transition-colors"
                      size={24}
                    />
                  </Link> */}
                  <Link href="https://wa.me" target="_blank">
                    <MessageCircle
                      className="text-white/80 hover:text-white transition-colors"
                      size={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
