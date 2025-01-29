import React from "react";
import { motion } from "motion/react";

const Title = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative uppercase mb-20 "
    >
      <p className="text-3xl lg:text-4xl tracking-widest font-bold text-center text-dark-highlight">
        {title}
      </p>
      <p className="text-5xl lg:text-8xl text-dark-highlight/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  font-extrabold text-nowrap">
        {title}
      </p>
    </motion.div>
  );
};

export default Title;
