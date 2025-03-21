"use client";
import { User as UserIcon } from "lucide-react";
import Link from "next/link";

const User = () => {
  return (
    <>
      <Link
        href="/login"
        className="hover:text-primary dark:hover:text-primary transition-colors"
      >
        <UserIcon size={24} />
      </Link>
    </>
  );
};

export default User;
