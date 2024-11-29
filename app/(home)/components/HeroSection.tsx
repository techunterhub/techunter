import HeroButton from '@/components/ui/HeroButton';
import {
    Image,
} from '@mantine/core';

export function HeroSection() {

    return (
        <section className="container mx-auto  mb-8 mt-16 flex h-full w-full flex-col-reverse items-center justify-between gap-5 p-4 md:flex-row">
            <div className="flex w-full flex-col items-center justify-center text-center md:w-[55%] md:text-left">
                <h1 className="font-montserrat text-3xl mr-auto font-black leading-tight tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
                    Empowering <br /> Your Tech Journey
                </h1>
                <p className="mt-3 text-justify text-sm italic text-gray-600 sm:text-base md:text-lg lg:text-xl">
                    At Techunter, our mission is to empower newcomers in the tech industry by providing comprehensive guidance in tech journey—completely free of charge! We believe that everyone should have access to quality tech education and support, regardless of their background. Join our community to learn, grow, and unlock your potential in the ever-evolving world of technology.
                </p>

                <div className="mt-5 flex w-full flex-wrap justify-center gap-5 md:justify-start">
                    <HeroButton details={['Join Us', 'https://discord.gg/AZWKQgF9Q9']} type="primary" />
                    <HeroButton details={["Blogs", "/blogs"]} type="secondary" />
                </div>
            </div>

            <div className="flex w-full justify-center p-3 md:w-[45%] md:justify-end">
                <Image
                    className="h-auto w-[90%] md:w-full"
                    width={500}
                    height={500}
                    src="/images/hero_img.webp"
                    alt="Hero Image"
                />
            </div>
        </section>

    );
}

export default HeroSection;

