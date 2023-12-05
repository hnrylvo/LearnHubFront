/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'color-fondo' : '#E7EAF6',
        'color-texto': '#04052E',
        'color-alterno' : "#38598B",
        'color-borde' : "#A2A8D3"
      },
      fontFamily: {
        'roboto' : ['Roboto Mono', 'monospace']
      } 
    },
  },
  plugins: [],
};
