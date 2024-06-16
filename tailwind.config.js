/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {

    colors: {
      'slate-950': '#060B1E',
      'pink-100': '#DAC4FD',
      'slate-400': '#7089C7',
      'zinc-300': '#C2C2C2',
      'blue-400': '#223258',
      'orange-400': '#E89B27',
      

    },
    extend: {
      fontSize: {
        '7.5xl': '5rem', // Add a custom size between 7xl and 8xl
        'mtext': '1.3rem'
      }
    },
  },
  
  plugins: [],
}

