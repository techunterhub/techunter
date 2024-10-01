"use client";

import Link from 'next/link';

export default function Links({ href, text,style }: { href: string, text: string,style?:string }) {
    return (
        <>
            <Link href={href} className={style}>{text}</Link>
        </>
    )
}