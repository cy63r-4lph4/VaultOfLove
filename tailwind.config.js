module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/love-hero.jpg')",
        'new-background-color': '#f0f4f8', // Replace with your desired color

      },
      colors: {
        "glass-dark": "rgba(15, 15, 15, 0.6)", // Transparent dark glass
        "highlight-pink": "#FF007F",
        "highlight-blue": "#00E0FF",
        'glass-light': 'rgba(255, 255, 255, 0.1)', // Replace with your desired color
      },
      backdropBlur: {
        sm: "4px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vaultoflove: {
          primary: "#C2185B", // Deep Pink
          secondary: "#6A1B9A", // Dark Purple
          accent: "#FF4081",
          neutral: "#1A1A2E", // Dark base
          "base-100": "#121212", 
          info: "#00E5FF",
          success: "#66BB6A",
          warning: "#FFA726",
          error: "#EF5350",
        },
      },
    ],
  },
};
