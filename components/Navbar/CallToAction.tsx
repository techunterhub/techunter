import { NavbarcallsToActionData } from "@/types/types";
import Link from "next/link";


export default function CallsToAction({ callsToAction }: { callsToAction: NavbarcallsToActionData[] }) {
    return (
        <>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
    )
}