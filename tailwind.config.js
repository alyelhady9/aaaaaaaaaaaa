import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/(tabs)/_layout.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes : {
        swipper : {
          '0%' : {transform: 'translateX(0)'},
          '100%' : {transform: 'translateX(-100%)'}
        }
      },
      animation : {
        'swipe' : 'swipper 20s linear infinite'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
