import React, { useState, useEffect, useRef } from "react";
import ImageSlider from "../components/ImageSlider";
import { projectsData } from "../constants";
import Title from "../components/Title";
import { motion } from "motion/react";
import { slideUp } from "../utils/animations";

const Projects = () => {
  const [showTooltip, setShowTooltip] = useState(null);
  const tooltipRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  let delay = 0.1;
  return (
    <section className=" h-full lg:h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col py-10 sm:py-20  max-w-7xl mx-auto">
        <Title title={"Projects"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 px-4 sm:px-10">
          {projectsData.map((project, index) => {
            const isLongDescription = project.description.length > 100;
            const shortDescription =
              project.description.substring(0, 100) + "...";
            delay += 0.2;
            return (
              <motion.div
                variants={slideUp(delay)}
                initial="initial"
                whileInView="animate"
                key={index}
                className="relative group bg-dark-highlight/20 overflow-hidden shadow-lg shadow-custom-red hover:shadow-custom-orange transition-shadow duration-500 rounded-lg p-3"
              >
                <ImageSlider images={project.image} />
                <div className="p-1 sm:p-4 md:p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-dark-highlight group-hover:text-dark-accent transition-colors duration-500 ">
                    <span title={project.title} > {project.title.length > 25 ? `${project.title.substring(0, 20)}...` : project.title} </span>
                </h2>
                  <p className="text-dark-subtext ">
                    {isLongDescription ? shortDescription : project.description}
                    {isLongDescription && (
                      <span
                        className="text-dark-highlight cursor-pointer ml-2 underline text-nowrap "
                        onClick={() => setShowTooltip(index)}
                      >
                        Show More
                      </span>
                    )}
                  </p>
                  {showTooltip === index && (
                    <div
                      ref={tooltipRef}
                      className="absolute bottom-0 left-0 w-full bg-dark-surface p-4 rounded-lg shadow-lg z-50"
                    >
                      <p className="text-dark-text text-sm">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;