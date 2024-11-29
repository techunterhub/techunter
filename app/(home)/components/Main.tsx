"use client";
import Collaboration from "./Collaboration";
import TestimonialCarousel from "./TestimonialCarousel";
// import FaqPage from "../faq/FaqPage";
import HeroSection from "./HeroSection";
import Services from "./Services";
export default function HomePage() {
    return (
        <div className="font-montserrat"
        >
            <HeroSection />
            <section className="bg-gray-50 py-16 px-4
            ">
                <Services />
            </section>
            <section
                style={{
                    background: 'linear-gradient(to bottom right, #E9D5FF, #A5B4FC)',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Collaboration />
            </section>
            <section className="my-36 px-3">
                <h1 className="my-6 text-center text-3xl font-bold">
                    Here&apos;s what our member has to say
                </h1>
                <TestimonialCarousel />
            </section>
            {/* <section className="mt-36 mb-24">
                <FaqPage />
            </section> */}
        </div>
    );
};