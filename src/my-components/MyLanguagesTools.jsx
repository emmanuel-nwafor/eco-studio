import React, { useState } from "react";

export default function MyLanguagesTools() {
  const tools = [
    // Backend
    { name: "Node.js", icon: "bxl-nodejs", color: "#339933" },
    { name: "Express.js", icon: "bxl-nodejs", color: "#6B7280" },
    { name: "PHP", icon: "bxl-php", color: "#777BB4" },
    { name: "MySQL", icon: "bx bxs-data", color: "#4479A1" },
    { name: "MongoDB", icon: "bxl-mongodb", color: "#47A248" },
    { name: "Next.js", icon: "bx bx-code-curly", color: "#000000" },

    // Frontend
    { name: "HTML", icon: "bxl-html5", color: "#E44D26" },
    { name: "CSS", icon: "bxl-css3", color: "#1572B6" },
    { name: "JavaScript", icon: "bxl-javascript", color: "#F0DB4F" },
    { name: "TypeScript", icon: "bxl-typescript", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "bxl-tailwind-css", color: "#38BDF8" },
    { name: "React", icon: "bxl-react", color: "#61DBFB" },
    { name: "React Native", icon: "bxl-react", color: "#0769AD" },
    { name: "jQuery", icon: "bxl-jquery", color: "#0769AD" },

    // Tools & DevOps
    { name: "Firebase", icon: "bxl-firebase", color: "#FFA611" },
    { name: "Git", icon: "bxl-git", color: "#F05032" },
    { name: "GitHub", icon: "bxl-github", color: "#181717" },
    { name: 'Webpack', icon: 'bx bxl-sketch', color: '#8DD6F9' },  // FontAwesome Webpack
    { name: 'Vite', icon: 'bx bxs-cloud-lightning', color: '#646CFF' },  // Boxicon
  ];

  const [showAll, setShowAll] = useState(false);

  const firstSet = tools.slice(0, 8);
  const remainingSet = tools.slice(8);

  return (
    <div className="p-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-400">
          {"<?>"} My Languages & Tools {"<?>"}
        </h2>

        {/* First set */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {firstSet.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#080808] rounded-3xl hover:bg-zinc-900 transition duration-300"
            >
              <i
                className={`bx ${tool.icon} text-5xl`}
                style={{ color: tool.color }}
              ></i>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white">
                {tool.name}
              </p>
            </div>
          ))}
        </div>

        {/* Collapsible remaining set */}
        {remainingSet.length > 0 && (
          <div className="relative">
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-500 ${
                showAll ? "max-h-full opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {remainingSet.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-[#080808]/50 rounded-3xl hover:bg-zinc-900/50 transition duration-300"
                >
                  <i
                    className={`bx ${tool.icon} text-5xl`}
                    style={{ color: tool.color }}
                  ></i>
                  <p className="mt-4 text-xs sm:text-sm md:text-base text-white">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Toggle Button */}
            <div className="absolute inset-0 flex justify-center items-end pb-4 pointer-events-none">
              <button
                onClick={() => setShowAll(!showAll)}
                className="pointer-events-auto px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
              >
                {showAll ? "Show Less" : "View All"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

