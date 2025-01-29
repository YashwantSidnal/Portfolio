import React from "react";
import Title from "../components/Title";
import { educationData, experienceData } from "../constants";
import { motion } from "motion/react";
import { slideUp } from "../utils/animations";

const Experience = () => {
  let delay = 0.6;
  return (
    <section className="p-4 flex flex-col gap-8 max-w-7xl mx-auto">
      {/* Experience Section */}
      <div className="space-y-4  ">
        <motion.p
          variants={slideUp(0.3)}
          initial="initial"
          whileInView="animate"
          className="text-center font-medium text-dark-accent"
        >
          Work Experience & Education
        </motion.p>
        <Title title="Experience" />
      </div>
      <div className="flex flex-col mt-6 gap-4">
        {experienceData.map((exp, index) => (
          <motion.div
            variants={slideUp(0.3)}
            initial="initial"
            whileInView="animate"
            key={index}
            className="bg-dark-highlight/40 border-4 border-dark-highlight/5 rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Header Section */}
            <div className="flex justify-between items-center mb-2">
              <h2 className=" text-xl sm:text-2xl font-bold text-dark-highlight">
                {exp.company}
              </h2>
              <p className=" text-xs sm:text-sm text-dark-subtext">
                {exp.duration}
              </p>
            </div>

            {/* Role */}
            <p className=" text-base sm:text-lg text-dark-text mb-2 sm:mb-4">
              {exp.role}
            </p>
            <p className=" text-base sm:text-lg text-dark-text mb-2 sm:mb-4 text-justify sm:text-left ">
              {exp.responsibilities}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        {educationData.map((edu, index) => {
          delay += 0.3;
          return (
            <motion.div
              variants={slideUp(delay)}
              initial="initial"
              whileInView="animate"
              key={index}
              className="bg-dark-highlight/40 border-4 border-dark-highlight/5 rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className=" text-xl sm:text-2xl font-bold text-dark-highlight mb-2">
                <span className=" sm:inline">{edu.degree}</span>
              </h2>
              <p className="text-lg text-dark-text mb-2">{edu.institution}</p>

              <p className="text-sm sm:text-base text-dark-text">
                {edu.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
