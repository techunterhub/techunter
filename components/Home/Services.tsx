"use client";

import Link from "next/link";

const services = [
  {
    category: "Chat AI",
    title: "Techunter GPT",
    description: "Try our latest AI chabot for your doubt solving.",
    link: "/gpt",
  },
  {
    category: "URL",
    title: "URL Shortener",
    description:
      "Try our url shortener to short your long url to short url in just a step.",
    link: "/url-shortener",
  },
  {
    category: "Countdown",
    title: "Days Until",
    description:
      "Easily find out how many days remain until your next big occasion!",
    link: "/events",
  },
  // {
  //   category: "Github (soon)",
  //   title: "Github Profile Designer",
  //   description:
  //     "Connect with our Github Tool that will make your profile more attractive.",
  //   link: "/",
  // },
];

export default function Services() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">
            Services
          </h3>
          <h1 className="max-w-[620px] text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We’re a team of creatives who are excited about unique ideas.
          </h1>
        </div>

        <div className="font-montserrat grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-sm font-semibold uppercase text-gray-600">
                {service.category}
              </h4>
              <h3 className="text-xl font-bold text-gray-900">
                <Link href={service.link}>{service.title}</Link>
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
