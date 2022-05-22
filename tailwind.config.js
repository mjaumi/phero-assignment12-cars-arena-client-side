module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "linear-gradient(90deg, rgba(26, 97, 161, 0.8), rgba(229, 21, 21, 0.7)), url('/src/Assets/images/banner.jpg')",
        'about-first-img': "linear-gradient(90deg, rgba(26, 97, 161, 0.8), rgba(229, 21, 21, 0.7)), url('/src/Assets/images/about-image-1.jpg')",
        'about-last-img': "linear-gradient(90deg, rgba(26, 97, 161, 0.8), rgba(229, 21, 21, 0.7)), url('/src/Assets/images/about-image-2.jpg')",
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      keyframes: {
        'bottom-top-fade-in': {
          '0%': { 'margin-top': '200px', opacity: 0 },
          ' 100%': { 'margin-top': '0px', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          ' 100%': { opacity: 1 },
        }
      },
      animation: {
        'bottom-top-fade-in': 'bottom-top-fade-in 1s ease-in-out',
        'fade-in': 'fade-in 1s ease-in-out 1s forwards',
      },
      gridTemplateRows: {
        'arena-card': '80px 1fr',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'arena-theme': {
          primary: '#e51515',
          secondary: '#1a61a1',
          accent: '#21252c',
          neutral: '#ffffff',
          'base-100': '#14151b',
          'base-200': '#181b24',
          'base-300': '#050305',
        },
      },
    ],
  },
}
