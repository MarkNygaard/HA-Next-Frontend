module.exports = {
  content: ['pages/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darkmode-bg': 'rgba(43,45,47,255)',
        'darkmode-nav': 'rgba(29,32,34,255)',
        'darkmode-border': 'rgba(25,28,30,255)',
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
      backgroundImage: {
        weatherClouds:
          "linear-gradient(to bottom, rgba(255,255,255,1.0),rgba(255,255,255,0.0)), url('https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg')",
        weatherCloudsDark:
          "linear-gradient(to bottom, rgba(29,32,34,1.0),rgba(29,32,34,0.0)), url('https://cdn.pixabay.com/photo/2022/03/06/05/30/clouds-7050884_960_720.jpg')",
      },
    },
  },
  plugins: [],
};
