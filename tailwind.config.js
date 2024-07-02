/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#2f2e41',
        'blue-500': '#009EDD',
        'red-500': '#f56565',
        'green-button': '#039B00',
        'gray-100': '#f7fafc',
        'gray-200': '#edf2f7',
        'gray-600': '#999999',
        'gray-border': '#D9D9D9',
        'text-main': '#2F2E41',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
