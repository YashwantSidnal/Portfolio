import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { motion, useSpring, useScroll } from "framer-motion";
import { navData } from "../constants";
import { GrAnalytics } from "react-icons/gr";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="sticky top-0 w-full bg-black shadow-md z-50 py-2 sm:py-3">
      {/* Navbar Content */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-2">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-dark-text font-bold text-xl flex items-center gap-2"
        >
          <GrAnalytics  className="inline text-dark-highlight text-2xl" />
          <span>Yashwant</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navData.map((data) => (
            <NavLink
              key={data.id}
              to={data.path}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-dark-highlight"
                    : "text-dark-subtext hover:text-dark-highlight"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {data.label}
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 bottom-0 h-[2px] ${
                      isActive
                        ? "bg-dark-highlight"
                        : "bg-transparent group-hover:bg-dark-highlight"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Contact Me Section */}
        <Link
          to="/contact"
          className="flex items-center gap-2 text-dark-text hover:text-dark-highlight transition-all duration-300 cursor-pointer"
        >
          <RiMessage3Fill className="text-xl" />
          <span className="hidden sm:inline">Contact Me</span>
        </Link>

        {/* Mobile Menu */}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-2 flex justify-evenly gap-4 border-t border-dark-border py-2 sm:py-3">
        {navData.map((data) => (
          <NavLink
            key={data.id}
            to={data.path}
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "text-dark-highlight"
                  : "text-dark-subtext hover:text-dark-highlight"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {data.label}
                <motion.span
                  layoutId="underline-mobile"
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive
                      ? "bg-dark-highlight"
                      : "bg-transparent hover:bg-dark-highlight"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: "#7f5af0",
        }}
      />
    </div>
  );
};

export default Navbar;
