/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': 'repeat(12, minmax(0, 1fr))', 
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '10': 'repeat(10, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': 'repeat(12, minmax(0, 1fr))', 
      }
    },
    gridTemplateRows: {
      // Simple 8 row grid
      'TwoRows': 'repeat(2, 100px)',

      // Complex site-specific row configuration
      'layout': 'repeat(2, 100px)',
    }
  },
  plugins: [],
}
