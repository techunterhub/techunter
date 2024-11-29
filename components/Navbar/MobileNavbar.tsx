"use clinet";
import {
    Dialog,
    DialogPanel,
} from "@headlessui/react";
import {
    XMarkIcon,
} from "@heroicons/react/24/outline";

import Links from "../ui/Link";

import { NavbarProductData, NavbarcallsToActionData } from "@/types/types";
import DisclosurePannels from "./DisclosurePannels";

export default function MobileNavbar({ products, callsToAction, mobileMenuOpen, setMobileMenuOpen }: { products: NavbarProductData[], callsToAction: NavbarcallsToActionData[], mobileMenuOpen: boolean, setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
        >
            <div className="fixed inset-0 z-10 font-montserrat" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700 absolute right-0 top-1"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10 space-y-2 py-6">
                        <Links href="/" text="Home" style="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" />
                        <DisclosurePannels products={products} callsToAction={callsToAction} title="Resources" />
                        <Links href="/blogs" text="Blogs" style="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" />
                        <Links href="/about-us" text="About Us" style="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" />
                        <Links href="/contact" text="Contact Us" style="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" />
                        
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )

}