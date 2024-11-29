"use client";

import { link } from "fs";
import Link from "next/link";

const services = [
  {
    category: "Chat AI",
    title: "Techunter GPT",
    link:'https://gpt.techunterhub.com/',
    description: "Try our latest AI chabot for your doubt solving.",
  },
  {
    category: "URL",
    title: "URL Shortener",
    link:'/url-shortener',
    description: "Try our url shortener to short your long url to short url in just a step.",
  },
  {
    category: "Countdown",
    title: "Days Until",
    link:'https://events.techunterhub.com/',
    description: "Easily find out how many days remain until your next big occasion!",
  },
  {
    category: "Blogs (new)",
    title: "Read Our Blogs",
    link:'/blogs',
    description: "Read our latest blogs and stay updated with the latest tech news and trends.",
  },
];

export default function Services() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-600 mb-4">Services</h3>
          <h1 className="max-w-[620px] text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We’re a team of creatives who are excited about unique ideas.
          </h1>
        </div>

        <div className="font-montserrat grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-sm font-semibold uppercase text-gray-600">{service.category}</h4>
              <Link href={service.link} className="text-xl font-bold text-gray-900">{service.title}</Link>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
