"use client";
import { useState } from "react";
import Link from 'next/link';
import {
  PopoverGroup
} from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  CursorArrowRaysIcon,
  PhotoIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import {
  PhoneIcon,
} from "@heroicons/react/20/solid";


import PopOverPanel from "./Navbar/PopOverPannel";
import MobileNavbar from "./Navbar/MobileNavbar";


import { NavbarProductData, NavbarcallsToActionData, NavbarBlogData } from "@/types/types";
import Links from "./ui/Link";


const products: NavbarProductData[] = [
  {
    name: "Techunter GPT",
    description: "Try our latest AI chabot for your doubt solving.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Image Generator",
    description: "Image Generator is our latest technology we built.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Image Resizer",
    description: "Get help with easy image resizer, helps you customize image.",
    href: "#",
    icon: PhotoIcon,
  },
  {
    name: "Github Profile Designer",
    description:
      "Connect with our Github Tool that will make your profile more attractive.",
    href: "#",
    icon: CodeBracketIcon,
  },
];

const callsToAction: NavbarcallsToActionData[] = [
  { name: "Chat with chatbot", href: "#", icon: ChatBubbleLeftRightIcon },
  { name: "Contact Us", href: "contact", icon: PhoneIcon },
];

const blogs: NavbarBlogData[] = [
  {
    date: "Mar 5, 2023",
    title: "Boost your conversion rate",
    description:
      "Learn strategies to increase conversion rates and drive more sales.",
    link: "#",
  },
  {
    date: "Feb 25, 2023",
    title: "How to use search engine optimization to drive traffic",
    description:
      "A comprehensive guide to improving SEO for better traffic generation.",
    link: "#",
  },
  {
    date: "Feb 21, 2023",
    title: "Improve your customer experience",
    description:
      "Tips on enhancing customer satisfaction through modern techniques.",
    link: "#",
  },
];

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
            <Link href='/' className="-m-1.5 p-1.5">
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
              href='/'
              text="Home"
              style="text-sm font-semibold leading-6 text-gray-900"
            />
            <PopOverPanel title="Tools">
              <div className="p-4">
                {products.map((item: NavbarProductData) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />

                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopOverPanel>

            <PopOverPanel title="Blogs" >
              <div className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Recent posts
                  </h3>
                  <a
                    href="#"
                    className="text-sm font-semibold text-indigo-600 hover:underline"
                  >
                    See all →
                  </a>
                </div>
                <ul className="space-y-6 font-montserrat">
                  {blogs.map((item, i) => (
                    <li
                      key={i}
                      className={`${i != blogs.length - 1 ? `border-b border-gray-200` : ``} pb-1`}
                    >
                      <p className="text-xs text-gray-400">{item.date}</p>

                      <a
                        href={item.link}
                        className="block text-lg font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-indigo-600"
                      >
                        {item.title}
                      </a>

                      <p className="line-clamp-2 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </PopOverPanel>
            <Links
              href="/about-us"
              text="About Us"
              style="text-sm font-semibold leading-6 text-gray-900" />
            <Links
              href="/contact"
              text="Contact Us"
              style="text-sm font-semibold leading-6 text-gray-900" />
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#" className="text-sm font-bold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <MobileNavbar products={products} callsToAction={callsToAction} blogs={blogs} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </header>
    </>
  );
}