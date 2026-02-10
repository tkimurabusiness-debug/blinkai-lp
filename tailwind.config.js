/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003db8',
          light: '#0052E6',
          dark: '#002A80',
          50: '#E6EEFF',
          100: '#CCDEFF',
          200: '#99BCFF',
          300: '#669BFF',
          400: '#3379FF',
          500: '#003db8',
          600: '#0035A3',
          700: '#002A80',
          800: '#001F5C',
          900: '#001439',
        },
        secondary: '#10B981',
        accent: '#F59E0B',
        line: '#06C755',
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Noto Sans',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'count-up': 'countUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
