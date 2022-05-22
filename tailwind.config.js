module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
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
