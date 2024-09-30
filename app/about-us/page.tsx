"use client";

import { ContactCards } from "@/components/contact/Cards";

interface CardData {
  title: string;
  icon?: string;
  description: string;
}

const Home = () => {
  const cardData : readonly CardData[] = [
    {
      title: "Empower Your Tech Journey",
      description:
        "Join Techunter to transform your understanding of technology. Together, we\'ll unlock your potential and guide you every step of the way, helping you achieve your aspirations in the tech world.",
    },
    {
      title: "Identify Your Tech Goals",
      description:
        "Our experts will help you identify and define your personal tech journey.",
    },
    {
      title: "Tailored Learning Plans",
      description:
        "Develop a personalized plan that aligns with your unique goals.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Connect with experienced professionals who offer guidance and support.",
    },
    {
      title: "Supportive Community",
      description:
        "Share your challenges and successes with a thriving community.",
    },
    {
      title: "Innovative Tools for the Future",
      description:
        "As we grow, Techunter is developing powerful tools like an image generator, GitHub profile maker, and more to elevate your tech experience and productivity.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 py-4 text-gray-900">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Techunter: Your Tech Guide and Mentor
        </h1>
        <p className="mb-12 text-lg md:text-xl">
          In the ever-evolving landscape of technology, navigating the
          complexities can be daunting. Techunter stands as your trusted guide
          and mentor, empowering individuals to embrace the power of technology
          with confidence.
        </p>
        <ContactCards cardData={cardData} />
        <div className="mb-16 rounded-lg bg-gray-100 p-8">
          <p className="mb-4 text-lg italic">
          &rdquo;Techunter has been an invaluable resource for me. Their tutorials
            are clear and concise, and their mentors have been incredibly
            supportive. I finally feel confident in my ability to troubleshoot
            tech issues and maximize my productivity.&rdquo;
          </p>
          <p className="text-right font-semibold">- Sarah, Satisfied User</p>
        </div>
        <div>
          <a
            href="https://discord.gg/techunter"
            className="inline-block rounded-full bg-gray-900 px-6 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-gray-800"
          >
            Join the Techunter Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;