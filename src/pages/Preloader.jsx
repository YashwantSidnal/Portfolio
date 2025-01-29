import { useState, useEffect } from "react";

const Preloader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-white z-50 bg-hero-pattern bg-cover bg-center p-2 ">
      <div className="relative flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32">
        <div className="animate-spin rounded-full h-full w-full border-t-4 border-dark-highlight"></div>
        <div className="absolute text-center text-xl sm:text-2xl font-bold text-dark-highlight">
          {percentage}%
        </div>
      </div>
      <div className="mt-6 text-center">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white ">
          Welcome to
          <br />
          <span className="text-dark-highlight">
            Yashwant Sidnal's Portfolio
          </span>
        </h1>
        <p className="text-sm sm:text-base text-dark-subtext mt-2">
          "Great things are in the works. Thank you for your patience!"
        </p>
      </div>
    </div>
  );
};

export default Preloader;
