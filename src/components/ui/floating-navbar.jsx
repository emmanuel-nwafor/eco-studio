import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "../../utils/cn";

export const FloatingNav = ({ navItems = [], className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (current) => {
      if (typeof current === "number") {
        let prev = scrollYProgress.getPrevious() ?? 0;
        let direction = current - prev;

        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleContactClick = () => {
    window.open("https://www.linkedin.com/in/emmanuel-chinecherem-767739284/", "_blank");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          // Integrating the Prismatic Aurora logic directly into the background
          background: `
            radial-gradient(circle at 50% 0%, rgba(138, 43, 226, 0.15), transparent 70%),
            radial-gradient(circle at 0% 100%, rgba(0, 255, 255, 0.1), transparent 70%),
            radial-gradient(circle at 100% 100%, rgba(255, 20, 147, 0.1), transparent 70%),
            rgba(0, 0, 0, 0.8)
          `,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 backdrop-blur-md shadow-2xl",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 transition-colors"
            )}
          >
            <span className="block sm:hidden">
              <i className={`bx ${navItem.icon}`}></i>
            </span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        
        <button
          onClick={handleContactClick}
          className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full overflow-hidden group"
        >
          {/* Subtle aurora-style hover effect inside the button */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
          <span className="relative z-10">Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};