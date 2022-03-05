module.exports = {
  content: ['pages/**/*.{js,ts,jsx,tsx}', 'ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'luke-bg': 'rgba(43,45,47,255)',
        'luke-nav': 'rgba(29,32,34,255)',
        'luke-border': 'rgba(25,28,30,255)',
        'tile-bg': 'rgba(91,182,118,255)',
        'tile-bg-hover': 'rgba(85,167,111,1.0)',
        'tile-svg': 'rgba(74,145,96,255)',
      },
      animation: {
        blob: 'blob 18s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
