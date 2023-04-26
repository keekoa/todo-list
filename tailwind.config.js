/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': '#200142',
        'purple-accent': '#5000ac',
        'purple-accent-r': '#5900be',
        'purple-nav': '#36026e',
        'purple-modal': '#350072',
        'whitegrey': '#ececec',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  prefix: 'tw-'
};
