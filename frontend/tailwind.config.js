/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
      backgroundImage: {
        'custom-hero': 'linear-gradient(105.9deg, rgba(0,122,184,1) 24.4%, rgba(46,0,184,0.88) 80.5%)',
      },
    },
  },
  plugins: [],
}