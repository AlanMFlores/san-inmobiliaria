/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#CE2525",
        mainDark: "#9A1616",
        warmGray900: "#1C1917",
        warmGray800: "#292524",
        warmGray700: "#44403C",
        warmGray500: "#78716C",
        warmGray400: "#A8A29E",
        warmGray300: "#D6D3D1",
      }
    },
  },
  plugins: [],
}
