"use client";
import { useState } from "react";
import Head from "next/head";
import './style.css';
interface Faq {
  Q: string;
  A: string;
}

interface SchemaFAQ {
  "@context": string;
  "@type": string;
  mainEntity: SchemaQuestion[];
}

interface SchemaQuestion {
  "@type": string;
  name: string;
  acceptedAnswer: {
    "@type": string;
    text: string;
  };
}

const faqs: Faq[] = [
  {
    Q: "What is Techunterhub?",
    A: "Techunterhub is a community-driven platform designed to guide beginners as they navigate the world of tech. Whether you’re looking to understand career paths, get advice on learning resources, or need help making decisions about what technologies to explore, Techunterhub offers the support you need. We’re here to provide expert guidance and connect you with like-minded individuals. To engage more, join our active Discord community."
  },
  {
    Q: "How can Techunterhub help me?",
    A: "Techunterhub is perfect for anyone looking for direction in their tech journey. Whether you’re a student, a career changer, or someone already in tech who wants to pivot to a new area, we’re here to help you make informed decisions. Our Discord community is filled with peers and mentors ready to offer advice on everything from choosing the right programming language to navigating interviews."
  },
  {
    Q: "How does Techunterhub provide guidance?",
    A: "We focus on offering personalized guidance through discussions and advice. Rather than creating tutorials, we direct users to the best available resources and share experiences to help you succeed. Whether it’s through community Q&A, tech career insights, or feedback on your projects, we help you take the right steps in your learning process. Join the conversation on Discord to get the most out of our support network."
  },
  {
    Q: " Is Techunterhub free?",
    A: "Yes! Techunterhub is free for everyone. We believe that getting guidance and connecting with experts shouldn’t cost a thing. To get started, simply join our Discord community where you can interact with fellow learners and tech professionals who are ready to assist you on your journey."
  },
  {
    Q: "How do I get involved with Techunterhub?",
    A: "You can become part of the Techunterhub community by joining us on Discord. There, you’ll find various channels dedicated to different tech topics, where members actively share advice, discuss challenges, and collaborate. Whether you have questions about the industry or need guidance on your next step, our community is here to help."
  }
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqSchema = (): string => {
    const schema: SchemaFAQ = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(
        (faq): SchemaQuestion => ({
          "@type": "Question",
          name: faq.Q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.A,
          },
        })
      ),
    };
    return JSON.stringify(schema, null, 2);
  };

  return (
    <>
      <Head>
        <title>FAQ</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqSchema() }}
        />
      </Head>
      <div>
        <div className="container mx-auto md:px-[2rem] py-5" id="faqs">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden border-b-2 last:border-b-0 py-3 !m-0"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-4 py-2 text-left flex justify-between border-none outline-none transition-colors items-center"
                >
                  <span className="h4 !font-semibold">{faq.Q}</span>
                  <span
                    className={`text-gray-500 h2 ${
                      activeIndex === index
                        ? "rotate-[45deg] duration-500"
                        : "rotate-0 duration-500"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-4 body-2 max-w-[56rem] h-0 p-0 overflow-hidden opacity-0 transition-all duration-1000 ease-out !font-normal ${
                    activeIndex === index ? "open" : "close"
                  }`}
                >
                  {faq.A}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
