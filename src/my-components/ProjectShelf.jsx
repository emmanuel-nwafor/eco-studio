import React, { useState, useMemo } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import Footer from "./Footer";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

// Import images
import attendanceImg from '../assets/attendance.jpg';
import bankingImg from '../assets/banking.jpg';
import jobbieImg from '../assets/jobbie.jpg';
import ottoSonsImg from '../assets/otto-sons.jpg';
import foremade from '../assets/foremade.png';
import zeus from '../assets/zeus.png';
import auth from '../assets/auth.jpeg';
import backend from '../assets/backend_foremade.jpeg';
import tvhImg from '../assets/tvh.jpg';
import alpha from '../assets/alpha-tv.png';
import smart from '../assets/smart-fit.jpeg';
import wholesalenaija from '../assets/wholesalenaija.png';

export const projects = [
  {
    title: "Alpha TV",
    category: "Frontend",
    description: "Architected the frontend of a global faith-based streaming service, delivering life-changing content to a massive international subscriber base. Built with a scalable Next.js architecture, i18n support, and premium Framer Motion animations.",
    link: "https://myalphatv.com/", 
    image: alpha, 
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-typescript', color: '#3178C6' },
      { icon: 'bx-movie-play', color: '#006400' },
    ],
  },
  {
    title: "Wholesale Naija",
    category: "Full-Stack",
    description: "A strategic B2B2C solution designed to bridge the gap between wholesale stores and retail consumers. Streamlines high-volume trade via dynamic category logistics and secure authentication in a unified Next.js 15 interface.",
    link: "https://wholesalenaija.com",
    image: wholesalenaija,
    techStack: [
      { icon: 'bxl-react', color: '#61DAFB' },
      { icon: 'bxl-tailwind-css', color: '#38B2AC' },
      { icon: 'bxl-typescript', color: '#3178C6' },
    ],
  },
  {
    title: "Smart Fit",
    category: "Mobile",
    description: "A comprehensive full-stack mobile fitness tracking application built with React Native and Expo. Features real-time activity monitoring, Recharts data visualization, and a Next.js/Firebase backend.",
    link: "https://drive.google.com/file/d/1PS27CyiwpW0OSNzW7hZ5_V4WbyKUVdwG/view?usp=drive_link", 
    image: smart,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bx-stats', color: '#006400' },
    ],
  },
  {
    title: "Foremade Ecosystem",
    category: "Full-Stack",
    description: "A comprehensive marketplace solution featuring a high-conversion frontend and a robust Node.js/Firebase backend. Handles multi-vendor authentication, real-time chat, and Stripe payments.",
    link: "https://foremade.com",
    image: foremade,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-nodejs', color: '#3C873A' },
      { icon: 'bxl-stripe', color: '#635BFF' },
    ],
  },
  {
    title: "Zeus Airline",
    category: "Full-Stack",
    description: "A personal airline management platform exploring complex scheduling logic, booking management, and customer tracking using Next.js and MongoDB.",
    link: "https://zeus-livid.vercel.app/",
    image: zeus,
    techStack: [
      { icon: 'bxl-react', color: 'blue' },
      { icon: 'bxl-mongodb', color: '#47A248' },
      { icon: 'bxl-typescript', color: '#3178C6' },
    ],
  },
  {
    title: "Foremade Backend",
    category: "Backend",
    description: "Deep-dive API architecture for the Foremade platform, handling complex business logic, webhooks, and real-time database triggers.",
    link: "https://github.com/emmanuel-nwafor/foremade-backend",
    image: backend,
    techStack: [
      { icon: 'bxl-javascript', color: '#F0DB4F' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-stripe', color: '#635BFF' },
    ],
  },
  {
    title: "Attendance App",
    category: "Full-Stack",
    description: "A facial recognition system for marking student attendance with Firebase support, demonstrating AI integration in web apps.",
    link: "https://attendance-system-sable.vercel.app/",
    image: attendanceImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
  {
    title: "Auth System",
    category: "Backend",
    description: "Classic secure login/signup system built with PHP/MySQL. Focuses on security fundamentals like password hashing and session safety.",
    link: "https://github.com/emmanuel-nwafor/signup-login-system-PHP",
    image: auth,
    techStack: [
      { icon: 'bxl-php', color: '#777BB4' },
      { icon: 'bx bxs-data', color: '#4479A1' },
    ],
  },
  {
    title: "Banking Finance App",
    category: "Frontend",
    description: "A modern banking interface for handling transactions, savings, and user analytics with a focus on clean data visualization.",
    link: "https://banking-app-tawny-pi.vercel.app/",
    image: bankingImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
];

export default function ProjectShelf() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];

  const filteredProjects = useMemo(() => {
    return activeFilter === "All" 
      ? projects 
      : projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <section className="relative bg-black text-white py-12 px-6 overflow-hidden isolate min-h-screen" onMouseMove={handleMouseMove}>
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-[-2] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 100, 0, 0.15), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Project <span className="text-slate-600">Shelf</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-8 text-lg">
            A comprehensive archive of my technical journey, from production-grade ecosystems to experimental architectural deep-dives.
          </p>

          {/* Filter Bar - Makes you stand out */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  activeFilter === f 
                  ? "bg-slate-800 border-[#00222d] text-white shadow-[0_0_15px_rgba(0,100,0,0.5)]" 
                  : "border-white/10 text-zinc-400 hover:border-white/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        {/* Dynamic Grid */}
        <div className="min-h-[400px]">
          <HoverEffect items={filteredProjects} />
        </div>

        {/* GitHub Call to Action */}
        <div className="mt-20 py-12 border-t border-white/5 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-zinc-200">Continuous Innovation</h2>
          <a href="https://github.com/emmanuel-nwafor" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient className="bg-black text-white flex items-center space-x-3 px-8 py-3">
                <span>Explore the Source Code</span> 
                <i className='bx bxl-github text-2xl'></i>
            </HoverBorderGradient>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}