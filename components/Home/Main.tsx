"use client";
import HeroButton from "../ui/HeroButton";
import Services from "./Services";
import Collaboration from "./Collaboration";
import TestimonialCarousel from "./TestimonialCarousel";
// import FaqPage from "../faq/FaqPage";
import Image from 'next/image'
export default function HomePage() {
    return (
        <div className="font-montserrat">
            <section className="container mx-auto  mb-8 mt-16 flex h-full w-full flex-col-reverse items-center justify-between gap-5 p-4 md:flex-row">
                <div className="flex w-full flex-col items-center justify-center text-center md:w-[55%] md:text-left">
                    <h1 className="font-montserrat text-3xl mr-auto font-black leading-tight tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
                        Empowering <br /> Your Tech Journey
                    </h1>
                    <p className="mt-3 text-justify text-sm italic text-gray-600 sm:text-base md:text-lg lg:text-xl">
                        In the ever-evolving landscape of technology, navigating the
                        complexities can be daunting. Techunter stands as your trusted guide
                        and mentor, empowering individuals to embrace the power of
                        technology with confidence.
                    </p>

                    <div className="mt-5 flex w-full flex-wrap justify-center gap-5 md:justify-start">
                        <HeroButton details={['Join Us', '/discord']} type="primary" />
                        <HeroButton details={["Blogs", "/blogs"]} type="secondary" />
                    </div>
                </div>

                <div className="flex w-full justify-center p-3 md:w-[45%] md:justify-end">
                    <Image
                        className="h-auto w-[90%] md:w-full"
                        src="/images/hero_img.webp"
                        alt="Hero Image"
                    />
                </div>
            </section>

            <section className="bg-gray-50 py-16 px-4">
                <Services />
            </section>
            <section className="bg-slate-800 py-16 text-white">
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
