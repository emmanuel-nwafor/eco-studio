import React, { useEffect, useState, useRef } from "react";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setStart(true);
    }
  };

  const getDirection = () => {
    if (direction === "left") {
      containerRef.current.style.setProperty("--animation-direction", "forwards");
    } else {
      containerRef.current.style.setProperty("--animation-direction", "reverse");
    }
  };

  const getSpeed = () => {
    const speedMap = {
      fast: "20s",
      normal: "40s",
      slow: "80s"
    };

    containerRef.current.style.setProperty(
      "--animation-duration",
      speedMap[speed] || "40s"
    );
  };

  useEffect(() => {
    getDirection();
    getSpeed();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={`scroller-container relative overflow-hidden ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`scroller flex w-max min-w-full flex-nowrap gap-4 py-4 ${start ? "animate-scroll" : ""} ${pauseOnHover ? "pause-on-hover" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="card w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-gray-200 bg-gradient-to-b from-gray-100 to-gray-200 px-8 py-6"
          >
            <blockquote>
              <p className="text-sm font-normal text-gray-800">{item.quote}</p>
              <div className="mt-6">
                <span className="text-sm text-gray-500">{item.name}</span>
                <span className="text-sm text-gray-500">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
