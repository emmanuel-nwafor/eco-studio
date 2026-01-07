import React from 'react';
import { ContainerTextFlip2 } from '../components/ui/container-text-flip2';
import { FollowingEyeDemo } from './FollowingEyeDemo';
import { HackerBackgroundDemo } from './HackerBackgroundDemo';

export default function About() {
  return (
    <div className="bg-black p-9 text-white" id="about">
      <h1 className="text-white font-bold text-2xl mb-2">
        About Me <span className="text-blue-300">{"</>"}</span>
      </h1>
      <h2 className="text-white text-[27px] mb-6">Full-Stack Web Development Principles</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">

        {/* Eye Demo Centered */}
        <div className="flex items-center justify-center p-6 bg-[#080808] rounded-2xl">
          <FollowingEyeDemo />
        </div>

        {/* Text Flip + About Description */}
        <div className="p-6 bg-[#080808] rounded-2xl">
          <ContainerTextFlip2 />

          <p className="mt-5 text-gray-300 leading-relaxed">
            Full-stack developer with experience building robust, scalable, and performant web applications. I specialize in both frontend and backend technologies, including React, Next.js, Tailwind CSS, Node.js, Express, PHP, MySQL, MongoDB, and Firebase. <br /><br />
            My focus is on creating responsive, user-friendly interfaces while ensuring seamless server-side logic and database integration. I take a performance-driven approach, combining clean design with efficient functionality. <br /><br />
            Beyond standard frameworks, I enjoy exploring emerging technologies such as Svelte, Elm, and WebAssembly with Rust, aiming to push the boundaries of modern web development and craft cutting-edge solutions.
          </p>

          {/* CV Download Button */}
          <div className="mt-6">
            <a href="src/my-cv/Fullstack_CV.pdf" download>
              <button className="px-6 py-3 bg-blue-300 text-black hover:bg-blue-500 hover:text-white transition-all font-medium rounded-lg">
                Download My CV
              </button>
            </a>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="p-6 bg-zinc-900 rounded-2xl">
          <h3 className="text-gray-500 text-xl font-bold">Hobbies & Interests:</h3>
          <ul className="text-gray-400 mt-4 space-y-2">
            <li><i className="bx bx-code-alt mr-2"></i>Exploring and experimenting with new web technologies and frameworks</li>
            <li><i className="bx bx-lightbulb mr-2"></i>Problem-solving and creating efficient solutions to complex challenges</li>
            <li><i className="bx bx-palette mr-2"></i>Designing intuitive and aesthetic UI/UX components</li>
            <li><i className="bx bx-music mr-2"></i>Listening to music to enhance focus and creativity during development</li>
            <li><i className="bx bx-network-chart mr-2"></i>Studying system architecture, backend scalability, and performance optimization</li>
          </ul>
        </div>

        {/* Hacker Background Demo */}
        <div className="overflow-hidden rounded-2xl">
          <HackerBackgroundDemo />
        </div>

      </div>
    </div>
  );
}
