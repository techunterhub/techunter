import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    id: 1,
    text: "When I was a beginner, the Techunter team guided me a lot in the field of IT, helping me contribute to the frontend development of this website.",
    author: "Pramod Laha",
    position: "Member",
  },
  {
    id: 2,
    text: "At Techunter, we all come together as a group to teach each other IT skills, especially in development. It's the perfect community for growing as a developer. We share and learn together, not just as individuals but as a team—that’s what makes us Techunter!",
    author: "Bishwa Jung Shah",
    position: "Member",
  },
  {
    id: 3,
    text: "I want to thank this group for being filled with supportive friends who are always ready to help. I was a backend developer, but joining this group has shown me how much I still have to learn in frontend development. I can always ask questions when I face challenges. Thanks to TechHunter, I’ve grown significantly as a developer!",
    author: "Ujwal",
    position: "Member",
  },
  {
    id: 4,
    text: "As a senior member of Techunter, I have mentored many beginners in IT, and now they are all becoming better tech enthusiasts.",
    author: "Nischal Tamang",
    position: "Member",
  },
  {
    id: 5,
    text: "Tech Hunter has helped me grow as a developer by enhancing my skills in various programming languages and connecting me with a supportive community. I highly recommend this group for anyone eager to learn and teach!",
    author: "Dipsan Dheetal",
    position: "Member",
  },
  {
    id: 6,
    text: "Being part of Techunter has been one of the best decisions for my tech career. The team has been incredibly supportive and encourages continuous learning.",
    author: "Beepana Pariyar",
    position: "Member",
  },
  {
    id: 7,
    text: "A must-join tech community for every tech enthusiast, I’ve learned so much from Techunter!",
    author: "Rehan Paudel",
    position: "Member",
  },
  {
    id: 8,
    text: "Techunter is all about building each other up. As a beginner, I felt supported and encouraged by both mentors and peers in the community.",
    author: "Kishor Khatiwoda",
    position: "Member",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const jump = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-[40rem] md:max-w-[50rem] lg:max-w-[60rem]">
      <div className="overflow-hidden rounded-lg transition-all duration-300 ease-linear">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full p-4 text-center">
              <p className="text-lg italic text-gray-700 max-w-[720px] mx-auto">{`"${testimonial.text}"`}</p>
              <h3 className="mt-4 font-semibold">{testimonial.author}</h3>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute -left-7 top-1/2 m-2 flex -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-gray-950 hover:bg-gray-950  p-2 text-gray-950 hover:text-white duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute -right-7 top-1/2 m-2 flex -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-gray-950 hover:bg-gray-950  p-2 text-gray-950 hover:text-white duration-300"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      <ul className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <li
            key={index}
            className={`cursor-pointer w-2 h-2 rounded-full bg-gray-300 ${index === currentIndex ? 'bg-gray-950' : 'bg-gray-300'}`}
            onClick={() => jump(index)}
          />
        ))}
      </ul>
    </div>
  );
}
