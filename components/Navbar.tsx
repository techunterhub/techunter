'use client';

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-4 max-w-[1450px] mx-auto pt-4 text-black px-[10px]">
      <div className="flex items-center justify-between font-montserrat font-extralight">
        <Link href="/faq" className="rounded-full border border-black bg-transparent px-3 py-1 text-center text-black">
          FAQs
        </Link>
        
        <Link href="/" className="font-montserrat uppercase text-base font-extrabold tracking-widest sm:text-2xl">
          techunter
        </Link>
        <Link href="/contact" className="rounded-full border border-black bg-transparent px-4 py-1 text-center text-black">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;