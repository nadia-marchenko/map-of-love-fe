/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dcebe3',
          200: '#bcd7c8',
          300: '#8fb8a3',
          400: '#5f9479',
          500: '#3d765d',
          600: '#2d5e4a',
          700: '#254c3d',
          800: '#203e33',
          900: '#1c342b',
        },
        earth: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e7ddd0',
          300: '#d6c4b0',
          400: '#c2a68a',
          500: '#b08d6f',
          600: '#9d785c',
          700: '#82614e',
          800: '#6b5044',
          900: '#584339',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf4',
          200: '#faf4e6',
          300: '#f5ead0',
          400: '#eed9b0',
          500: '#e4c48a',
          600: '#d4a866',
          700: '#c08d4f',
          800: '#9f7343',
          900: '#825f3a',
        },
        gold: {
          50: '#fffef5',
          100: '#fffce8',
          200: '#fff8c4',
          300: '#fff28d',
          400: '#ffe44d',
          500: '#ffd700',
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#997300',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

