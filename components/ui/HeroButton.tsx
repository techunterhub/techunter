"use client";

import Link from "next/link";

interface HeroButtonProps {
    details: string[];
    type: "primary" | "secondary"; 
}

export default function HeroButton({ details, type }: HeroButtonProps) {
    const [text, route] = details; 

    const primaryClasses = "border-2 border-gray-950 bg-gray-50 duration-300 hover:bg-gray-950 text-gray-950 hover:text-zinc-100";
    const secondaryClasses = "bg-gray-950 text-white duration-300 hover:bg-gray-800";

    const buttonClasses = type === "primary" ? primaryClasses : secondaryClasses;

    return (
        <Link href={route} className={`rounded-md px-8 ${buttonClasses} py-1 text-center font-semibold md:py-2`}>
            {text}
        </Link>
    );
}
