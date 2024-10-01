
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";

import {
    ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { NavbarProductData, NavbarcallsToActionData, NavbarBlogData } from "@/types/types";


interface DisclosurePannelsProps {
    products?: NavbarProductData[];
    callsToAction?: NavbarcallsToActionData[];
    title: string;
}



export default function DisclosurePannels({ products, callsToAction, title }: DisclosurePannelsProps) {

    return (
        <>

            <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {title}
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                    {[...products,...callsToAction].map((item) => (
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
        </>
    )
}