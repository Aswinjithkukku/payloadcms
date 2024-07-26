/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['var(--font-space_grotesk)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
