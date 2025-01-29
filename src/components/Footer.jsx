import React from "react"; 
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-dark-highlight/30 text-dark-text py-4 sm:py-8 mt-5">
      {/* Footer Content */}
      <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-6">
        {/* Message */}
        <p className="text-sm text-dark-subtext">
          Made with ❤️ by{" "}
          <span className="font-semibold text-dark-highlight">
            Abhishek Sidnal
          </span>
        </p>

        {/* Social Media Links */}
        <SocialLinks socialLinks={socialLinks} />

        {/* Copyright */}
        <p className="text-xs text-dark-subtext">
          © {new Date().getFullYear()} Abhishek Sidnal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
