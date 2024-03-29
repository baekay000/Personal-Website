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
      'slate-400': '#7089C7',
      'stone-300': 'CCCCCC',
      'zinc-300': '#D9D9D9',
      'orange-400': '#E89B27',



      // 'black': '#000000',
      // 'slate-500': '#435B96',
      // 'fuchsia-950': '#4C1E40',
      // 'slate-400': '#7089C7',
      // 'emerald-200': '#A3DBC8', // #AADBCB
      // 'white': '#E0F5EA', // or D #E0F5EA #FBFFFC
      // 'slate-400': '#7089C7', // 2 other ones? naming conventions
      // 'blue-300': '#9FCADD',
      // 'slate-300': '#B9D6CE', // 1 other one
      // #060B1E <- slate-950
      // #7089C7 <- slate-400
      // #CCCCCC <- stone-300
      // #D9D9D9 <- zinc-300
      // #E89B27 <- orange-400
      // #E89B27 <- orange-400
    },
    extend: {},
  },
  plugins: [],
}

