/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandLight: "#59B2FF",
        brandMid: "#3487CF",
        brandDark: "#1D6FB6",
        base: "#1C1F21",
        stroke: "#363B40",
        placeholder: "#869198",
        shapeBg: "#131516",
        shapeBody: "#212427",
        shapebtn: "#2D3136",
        shapeHover: "#383D42",
        textBody: "#C8CDD0",
        textHeading: "#F9F9F9",
        pinkShark: "#FF598B",
      },
     
    },
  },
  plugins: [],
};
