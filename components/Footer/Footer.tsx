"use client";
import FooterLinks from "./FooterLink";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface IconsData {
  icon: JSX.Element;
  link: string;
}

const Footer = () => {
  const icons: readonly IconsData[] = [
    { icon: <FaDiscord size="1.2em" />, link: "https" },
    { icon: <FaGithub size="1.2em" />, link: "https" },
    { icon: <FaLinkedin size="1.2em" />, link: "https" },
    { icon: <FaFacebookMessenger size="1.2em" />, link: "https" },
  ];

  return (
    <>
      <div className="w-full rounded-lg bg-gray-100">
        <div className="mx-auto max-w-[1450px] p-10">
          <FooterLinks />
          <div className="mx-auto mt-10 flex w-[20%] min-w-60 items-center justify-between">
            {icons.map((elem: IconsData, i:number) => (
              <a
                key={i}
                className="rounded-full border border-gray-400 p-4"
                href={elem.link}
                target="_blank"
                rel="noreferrer"
              >
                {elem.icon}
              </a>
            ))}
          </div>

          <div className="mt-8 w-full border border-zinc-300 opacity-80"></div>

          <div className="mt-12 grid grid-cols-1 gap-10 font-montserrat md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-2xl font-bold leading-snug tracking-wider md:col-span-2 md:text-3xl md:leading-loose">
              Get support and updates on your development journey and growth.
            </h2>
            <div>
              <ul>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <h1 className="py-4 text-center align-text-bottom text-sm font-normal tracking-wider text-zinc-500">
        &copy; 2024 TechunterHub
      </h1>
      </div>
    </>
  );
};

export default Footer;