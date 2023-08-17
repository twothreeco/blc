module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./comps/**/*.{js,jsx}",
  ],
  theme: {

    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1.4rem',
    //     // md: '2rem',
    //     // lg: '3rem',
    //   },
    // },
    extend: {
      boxShadow: {
        'y-2': '0 16px 18px -4px',
      },
      colors: {
        'brand': "#D53602",
        'brandaccent': '#CEA66B',
        'hh': 'rgb(34 47 63)'
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      }
    },
    fontFamily: {
      'brand': ['tepid'],
      'brandlogo': '"Tepid"',
      'brandHeader': '"Tepid"',
      // 'brandtext': '"DM Serif Text"'
      'brandtext': 'sans-serif'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
