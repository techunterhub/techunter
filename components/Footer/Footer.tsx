'use client';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="w-full rounded-lg bg-gray-950 text-gray-50 px-5 py-10">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <h3 className="text-lg font-bold">TECHUNTER</h3>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4">Tools</h3>
            <ul>
              <li>
                <Link href="https://events.techunterhub.com/" className="font-bold">
                  Dasys Until
                </Link>
              </li>
              <li>
                <Link href="https://gpt.techunterhub.com/" target="_blank" className="font-bold">
                  techunter gpt
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <ul>
              <li>
                <Link href="https://discord.gg/gFVzMqAU" target="_blank" className="font-bold">
                  <FaDiscord size="1.2em" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-4">Sign Up for newsletter</h3>
            <form action="" className='relative'>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md border border-gray-200 outline-none"
              />
              <button type="submit" className="absolute right-0 w-fit p-2 rounded-md text-gray-950 font-bold border border-transparent hover:border-gray-950 hover:border duration-300">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
