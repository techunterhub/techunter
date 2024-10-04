"use client";
import Link from "next/link";
import { FaDiscord, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-200 text-gray-950 py-10 px-5">
        <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">TECHUNTER</h3>
            <p className="text-base font-medium">Get support and updates on your development journey and growth.</p>

          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://events.techunterhub.com/"
                  className="hover:underline"
                >
                  Event Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="https://gpt.techunterhub.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Techunter GPT
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <ul className="flex justify-center lg:justify-start space-x-4">
              <li className="flex justify-center gap-3">
                <Link
                  href="https://discord.gg/gFVzMqAU"
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  <FaDiscord className="hover:text-blue-500 transition-all ease-linear duration-300" size="1.5em" />
                </Link>
                <Link
                  href="https://m.me/j/AbZScFyvTHpDOAvG/"
                  target="_blank"
                  className="font-bold hover:underline"
                >
                  <FaFacebookMessenger className="hover:text-blue-700 transition-all ease-linear duration-300" size="1.4em" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">Sign Up for Newsletter</h3>
            <form
              action=""
              className="relative flex justify-center items-center lg:justify-start"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md border border-gray-200 outline-none overflow-hidden text-gray-950"
              />
              <button
                type="submit"
                className="absolute right-0 p-2 rounded-md text-gray-950 font-bold bg-gray-300 hover:bg-gray-400 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-10 text-sm text-gray-700">
          <p>&copy; 2024 TECHUNTER. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
