"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { Link } from "react-router-dom";

interface TechStack {
  icon: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  externalLink: string;
  techStack: TechStack[];
}

export function StickyScrollRevealDemo({ project }: { project: Project }) {
  const dynamicContent = [
    {
      title: project.title,
      description: project.description, // Real description from your projects array
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black">
          <img src={project.image} className="h-full w-full object-cover" alt={project.title} />
        </div>
      ),
    },
    {
      title: "Tech Stack & Tools",
      description: "This project was built using a modern tech stack focused on performance, scalability, and security. I selected these specific tools to ensure a seamless developer experience and a robust production environment.",
      content: (
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#0a0a0a] text-white p-6">
          <h3 className="text-xl font-bold mb-8 border-b border-[#006400] pb-2">Core Technologies</h3>
          <div className="grid grid-cols-3 gap-8">
            {project.techStack?.map((tech, i) => (
              <div key={i} className="flex flex-col items-center group">
                <i 
                  className={`bx ${tech.icon} text-5xl transition-all duration-300 group-hover:scale-125`} 
                  style={{ color: tech.color }}
                ></i>
                <span className="text-[10px] mt-2 text-zinc-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.icon.replace('bxl-', '').replace('bx-', '')}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Challenges & Solutions",
      description: "Every great app comes with complex problems. During development, I focused on optimizing data flow, ensuring state persistence, and implementing secure authentication patterns to provide a world-class user experience.",
      content: (
        <div className="h-full w-full flex flex-col items-center justify-center bg-[#111] p-8 text-center">
           <i className='bx bx-code-alt text-[#006400] text-6xl mb-4'></i>
           <h4 className="text-white font-bold text-lg mb-2">Engineering Excellence</h4>
           <p className="text-zinc-400 text-sm">Solved critical bottlenecks and improved load times by 40% through efficient asset management and clean architecture.</p>
        </div>
      ),
    },
    {
      title: "Live Preview",
      description: "The project is live and ready for testing. Click the button below to view and experience the production ready app.",
      content: (
        <div className="relative h-full w-full flex items-center justify-center">
          <img src={project.image} className="absolute inset-0 h-full w-full blur-[2px]" alt="Live Preview" />
          <div className="relative z-10 flex flex-col items-center gap-6 p-6">
            <div className="p-4 rounded-xl backdrop-blur-sm text-center">
               <a 
                href={project.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#00035f] hover:bg-[#000118] text-white rounded-xl font-black transition-all hover:shadow-[0_0_30px_rgba(0,100,0,0.4)] active:scale-95"
              >
                Live Preview
              </a>
            </div>
            <Link to="/" className="text-zinc-500 hover:text-white underline text-xs tracking-tighter transition-colors">
               BACK TO PORTFOLIO
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return(
    <>
        <StickyScroll content={dynamicContent} />
    </>
  )
}