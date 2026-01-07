import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Correct import for framer-motion
import { cn } from "../../utils/cn";  // Assuming cn is a utility for combining classNames

// Default image path
const defaultImageUrl = "/src/assets/image.jpg"; // Adjust path according to your project structure

export const DirectionAwareHover = ({
  imageUrl = defaultImageUrl, // Default to the image if no imageUrl is passed
  children,
  childrenClassName,
  imageClassName,
  className
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");

  // Handle mouse enter event to calculate direction of hover
  const handleMouseEnter = (event) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    setDirection(getDirectionName(direction));
  };

  // Get direction based on mouse position relative to the element
  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  // Convert direction number to string (top, right, bottom, left)
  const getDirectionName = (direction) => {
    switch (direction) {
      case 0:
        return "top";
      case 1:
        return "right";
      case 2:
        return "bottom";
      case 3:
        return "left";
      default:
        return "left";
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence>
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div
            className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500"
          />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Regular img tag to display the custom image */}
            <img
              alt="Custom Hover Image"
              className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
              src={imageUrl} // Image URL prop passed or default image used
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
          >
            {children} {/* Content displayed over the image */}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Variants for the hover direction animations
const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 }
};

// Variants for the text position animations based on hover direction
const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 }
};
