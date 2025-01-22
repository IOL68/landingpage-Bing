/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'landmark-violet': '#312e81',
        'landmark-violet-hover': '#3730a3',
        'landmark-blue-text': '#0e1d43',
        'landmark-gray-text': '#4a5568',
        'landmark-gray-bg': '#f5f6f7',
        'typeforms': '#080041',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(181deg, rgb(2, 0, 97) 15%, rgb(97, 149, 219) 158.5%)',
        'footer-gradient': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'h1': '40px',
        'h2': '36px',
        'h3': '32px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
