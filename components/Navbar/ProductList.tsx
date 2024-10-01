import { NavbarProductData } from "@/types/types";


export default function Productdata({ products }: { products: NavbarProductData[] }) {
    return (
        <>
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
        </>
    )
}