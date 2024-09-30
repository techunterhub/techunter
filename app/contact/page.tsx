"use client";
import { ContactCards } from "@/components/contact/Cards";
import Form from "@/components/contact/Form";

interface CardData {
  title: string;
  icon: string;
  description: string;
}


export default function Contact() {

  const cardData: readonly CardData[] = [
    {
      icon: "💬",
      title: "Live Chat Assistance",
      description: "Got a quick question? Chat with our support agents in real-time to get immediate solutions to your queries.",
    },
    {
      icon: "💻",
      title: "Technical Support",
      description: "Facing technical difficulties? Our skilled technicians are available to troubleshoot and help you get back on track with ease.",
    },
    {
      icon: "📧",
      title: "Email Support",
      description: "Prefer writing to us? Drop an email and our team will respond with personalized solutions as soon as possible.",
    },
    {
      icon: "🤝",
      title: "Business Partnerships",
      description: "Interested in collaborating or forming a partnership? Let’s explore opportunities to grow and succeed together.",
    },
    {
      icon: "🛠️",
      title: "Product Support",
      description: "Need help with using our products? Our dedicated support team is here to guide you every step of the way.",
    },
    {
      icon: "📝",
      title: "Feedback & Suggestions",
      description: "We value your input! Share your feedback or suggestions to help us improve our services and better meet your needs.",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
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
