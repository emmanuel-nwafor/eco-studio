import React from 'react';
import { GridSmallBackgroundDemo } from '../components/ui/GridSmallBackgroundDemo';
import { FloatingNav } from '../components/ui/floating-navbar';
import About from './About';
import Services from './Services';
import { Testimonials } from './Testimonials';
import Projects from './Projects';
import { ContactPage } from './ContactPage';
import Footer from './Footer';
import MyLanguagesTools from './MyLanguagesTools';

// Temp nav contents with Boxicons
const navItems = [
  { name: "Home", link: "#home", icon: "bx bx-home" },  // Boxicon for Home
  { name: "About", link: "#about", icon: "bx bx-info-circle" },  // Boxicon for About
  { name: "Projects", link: "#projects", icon: "bx bx-laptop" },  // Boxicon for Projects
];

// Temp testimonials
const movingCardsItems = [
  { quote: "Working with Emmanuel has been an incredible experience. His technical expertise and problem-solving skills are unparalleled. Whenever we face a challenge, he comes up with creative, efficient solutions that not only fix the issue but improve the project overall. He is also a fantastic team player, always willing to help others and explain complex concepts in a way that's easy to understand.", name: "GraceTech Kid", title: "Fullstack Dev." },
  { quote: "Indeed Emmanuel is one with exceptional value and a developer that I would recommend to everyone because of his honesty, zeal, and eagerness to know more.", name: "Blessing Nwankwo", title: "Digital Marketer" },
  { quote: "Emmanuel is an absolute professional and a pleasure to work with. He delivered a high-quality service that exceeded my expectations, and his attention to detail was evident throughout the project. What impressed me most was his ability to listen to my needs and translate them into a seamless, user-friendly application. I would highly recommend Emmanuel to anyone looking for a skilled and reliable developer.", name: "Bright Chibuike", title: "Civil Engineer" },
  // Add more items as needed
];

export default function Rendering() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <GridSmallBackgroundDemo />
      <About />
      <Services />
      <Testimonials items={movingCardsItems} direction="left" speed="normal" pauseOnHover={true} />
      <Projects />
      <MyLanguagesTools />
      <ContactPage />
      <Footer />
    </>
  );
}
