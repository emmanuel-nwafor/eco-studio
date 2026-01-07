import React, { useEffect, useState } from "react";

const ContactBackgroundBeams = ({ className }) => {
  const [beamStyles, setBeamStyles] = useState([]);

  useEffect(() => {
    // Create initial beam styles with paths
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      // Add more paths if needed
    ];
    setBeamStyles(paths.map((path, index) => ({ path, id: index })));
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${className}`}
    >
      {beamStyles.map((beam) => (
        <div
          key={beam.id}
          className="absolute top-0 left-0 w-full h-full animate-[beamAnimation_10s_infinite_linear]"
        >
          <svg
            className="absolute z-0 pointer-events-none animate-[pathAnimation_10s_infinite_linear]"
            width="100%"
            height="100%"
            viewBox="0 0 696 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={beam.path} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ContactBackgroundBeams;
