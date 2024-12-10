import Link from "next/link";
import React from "react";

const Logo = ({ href = "/resumes" }: { href?: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center text-2xl font-extrabold tracking-tighter"
    >
      <span className="text-red-500">Make</span>MyResume
    </Link>
  );
};

export default Logo;
