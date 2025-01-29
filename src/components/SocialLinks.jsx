import React from "react";

const SocialLinks = ({ socialLinks, isRound = false }) => {
  return (
    <div className="flex w-full justify-center gap-4 mt-4">
      {socialLinks.map((socialLink, idx) => (
        <div key={idx} className="relative flex cursor-pointer group  ">
          <a
            href={socialLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 flex items-center justify-center  text-2xl transition-all duration-300"
          >
            <socialLink.icon className="text-dark-highlight group-hover:text-dark-accent z-20 duration-300 rounded-full " />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
