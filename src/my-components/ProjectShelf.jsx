import React, { useState } from "react";
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

// Combined projects list - All links updated to be external
export const projects = [
  {
    title: "Alpha TV",
    description: "Architected the frontend of a global faith-based streaming service, delivering life-changing content to a massive international subscriber base. Built with a scalable Next.js architecture, i18n support, and premium Framer Motion animations.",
    link: "https://myalphatv.com/", 
    image: alpha, 
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-typescript', color: '#3178C6' },
      { icon: 'bx-globe', color: '#34D399' },
      { icon: 'bx-movie-play', color: '#006400' },
    ],
  },
  {
    title: "Smart Fit",
    description: "A comprehensive full-stack mobile fitness tracking application built with React Native and Expo. Features real-time activity monitoring, Recharts data visualization, and a Next.js/Firebase backend with Cloudinary media optimization.",
    link: "https://drive.google.com/file/d/1PS27CyiwpW0OSNzW7hZ5_V4WbyKUVdwG/view?usp=drive_link", 
    image: smart,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-typescript', color: '#3178C6' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bx-cloud', color: '#34D399' },
      { icon: 'bx-stats', color: '#006400' },
    ],
  },
  {
    title: "Zeus Airline",
    description: "A personal airline management platform built with Next.js, TypeScript, and MongoDB. Features include flight scheduling, booking management, and customer tracking.",
    link: "https://zeus-livid.vercel.app/",
    image: zeus,
    techStack: [
      { icon: 'bxl-react', color: 'blue' },
      { icon: 'bxl-mongodb', color: '#47A248' },
      { icon: 'bxl-typescript', color: '#3178C6' },
    ],
  },
  {
    title: "Foremade Web App",
    description: "A full-featured ecommerce marketplace where users can buy, sell, and browse products seamlessly. Features secure authentication and integrated payment processing.",
    link: "https://foremade.com",
    image: foremade,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-nodejs', color: '#3C873A' },
      { icon: 'bx-cloud', color: '#38BDF8' },
    ],
  },
  {
    title: "Auth System",
    description: "A secure login and signup system built with PHP and MySQL. Includes password hashing, form validation, and session management.",
    link: "https://github.com/emmanuel-nwafor/signup-login-system-PHP",
    image: auth,
    techStack: [
      { icon: 'bxl-php', color: '#777BB4' },
      { icon: 'bx bxs-data', color: '#4479A1' },
      { icon: 'bxl-html5', color: '#E34F26' },
      { icon: 'bxl-css3', color: '#1572B6' },
    ],
  },
  {
    title: "Connect Backend",
    description: "Backend architecture built with Next.js and Firebase. Handles authentication, database interactions, and real-time data processing.",
    link: "https://github.com/emmanuel-nwafor/connect_backend",
    image: backend,
    techStack: [
      { icon: 'bxl-javascript', color: '#F0DB4F' }, 
      { icon: 'bxl-react', color: 'blue' },    
      { icon: 'bx-cloud', color: '#38BDF8' },        
      { icon: 'bxl-firebase', color: '#FFA611' }, 
    ],
  },
  {
    title: "Foremade Backend",
    description: "Comprehensive backend solution handles user authentication, product management, payment processing, and real-time chat functionalities.",
    link: "https://github.com/emmanuel-nwafor/foremade-backend",
    image: backend,
    techStack: [
      { icon: 'bxl-javascript', color: '#F0DB4F' },
      { icon: 'bxl-nextjs', color: '#000000' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bx-cloud', color: '#38BDF8' },
      { icon: 'bxl-paystack', color: '#00A6FF' },
      { icon: 'bxl-stripe', color: '#635BFF' },
    ],
  },
  {
    title: "Otto-Sons",
    description: "A personal project for managing car rentals, repairs, and sales. Leverages Firebase for secure and scalable data storage with real-time updates.",
    link: "https://otto-sons-web-app.vercel.app/",
    image: ottoSonsImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
    ],
  },
  {
    title: "Attendance App",
    description: "A facial recognition system for marking student attendance with Firebase support.",
    link: "https://attendance-system-sable.vercel.app/",
    image: attendanceImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
  {
    title: "Banking Finance App",
    description: "A modern banking interface for handling transactions, savings, and user analytics.",
    link: "https://banking-app-tawny-pi.vercel.app/",
    image: bankingImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
  {
    title: "Jobbie",
    description: "A job portal where recruiters post jobs and seekers apply with a simple interface.",
    link: "https://jobbie-six.vercel.app/",
    image: jobbieImg,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },
      { icon: 'bxl-firebase', color: '#FFA611' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
  {
    title: "TV Hub",
    description: "A high-performance website where users can search movies, view cast, and watch trailers.",
    link: "https://tvh-woad.vercel.app/",
    image: tvhImg,
    techStack: [
      { icon: 'bxl-html5', color: '#E44D26' },
      { icon: 'bxl-css3', color: '#1572B6' },
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
];

export default function ProjectShelf() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <section 
      className="relative bg-black text-white py-12 px-6 overflow-hidden isolate" 
      id="projects"
      onMouseMove={handleMouseMove}
    >
      {/* --- CURSOR TRACKING AURORA GRADIENT --- */}
      <div
        className="pointer-events-none absolute inset-0 z-[-2] transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 100, 0, 0.12), transparent 80%),
            radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.08), transparent 80%),
            radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.05), transparent 80%)
          `,
        }}
      />

      {/* --- HIGH VISIBILITY GRID OVERLAY --- */}
      <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none [background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest">
          <span className="text-[#006400]">{"</>"}</span> Professional Works <span className="text-[#006400]">{"</>"}</span>
        </h2>

        <HoverEffect items={projects} />

        <div className="mt-12 m-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5 text-zinc-200">
            Want to see more?
          </h2>
          
          <a href="https://github.com/emmanuel-nwafor" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient className="bg-black text-white flex items-center space-x-2 px-6 py-2">
                <span>See More on GitHub</span> 
                <i className='bx bx-right-arrow-circle bx-fade-right text-2xl'></i>
            </HoverBorderGradient>
          </a>
        </div>
      </div>
      
      <Footer />
    </section>
  );
}