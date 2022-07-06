import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="h-72 w-full bg-gray-600">
      <ul>
        <Link href="/" className="text-blue-700">
          Home
        </Link>
        <Link href="/about" className="text-blue-700">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
