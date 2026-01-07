import React, { useEffect, useRef, useState } from "react";
import { ContainerTextFlip3 } from "../components/ui/container-text-flip3";

export const Testimonials = ({
  items = [], // Ensure items is an empty array if not passed
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current && scrollerRef.current.children.length && !start) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Duplicate only once to create the continuous scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setStart(true); // Set start to true so that we don't duplicate items again
    }
  }, [start]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
        default:
          duration = "80s";
          break;
      }

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [direction, speed]);

  // Dynamically construct the className for the scroller element
  const scrollerClass = [
    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
    start ? "animate-scroll" : "", // Apply animation class if 'start' is true
    pauseOnHover ? "hover:[animation-play-state:paused]" : "", // Pause animation on hover if 'pauseOnHover' is true
  ]
    .filter(Boolean)
    .join(" "); // Remove empty strings from the class list

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-8xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <h1 className="text-white font-bold text-2xl text-center m-9">
        <ContainerTextFlip3 />
      </h1>
      <ul ref={scrollerRef} className={scrollerClass}>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, idx) => (
            <li
              key={idx}
              className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            >
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))
        ) : (
          <p>No testimonials available.</p> // Fallback content if items is not an array or is empty
        )}
      </ul>
    </div>
  );
};
