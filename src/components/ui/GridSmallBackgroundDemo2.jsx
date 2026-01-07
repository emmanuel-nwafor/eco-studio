// src/components/ui/GridSmallBackgroundDemo2.jsx
import { cn } from "../../utils/cn";
import React from "react";
import ProjectShelf from "../../my-components/ProjectShelf";

const GridSmallBackgroundDemo2 = () => {
  return (
    <div
      className="relative flex h-[50rem] w-full items-center max-md:justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <ProjectShelf />
    </div>
  );
};

export default GridSmallBackgroundDemo2; // Ensure this is the default export
