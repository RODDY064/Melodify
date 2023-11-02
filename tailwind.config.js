/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'cream':'#fff',
        'glass':'#eceff1',
        'ice':'#f6f6f6'
      },
      boxShadow:{
        '2xl':'0 8px 48px rgba(0, 0, 0, .12)',
        'sm':'3px 2px 0px 0px rgb(0 0 0 / 0%), 0px 2px 4px 0px rgb(0 0 0 / 7%);',
        'card':'rgba(0, 0, 0, 0.052) 0px 4px 12px'
      }
    },
  },
  plugins: [],
}
