import React, { useEffect, useRef } from "react";

import { skillsData } from "../constants";

const Skills = () => {
  

  // Duplicate the skills to create an infinite effect
  const infiniteSkills = [...skillsData, ...skillsData];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scrollSlider = () => {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reset scroll to the beginning for infinite effect
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollSlider, 20); // Adjust the interval for speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-dark-text flex flex-col items-center  rounded-xl overflow-hidden shadow-lg w-full">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="w-full overflow-hidden whitespace-nowrap "
      >
        <div className="flex gap-4">
          {infiniteSkills.map((skill, index) => (
            <div
              key={index}
              className=" flex flex-col items-center gap-2 p-3 sm:p-6 bg-dark-highlight/40 border-4 border-dark-highlight/5 rounded-lg shadow-md min-w-[150px] sm:min-w-[180px] hover:shadow-lg hover:shadow-cyan-500 transition-all duration-300"
            >

              <skill.icon className="text-5xl sm:text-6xl text-dark-accent bg-dark-background p-2 rounded-full animate-bounce " />
              <p className="text-dark-accent">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
