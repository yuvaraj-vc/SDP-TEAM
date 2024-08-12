import React from 'react';
import { Facebook, Instagram, Twitter, Github, Calendar } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="p-4 bg-indigo-500 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-white" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">TimeTablePro</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://github.com/" className="hover:underline text-gray-200">Github</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline text-gray-200">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="https://github.com/" className="hover:underline text-gray-200">Github</a>
                </li>
                <li>
                  <a href="https://discord.com/" className="hover:underline text-gray-200">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-gray-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-200">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">© 2024 <a href="#" className="hover:underline text-gray-200">TimeTablePro™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-200 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

