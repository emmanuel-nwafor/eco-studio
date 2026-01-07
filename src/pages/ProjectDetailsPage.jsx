import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../my-components/Projects"; // Ensure this path is correct
import { StickyScrollRevealDemo } from "../my-components/StickyScrollReveal";
import { FloatingNav } from "../components/ui/floating-navbar";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  const navItems = [
    { name: "Home", link: "#home", icon: "bx bx-home" },  // Boxicon for Home
    { name: "About", link: "#about", icon: "bx bx-info-circle" },  // Boxicon for About
    { name: "Projects", link: "#projects", icon: "bx bx-laptop" },  // Boxicon for Projects
  ];

  useEffect(() => {
    // Find the project based on the slug in the URL
    const foundProject = projects.find(
      (p) => p.title.toLowerCase().replace(/\s+/g, "-") === id
    );

    if (foundProject) {
      setProject(foundProject);
      // Simulate a small delay for the "Dark Green" loader experience
      setTimeout(() => setLoading(false), 800);
    } else {
      // If project doesn't exist, send them back to projects
      navigate("/projects-shelf");
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#006400]"></div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
        <FloatingNav navItems={navItems} />
        <StickyScrollRevealDemo project={project} />    
    </div>
  );
}