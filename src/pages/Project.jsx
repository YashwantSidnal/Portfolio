import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react";
import { slideUp } from "../utils/animations";
import ImageSlider from '../components/ImageSlider';

const Project = ({ project, cP }) => {

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
    const isLongDescription = project.description.length > 100;
    const shortDescription =
        project.description.substring(0, 100) + "...";
    let delay = 0.1;
    return (
        <motion.div
            variants={slideUp(0.3)}
            initial="initial"
            whileInView="animate"
            className="relative group bg-dark-highlight/20 overflow-hidden shadow-lg shadow-custom-red hover:shadow-custom-orange transition-shadow duration-500 rounded-lg p-3"
        >
            <ImageSlider images={project.image} />
            <div className="p-1 sm:p-4 md:p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-dark-highlight group-hover:text-dark-accent transition-colors duration-500 ">
                    <span title={project.title} > {project.title.length > 25 ? `${project.title.substring(0, 25)}...` : project.title} </span>
                </h2>
                <p className="text-dark-subtext ">
                    {isLongDescription ? shortDescription : project.description}
                    {isLongDescription && (
                        <span
                            className="text-dark-highlight cursor-pointer ml-2 underline text-nowrap "
                            onClick={() => setShowTooltip(cP)}
                        >
                            Show More
                        </span>
                    )}
                </p>
                {showTooltip === cP && (
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
    )
}

export default Project