import React, { useState } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Link, useNavigate } from "react-router-dom";

// Image Imports
import foremade from '../assets/foremade.png';
import alpha from '../assets/alpha-tv.png';
import smart from '../assets/smart-fit.jpeg';
import wholesalenaija from '../assets/wholesalenaija.png';

// Helper to create URL-friendly IDs for internal routing
const createSlug = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const projects = [
  {
    title: "Alpha TV",
    description: "Architected the frontend of a global faith-based streaming service, delivering 'life-changing' content to a massive international subscriber base. I led the development of a scalable Next.js architecture integrated with i18n for multi-language support and Framer Motion for a high-end cinematic UI. Focused on modular design patterns, optimized rendering strategies, and seamless video integration across all devices.",
    link: `/project-details/${createSlug("Alpha TV")}`, 
    externalLink: "https://myalphatv.com/",
    image: alpha, 
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },      
      { icon: 'bxl-typescript', color: '#3178C6' }, 
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bx-movie-play', color: '#006400' },  
    ],
  },
  {
    title: "Wholesale Naija",
    description: "A strategic B2B2C solution designed to bridge the gap between wholesale stores and retail consumers. Built with Next.js 15, this platform streamlines high-volume trade by integrating dynamic category logistics and secure authentication, transforming how local inventory reaches the digital market through a high-performance, unified interface.",
    link: `/project-details/${createSlug("Wholesale Naija")}`, 
    externalLink: "https://wholesalenaija.com",
    image: wholesalenaija,
    techStack: [
      { icon: 'bxl-react', color: '#61DAFB' },
      { icon: 'bxl-tailwind-css', color: '#38B2AC' },
      { icon: 'bxl-typescript', color: '#3178C6' },
      { icon: 'bxl-nodejs', color: '#339933' },
    ],
  },
  {
    title: "Foremade Ecosystem",
    description: "A comprehensive full-stack marketplace solution featuring a high-conversion frontend and a robust custom Node.js/Firebase backend. I engineered the entire architecture—from secure multi-vendor authentication and real-time chat to seamless Stripe payment integrations—providing a production-ready commerce experience for global users.",
    link: `/project-details/${createSlug("Foremade Ecosystem")}`,
    externalLink: "https://foremade.com",
    image: foremade,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },  
      { icon: 'bxl-nodejs', color: '#3C873A' }, 
      { icon: 'bxl-stripe', color: '#635BFF' },
      { icon: 'bxl-firebase', color: '#FFA611' },  
    ],
  },
  {
    title: "Smart Fit",
    description: "A comprehensive full-stack mobile fitness tracking application designed to empower health journeys. Built with React Native and Expo, it features real-time activity monitoring and personalized workout plans. I architected the cross-platform experience with a Next.js/Firebase backend to ensure high availability and secure data persistence for mobile users.",
    link: `/project-details/${createSlug("Smart Fit")}`, 
    externalLink: "https://drive.google.com/file/d/1PS27CyiwpW0OSNzW7hZ5_V4WbyKUVdwG/view?usp=drive_link",
    image: smart,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },     
      { icon: 'bxl-typescript', color: '#3178C6' }, 
      { icon: 'bxl-firebase', color: '#FFA611' },   
      { icon: 'bx-stats', color: '#006400' },      
    ],
  },
];

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden isolate" id="projects" onMouseMove={handleMouseMove}>
      {/* Interactive Background */}
      <div className="absolute inset-0 z-[-2] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 20, 147, 0.15), transparent 80%),
                       radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.12), transparent 80%),
                       radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.08), transparent 80%)`
        }}
      />
      <div className="absolute inset-0 z-[-1] opacity-40 pointer-events-none [background-image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-blue-400">{"</>"}</span> Featured Solutions <span className="text-blue-400">{"</>"}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <div 
              key={idx}
              className="group relative bg-transparent backdrop-blur-sm border border-white/5 rounded-3xl p-5 hover:border-blue-500/40 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => window.open(item.externalLink, "_blank")}
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-400 text-sm mb-8 line-clamp-3 leading-relaxed">{item.description}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-3">
                  {item.techStack.slice(0, 4).map((t, i) => (
                    <i key={i} className={`bx ${t.icon} text-2xl`} style={{ color: t.color }}></i>
                  ))}
                </div>
                <HoverBorderGradient 
                  onClick={(e) => {
                    e.stopPropagation(); 
                    navigate(item.link);
                  }}
                >
                  View Details
                </HoverBorderGradient>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link to="/projects-shelf">
            <HoverBorderGradient>Explore Project Shelf</HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}