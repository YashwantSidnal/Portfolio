import React from "react";
import main from "../assets/dev.png";
import SocialLinks from "../components/SocialLinks";
import { socialLinks } from "../constants";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";

const Home = () => {
  // bgdark-background/60

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -20 }, // Starting state for each item
    visible: { opacity: 1, y: 0 }, // Final state for each item
  };
  return (
    <div className="bg-hero-pattern bg-cover bg-top bg-no-repeat h-full lg:h-screen flex ">
      <div className=" flex mb-10 sm:mb-0 flex-col md:flex-row items-center justify-between text-dark-text gap-6 max-w-7xl mx-auto sm:px-10   ">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 mt-6 md:mt-0 p-5 text-center items-center"
          variants={containerVariants} // Parent animation variants
          initial="hidden" // Start with the hidden state
          animate="visible" // Animate to the visible state
        >
          <motion.span
            className="text-2xl font-semibold"
            variants={itemVariants} // Child animation
          >
            Hello I'm
          </motion.span>
          <motion.h2
            className="font-dancing text-dark-highlight text-2xl sm:text-3xl lg:text-4xl font-extrabold"
            variants={itemVariants} // Child animation
          >
            Yashwant Sidnal <MdWavingHand className="inline waving-icon" />
          </motion.h2>
          <motion.h1
            className="text-xl sm:text-3xl lg:text-4xl font-bold"
            variants={itemVariants} // Child animation
          >
            Data Analyst
          </motion.h1>
          <motion.p
            className="text-dark-subtext leading-relaxed"
            variants={itemVariants} // Child animation
          >
               "I specialize in data analytics, business intelligence, and creating interactive dashboards using tools like Power BI, Tableau, and SQL. Let's collaborate to turn raw data into actionable insights and drive innovation!"
            
          </motion.p>
          <motion.button
            className="px-6 py-2 bg-dark-highlight hover:bg-dark-accent text-white  rounded-full font-medium hover:opacity-90 transition-all duration-300"
            variants={itemVariants} // Child animation
          >
            <Link to="/contact">Hire Me</Link>
          </motion.button>
          {/* Social Icons */}
          <motion.div variants={itemVariants}>
            <SocialLinks socialLinks={socialLinks} />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <div className="w-fit md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            src={main}
            alt="Abhishek"
            className="h-auto max-h-64 sm:max-h-80 md:max-h-96 w-full sm:w-auto rounded-2xl drop-shadow-cyan "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
