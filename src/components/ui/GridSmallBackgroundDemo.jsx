import { cn } from "../../utils/cn";
import React, { useState, useEffect } from "react";
import { ContainerTextFlip } from "./container-text-flip";
import { HoverBorderGradient } from "./hover-border-gradient";

export function GridSmallBackgroundDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }); // Percentage based
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate position as percentage for smoother blending with animations
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex min-h-[50rem] w-full max-w-8xl items-center max-md:justify-center bg-black overflow-hidden isolate"
    >
      {/* --- LAYER 1: THE ANIMATED "ALIVE" AURORA --- */}
      <div
        className={cn(
          "absolute inset-0 z-[-3] transition-opacity duration-1000",
          "animate-aurora-slow" // Custom animation defined below
        )}
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        }}
      />

      {/* --- LAYER 2: THE INTERACTIVE CURSOR GLOW --- */}
      <div
        className="pointer-events-none absolute inset-0 z-[-2] transition-opacity duration-700"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* --- LAYER 3: THE HIGH VISIBILITY GRID --- */}
      <div 
        className={cn(
          "absolute inset-0 z-[-1] opacity-40",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)]"
        )} 
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full max-md:flex-col flex items-center justify-evenly">
        <div>
          <h1 className="relative p-10 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl">
            I Build Experiences That Are <br /> <ContainerTextFlip />
          </h1>
          <div className="ml-8 max-md:ml-0 flex max-md:justify-center">
            <HoverBorderGradient
              as="a"
              href="https://www.linkedin.com/in/emmanuel-chinecherem-767739284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </HoverBorderGradient>
          </div>
        </div>

        <h1 className="text-gray-400 p-10 max-w-lg">
          <span className="font-bold text-gray-300">PORTFOLIO{"</>"}</span> <br />
          Building sleek, pixel-perfect, responsive, user-friendly and 
          <br className="max-md:hidden" /> seamless web experiences
          that bridge creativity and technology 💻.
        </h1>
      </div>

      {/* Add this CSS to your global styles or a <style> tag */}
      <style>{`
        @keyframes aurora-slow {
          0% { transform: scale(1) translate(0%, 0%); }
          33% { transform: scale(1.1) translate(2%, -2%); }
          66% { transform: scale(0.9) translate(-2%, 1%); }
          100% { transform: scale(1) translate(0%, 0%); }
        }
        .animate-aurora-slow {
          animation: aurora-slow 15s ease-in-out infinite;
          filter: blur(40px);
        }
      `}</style>
    </div>
  );
}