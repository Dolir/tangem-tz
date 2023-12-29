/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#0B0B0B",
        accent: "#D7A830",
        secondary: "#6C6C70",
        white: "#FFFFFF"
      },
      boxShadow: {
        primary: "0px 4px 34px 0px rgba(0, 0, 0, 0.45)"
      },
      borderRadius: {
        medium: "14px",
        large: "16px"
      },
      animation: {
        enter: "enter 0.2s ease-in-out",
        leave: "leave 1.1s ease-in-out",
        float: "float 4s ease-in-out infinite"
      },
      backgroundImage: {
        gradientBlack: "linear-gradient(180deg, #101010 0%, #0B0B0B 100%)",
        radialGold:
          "radial-gradient(50% 50% at 50% 50%, #FAE571 0%, rgba(11, 14, 23, 0.00) 100%)"
      },
      keyframes: {
        enter: {
          "0%": { opacity: 0, transform: "translateX(15rem)" },
          "100%": { opacity: 1, transform: "translateX(0)" }
        },
        leave: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "20%": { opacity: 0, transform: "translateX(15rem)" },
          "100%": { opacity: 0, transform: "translateX(15rem)" }
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
          "100%": { transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
}
