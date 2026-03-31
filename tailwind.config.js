/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f4f7fb",
        ink: "#0f2852",
        body: "#57729a",
        line: "#dce6f5",
        brand: {
          50: "#edf5ff",
          100: "#d7e7ff",
          500: "#1f63c8",
          600: "#0f4daa",
          700: "#0b3e89",
        },
        success: "#168f64",
        warning: "#d58a00",
        danger: "#d63d44",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgba(16, 62, 129, 0.08)",
        float: "0 20px 60px rgba(13, 60, 127, 0.12)",
      },
      borderRadius: {
        card: "28px",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top right, rgba(186, 214, 255, 0.45), transparent 35%), radial-gradient(circle at top left, rgba(255, 255, 255, 0.85), transparent 30%)",
      },
    },
  },
  plugins: [],
};
