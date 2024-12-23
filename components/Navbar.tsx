"use client";
import { useState } from "react";
import Link from "next/link";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import PopOverPanel from "./Navbar/PopOverPannel";
import MobileNavbar from "./Navbar/MobileNavbar";
import Links from "./ui/Link";
import Productdata from "./Navbar/ProductList";
import { products, callsToAction } from "@/data/NabvarData";
import CallsToAction from "./Navbar/CallToAction";
import HeroButton from "./ui/HeroButton";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-white font-montserrat px-4">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between py-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <h1 className="text-xl font-bold">Techunter</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Links
              href="/"
              text="Home"
              style="text-sm font-semibold leading-6 text-gray-900"
            />
            <PopOverPanel title="Tools">
              <Productdata products={products} />
              <CallsToAction callsToAction={callsToAction} />
            </PopOverPanel>
           <Links
              href="/blogs"
              text="Blogs"
              style="text-sm font-semibold leading-6 text-gray-900" /> 
            <Links
              href="/about-us"
              text="About Us"
              style="text-sm font-semibold leading-6 text-gray-900"
            />
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <HeroButton details={["Contact Us", "/contact"]} type="primary" />
            <span aria-hidden="true"></span>
          </div>
        </nav>
        <MobileNavbar
          products={products}
          callsToAction={callsToAction}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </>
  );
}
