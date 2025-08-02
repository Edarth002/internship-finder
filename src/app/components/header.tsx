import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">IF</span>
        </div>
        <span className="ml-2 text-lg font-semibold">InternFind</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/profile"
        >
          Program
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/dashboard"
        >
          Benefits
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/auth/signup"
        >
          Apply
        </Link>
      </nav>
    </header>
  );
};
export default Header;
