import React, { useEffect, useRef, useState } from "react";

const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const cardLength = content.length;

  // Detect scroll position to set the active card
  const handleScroll = () => {
    const scrollPosition = ref.current.scrollTop;
    const scrollHeight = ref.current.scrollHeight;
    const scrollPercentage = scrollPosition / (scrollHeight - ref.current.clientHeight);

    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(scrollPercentage - breakpoint);
      if (distance < Math.abs(scrollPercentage - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  };

  // Update the background gradient based on the active card
  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [content]);

  return (
    <div
      style={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        background: backgroundGradient,
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <h2
                style={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </h2>
              <p
                style={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={`sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block ${contentClassName}`}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};

export default StickyScroll; // Ensure you are exporting the component as default
