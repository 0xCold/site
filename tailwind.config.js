/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js",
  ],
  theme: {
    extend: {
      colors: {
        'candy-blue': '#0195c3',
        'candy-green': '#7cda2d',
        'candy-orange': '#ff6600',
      },
      keyframes: {
        custombounce: { 
          '0%': { transform: 'translateY(-5px)'  },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-5px)' }
        },
        animgradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      },
      animation: {
        custombounce: "custombounce 1.5s infinite",
        animgradient: "animgradient 15s ease infinite",
      }
    },
  },
  plugins: [],
}

