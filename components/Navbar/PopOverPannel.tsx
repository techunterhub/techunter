"use client";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";

import {
    ChevronDownIcon,
} from "@heroicons/react/20/solid";




export default function PopOverPanel({  title, children }:{ title: string, children: React.ReactNode }) {
    return (
        <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
                {title}
                <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >

                {children}
            </PopoverPanel>
        </Popover>
    )
}