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
    <div className="">
      <div className="bg-gray-950 py-[6rem] text-center text-gray-100">
        <h1 className="text-5xl font-semibold">How can we help you?</h1>
        <p className="max-w-[720px] mx-auto py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, nisi accusantium. Praesentium quasi facilis, ratione cupiditate dolorum est consequuntur deserunt?
        </p>
      </div>
      <ContactCards cardData={cardData} />
      <h1 className="text-3xl font-semibold text-center">testing the staging</h1>
      <Form />
    </div>
  );
}
