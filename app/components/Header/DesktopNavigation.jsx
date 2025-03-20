"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavigation = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-8">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-primary underline"
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default DesktopNavigation;
