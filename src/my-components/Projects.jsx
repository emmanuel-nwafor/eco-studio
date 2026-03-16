import React, { useState } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Link, useNavigate } from "react-router-dom";

// Image Imports
import foremade from '../assets/foremade.png';
import zeus from '../assets/zeus.png';
import alpha from '../assets/alpha-tv.png';
import auth from '../assets/auth.jpeg';
import backend from '../assets/backend_foremade.jpeg';
import connect from '../assets/connect.jpeg';
import smart from '../assets/smart-fit.jpeg';
import wholesalenaija from '../assets/wholesalenaija.png';

// Helper to create URL-friendly IDs for internal routing
const createSlug = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const projects = [
{
    title: "Alpha TV",
    description: "Architected the frontend of a global faith-based streaming service, delivering 'life-changing' content to a massive international subscriber base. I led the development of a scalable Next.js architecture integrated with i18n for multi-language support and Framer Motion for a high-end cinematic UI. Focused on modular design patterns, optimized rendering strategies, and seamless video integration across all internet-connected devices.",
    link: `/project-details/${createSlug("Alpha TV")}`, 
    externalLink: "https://myalphatv.com/",
    image: alpha, 
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },      
      { icon: 'bxl-typescript', color: '#3178C6' }, 
      { icon: 'bx bx-code-curly', color: '#34D399' },        
      { icon: 'bx-movie-play', color: '#006400' },  
      { icon: 'bxl-tailwind-css', color: '#38BDF8' },
    ],
  },
  {
    title: "Foremade web app",
    description: "A full-featured ecommerce marketplace where users can buy, sell, and browse products seamlessly. Features include secure user authentication, product listings, dynamic search and filtering, shopping cart management, and integrated payment processing for a smooth shopping experience.",
    link: `/project-details/${createSlug("Foremade web app")}`,
    externalLink: "https://foremade.com",
    image: foremade,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },  
      { icon: 'bxl-firebase', color: '#FFA611' },  
      { icon: 'bxl-nodejs', color: '#3C873A' },   
      { icon: 'bx-cloud', color: '#38BDF8' }, 
    ],
  },
{
    title: "Smart Fit",
    description: "A comprehensive full-stack mobile fitness tracking application designed to empower users in their health journeys. Built with React Native and Expo, the app features real-time activity monitoring, personalized workout plans, and advanced data visualization using Recharts. I architected the backend using Next.js and Firebase to ensure secure data persistence and high availability for a seamless mobile experience.",
    link: `/project-details/${createSlug("Smart Fit")}`, 
    externalLink: "https://drive.google.com/file/d/1PS27CyiwpW0OSNzW7hZ5_V4WbyKUVdwG/view?usp=drive_link",
    image: smart,
    techStack: [
      { icon: 'bxl-react', color: '#61DBFB' },     
      { icon: 'bxl-typescript', color: '#3178C6' }, 
      { icon: 'bxl-firebase', color: '#FFA611' },   
      { icon: 'bx-stats', color: '#006400' },      
      { icon: 'bxl-nodejs', color: '#3C873A' },   
      { icon: 'bx-cloud', color: '#34D399' },    
    ],
  },
{
    title: "Wholesale Naija",
    description: "A robust e-commerce marketplace  that connects built with Next.js 15 and TypeScript. It features dynamic category navigation, responsive wholesale product displays, and secure user authentication flows, all optimized for high-performance retail operations.",
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
    title: "Auth System",
    description: "A secure login and signup system built with PHP and MySQL. Users can create accounts, log in, and manage sessions safely. The system includes password hashing, form validation, and session management for reliable and secure access control.",
    link: `/project-details/${createSlug("Auth System")}`,
    externalLink: "https://github.com/emmanuel-nwafor/signup-login-system-PHP",
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
    description: "The backend of a mobile application built with Next.js, JavaScript and Firebase. It provides robust APIs, handles authentication, database interactions, and real-time data processing.",
    link: `/project-details/${createSlug("Connect Backend")}`,
    externalLink: "https://github.com/emmanuel-nwafor/connect_backend",
    image: connect, 
    techStack: [
      { icon: 'bxl-javascript', color: '#F0DB4F' }, 
      { icon: 'bxl-react', color: 'blue' },    
      { icon: 'bx-cloud', color: '#38BDF8' },      
      { icon: 'bxl-firebase', color: '#FFA611' }, 
    ],
  },
  {
    title: "Foremade Backend",
    description: "A comprehensive backend solution for the Foremade e-commerce platform, developed with JavaScript. This backend handles user authentication, product management, payment processing, and real-time chat functionalities.",
    link: `/project-details/${createSlug("Foremade Backend")}`,
    externalLink: "https://github.com/emmanuel-nwafor/foremade-backend",
    image: backend,
    techStack: [
      { icon: 'bxl-javascript', color: '#F0DB4F' }, 
      { icon: 'bx bxl-nodejs', color: '#fff' },  
      { icon: 'bxl-firebase', color: '#FFA611' }, 
      { icon: 'bx-cloud', color: '#38BDF8' },        
      { icon: 'bxl-stripe', color: '#635BFF' }, 
    ],
  },
  {
    title: "Zeus Airline",
    description: "A personal airline management platform built with Next.js, TypeScript, and MongoDB. Features include flight scheduling, booking management, and customer tracking, all designed to simulate a real-world airline system while exploring full-stack development concepts.",
    link: `/project-details/${createSlug("Zeus Airline")}`, 
    externalLink: "https://zeus-livid.vercel.app/",
    image: zeus,
    techStack: [
      { icon: 'bxl-react', color: 'blue' },
      { icon: 'bxl-mongodb', color: '#47A248' },
      { icon: 'bxl-javascript', color: '#F0DB4F' },
      { icon: 'bxl-typescript', color: '#3178C6' },
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
          <span className="text-blue-400">{"</>"}</span> My Projects <span className="text-blue-400">{"</>"}</span>
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
            <HoverBorderGradient>Project Shelf</HoverBorderGradient>
          </Link>
        </div>
      </div>
    </section>
  );
}