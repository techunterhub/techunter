import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center font-[family-name:var(--font-geist-sans)]">
     <div className="text-center">
     <h1 className="text-2xl text-gray-950 font-bold">We are tech hunter join us on </h1>
      <Link target="_blank" className="text-teal-800 text-4xl font-bold" href="https://discord.gg/QF4EvhWm">
        Discord
      </Link>
      <div className="py-5">
        <h2 className="text-2xl text-gray-950 font-bold">Also make sure to check our gpt  </h2>
        <Link target="_blank" className="text-teal-800 text-4xl font-bold" href="https://gpt.techunterhub.com/">
        techunter gpt
      </Link>
      </div>
     </div>
    </div>
  );
}
