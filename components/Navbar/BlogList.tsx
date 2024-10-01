import { NavbarBlogData } from "@/types/types";
import Link from "next/link";


export default function BlogsList({ blogs }: { blogs: NavbarBlogData[] }) {
    return (
        <>
            <ul className="space-y-6 font-montserrat">
                {blogs.map((item, i) => (
                    <li
                        key={i}
                        className={`${i != blogs.length - 1 ? `border-b border-gray-200` : ``} pb-1`}
                    >
                        <p className="text-xs text-gray-400">{item.date}</p>

                        <Link
                            href={item.link}
                            className="block text-lg font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-indigo-600"
                        >
                            {item.title}
                        </Link>
                        <p className="line-clamp-2 text-sm text-gray-500">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}