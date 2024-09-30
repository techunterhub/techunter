"use clinet";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import {
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
} from "@heroicons/react/20/solid";


interface BlogData {
    date: string;
    title: string;
    description: string;
    link: string;
}

interface callsToActionData {
    name: string;
    href: string;
    icon: React.ElementType;
  }

  interface ProductData {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }

  
export default function MobileNavbar({ products, callsToAction, blogs,mobileMenuOpen,setMobileMenuOpen }: { products: ProductData[], callsToAction: callsToActionData[], blogs: BlogData[], mobileMenuOpen: boolean, setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
        >
            <div className="fixed inset-0 z-10 font-montserrat" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">TechunterHub</span>
                        <h1 className="font-montserrat font-bold">Techunter</h1>
                    </a>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Home
                            </a>
                            <Disclosure as="div" className="-mx-3">
                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Product
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 space-y-2">
                                    {[...products, ...callsToAction].map((item) => (
                                        <DisclosureButton
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </DisclosureButton>
                                    ))}
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" className="-mx-3">
                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Blogs
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="h-5 w-5 flex-none transition-transform duration-200 group-data-[open]:rotate-180"
                                    />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 space-y-2">
                                    {blogs.map((item) => (
                                        <DisclosureButton
                                            key={item.title}
                                            as="a"
                                            href={item.link}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                            <span>{item.title}</span>
                                        </DisclosureButton>
                                    ))}
                                </DisclosurePanel>
                            </Disclosure>

                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Become a Parnter
                            </a>
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Contact us
                            </a>
                        </div>
                        <div className="py-6">
                            <a
                                href="#"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    )

}