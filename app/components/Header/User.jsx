"use client";
import { User as UserIcon } from "lucide-react";
import Link from "next/link";

const User = () => {
  return (
    <Link
      href="/login"
      className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
    >
      <UserIcon size={20} />
    </Link>
  );
};

export default User;
