"use client";

import { ContactCards } from "@/components/contact/Cards";
import { Form } from "@/components/contact/Form";

interface CardData {
  title: string;
  icon: string;
  description: string;
}

export default function Contact() {

  const cardData: readonly CardData[] = [
    {
      title: "Customer Support",
      description: "We are here to help you with any issue.",
      icon: "📞",
    },
    {
      title: "Technical Support",
      description: "Need technical assistance? We're on it.",
      icon: "💻",
    },
    {
      title: "Billing Enquiries",
      description: "Questions about your bill? Contact us for assistance.",
      icon: "💳",
    },
    {
      title: "Sales",
      description: "Looking to purchase our services? Let's talk.",
      icon: "🛒",
    },
    {
      title: "Partnerships",
      description: "Collaborate with us for mutual growth.",
      icon: "🤝",
    },
    {
      title: "General Inquiries",
      description: "Have a question? We're happy to help.",
      icon: "❓",
    },
  ];

  return (
    <div className="max-w-[1450px] mx-auto">
            <div className="mb-8 font-montserrat">
        <div className="mt-28 flex flex-col gap-6">
          <h1 className="font-montserrat text-4xl font-bold leading-[3rem] tracking-wider text-gray-950 sm:text-[4.5rem] sm:leading-[4.5rem] md:text-[5.2rem] md:leading-[5rem] lg:text-[8rem] lg:leading-[7.5rem] xl:text-[9rem] xl:leading-[8.5rem]">
            It&apos;s time to Learn & Collaborate
          </h1>
          <p className="font-montserrat text-base font-semibold italic tracking-wider text-gray-950 sm:text-xl md:text-2xl">
            Let&apos;s create a big community of Techunter toghether.
          </p>
        </div>
      </div>
      <div className="mt-3 w-full border border-black opacity-80"></div>
      <ContactCards cardData={cardData} />
      <h1 className="text-3xl font-semibold text-center">testing the staging</h1>
      <Form />
    </div>
  );
}
