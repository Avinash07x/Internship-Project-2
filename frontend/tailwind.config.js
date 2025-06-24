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
        'custom-2': 'image: linear-gradient( 109.6deg,  rgba(75,228,255,1) 11.2%, rgba(188,204,251,1) 100.6% )',
      },
    },
  },
  plugins: [],
}