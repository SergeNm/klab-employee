import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="h-8 w-full bg-gray-600 text-white">
      <ul>
        <Link href="/" >
         <a className="p-2"> Home</a>
        </Link>
        <Link href="/about" >
         <a className="p-2">About</a> 
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
