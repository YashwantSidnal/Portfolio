import React from "react";
import ab2 from "../assets/ab22.png";
import { motion } from "motion/react";
import { slideUp } from "../utils/animations";
import Title from "../components/Title";
import Skills from "../components/Skills";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="h-full p-3 lg:h-screen flex flex-col justify-center items-center bg-about-pattern bg-cover bg-center bg-no-repeat py-10 sm:py-20">
      {/* Title Section */}
      <Title title="About Me" />
      <div className="flex flex-col max-w-6xl mx-auto  md:flex-row items-center  gap-6 lg:gap-12   rounded-2xl p-6 lg:p-12 shadow-lg mb-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start slightly above and invisible
          whileInView={{ opacity: 1, y: 0 }} // Fade in and drop to normal position
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full sm:w-1/2 flex justify-center items-center"
        >
          <img
            src={ab2}
            alt="About Abhishek"
            className="w-full  sm:mt-[-60px] object-contain h-64 sm:h-96 mx-auto"
          />
        </motion.div>

        {/* Description Section */}
        <article className="w-full md:w-1/2 text-dark-subtext leading-relaxed flex flex-col gap-4 text-sm ">
          <motion.p
            variants={slideUp(0.3)}
            initial="initial"
            whileInView="animate"
          >
            I am a{" "}
            <span className="text-dark-accent font-semibold">
              Data Analyst{" "}
            </span>
            passionate about transforming raw data into actionable insights and driving business growth through analytics.
          </motion.p>
          <motion.p
            variants={slideUp(0.5)}
            initial="initial"
            whileInView="animate"
          >
            With expertise in Power BI, Tableau, SQL, Python, and Excel, I specialize in creating interactive dashboards, optimizing data workflows, and delivering data-driven solutions that enhance decision-making and operational efficiency.
          </motion.p>
          <motion.p
            variants={slideUp(0.7)}
            initial="initial"
            whileInView="animate"
          >
            I thrive on collaborating with teams to solve complex challenges, uncover trends, and deliver impactful projects that make a difference.
          </motion.p>
          <motion.button
            variants={slideUp(1)}
            initial="initial"
            whileInView="animate"
            className="px-6 py-2 mx-auto bg-dark-highlight hover:bg-dark-accent text-white rounded-full font-medium hover:opacity-90 transition-all duration-300"
          >
            <Link to="/contact">Hire Me</Link>
          </motion.button>
        </article>
      </div>
      <div className="max-w-6xl w-full mx-auto">
        <Skills />
      </div>
    </section>
  );
};

export default About;
