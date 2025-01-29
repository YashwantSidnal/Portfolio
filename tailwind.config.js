module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.898),
          rgba(0, 0, 0, 0.194)
        ), url('/assets/bg3.jpg')`, // Use absolute path
        'about-pattern': `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.998),
          rgba(0, 0, 0, 0.61)
        ), url('/assets/bg4.jpg')`, // Use absolute path
        'main-pattern': `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.998),
          rgba(0, 0, 0, 0.61)
        ), url('/assets/project.jpg')`, // Use absolute path
        'footer-texture': "url('/assets/footer-texture.png')",
      },
      fontFamily: {
        dancing: ['"Lobster"', 'serif'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      colors: {
        dark: {
          background: '#16161a', // Deep charcoal gray for a sleek and neutral background
          surface: '#21222c',    // Slightly lighter dark gray for surfaces
          text: '#e6e6e6',       // Crisp, soft white for text
          subtext: '#e5e7eb',    // Muted gray for subtext, maintaining contrast
          highlight: '#7f5af0',  // Elegant purple for links or highlights
          accent: '#ff6f61',     // Warm coral red for actionable elements like buttons/icons
          border: '#2b2c34',     // Subtle, deep gray for borders to maintain harmony
        },

      },
    },
    dropShadow: {
      'cyan': '0 0px 10px rgb(0, 255, 255)', // Custom cyan drop shadow
      'red': ` inset 20px 20px 60px #00ffff66, inset -20px -20px 60px #ffffff`,    // Custom red drop shadow
    },
    boxShadow: {
      'custom-red': `inset 0px 0px 5px #7f5af0`,
      'custom-orange': `inset 0px 0px 5px #ff6f61`
    },
  },
  plugins: [],
};
