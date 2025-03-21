module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 'index.html'],
    darkMode: 'media', // or 'class'
    theme: {
      extend: {},
    },
    variants: {
        extend: {
            fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // For Plus Jakarta Sans
        // sans: ['Figtree', 'sans-serif'], // For Figtree},
    },
    plugins: [],
  }
  