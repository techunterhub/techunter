import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center font-[family-name:var(--font-geist-sans)]">
     <div className="text-center">
     <h1 className="text-2xl text-gray-100 font-bold">We are tech hunter join us on </h1>
      <Link target="_blank" className="text-teal-800 text-4xl font-bold" href="https://discord.gg/QF4EvhWm">
        Discord link
      </Link>
     </div>
    </div>
  );
}
