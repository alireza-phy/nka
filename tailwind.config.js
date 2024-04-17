/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: {
          DEFAULT: "#161C24",
          50: "#212B36",
        },
        customGray: {
          DEFAULT: "#DFE3E8",
          50: "#F9FAFB",
          100: "#919EAB",
          150: "#F4F6F8",
          200: "#454F5B",
          250: "#eeeeee",
        },
        customOrange: {
          DEFAULT: "#FDAE15",
        },
        customGreen: {
          DEFAULT: "#1c703b",
          50: "#ECFDF8",
          100: "#C8F8D1",
          150: "#076634",
          200: "#B4E5BC",
        },
        customRed: {
          DEFAULT: "#D11414",
          50: "#FDECEC",
          100: "#EF3A4F",
          150: "#ed6d7c",
        },
        customBlue: {
          DEFAULT: "#0071BC",
          50: "#0057A1",
          100: "#EBF7FF",
        },
        customViolet: {
          DEFAULT: "#5936BB",
        },
      },
    },
  },
  plugins: [],
};
