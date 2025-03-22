/*Simple cart icon*/
"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartIcon = ({ cartCount }) => {
  return (
    <Link
      href="/cart"
      className="hover:text-primary dark:hover:text-primary transition-colors relative"
    >
      <ShoppingCart size={20} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
