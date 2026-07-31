/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09090B',
        accent: {
          DEFAULT: '#C9A84C',
          hover: '#D9B85C',
        },
        muted: '#71717A',
        subtle: '#A1A1AA',
      },
      ringOffsetColor: {
        bg: '#09090B',
      },
    },
  },
  plugins: [],
}
