import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 max-w-screen-2xl">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 underline">Contact Me</h2>
            <p>Email:sarsijupadhyay66@gmail.com</p>
            <p>Phone:+91 9140935896</p>
            <p>Address:Ayodhya, Uttar Pradesh</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 underline">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/sarsij-upadhyay-946699193/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="https://github.com/Sarsij1234" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 underline">About</h2>
            <p className="text-justify">"As a dedicated developer, I focus on crafting responsive and user-friendly websites. My goal is to combine clean code with innovative design to bring your ideas to life and ensure they stand out in the digital world."</p>
          </div>
        </div>
        <div className="mt-10 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
