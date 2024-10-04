"use client";
import HeroButton from "../ui/HeroButton";

export default function Collaboration() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between text-center sm:text-left">
        <div className="w-full sm:w-auto">
          <h2 className="text-sm font-semibold uppercase text-gray-50 mb-4">
            Collaboration
          </h2>
          <h1 className="mt-4 text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl">
            Collaborate with Techunter <br /> Bringing Ideas to Life Together!
          </h1>
        </div>

        <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
          <HeroButton details={['Contact us', '/contact']} type="primary" />
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center justify-between sm:flex-row sm:items-start">
        <p className="mb-4 w-full text-justify text-sm leading-relaxed sm:mb-0 sm:w-1/2 sm:text-base lg:text-lg">
          At Techunter, we’re not just about learning; we’re a friendly community that loves to collaborate and share ideas. We believe that great things happen when we work together, and we want to help turn your ideas into reality! If you’re passionate about tech and looking to join forces, we’d love to chat. Let’s create something amazing together!
        </p>

        {/* <div className="w-full sm:w-auto">
          <Newsletter />
        </div> */}
      </div>
    </div>
  );
};